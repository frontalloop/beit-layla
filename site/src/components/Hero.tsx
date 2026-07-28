"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/components/LanguageProvider";
import { FRAME_COUNT, framePath } from "@/lib/constants";
import { prefersReducedMotion } from "@/lib/motion";
import { scrollToSection } from "@/lib/navigation";
import { ArrowIcon } from "@/components/icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CREAM = "#f7efe0";

export default function Hero() {
  const { t } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!canvas || !section || !pin) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    const state = { frame: 0 };
    let lastDrawn = -1;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    /** Contain-draw the frame; cream background blends the letterbox seamlessly. */
    const draw = (index: number) => {
      const img = images[index];
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.fillStyle = CREAM;
      ctx.fillRect(0, 0, w, h);
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const scale = Math.min(w / img.naturalWidth, h / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    };

    /** Draw the requested frame, falling back to the nearest loaded one. */
    const render = (index: number) => {
      let i = Math.max(0, Math.min(FRAME_COUNT - 1, index));
      if (i === lastDrawn && images[i]?.complete) return;
      if (!images[i] || !images[i].complete || images[i].naturalWidth === 0) {
        // fall back to nearest earlier ready frame
        let j = i;
        while (j > 0 && (!images[j] || !images[j].complete)) j--;
        i = j;
      }
      lastDrawn = i;
      draw(i);
    };

    const resize = () => {
      const w = pin.clientWidth;
      const h = pin.clientHeight;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastDrawn = -1;
      render(state.frame);
    };

    // ---- Frame loading (batched, in order) ----
    let loadedCount = 0;
    const loadFrame = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = img.onerror = () => {
          loadedCount += 1;
          if (i === 0 || i === state.frame) render(state.frame);
          resolve();
        };
        img.src = framePath(i + 1);
        images[i] = img;
      });

    const loadBatches = async () => {
      const BATCH = 20;
      // Priority: first frame immediately.
      await loadFrame(0);
      render(0);
      for (let start = 1; start < FRAME_COUNT; start += BATCH) {
        const batch: Promise<void>[] = [];
        for (let i = start; i < Math.min(start + BATCH, FRAME_COUNT); i++) {
          batch.push(loadFrame(i));
        }
        await Promise.all(batch);
      }
      ScrollTrigger.refresh();
    };

    resize();
    const reduced = prefersReducedMotion();

    let trigger: ScrollTrigger | null = null;
    const gctx = gsap.context(() => {
      if (reduced) {
        // Static final composition; no pin, no scroll scrubbing.
        void loadBatches().then(() => render(FRAME_COUNT - 1));
        state.frame = FRAME_COUNT - 1;
        gsap.set(overlayRef.current, { opacity: 1 });
        gsap.set(hintRef.current, { opacity: 0 });
        return;
      }

      void loadBatches();

      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: pin,
        pinSpacing: false,
        scrub: 0.6,
        onUpdate: (self) => {
          const f = Math.round(self.progress * (FRAME_COUNT - 1));
          if (f !== state.frame) {
            state.frame = f;
            render(f);
          }
          // Overlay fades out as the food animation takes over.
          const o = gsap.utils.clamp(0, 1, 1 - self.progress / 0.14);
          if (overlayRef.current) overlayRef.current.style.opacity = `${o}`;
          if (hintRef.current)
            hintRef.current.style.opacity = `${gsap.utils.clamp(
              0,
              1,
              1 - self.progress / 0.06,
            )}`;
        },
      });
    }, section);

    const onResize = () => {
      resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      trigger?.kill();
      gctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[380vh] bg-cream sm:h-[500vh]"
      aria-label={t.hero.title}
    >
      <div ref={pinRef} className="relative h-[100svh] w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        />

        {/* Minimal overlay content — top area, clear of the centered food */}
        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-col items-center px-5 pt-[16svh] text-center sm:pt-[14svh]"
        >
          <p className="eyebrow mb-3 opacity-90">{t.hero.eyebrow}</p>
          <h1 className="display max-w-[16ch] text-4xl text-espresso sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-[42ch] text-sm text-espresso-soft sm:text-base">
            {t.hero.subtitle}
          </p>
          <div className="pointer-events-auto mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                scrollToSection("menu");
              }}
              className="btn-primary"
            >
              {t.cta.viewMenu}
              <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-espresso-soft"
        >
          <span className="text-xs font-medium uppercase tracking-[0.25em]">
            {t.hero.scrollHint}
          </span>
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-espresso/30 p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-espresso/50" />
          </span>
        </div>
      </div>
    </section>
  );
}

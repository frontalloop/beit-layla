"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { framePath, LOGO_PATH } from "@/lib/constants";
import { prefersReducedMotion } from "@/lib/motion";
import { useLanguage } from "@/components/LanguageProvider";

/* --------------------------------------------------------------------------
 * Session-skip is intentionally DISABLED while this loader is under review, so
 * it plays on every full refresh. To re-enable later: set RESPECT_SESSION to
 * true — the read/write guards below will then skip it within a session.
 * ------------------------------------------------------------------------ */
const RESPECT_SESSION = false;
const SESSION_KEY = "beit-laila-loader-seen";

/** Warm the first hero frames without blocking; resolve when frame 1 is ready. */
function preloadFirstFrames(count: number): Promise<void> {
  const first = new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = img.onerror = () => resolve();
    img.decoding = "async";
    img.src = framePath(1);
  });
  // Warm a small batch in the background (fire-and-forget).
  for (let i = 2; i <= count; i++) {
    const img = new Image();
    img.decoding = "async";
    img.src = framePath(i);
  }
  return first;
}

/** Refined index-finger "tap" hand — monochrome espresso, no emoji. */
function HandIcon() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 64 64"
      aria-hidden
      focusable="false"
    >
      <path
        d="M25 33V17.5a3.5 3.5 0 0 1 7 0V30v-2.5a3.2 3.2 0 0 1 6.4 0V31v-1.5a3.2 3.2 0 0 1 6.4 0V33a3.1 3.1 0 0 1 6.2 0v6.5c0 8.4-5.2 13.5-13.6 13.5h-2.2c-4.2 0-7.4-1.7-9.7-5.1l-6.1-9a3.4 3.4 0 0 1 5.5-4l2.7 3.4V33z"
        fill="var(--ivory)"
        stroke="var(--espresso)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Half-arch + geometric door detailing (mirrored for the right door via CSS). */
function DoorMotif() {
  return (
    <svg
      className="loader-door-motif"
      viewBox="0 0 240 800"
      preserveAspectRatio="xMaxYMid meet"
      aria-hidden
      focusable="false"
    >
      <line data-stroke x1="231" y1="24" x2="231" y2="776" />
      <line data-stroke x1="221" y1="70" x2="221" y2="730" />
      <path data-stroke d="M231 150 Q120 150 120 320 L120 720" />
      <path data-stroke d="M231 188 Q150 188 150 344 L150 700" />
      <path data-fill d="M120 116 l11 11 -11 11 -11 -11 z" />
      <path data-fill d="M150 372 l8 8 -8 8 -8 -8 z" />
      <path data-fill d="M120 690 l9 9 -9 9 -9 -9 z" />
    </svg>
  );
}

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const [active, setActive] = useState(true);

  const rootRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const seamRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const logoFadeRef = useRef<HTMLDivElement>(null);
  const pressRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const handRef = useRef<HTMLDivElement>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    // Optional session-skip (disabled by default while reviewing).
    if (RESPECT_SESSION) {
      let seen = false;
      try {
        seen = sessionStorage.getItem(SESSION_KEY) === "1";
      } catch {
        /* ignore */
      }
      if (seen) {
        document.documentElement.removeAttribute("data-loading");
        onComplete();
        setActive(false);
        return;
      }
    }

    const isRtl =
      typeof document !== "undefined" &&
      document.documentElement.dir === "rtl";

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      try {
        if (RESPECT_SESSION) sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      document.documentElement.removeAttribute("data-loading");
      rootRef.current?.classList.add("is-done");
      onComplete();
      setActive(false);
    };

    // Start preloading immediately; gate the doors on the first frame.
    const firstFrameReady = preloadFirstFrames(24);
    const ready = Promise.race([
      firstFrameReady,
      new Promise<void>((r) => window.setTimeout(r, 1600)), // safe max wait
    ]);

    // Safety net so the loader can never trap the user.
    const hardStop = window.setTimeout(finish, 6500);

    const reduced = prefersReducedMotion();

    const gctx = gsap.context(() => {
      if (reduced) {
        // Simple, low-motion exit (logo already shown instantly via CSS).
        gsap.set(logoFadeRef.current, { opacity: 1 });
        const rtl = gsap.timeline({ onComplete: finish });
        rtl
          .to({}, { duration: 0.3 })
          .to(logoFadeRef.current, { opacity: 0, duration: 0.2 }, 0.3)
          .to(
            [leftRef.current, rightRef.current],
            {
              xPercent: (i: number) => (i === 0 ? -100 : 100),
              duration: 0.45,
              ease: "power2.inOut",
            },
            0.35,
          );
        return;
      }

      const exitX = isRtl ? -150 : 150;
      const enterX = isRtl ? -170 : 170;

      const tl = gsap.timeline({ paused: true, onComplete: finish });

      // Stage 1 (0–0.5s) is handled by CSS. Small hold to align with it.
      tl.to({}, { duration: 0.35 });

      // Stage 2 (0.5–1.5s): hand enters on a soft curved path (two arced legs).
      const sign = isRtl ? -1 : 1;
      tl.set(handRef.current, {
        opacity: 0,
        x: enterX,
        y: 190,
        rotate: isRtl ? 12 : -12,
        scale: 1.05,
      });
      tl.to(
        handRef.current,
        {
          opacity: 1,
          x: enterX * 0.42,
          y: 82,
          rotate: isRtl ? 8 : -8,
          duration: 0.32,
          ease: "power2.out",
        },
        0.35,
      ).to(
        handRef.current,
        {
          x: 22 * sign,
          y: 26,
          rotate: isRtl ? 3 : -3,
          duration: 0.34,
          ease: "power1.inOut",
        },
        ">-0.03",
      );

      // Press moment.
      const pressAt = 0.98;
      tl.to(
        pressRef.current,
        { scale: 0.94, duration: 0.18, ease: "power2.in" },
        pressAt,
      )
        .to(
          handRef.current,
          {
            x: 10 * (isRtl ? -1 : 1),
            y: 44,
            rotate: 0,
            scale: 0.96,
            duration: 0.18,
            ease: "power2.in",
          },
          pressAt,
        )
        .to(
          shadowRef.current,
          { scaleX: 0.82, duration: 0.18, ease: "power2.in" },
          pressAt,
        )
        .fromTo(
          rippleRef.current,
          { scale: 0, opacity: 0.5 },
          { scale: 1.6, opacity: 0, duration: 0.72, ease: "power2.out" },
          pressAt,
        );

      // Release / tactile spring back.
      const releaseAt = pressAt + 0.18;
      tl.to(
        pressRef.current,
        { scale: 1, duration: 0.42, ease: "elastic.out(1, 0.55)" },
        releaseAt,
      )
        .to(
          shadowRef.current,
          { scaleX: 1, duration: 0.42, ease: "power2.out" },
          releaseAt,
        )
        .to(
          handRef.current,
          { y: "-=16", duration: 0.22, ease: "power2.out" },
          releaseAt,
        );

      // Stage 3 (1.5–3.0s): seam appears, hand leaves, logo fades, doors open.
      tl.to(seamRef.current, { opacity: 1, duration: 0.35 }, 1.5)
        .to(
          handRef.current,
          { opacity: 0, x: exitX, y: 170, duration: 0.45, ease: "power2.in" },
          1.56,
        )
        .to(
          logoFadeRef.current,
          { opacity: 0, scale: 0.8, duration: 0.5, ease: "power2.inOut" },
          1.72,
        )
        .to(glowRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" }, 1.85);

      // Gate: hold here until the first hero frame is ready (or max wait).
      tl.call(
        () => {
          tl.pause();
          ready.then(() => tl.resume());
        },
        undefined,
        2.05,
      );

      // Doors open with a subtle 3D swing, revealing the ready hero.
      tl.to(
        leftRef.current,
        { xPercent: -100, rotateY: 8, duration: 0.95, ease: "power3.inOut" },
        2.12,
      )
        .to(
          rightRef.current,
          { xPercent: 100, rotateY: -8, duration: 0.95, ease: "power3.inOut" },
          2.12,
        )
        .to(seamRef.current, { opacity: 0, duration: 0.4 }, 2.12)
        .to(glowRef.current, { opacity: 0, duration: 0.6, ease: "power2.in" }, 2.5);

      // Start on the next frame so the first paint is the CSS state.
      requestAnimationFrame(() => tl.play(0));
    }, rootRef);

    return () => {
      window.clearTimeout(hardStop);
      gctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!active) return null;

  return (
    <div ref={rootRef} className="loader-root" role="presentation" aria-hidden>
      <div ref={leftRef} className="loader-door loader-door--left">
        <DoorMotif />
      </div>
      <div ref={rightRef} className="loader-door loader-door--right">
        <DoorMotif />
      </div>

      <div ref={seamRef} className="loader-seam" />
      <div ref={glowRef} className="loader-glow" />

      <div className="loader-stage">
        <div ref={logoFadeRef} className="loader-logo-fade">
          <div className="loader-logo-enter">
            <div ref={shadowRef} className="loader-shadow" />
            <div ref={pressRef} className="loader-logo-press">
              <img
                src={LOGO_PATH}
                alt=""
                width={184}
                height={184}
                className="loader-logo-img"
                draggable={false}
              />
              <span ref={rippleRef} className="loader-ripple" />
            </div>
          </div>
        </div>

        <div className="loader-brand">
          <p className="display text-3xl text-espresso">{t.loader.brand}</p>
          <p className="loader-brand-hint">{t.loader.tapHint}</p>
        </div>

        <div ref={handRef} className="loader-hand">
          <HandIcon />
        </div>
      </div>
    </div>
  );
}

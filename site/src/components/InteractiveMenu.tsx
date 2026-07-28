"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";

const IMAGE_BY_KEY: Record<string, string> = {
  croissant: "/food/croissant.webp",
  toast: "/food/toast.webp",
  eggs: "/food/egg.webp",
  cheese: "/food/cheese.webp",
  salad: "/food/tomato.webp",
  coffee: "/food/coffee.webp",
};

export default function InteractiveMenu() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const items = t.orbit.items;
  const count = items.length;
  const current = items[active];

  return (
    <section ref={ref} className="relative bg-cream-deep py-24 sm:py-32">
      <div className="container-lx">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow reveal mb-4 justify-center">
            {t.orbit.eyebrow}
          </p>
          <h2 className="display reveal text-4xl text-espresso sm:text-5xl">
            {t.orbit.heading}
          </h2>
          <p className="reveal mt-4 text-lg text-espresso-soft">
            {t.orbit.subheading}
          </p>
        </div>

        {/* ---------- Desktop orbit ---------- */}
        <div className="reveal relative mx-auto mt-16 hidden h-[520px] w-[520px] md:block">
          {/* dashed orbit ring */}
          <div className="absolute inset-8 rounded-full border-2 border-dashed border-espresso/15" />

          {/* center plate */}
          <div className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-ivory p-6 text-center shadow-soft-lg">
            <div className="mb-3 h-24 w-24 overflow-hidden rounded-full ring-4 ring-cream">
              <img
                src={IMAGE_BY_KEY[current.key]}
                alt={current.centerTitle}
                className="h-full w-full scale-110 object-cover transition-all duration-500"
              />
            </div>
            <h3 className="display text-2xl text-espresso">
              {current.centerTitle}
            </h3>
            <p className="mt-1 px-2 text-sm text-espresso-soft">
              {current.centerDesc}
            </p>
          </div>

          {/* orbiting items */}
          {items.map((item, i) => {
            const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
            const r = 224;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            const isActive = i === active;
            return (
              <button
                key={item.key}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                aria-label={item.label}
                className="group absolute left-1/2 top-1/2 flex flex-col items-center gap-2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <span
                  className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border bg-ivory transition-all duration-300 ${
                    isActive
                      ? "scale-110 border-caramel shadow-soft-lg"
                      : "border-espresso/10 shadow-card group-hover:scale-105"
                  }`}
                >
                  <img
                    src={IMAGE_BY_KEY[item.key]}
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover"
                  />
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-espresso" : "text-espresso-soft"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ---------- Mobile carousel ---------- */}
        <div className="mt-12 md:hidden">
          <div className="reveal mb-6 rounded-[2rem] bg-ivory p-6 text-center shadow-card">
            <div className="mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full ring-4 ring-cream">
              <img
                src={IMAGE_BY_KEY[current.key]}
                alt={current.centerTitle}
                className="h-full w-full scale-110 object-cover"
              />
            </div>
            <h3 className="display text-2xl text-espresso">
              {current.centerTitle}
            </h3>
            <p className="mt-1 text-sm text-espresso-soft">
              {current.centerDesc}
            </p>
          </div>

          <p className="reveal mb-3 text-center text-xs font-medium uppercase tracking-widest text-bread">
            {t.orbit.swipeHint}
          </p>
          <div
            className="reveal flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {items.map((item, i) => (
              <button
                key={item.key}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`flex shrink-0 snap-center flex-col items-center gap-2 rounded-3xl border p-4 transition-all ${
                  i === active
                    ? "border-caramel bg-ivory shadow-card"
                    : "border-espresso/10 bg-ivory/60"
                }`}
              >
                <span className="h-16 w-16 overflow-hidden rounded-full">
                  <img
                    src={IMAGE_BY_KEY[item.key]}
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="text-sm font-semibold text-espresso">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

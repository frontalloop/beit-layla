"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";

export default function OurStory() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="story"
      className="paper-texture relative overflow-hidden bg-ivory py-24 sm:py-32"
    >
      {/* Decorative logo-inspired curves */}
      <svg
        className="pointer-events-none absolute -right-16 top-10 h-72 w-72 text-caramel/15 rtl:-left-16 rtl:right-auto"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M20 120 C 60 40, 140 40, 180 120 S 120 200, 100 150"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M40 150 C 80 90, 130 90, 160 150"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>

      <div className="container-lx grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text column */}
        <div>
          <p className="eyebrow reveal mb-4">{t.story.eyebrow}</p>
          <h2 className="display reveal text-4xl text-espresso sm:text-5xl lg:text-[3.4rem]">
            {t.story.heading}
          </h2>
          <p className="reveal mt-6 max-w-[52ch] text-lg leading-relaxed text-espresso-soft">
            {t.story.body}
          </p>

          <div className="reveal mt-10 grid grid-cols-3 gap-4">
            {t.story.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-3xl border border-espresso/10 bg-cream/60 px-4 py-5 text-center"
              >
                <p className="display text-2xl text-bread sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-espresso-soft">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="reveal relative">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <div className="absolute inset-0 rotate-3 rounded-[2.75rem] bg-beige/70" />
            <div className="absolute inset-0 overflow-hidden rounded-[2.75rem] shadow-soft-lg">
              <img
                src="/food/plate.webp"
                alt={t.experience.categories[1].title}
                className="h-full w-full scale-[1.15] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating accent chips */}
            <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-2xl bg-ivory px-4 py-3 shadow-card rtl:left-auto rtl:right-6">
              <img
                src="/food/croissant.webp"
                alt=""
                className="h-9 w-9 rounded-lg object-cover"
                aria-hidden
              />
              <img
                src="/food/coffee.webp"
                alt=""
                className="h-9 w-9 rounded-lg object-cover"
                aria-hidden
              />
              <span className="text-sm font-semibold text-espresso">
                {t.loader.brand}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

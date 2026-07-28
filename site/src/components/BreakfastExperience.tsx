"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";
import { ArrowIcon } from "@/components/icons";

export default function BreakfastExperience() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experience"
      className="relative bg-cream py-24 sm:py-32"
    >
      <div className="container-lx">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow reveal mb-4 justify-center">
            {t.experience.eyebrow}
          </p>
          <h2 className="display reveal text-4xl text-espresso sm:text-5xl">
            {t.experience.heading}
          </h2>
          <p className="reveal mt-4 text-lg text-espresso-soft">
            {t.experience.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.experience.categories.map((cat) => (
            <article
              key={cat.key}
              className="reveal group relative overflow-hidden rounded-[2rem] border border-espresso/10 bg-ivory p-6 shadow-card outline-none transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:rotate-[-0.6deg] hover:shadow-soft-lg focus-visible:-translate-y-1.5"
            >
              <div className="mb-5 h-40 overflow-hidden rounded-3xl bg-cream-deep">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="display text-2xl text-espresso">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-soft">
                    {cat.desc}
                  </p>
                </div>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-espresso/15 text-bread transition-all duration-300 group-hover:bg-bread group-hover:text-ivory">
                  <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

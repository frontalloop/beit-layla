"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";
import { INSTAGRAM_URL, SOCIAL_GALLERY } from "@/lib/constants";
import { InstagramIcon } from "@/components/icons";

export default function SocialMoments() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative bg-ivory py-24 sm:py-32">
      <div className="container-lx">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow reveal mb-4 justify-center">
            {t.social.eyebrow}
          </p>
          <h2 className="display reveal text-4xl text-espresso sm:text-5xl">
            {t.social.heading}
          </h2>
          <p className="reveal mt-4 text-lg text-espresso-soft">
            {t.social.subheading}
          </p>
        </div>

        <div className="reveal mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4">
          {SOCIAL_GALLERY.map((g, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.a11y.instagram}
              className={`group relative overflow-hidden rounded-3xl bg-cream-deep ${g.span}`}
            >
              <img
                src={g.src}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-espresso/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <InstagramIcon className="h-8 w-8 text-ivory" />
              </span>
            </a>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.a11y.instagram}
            className="btn-primary"
          >
            <InstagramIcon className="h-5 w-5" />
            {t.cta.followInstagram}
            <span className="opacity-70">{t.social.handle}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

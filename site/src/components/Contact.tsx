"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";
import {
  MAP_URL,
  PHONE_TEL,
  PHONE_INTL_PRETTY,
  PHONE_LOCAL,
  whatsappLink,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "@/lib/constants";
import {
  PhoneIcon,
  WhatsAppIcon,
  PinIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";

export default function Contact() {
  const { t, lang } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-cream-deep py-24 sm:py-32"
    >
      <div className="container-lx">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow reveal mb-4 justify-center">
            {t.contact.eyebrow}
          </p>
          <h2 className="display reveal text-4xl text-espresso sm:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="reveal mt-4 text-lg text-espresso-soft">
            {t.contact.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Map card */}
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.cta.directions}
            className="reveal group relative flex min-h-[300px] overflow-hidden rounded-[2.5rem] shadow-soft-lg ring-1 ring-espresso/10 lg:min-h-full"
          >
            {/* Stylized map backdrop (brand-toned, no external tiles) */}
            <div className="absolute inset-0 bg-beige">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--beige-deep) 1.5px, transparent 1.5px), linear-gradient(90deg, var(--beige-deep) 1.5px, transparent 1.5px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <div className="absolute left-1/4 top-0 h-full w-6 -rotate-12 bg-cream/70" />
              <div className="absolute left-0 top-1/2 h-8 w-full rotate-3 bg-cream/60" />
              <div className="absolute right-1/4 top-1/3 h-full w-4 rotate-6 bg-caramel/20" />
            </div>
            <div className="relative z-10 flex w-full flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-espresso text-ivory shadow-soft-lg transition-transform duration-300 group-hover:scale-110">
                <PinIcon className="h-8 w-8" />
              </span>
              <p className="display text-2xl text-espresso">
                {t.loader.brand}
              </p>
              <span className="btn bg-ivory px-5 text-espresso shadow-soft">
                {t.cta.directions}
              </span>
            </div>
          </a>

          {/* Details */}
          <div className="reveal flex flex-col gap-5 rounded-[2.5rem] bg-ivory p-7 shadow-card sm:p-9">
            <div>
              <p className="eyebrow mb-2">{t.contact.addressLabel}</p>
              <p className="flex items-start gap-2 text-lg leading-relaxed text-espresso">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-bread" />
                {t.contact.address}
              </p>
            </div>

            <div className="h-px bg-espresso/10" />

            <div>
              <p className="eyebrow mb-2">{t.contact.phoneLabel}</p>
              <a
                href={PHONE_TEL}
                aria-label={t.a11y.phone}
                dir="ltr"
                className="block text-lg font-semibold text-espresso hover:text-bread"
              >
                {PHONE_INTL_PRETTY}
              </a>
              <p dir="ltr" className="text-sm text-espresso-soft">
                {PHONE_LOCAL}
              </p>
            </div>

            <div className="mt-1 grid gap-3 sm:grid-cols-2">
              <a href={PHONE_TEL} className="btn-ghost" aria-label={t.a11y.phone}>
                <PhoneIcon className="h-5 w-5" />
                {t.cta.call}
              </a>
              <a
                href={whatsappLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label={t.a11y.whatsapp}
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t.cta.orderWhatsapp}
              </a>
            </div>

            <div className="mt-1 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.instagram}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-all hover:-translate-y-0.5 hover:border-bread hover:text-bread"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.facebook}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-all hover:-translate-y-0.5 hover:border-bread hover:text-bread"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <p className="text-sm text-espresso-soft">
                {t.contact.hoursNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

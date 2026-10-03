"use client";

import { useLanguage } from "@/components/LanguageProvider";
import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  MENU_URL,
  PHONE_TEL,
  PHONE_INTL_PRETTY,
  LOGO_PATH,
} from "@/lib/constants";
import { scrollToSection } from "@/lib/navigation";
import { InstagramIcon, FacebookIcon } from "@/components/icons";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream">
      <div className="container-lx py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={LOGO_PATH}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl object-cover"
                draggable={false}
              />
              <span className="display text-2xl text-ivory">
                {t.loader.brand}
              </span>
            </div>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-cream/70">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.instagram}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-caramel hover:text-caramel"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.facebook}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-caramel hover:text-caramel"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label={t.footer.quickLinks}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cream/60">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {t.nav.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-cream/80 transition-colors hover:text-caramel"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={MENU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/80 transition-colors hover:text-caramel"
                >
                  {t.footer.menuLink}
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cream/60">
              {t.footer.contactTitle}
            </h3>
            <address className="mt-4 space-y-2.5 not-italic">
              <p className="text-sm leading-relaxed text-cream/80">
                {t.contact.address}
              </p>
              <a
                href={PHONE_TEL}
                dir="ltr"
                aria-label={t.a11y.phone}
                className="block text-sm font-semibold text-cream transition-colors hover:text-caramel rtl:text-right"
              >
                {PHONE_INTL_PRETTY}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-center">
          <p className="text-sm text-cream/60">
            © {year} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

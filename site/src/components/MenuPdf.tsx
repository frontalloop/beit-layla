"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";
import { MENU_PDF_PATH, MENU_PREVIEW_PATH } from "@/lib/constants";
import { DocumentIcon, DownloadIcon, ExternalIcon } from "@/components/icons";

export default function MenuPdf() {
  const { t } = useLanguage();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="menu" className="relative bg-cream py-24 sm:py-32">
      <div className="container-lx grid items-center gap-14 lg:grid-cols-2">
        {/* Preview card */}
        <div className="reveal order-2 lg:order-1">
          <div className="relative mx-auto max-w-[380px]">
            <div className="absolute -inset-3 -rotate-2 rounded-[2.5rem] bg-beige/60" />
            <a
              href={MENU_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-[2rem] shadow-soft-lg ring-1 ring-espresso/10"
            >
              <img
                src={MENU_PREVIEW_PATH}
                alt={t.menuPdf.previewAlt}
                loading="lazy"
                className="w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-espresso/40 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="btn bg-ivory px-5 text-espresso shadow-soft">
                  <ExternalIcon className="h-4 w-4" />
                  {t.cta.openMenu}
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Text + actions */}
        <div className="order-1 lg:order-2">
          <p className="eyebrow reveal mb-4">{t.menuPdf.eyebrow}</p>
          <h2 className="display reveal text-4xl text-espresso sm:text-5xl">
            {t.menuPdf.heading}
          </h2>
          <p className="reveal mt-5 max-w-[46ch] text-lg text-espresso-soft">
            {t.menuPdf.description}
          </p>
          <p className="reveal mt-3 flex items-center gap-2 text-sm text-bread">
            <DocumentIcon className="h-4 w-4" />
            {t.menuPdf.note}
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a
              href={MENU_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalIcon className="h-4 w-4" />
              {t.cta.openMenu}
            </a>
            <a href={MENU_PDF_PATH} download className="btn-ghost">
              <DownloadIcon className="h-4 w-4" />
              {t.cta.download}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

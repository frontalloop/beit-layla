"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { SECTION_IDS, LOGO_PATH } from "@/lib/constants";
import { scrollToSection } from "@/lib/navigation";
import { MenuBarsIcon, CloseIcon, GlobeIcon } from "@/components/icons";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Solidify the navbar after leaving the top of the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for the active section indicator.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock scroll while the mobile drawer is open.
  useEffect(() => {
    if (mobileOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [mobileOpen]);

  const goTo = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "border-b border-espresso/10 bg-cream/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-lx flex h-[68px] items-center justify-between gap-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => goTo("home")}
          aria-label={t.a11y.logoHome}
          className="flex shrink-0 items-center gap-2.5"
        >
          <img
            src={LOGO_PATH}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl object-cover shadow-sm"
            draggable={false}
          />
          <span className="display hidden text-xl text-espresso sm:block">
            {t.loader.brand}
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {t.nav.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => goTo(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === item.id
                    ? "text-espresso"
                    : "text-espresso-soft hover:text-espresso"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-caramel transition-all duration-300 ${
                    active === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <LangSwitch
            lang={lang}
            setLang={setLang}
            label={t.langSwitch.label}
          />

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={
              mobileOpen ? t.cta.closeMobileMenu : t.cta.openMobileMenu
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 bg-cream/60 text-espresso lg:hidden"
          >
            {mobileOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuBarsIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`overflow-hidden bg-cream/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-out-expo lg:hidden ${
          mobileOpen
            ? "max-h-[26rem] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="container-lx flex flex-col gap-1 py-4">
          {t.nav.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => goTo(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                  active === item.id
                    ? "bg-espresso/5 text-espresso"
                    : "text-espresso-soft hover:bg-espresso/5"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
  label,
}: {
  lang: "ar" | "en";
  setLang: (l: "ar" | "en") => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-espresso/15 bg-cream/60 p-0.5"
    >
      <GlobeIcon className="mx-1 h-4 w-4 text-bread" />
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
          lang === "ar" ? "bg-espresso text-ivory" : "text-espresso-soft"
        }`}
      >
        ع
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
          lang === "en" ? "bg-espresso text-ivory" : "text-espresso-soft"
        }`}
      >
        EN
      </button>
    </div>
  );
}

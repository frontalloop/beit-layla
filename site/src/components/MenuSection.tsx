"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";
import { MENU_URL } from "@/lib/constants";
import { MENU_TABS, type MenuItem } from "@/lib/menu";
import { ExternalIcon } from "@/components/icons";

export default function MenuSection() {
  const { t, lang } = useLanguage();
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const tab = MENU_TABS[active];

  const itemName = (item: MenuItem) =>
    typeof item === "string" ? item : item[lang];

  return (
    <section ref={ref} id="menu" className="relative bg-cream py-24 sm:py-32">
      <div className="container-lx">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow reveal mb-4 justify-center">{t.menu.eyebrow}</p>
          <h2 className="display reveal text-4xl text-espresso sm:text-5xl">
            {t.menu.heading}
          </h2>
          <p className="reveal mt-5 text-lg text-espresso-soft">
            {t.menu.description}
          </p>
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label={t.menu.tabsLabel}
          className="reveal -mx-5 mt-12 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        >
          {MENU_TABS.map((m, i) => (
            <button
              key={m.key}
              type="button"
              role="tab"
              id={`menu-tab-${m.key}`}
              aria-selected={i === active}
              aria-controls="menu-panel"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                i === active
                  ? "bg-espresso text-cream shadow-soft"
                  : "bg-ivory text-espresso-soft ring-1 ring-espresso/10 hover:bg-beige/60"
              }`}
            >
              {m.label[lang]}
            </button>
          ))}
        </div>

        {/* Menu card */}
        <div
          role="tabpanel"
          id="menu-panel"
          aria-labelledby={`menu-tab-${tab.key}`}
          className="reveal mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl bg-ivory shadow-soft-lg ring-1 ring-espresso/10"
        >
          <div className="bg-espresso px-6 py-9 text-center">
            <h3 className="display text-3xl text-beige sm:text-4xl">
              {tab.label[lang]}
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cream/60">
              {tab.groups.map((g) => g.title[lang]).join(" · ")}
            </p>
          </div>

          <div className="space-y-10 p-6 sm:p-10">
            {tab.groups.map((group) => (
              <div key={group.title.en}>
                <h4 className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.18em] text-bread">
                  {group.title[lang]}
                  <span className="h-px flex-1 bg-espresso/15" />
                </h4>
                <ul className="mt-2 grid gap-x-14 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={itemName(item)}
                      className="border-b border-dotted border-espresso/25 py-3 text-espresso"
                    >
                      {itemName(item)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Link to the full flipbook menu */}
        <div className="reveal mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-bread">{t.menu.note}</p>
          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalIcon className="h-4 w-4" />
            {t.menu.viewFull}
          </a>
        </div>
      </div>
    </section>
  );
}

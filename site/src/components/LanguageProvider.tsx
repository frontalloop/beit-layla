"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DICT, type Lang } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  t: (typeof DICT)[Lang];
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  ready: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "beit-laila-lang";

function applyDocument(lang: Lang) {
  if (typeof document === "undefined") return;
  const d = DICT[lang];
  document.documentElement.lang = d.htmlLang;
  document.documentElement.dir = d.dir;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default language is English.
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  // Hydrate saved preference without losing the current scroll position.
  useEffect(() => {
    let initial: Lang = "en";
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "ar" || stored === "en") initial = stored;
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
    setLangState(initial);
    applyDocument(initial);
    setReady(true);
  }, []);

  const setLang = useCallback((next: Lang) => {
    const scrollY = window.scrollY;
    setLangState(next);
    applyDocument(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    // Preserve scroll position across the RTL/LTR flip.
    requestAnimationFrame(() => window.scrollTo(0, scrollY));
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider
      value={{ lang, t: DICT[lang], setLang, toggleLang, ready }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

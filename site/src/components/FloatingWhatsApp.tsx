"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { whatsappLink } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons";
import { prefersReducedMotion } from "@/lib/motion";

export default function FloatingWhatsApp() {
  const { t, lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [pulsed, setPulsed] = useState(false);

  // Appear only after the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      setVisible(past);
      if (past && !pulsed) setPulsed(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pulsed]);

  return (
    <a
      href={whatsappLink(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.a11y.whatsapp}
      title={t.floatingWhatsapp}
      className={`fixed bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25623f] text-ivory shadow-soft-lg transition-all duration-500 ease-out-expo hover:scale-105 ltr:right-5 rtl:left-5 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* one-time pulse ring */}
      {visible && !prefersReducedMotion() && (
        <span className="animate-ping-once absolute inset-0 rounded-full bg-[#25623f]/50" />
      )}
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

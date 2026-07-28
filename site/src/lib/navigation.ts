import { NAV_OFFSET } from "@/lib/constants";

export function scrollToSection(id: string, offset = NAV_OFFSET): void {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  const section = document.getElementById(id);
  if (!section) return;

  const top = section.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

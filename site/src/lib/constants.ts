// Central brand + contact constants for Beit Laila.
// Single source of truth so links and shared labels stay aligned.

export const BRAND_NAME_EN = "Beit Laila";
export const BRAND_NAME_AR = "بيت ليلى";

export const PHONE_LOCAL = "015 53515139";
export const PHONE_INTL_PRETTY = "+20 155 351 5139";
export const PHONE_TEL = "tel:+201553515139";
export const WHATSAPP_NUMBER = "201553515139";

export const WHATSAPP_MESSAGE = {
  ar: "مرحبًا بيت ليلى، أريد الاستفسار عن الطلبات والمنيو.",
  en: "Hello Beit Laila, I would like to ask about the menu and ordering.",
} as const;

export function whatsappLink(lang: "ar" | "en"): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE[lang],
  )}`;
}

export const INSTAGRAM_URL = "https://www.instagram.com/beitlailaeg/";
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=100086519203038";

// Exact supplied map link.
export const MAP_URL =
  "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.bing.com%2Fmaps%2Fdefault.aspx%3Fv%3D2%26pc%3DFACEBK%26mid%3D8100%26where1%3D%25D9%2585%25D9%2586%25D8%25AA%25D8%25B5%25D9%2581%2520%25D8%25B4%25D8%25A7%25D8%25B1%25D8%25B9%2520%25D8%25A7%25D8%25A8%25D9%2588%2520%25D8%25A7%25D9%2584%25D8%25AE%25D9%258A%25D8%25B1%25D8%25A8%25D8%25AC%25D9%2588%25D8%25A7%25D8%25B1%2520%25D8%25A7%25D9%2584%25D8%25B2%25D9%2585%25D9%258A%25D8%25AA%25D9%258A%2520%25D9%2584%25D8%25A7%25D9%2586%25D8%25AF%2520%2520%25D8%25AF%25D9%2585%25D9%258A%25D8%25A7%25D8%25B7%2520%25D8%25A7%25D9%2584%25D8%25AC%25D8%25AF%25D9%258A%25D8%25AF%25D8%25A9%252C%2520Damietta%252C%2520Egypt%26FORM%3DFBKPL1%26mkt%3Den-US%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTnMwc2w4dmtKWkp5Q2dNRHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7vQW-F2DAIVKw2vKtEDdgUBbFiLn4fkrppYlZ4vgPIxFG_L77-1yoTm2JFEw_aem_5ZvmF4-ufFlgaGvCVY9uQQ&h=AUB-jHX_F4ob2pCyfmAwFd-kcciDc9ydrc08VT-srAHH4r4hSXcSUXYXA3X60mcoh_WLGvLHSR7GlRBnYHDz3kEB8gtDidQJwOn7YDdu_DaKe-PEwPZpgC-RQvg4TC776bxz";

export const SITE_URL = "https://beitlaila.com";
export const LOGO_PATH = "/logo.jpg";
export const MENU_PDF_PATH = "/menu/beit-laila-menu.pdf";
export const MENU_PREVIEW_PATH = "/menu/menu-preview.webp";

export const NAV_OFFSET = 84;
export const SECTION_IDS = ["home", "story", "experience", "menu", "contact"];

export const SOCIAL_GALLERY = [
  { src: "/og-image.jpg", span: "col-span-2 row-span-2" },
  { src: "/food/croissant.webp", span: "" },
  { src: "/food/coffee.webp", span: "" },
  { src: "/food/wrap.webp", span: "" },
  { src: "/food/toast.webp", span: "" },
] as const;

// Total scroll frames for the hero canvas sequence.
export const FRAME_COUNT = 240;
export const framePath = (i: number): string =>
  `/frames/frame-${String(i).padStart(3, "0")}.webp`;

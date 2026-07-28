import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Cairo,
  Alexandria,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_URL, MENU_PDF_PATH } from "@/lib/constants";
import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  PHONE_INTL_PRETTY,
} from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});
const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-alexandria",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "بيت ليلى | فطار ومخبوزات طازجة في دمياط الجديدة — Beit Laila",
  description:
    "اكتشف فطار بيت ليلى، المخبوزات الطازجة، القهوة واختيارات الصباح في دمياط الجديدة. Discover fresh breakfast, pastries, coffee and morning favorites at Beit Laila in New Damietta.",
  keywords: [
    "بيت ليلى",
    "Beit Laila",
    "فطار دمياط الجديدة",
    "مخبوزات",
    "breakfast New Damietta",
    "bakery",
    "coffee",
  ],
  authors: [{ name: "Beit Laila" }],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icon-180.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Beit Laila — بيت ليلى",
    title: "بيت ليلى | Beit Laila — Fresh Breakfast & Bakery",
    description:
      "فطار طازج كل صباح — مخبوزات، قهوة واختيارات الصباح في دمياط الجديدة. Fresh Breakfast, Every Morning in New Damietta.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1280,
        height: 720,
        alt: "Beit Laila breakfast composition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بيت ليلى | Beit Laila — Fresh Breakfast & Bakery",
    description:
      "فطار طازج كل صباح في دمياط الجديدة. Fresh Breakfast, Every Morning in New Damietta.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7efe0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Beit Laila — بيت ليلى",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  servesCuisine: ["Breakfast", "Bakery", "Egyptian", "Coffee"],
  telephone: PHONE_INTL_PRETTY,
  menu: `${SITE_URL}${MENU_PDF_PATH}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Middle of Abu El Khair Street, next to El Zemeity Land",
    addressLocality: "New Damietta",
    addressRegion: "Damietta",
    addressCountry: "EG",
  },
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" data-loading="true" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${manrope.variable} ${cairo.variable} ${alexandria.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

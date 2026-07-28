# بيت ليلى — Beit Laila

A premium bilingual (Arabic RTL / English LTR) landing page for the Egyptian
breakfast & bakery brand **Beit Laila**, in New Damietta.

Built with **Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS ·
GSAP + ScrollTrigger**. Ships as a fully static site — ideal for Hostinger or any
static host.

## Highlights

- **3-second cinematic loader** — logo reveal → hand press with ripple → two
  ivory "doors" open to reveal the hero. Skipped for the rest of the session via
  `sessionStorage` (toggle `RESPECT_SESSION` in `src/components/Loader.tsx`).
- **Scroll-driven hero** — 240 real animation frames rendered on an HTML canvas,
  scrubbed by scroll with a pinned section. DPR-capped, batched preloading,
  contain-fit rendering on a cream backdrop (seamless letterboxing), reduced-motion
  fallback to the final composition.
- **Real bilingual system** — one dictionary drives every string, aria-label,
  direction and font. Default Arabic; preference saved to `localStorage`; scroll
  position preserved across the RTL/LTR flip.
- **Sections** — Our Story, Breakfast Experience cards, interactive circular
  breakfast plate (orbit on desktop, swipe carousel on mobile), Menu PDF with a
  live first-page preview, Instagram gallery, Contact with map card, footer.
- **Correct links everywhere** — WhatsApp `+201553515139` with prefilled message,
  `tel:`, Instagram, Facebook, the exact supplied map URL, and the real menu PDF.
- **SEO** — bilingual metadata, Open Graph / Twitter cards, `Restaurant`
  structured data, `robots.txt`, `sitemap.xml`, logo-derived favicons.
- Accessible, keyboard-navigable, reduced-motion aware, no horizontal overflow,
  no console/hydration errors.

## Assets

Real uploaded assets are used (no placeholders):

- `public/logo.jpg` — official logo (also source of the favicons).
- `public/frames/frame-001…240.webp` — hero animation frames (from the uploaded
  PNG sequence, compressed to WebP; ~3.6 MB total).
- `public/menu/beit-laila-menu.pdf` — official 4-page menu.
- `public/menu/menu-preview.webp` — rendered first page (preview card).
- `public/food/*.webp` — food cutouts cropped from the final animation frame.
- `public/og-image.jpg` — social share image (final breakfast composition).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs to ./out
```

Upload the contents of `out/` to your static host (Hostinger `public_html`).
Set `SITE_URL` in `src/lib/constants.ts` to the production domain before building
so canonical/OG/sitemap URLs are correct.

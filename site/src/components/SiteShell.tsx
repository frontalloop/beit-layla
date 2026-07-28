"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import BreakfastExperience from "@/components/BreakfastExperience";
import InteractiveMenu from "@/components/InteractiveMenu";
import MenuPdf from "@/components/MenuPdf";
import SocialMoments from "@/components/SocialMoments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function SiteShell() {
  const [loaderDone, setLoaderDone] = useState(false);
  const { t } = useLanguage();
  const skipLabel = t.a11y.skipToContent;

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        {skipLabel}
      </a>
      <Loader onComplete={() => setLoaderDone(true)} />

      {/* Hero renders underneath the loader so the doors open onto a live scene.
          The rest of the page mounts once the loader completes to keep the
          initial paint light and avoid competing ScrollTriggers. */}
      <Navbar />
      <main id="content">
        <Hero />
        {loaderDone && (
          <>
            <OurStory />
            <BreakfastExperience />
            <InteractiveMenu />
            <MenuPdf />
            <SocialMoments />
            <Contact />
          </>
        )}
      </main>
      {loaderDone && <Footer />}
      <FloatingWhatsApp />
    </>
  );
}

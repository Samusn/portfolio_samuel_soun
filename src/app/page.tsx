"use client";

import { HeroSection } from "@/components/sections/home/hero";
import { AboutIntroSection } from "@/components/sections/about/about-intro-section";
import { SkillsSection } from "@/components/sections/about/skills-section";
import { TimelineSection } from "@/components/sections/about/timeline-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { presenceHighlights, timelineItems } from "@/data/about";
import { socialLinks } from "@/data/home";
import type { Transition, Variants } from "framer-motion";
import * as React from "react";

export default function HomePage() {
  const popIn: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  const popInTransition: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  const sectionFade: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };
  const sectionTransition: Transition = { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] };
  const sectionViewport = { once: false, amount: 0.2 };

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollTo = React.useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col overscroll-none">
      <HeroSection
        isMounted={isMounted}
        popIn={popIn}
        popInTransition={popInTransition}
        sectionFade={sectionFade}
        sectionTransition={sectionTransition}
        socialLinks={socialLinks}
        onScrollTo={handleScrollTo}
      />

      <AboutIntroSection
        popIn={popIn}
        popInTransition={popInTransition}
        sectionFade={sectionFade}
        sectionTransition={sectionTransition}
        isMounted={isMounted}
        presenceHighlights={presenceHighlights}
      />

      <SkillsSection
        popIn={popIn}
        popInTransition={popInTransition}
        sectionFade={sectionFade}
        sectionTransition={sectionTransition}
      />

      <TimelineSection
        timelineItems={timelineItems}
        sectionFade={sectionFade}
        sectionTransition={sectionTransition}
        sectionViewport={sectionViewport}
      />

      <SiteFooter />
    </main>
  );
}

"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { AboutIntroSection } from "@/components/sections/about/about-intro-section";
import { ContactSidebar } from "@/components/sections/about/contact-sidebar";
import { SkillsSection } from "@/components/sections/about/skills-section";
import { TimelineSection } from "@/components/sections/about/timeline-section";
import {
  aboutSocialLinks,
  homeIcon,
  presenceHighlights,
  timelineItems,
} from "@/data/about";
import type { Transition, Variants } from "framer-motion";
import * as React from "react";

export default function AboutPage() {
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
  const sectionViewport = { once: false, amount: 0.2 };

  const sectionTransition: Transition = { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] };

  const [isSocialOpen, setIsSocialOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <ContactSidebar
        homeIcon={homeIcon}
        socialLinks={aboutSocialLinks}
        isSocialOpen={isSocialOpen}
        onToggle={() => setIsSocialOpen((prev) => !prev)}
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


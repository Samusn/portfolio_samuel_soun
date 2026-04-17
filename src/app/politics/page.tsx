"use client";

import { HeroSection } from "@/components/sections/home/hero";
import { AboutIntroSection } from "@/components/sections/about/about-intro-section";
import { TimelineSection } from "@/components/sections/about/timeline-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { politicalPresenceHighlights, politicalTimelineItems } from "@/data/political/about";
import { politicalSocialLinks } from "@/data/political/about";
import type { SocialLink } from "@/data/home";
import type { Transition, Variants } from "framer-motion";
import * as React from "react";

const heroSocialLinks: SocialLink[] = politicalSocialLinks.map((link) => ({
  href: link.href,
  label: link.label,
  icon: link.icon,
}));

export default function PoliticsPage() {
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
        socialLinks={heroSocialLinks}
        onScrollTo={handleScrollTo}
        subtitle="Jung · Bürgerlich · Liberal"
        blogHref="/politics/blog"
      />

      <AboutIntroSection
        popIn={popIn}
        popInTransition={popInTransition}
        sectionFade={sectionFade}
        sectionTransition={sectionTransition}
        isMounted={isMounted}
        presenceHighlights={politicalPresenceHighlights}
        heading="Jung, freisinnig und bereit, etwas zu bewegen."
        description="Mein Name ist Samuel Soun und ich engagiere mich aktiv in der Lokalpolitik der Gemeinde Suhr. Als Mitglied der FDP Suhr und der Jungfreisinnigen Schweiz setze ich mich für liberale Werte, individuelle Freiheit und eine zukunftsorientierte Gesellschaft ein. Im September 2025 wurde ich in das Wahlbüro von Suhr gewählt, mein erster offizieller Schritt in die Lokalpolitik."

        switchLink={{ href: "/", label: "← Work Portfolio" }}
      />

      <TimelineSection
        timelineItems={politicalTimelineItems}
        sectionFade={sectionFade}
        sectionTransition={sectionTransition}
        sectionViewport={sectionViewport}
        title="Politisches Engagement"
        description="Ein Überblick über mein politisches Engagement auf lokaler und nationaler Ebene"
      />

      <SiteFooter />
    </main>
  );
}

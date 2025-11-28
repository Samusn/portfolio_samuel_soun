"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Timeline } from "@/components/ui/timeline";
import type { TimelineItem } from "@/data/about";
import { motion, type Transition, type Variants } from "framer-motion";

type TimelineSectionProps = {
  timelineItems: TimelineItem[];
  sectionFade: Variants;
  sectionTransition: Transition;
  sectionViewport: { once: boolean; amount: number };
};

export function TimelineSection({
  timelineItems,
  sectionFade,
  sectionTransition,
  sectionViewport,
}: TimelineSectionProps) {
  return (
    <motion.section
      id="timeline"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-12 sm:px-6 sm:py-24 lg:px-12"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      transition={sectionTransition}
    >
      <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
        <BlurFade delay={0.15} inView className="space-y-3 sm:space-y-4 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-white/60 drop-shadow-[0_8px_30px_rgba(59,130,246,0.4)]">
            Experience
          </p>
          <h2
            className="text-3xl font-bold text-white sm:text-5xl"
            style={{
              textShadow: "0 12px 35px rgba(2,6,23,0.75), 0 0 55px rgba(14,165,233,0.35)",
            }}
          >
            Projects @ Swisscom
          </h2>
          <p
            className="text-base sm:text-lg text-white/80"
            style={{ textShadow: "0 0 24px rgba(248,250,252,0.25)" }}
          >
            A simple overview of the milestones of my career at Swisscom
          </p>
        </BlurFade>

        <Timeline data={timelineItems} className="pt-4" />
      </div>
    </motion.section>
  );
}


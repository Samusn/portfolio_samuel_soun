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
        <BlurFade delay={0.15} inView className="space-y-3 sm:space-y-4 text-left md:text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
            Experience
          </p>
          <h2
            className="text-3xl font-bold text-slate-900 sm:text-5xl"
            style={{
              textShadow: "0 4px 12px rgba(15,23,42,0.1), 0 0 25px rgba(59,130,246,0.15)",
            }}
          >
            Projects @ Swisscom
          </h2>
          <p className="text-base sm:text-lg text-slate-700">
            A simple overview of the milestones of my career at Swisscom
          </p>
        </BlurFade>

        <Timeline data={timelineItems} className="pt-4" />
      </div>
    </motion.section>
  );
}


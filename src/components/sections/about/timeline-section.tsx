"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Timeline } from "@/components/ui/timeline";
import type { TimelineItem } from "@/data/timeline";
import { motion, type Transition, type Variants } from "framer-motion";

type TimelineSectionProps = {
  timelineItems: TimelineItem[];
  sectionFade: Variants;
  sectionTransition: Transition;
  sectionViewport: { once: boolean; amount: number };
  title?: string;
  description?: string;
};

export function TimelineSection({
  timelineItems,
  sectionFade,
  sectionTransition,
  sectionViewport,
  title = "Projects @ Swisscom",
  description = "A simple overview of the milestones of my career at Swisscom",
}: TimelineSectionProps) {
  return (
    <motion.section
      id="timeline"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      transition={sectionTransition}
    >
      {/* Section divider line */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="mx-auto max-w-5xl space-y-12">
        <BlurFade delay={0.15} inView className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
            Experience
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
            {title}
          </h2>
          <p className="text-base text-slate-500 sm:text-lg">
            {description}
          </p>
        </BlurFade>

        <Timeline data={timelineItems} />
      </div>
    </motion.section>
  );
}

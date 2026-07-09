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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      transition={sectionTransition}
    >
      <div className="mx-auto max-w-5xl space-y-10">
        <BlurFade delay={0.15} inView className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Experience
          </p>
          <h2
            className="text-3xl font-bold text-slate-900 sm:text-5xl dark:text-white"
            style={{ textShadow: "0 4px 12px rgba(15,23,42,0.1), 0 0 25px rgba(59,130,246,0.15)" }}
          >
            {title}
          </h2>
          <p className="text-base text-slate-600 sm:text-lg dark:text-slate-400">
            {description}
          </p>
        </BlurFade>

        <Timeline data={timelineItems} />
      </div>
    </motion.section>
  );
}

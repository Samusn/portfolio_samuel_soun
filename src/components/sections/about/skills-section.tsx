"use client";

import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { motion, type Transition, type Variants } from "framer-motion";

type SkillsSectionProps = {
  popIn: Variants;
  popInTransition: Transition;
  sectionFade: Variants;
  sectionTransition: Transition;
};

export function SkillsSection({
  popIn,
  popInTransition,
  sectionFade,
  sectionTransition,
}: SkillsSectionProps) {
  return (
    <motion.section
      id="skills"
      className="flex min-h-screen items-center px-4 py-12 sm:px-6 sm:py-24 lg:px-12"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      transition={sectionTransition}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-10">
        <motion.div
          variants={popIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ ...popInTransition, delay: 0.1 }}
          className="space-y-3 sm:space-y-4 text-center"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
            Competencies
          </p>
          <h2
            className="text-3xl font-bold text-white sm:text-5xl"
            style={{
              textShadow: "0 12px 30px rgba(2,6,23,0.75), 0 0 45px rgba(59,130,246,0.3)",
            }}
          >
            Programming Languages & Technologies
          </h2>
          <p className="text-base sm:text-lg text-white/80">
            Tools, programming languages, and technologies I have dealt with so far
          </p>
        </motion.div>

        <FeaturesSectionWithHoverEffects />
      </div>
    </motion.section>
  );
}


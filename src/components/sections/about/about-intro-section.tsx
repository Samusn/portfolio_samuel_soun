"use client";

import type { PresenceHighlight } from "@/data/about";
import { motion, type Transition, type Variants } from "framer-motion";
import Image from "next/image";

type AboutIntroSectionProps = {
  popIn: Variants;
  popInTransition: Transition;
  sectionFade: Variants;
  sectionTransition: Transition;
  isMounted: boolean;
  presenceHighlights: PresenceHighlight[];
};

export function AboutIntroSection({
  popIn,
  popInTransition,
  sectionFade,
  sectionTransition,
  isMounted,
  presenceHighlights,
}: AboutIntroSectionProps) {
  return (
    <motion.section
      id="about"
      className="flex min-h-screen items-center px-4 py-12 sm:px-6 sm:py-24 lg:px-12"
      variants={sectionFade}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={sectionTransition}
    >
      <div className="mx-auto w-full max-w-5xl space-y-8 sm:space-y-12">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div
            variants={popIn}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            transition={{ ...popInTransition, delay: 0.12 }}
            className="order-2 md:order-1 relative isolate overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(15,23,42,0.15)]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/portfolio.jpg"
                alt="Samuel Soun - Apprentice at Swisscom"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </motion.div>

          <motion.div
            variants={popIn}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            transition={{ ...popInTransition, delay: 0.02 }}
            className="order-1 md:order-2 space-y-4 sm:space-y-6 text-left md:text-left"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
              About Me
            </p>
            <h2
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl"
              style={{
                textShadow: "0 4px 12px rgba(15,23,42,0.1), 0 0 25px rgba(59,130,246,0.15)",
              }}
            >
              Apprentice with a passion for technology and application development.
            </h2>
            <p className="text-base sm:text-lg text-slate-700">
              My name is Samuel Soun and I'm currently in my third year of apprenticeship as an
              software developer at Swisscom. I discovered my passion for technology early on, which
              sparked my deep interest in application development. During my apprenticeship, I have
              the opportunity to expand my technical know-how, deepen my skills in software-based
              application development, and gain valuable professional experience in a leading
              company.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700">
              <li>• Third-year software developer apprentice</li>
              <li>• Berufsschule(BBW) und Berufsmaturitätschule(BMS-W) Winterthur</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={popIn}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          transition={{ ...popInTransition, delay: 0.2 }}
          className="flex flex-wrap gap-3 sm:gap-4"
        >
          {presenceHighlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex w-full sm:min-w-[260px] sm:flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 sm:px-5 sm:py-4 shadow-[0_4px_12px_rgba(15,23,42,0.08)] backdrop-blur active:shadow-[0_2px_8px_rgba(15,23,42,0.08)] md:hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition-shadow duration-300"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900">{highlight.label}</p>
                <p className="text-[10px] sm:text-xs text-slate-600">{highlight.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}


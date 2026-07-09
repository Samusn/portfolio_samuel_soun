"use client";

import type { PresenceHighlight } from "@/data/about";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion, type Transition, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type AboutIntroSectionProps = {
  popIn: Variants;
  popInTransition: Transition;
  sectionFade: Variants;
  sectionTransition: Transition;
  isMounted: boolean;
  presenceHighlights: PresenceHighlight[];
  heading?: string;
  description?: string;
  switchLink?: { href: string; label: string };
};

export function AboutIntroSection({
  sectionFade,
  sectionTransition,
  isMounted,
  presenceHighlights,
  heading = "Apprentice with a passion for technology and application development.",
  description = "My name is Samuel Soun and I'm currently in my third year of apprenticeship as a software developer at Swisscom. I discovered my passion for technology early on, which sparked my deep interest in application development. During my apprenticeship, I expand my technical know-how, deepen my skills in software-based application development, and gain valuable professional experience in a leading company.",
  switchLink,
}: AboutIntroSectionProps) {
  return (
    <motion.section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12"
      variants={sectionFade}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={sectionTransition}
    >
      <div className="mx-auto w-full max-w-5xl space-y-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <BlurFade delay={0.1} inView className="relative overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/portfolio.jpg"
                alt="Samuel Soun - Apprentice at Swisscom"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </BlurFade>

          <BlurFade delay={0.05} inView className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
              About Me
            </p>
            <h2
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
              style={{ textShadow: "0 4px 12px rgba(15,23,42,0.1), 0 0 25px rgba(59,130,246,0.15)" }}
            >
              {heading}
            </h2>
            <p className="text-base text-slate-600 sm:text-lg dark:text-slate-400 leading-relaxed">
              {description}
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView className="flex flex-wrap gap-3">
          {presenceHighlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex w-full sm:min-w-[240px] sm:flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 transition-shadow duration-300 md:hover:shadow-[0_4px_16px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-800/60"
            >
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <div>
                <p className="text-xs font-semibold text-slate-900 sm:text-sm dark:text-white">{highlight.label}</p>
                <p className="text-[10px] text-slate-500 sm:text-xs dark:text-slate-400">{highlight.detail}</p>
              </div>
            </div>
          ))}
          {switchLink && (
            <Link
              href={switchLink.href}
              className="flex w-full sm:min-w-[240px] sm:flex-1 items-center justify-center rounded-2xl border border-dashed border-slate-300 px-4 py-3.5 text-xs font-medium text-slate-500 transition-all md:hover:border-slate-400 md:hover:bg-slate-50 md:hover:text-slate-700 dark:border-slate-600 dark:text-slate-400 dark:md:hover:border-slate-500 dark:md:hover:bg-slate-800"
            >
              {switchLink.label}
            </Link>
          )}
        </BlurFade>
      </div>
    </motion.section>
  );
}

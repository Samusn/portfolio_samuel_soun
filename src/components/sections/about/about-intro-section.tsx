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
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-12"
      variants={sectionFade}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={sectionTransition}
    >
      {/* Section ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-blue-400/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-300/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl space-y-14">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          {/* Photo with atmospheric glow */}
          <BlurFade delay={0.1} inView className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-400/20 via-indigo-400/10 to-violet-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/portfolio.jpg"
                  alt="Samuel Soun - Apprentice at Swisscom"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.05} inView className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
              About Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="text-base text-slate-600 sm:text-lg leading-relaxed">
              {description}
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView className="flex flex-wrap gap-3">
          {presenceHighlights.map((highlight) => (
            <div
              key={highlight.label}
              className="glass-subtle flex w-full sm:min-w-[240px] sm:flex-1 items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-300 md:hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)] md:hover:-translate-y-0.5"
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900 sm:text-sm">{highlight.label}</p>
                <p className="text-[10px] text-slate-500 sm:text-xs">{highlight.detail}</p>
              </div>
            </div>
          ))}
          {switchLink && (
            <Link
              href={switchLink.href}
              className="glass-subtle flex w-full sm:min-w-[240px] sm:flex-1 items-center justify-center rounded-2xl border-dashed px-4 py-4 text-xs font-medium text-slate-500 transition-all duration-300 md:hover:text-slate-700 md:hover:-translate-y-0.5 md:hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)]"
            >
              {switchLink.label}
            </Link>
          )}
        </BlurFade>
      </div>
    </motion.section>
  );
}

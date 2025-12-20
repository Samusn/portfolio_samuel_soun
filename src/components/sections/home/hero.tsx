"use client";

import { Spotlight } from "@/components/blocks/spotlight-new";
import type { SocialLink } from "@/data/home";
import { motion, type Transition, type Variants } from "framer-motion";
import Link from "next/link";
import * as React from "react";

type HeroSectionProps = {
  isMounted: boolean;
  popIn: Variants;
  popInTransition: Transition;
  sectionFade: Variants;
  sectionTransition: Transition;
  socialLinks: SocialLink[];
  onScrollTo: (sectionId: string) => void;
};

export function HeroSection({
  isMounted,
  popIn,
  popInTransition,
  sectionFade,
  sectionTransition,
  socialLinks,
  onScrollTo,
}: HeroSectionProps) {
  return (
    <motion.section
      key="hero-section"
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 sm:px-6 sm:py-24 md:snap-start"
      variants={sectionFade}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={sectionTransition}
    >
      <div className="absolute inset-0 hidden md:block">
        <Spotlight xOffset={80} duration={9} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-4 text-center sm:gap-8">
        <HeroIntro popIn={popIn} popInTransition={popInTransition} isMounted={isMounted} />

        <HeroSocialLinks
          popIn={popIn}
          popInTransition={popInTransition}
          isMounted={isMounted}
          socialLinks={socialLinks}
        />

        <HeroActions
          popIn={popIn}
          popInTransition={popInTransition}
          isMounted={isMounted}
          onScrollTo={onScrollTo}
        />
      </div>
    </motion.section>
  );
}

type MotionBlockProps = {
  popIn: Variants;
  popInTransition: Transition;
  isMounted: boolean;
};

function HeroIntro({ popIn, popInTransition, isMounted }: MotionBlockProps) {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={{ ...popInTransition, delay: 0.05 }}
      className="flex w-full flex-col items-center gap-1.5 px-4 text-center sm:w-auto sm:items-start sm:px-0 sm:text-left md:text-left"
    >
      <span
        className="w-full text-5xl font-semibold tracking-tighter text-slate-900 sm:w-auto sm:text-6xl xl:text-7xl/none"
        style={{
          textShadow: "0 4px 12px rgba(15,23,42,0.15), 0 0 30px rgba(59,130,246,0.2)",
        }}
      >
        Samuel Soun
      </span>
      <span className="text-lg text-slate-700 sm:text-2xl">Software Developer</span>
    </motion.div>
  );
}

type HeroSocialLinksProps = MotionBlockProps & {
  socialLinks: SocialLink[];
};

function HeroSocialLinks({
  popIn,
  popInTransition,
  isMounted,
  socialLinks,
}: HeroSocialLinksProps) {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={{ ...popInTransition, delay: 0.08 }}
      className="grid w-full max-w-lg grid-cols-4 gap-2 px-4 sm:flex sm:max-w-none sm:flex-nowrap sm:justify-center sm:gap-3 sm:px-0"
    >
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-slate-50 px-2.5 py-2 text-[11px] font-medium uppercase tracking-wide text-slate-700 backdrop-blur transition-all duration-300 active:border-slate-300 active:bg-slate-100 active:text-slate-900 active:shadow-[0_8px_20px_rgba(15,23,42,0.1)] active:scale-95 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs md:hover:border-slate-300 md:hover:bg-slate-100 md:hover:text-slate-900 md:hover:shadow-[0_8px_20px_rgba(15,23,42,0.1)] md:hover:scale-105 md:active:scale-100"
        >
          <span className="relative z-10 flex items-center gap-1 sm:gap-2">
            {social.icon}
            <span className="hidden sm:inline">{social.label}</span>
          </span>
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-slate-100/50 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100" />
        </a>
      ))}
    </motion.div>
  );
}

type HeroActionsProps = MotionBlockProps & {
  onScrollTo: (sectionId: string) => void;
};

function HeroActions({ popIn, popInTransition, isMounted, onScrollTo }: HeroActionsProps) {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={{ ...popInTransition, delay: 0.12 }}
      className="w-full"
    >
      <div className="flex w-full flex-col justify-center gap-3 px-4 sm:w-auto sm:flex-row sm:px-0">
        <Link href="/me" className="w-full sm:w-auto">
          <span className="group relative inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)] transition-all duration-250 active:scale-95 active:shadow-[0_4px_12px_rgba(15,23,42,0.2)] active:bg-slate-800 md:hover:-translate-y-0.5 md:hover:shadow-[0_12px_30px_rgba(15,23,42,0.3)] md:hover:bg-slate-800 md:active:translate-y-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-slate-300 sm:text-base">
            <span className="relative z-10">More About Me</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => onScrollTo("blog")}
          className="group relative inline-flex w-full items-center justify-center rounded-2xl border border-blue-300/60 bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_25px_rgba(37,99,235,0.3)] transition-all duration-250 active:scale-95 active:shadow-[0_4px_15px_rgba(37,99,235,0.3)] md:hover:-translate-y-0.5 md:hover:shadow-[0_12px_35px_rgba(37,99,235,0.4)] md:hover:from-sky-300 md:hover:via-blue-400 md:hover:to-blue-500 md:active:translate-y-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-300 sm:w-auto sm:text-base"
        >
          <span className="relative z-10">Blog</span>
          <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/30 opacity-0 transition-opacity duration-250 md:group-hover:opacity-100" />
        </button>
      </div>
    </motion.div>
  );
}


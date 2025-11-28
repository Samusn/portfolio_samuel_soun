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
      className="flex w-full flex-col items-center gap-1.5 px-4 text-center sm:w-auto sm:items-start sm:px-0 sm:text-left"
    >
      <span
        className="w-full text-5xl font-semibold tracking-tighter text-white sm:w-auto sm:text-6xl xl:text-7xl/none"
        style={{
          textShadow: "0 15px 35px rgba(2,6,23,0.75), 0 0 55px rgba(180,198,252,0.45)",
        }}
      >
        Samuel Soun
      </span>
      <span className="text-lg text-white/80 sm:text-2xl">Software Developer</span>
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
          className="group relative inline-flex items-center justify-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-2.5 py-2 text-[11px] font-medium uppercase tracking-wide text-white/80 backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/20 hover:text-white hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs"
        >
          <span className="relative z-10 flex items-center gap-1 sm:gap-2">
            {social.icon}
            <span className="hidden sm:inline">{social.label}</span>
          </span>
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
          <span className="group relative inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/90 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-[0_18px_45px_rgba(2,6,23,0.55)] transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(2,6,23,0.65)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base">
            <span className="relative z-10">More About Me</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => onScrollTo("blog")}
          className="group relative inline-flex w-full items-center justify-center rounded-2xl border border-indigo-400/60 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_20px_50px_rgba(69,51,199,0.55)] transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_rgba(69,51,199,0.65)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-300 sm:w-auto sm:text-base"
        >
          <span className="relative z-10">Blog</span>
          <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/20 opacity-0 transition-opacity duration-250 group-hover:opacity-100" />
        </button>
      </div>
    </motion.div>
  );
}


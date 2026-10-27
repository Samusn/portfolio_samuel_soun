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
  subtitle?: string;
  blogHref?: string;
};

export function HeroSection({
  isMounted,
  popIn,
  popInTransition,
  sectionFade,
  sectionTransition,
  socialLinks,
  onScrollTo,
  subtitle = "Software Developer",
  blogHref = "/blog",
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

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-400/[0.07] blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-indigo-400/[0.06] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-orange-300/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-5 text-center sm:gap-10">
        <HeroIntro popIn={popIn} popInTransition={popInTransition} isMounted={isMounted} subtitle={subtitle} />

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
          blogHref={blogHref}
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

function HeroIntro({ popIn, popInTransition, isMounted, subtitle }: MotionBlockProps & { subtitle: string }) {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={{ ...popInTransition, delay: 0.05 }}
      className="flex w-full flex-col items-center gap-3 px-4 text-center sm:gap-4"
    >
      <motion.span
        animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ delay: 0.02, duration: 0.6 }}
        className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400"
      >
        Portfolio
      </motion.span>
      <span className="text-gradient w-full text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none">
        Samuel Soun
      </span>
      <span className="text-lg font-medium text-slate-500 sm:text-2xl">
        {subtitle}
      </span>
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
      className="flex w-full max-w-lg flex-wrap justify-center gap-2.5 px-4 sm:max-w-none sm:flex-nowrap sm:gap-3 sm:px-0"
    >
      {socialLinks.map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12 + i * 0.04, duration: 0.5 }}
          className="glass-subtle group relative inline-flex items-center justify-center gap-1.5 rounded-2xl px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-wide text-slate-600 transition-all duration-300 active:scale-95 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-xs md:hover:scale-105 md:hover:shadow-[0_8px_24px_rgba(59,130,246,0.1)] md:hover:text-slate-900 md:active:scale-100"
        >
          <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
            {social.icon}
            <span className="hidden sm:inline">{social.label}</span>
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}

type HeroActionsProps = MotionBlockProps & {
  onScrollTo: (sectionId: string) => void;
  blogHref: string;
};

function HeroActions({ popIn, popInTransition, isMounted, onScrollTo, blogHref }: HeroActionsProps) {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={{ ...popInTransition, delay: 0.12 }}
      className="w-full"
    >
      <div className="flex w-full flex-col justify-center gap-3 px-4 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
        <button
          type="button"
          onClick={() => onScrollTo("about")}
          className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(15,23,42,0.2)] transition-all duration-300 active:scale-95 md:hover:-translate-y-0.5 md:hover:shadow-[0_16px_40px_rgba(15,23,42,0.25)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-slate-300 sm:w-auto sm:text-base"
        >
          <span className="relative z-10">More About Me</span>
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 md:group-hover:opacity-100" />
        </button>
        <Link href={blogHref} className="w-full sm:w-auto">
          <span className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_24px_rgba(99,102,241,0.3)] transition-all duration-300 active:scale-95 md:hover:-translate-y-0.5 md:hover:shadow-[0_16px_40px_rgba(99,102,241,0.35)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-300 sm:text-base">
            <span className="relative z-10">Blog</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 md:group-hover:opacity-100" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

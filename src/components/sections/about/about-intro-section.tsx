"use client";

import { aboutStats, type AboutStat, type PresenceHighlight } from "@/data/about";
import { timelineItems } from "@/data/timeline";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  type Transition,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

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
  stats?: AboutStat[];
  eyebrow?: string;
  location?: string;
  currentLabel?: string;
  currentRole?: CurrentRole;
};

type CurrentRole = {
  title: string;
  detail: string;
};

const [latestWork] = timelineItems;

export function AboutIntroSection({
  sectionFade,
  sectionTransition,
  isMounted,
  presenceHighlights,
  heading = "Apprentice with a passion for technology and application development.",
  description = "My name is Samuel Soun and I'm currently in my third year of apprenticeship as a software developer at Swisscom. I discovered my passion for technology early on, which sparked my deep interest in application development. During my apprenticeship, I expand my technical know-how, deepen my skills in software-based application development, and gain valuable professional experience in a leading company.",
  switchLink,
  stats = aboutStats,
  eyebrow = "About Me",
  location = "Switzerland",
  currentLabel = "Currently",
  currentRole = { title: latestWork.project, detail: latestWork.team },
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
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12">
          <BlurFade delay={0.1} inView className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none">
            <TiltPhoto location={location} currentLabel={currentLabel} current={currentRole} />
          </BlurFade>

          <BlurFade delay={0.05} inView className="space-y-6">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
              <span aria-hidden className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500" />
              {eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="text-justify hyphens-auto text-base text-slate-600 sm:text-lg leading-relaxed md:text-left">
              {description}
            </p>

            {stats.length > 0 && (
              <dl className="grid gap-3 pt-2" style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}>
                {stats.map((stat, index) => (
                  <StatCard key={stat.label} stat={stat} delay={index * 0.12} />
                ))}
              </dl>
            )}
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

type TiltPhotoProps = {
  location: string;
  currentLabel: string;
  current?: CurrentRole;
};

function TiltPhoto({ location, currentLabel, current }: TiltPhotoProps) {
  return (
    // Perspective origin sits towards the text, so the photo reads like a wall facing into the room
    <div className="relative animate-float-slow [--float-distance:-10px] [perspective:1100px] [perspective-origin:50%_50%] md:[perspective-origin:120%_50%]">
      <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-400/20 via-indigo-400/10 to-violet-400/20 blur-2xl" />

      <div className="relative [transform-style:preserve-3d] md:[transform:rotateY(9deg)_rotateX(1deg)]">
        {/* Gradient ring */}
        <div className="rounded-[1.6rem] bg-gradient-to-br from-blue-400/70 via-indigo-400/40 to-violet-400/70 p-[1.5px] shadow-float-lg">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/portfolio.jpg"
              alt="Samuel Soun - Apprentice at Swisscom"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            {/* Light falling in from the text side */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/15 via-transparent to-black/5" />
          </div>
        </div>

        {/* Floating badges, lifted off the photo in 3D space */}
        <div className="absolute -top-3 -right-3 [transform:translateZ(30px)]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
          >
            📍 {location}
          </motion.div>
        </div>

        {current && (
          <div className="absolute -bottom-5 -left-3 max-w-[85%] sm:-left-6 [transform:translateZ(50px)]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="glass rounded-2xl px-4 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.1)]"
            >
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                {currentLabel}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{current.title}</p>
              <p className="text-[11px] text-slate-500">{current.detail}</p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ stat, delay }: { stat: AboutStat; delay: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value).toString());

  React.useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, stat.value, { duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [isInView, count, stat.value, delay]);

  return (
    <div
      ref={ref}
      className="glass-subtle flex flex-col-reverse rounded-2xl px-3 py-4 text-center transition-all duration-300 sm:px-4 sm:text-left md:hover:-translate-y-0.5 md:hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)]"
    >
      <dt className="mt-1 text-[10px] leading-snug text-slate-500 sm:text-xs">{stat.label}</dt>
      <dd className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-2xl font-bold tabular-nums text-transparent sm:text-3xl">
        <motion.span>{rounded}</motion.span>
        {stat.suffix}
      </dd>
    </div>
  );
}

"use client";

import { IconBrandGithub, IconArrowRight } from "@tabler/icons-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SkillLevels } from "@/components/ui/skill-levels";
import { techStack, type TechStackItem } from "@/data/skills";
import { cn } from "@/lib/utils";
import Link from "next/link";

const half = Math.ceil(techStack.length / 2);
const marqueeRows = [techStack.slice(0, half), techStack.slice(half)];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="absolute top-1/4 right-0 h-60 w-60 rounded-full bg-indigo-400/[0.04] blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-60 w-60 rounded-full bg-blue-400/[0.04] blur-3xl" />
      </div>

      <div className="relative space-y-12">
        <BlurFade delay={0.05} inView className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-12 text-center space-y-4">
          <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
            <span aria-hidden className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
            Competencies
            <span aria-hidden className="h-px w-8 bg-gradient-to-r from-violet-500 to-transparent" />
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
            Languages & Technologies
          </h2>
          <p className="text-base text-slate-500 sm:text-lg">
            Tools and technologies I work with
          </p>
        </BlurFade>

        <BlurFade
          delay={0.1}
          inView
          className="mx-auto max-w-5xl space-y-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          {marqueeRows.map((row, index) => (
            <TechMarqueeRow key={index} items={row} reverse={index % 2 === 1} />
          ))}
        </BlurFade>

        <BlurFade delay={0.15} inView className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-12">
          <div className="glass-subtle rounded-3xl p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-8">
            <SkillLevels />
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView className="flex items-center justify-center gap-3 px-4">
          <a
            href="https://github.com/Samusn"
            target="_blank"
            rel="noreferrer"
            className="glass-subtle inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium text-slate-500 transition-all duration-300 active:scale-95 md:hover:text-slate-700 md:hover:-translate-y-0.5 md:hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
          >
            <IconBrandGithub size={15} />
            GitHub
          </a>
          <Link
            href="/projects"
            className="group glass-subtle inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium text-slate-500 transition-all duration-300 active:scale-95 md:hover:text-slate-700 md:hover:-translate-y-0.5 md:hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
          >
            View Projects
            <IconArrowRight size={15} className="transition-transform duration-300 md:group-hover:translate-x-1" />
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}

function TechMarqueeRow({ items, reverse }: { items: TechStackItem[]; reverse: boolean }) {
  return (
    <div className="group flex overflow-hidden py-1">
      <div
        className={cn(
          "flex w-max shrink-0 gap-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {[...items, ...items].map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            aria-hidden={index >= items.length}
            className="glass-subtle no-float flex items-center gap-2 rounded-xl px-4 py-2 text-slate-500 transition-colors duration-300 md:hover:text-slate-800"
          >
            <Icon size={16} />
            <span className="text-xs font-medium whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

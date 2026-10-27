"use client";

import { IconBrandGithub, IconArrowRight } from "@tabler/icons-react";
import { BlurFade } from "@/components/ui/blur-fade";
import SkillsProgress from "@/components/ui/progress-03";
import { techStack } from "@/data/skills";
import Link from "next/link";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="absolute top-1/4 right-0 h-60 w-60 rounded-full bg-indigo-400/[0.04] blur-3xl" />
      </div>

      <BlurFade delay={0.05} inView className="relative mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-12 text-center space-y-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">
            Competencies
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
            Languages & Technologies
          </h2>
          <p className="text-base text-slate-500 sm:text-lg">
            Tools and technologies I work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-subtle flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-slate-500 transition-all duration-300 md:hover:text-slate-700 md:hover:-translate-y-0.5 md:hover:shadow-[0_4px_12px_rgba(59,130,246,0.08)]"
            >
              <Icon size={15} />
              <span className="text-[11px] font-medium">{label}</span>
            </div>
          ))}
        </div>

        <SkillsProgress />

        <div className="flex items-center justify-center gap-3">
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
            className="glass-subtle inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium text-slate-500 transition-all duration-300 active:scale-95 md:hover:text-slate-700 md:hover:-translate-y-0.5 md:hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
          >
            View Projects
            <IconArrowRight size={15} />
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}

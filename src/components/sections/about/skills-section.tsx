"use client";

import { Coffee, Activity, TrendingUp, Search } from "lucide-react";
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandDocker,
  IconBrandNextjs,
  IconBrandGit,
  IconBrandGithub,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandMysql,
  IconSql,
  IconArrowRight,
} from "@tabler/icons-react";
import { BlurFade } from "@/components/ui/blur-fade";
import SkillsProgress from "@/components/ui/progress-03";
import Link from "next/link";

const techStack = [
  { icon: IconBrandReact, label: "React" },
  { icon: IconBrandTypescript, label: "TypeScript" },
  { icon: IconBrandJavascript, label: "JavaScript" },
  { icon: IconBrandNextjs, label: "Next.js" },
  { icon: IconBrandTailwind, label: "Tailwind" },
  { icon: IconBrandDocker, label: "Docker" },
  { icon: IconBrandGit, label: "Git" },
  { icon: Coffee, label: "Java" },
  { icon: IconBrandHtml5, label: "HTML" },
  { icon: IconBrandCss3, label: "CSS" },
  { icon: Activity, label: "Grafana" },
  { icon: TrendingUp, label: "Prometheus" },
  { icon: Search, label: "Splunk" },
  { icon: IconSql, label: "SQL" },
  { icon: IconBrandMysql, label: "MariaDB" },
  { icon: IconSql, label: "PostgreSQL" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <BlurFade delay={0.05} inView className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-12 text-center space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Competencies
          </p>
          <h2
            className="text-3xl font-bold text-slate-900 sm:text-5xl dark:text-white"
            style={{ textShadow: "0 4px 12px rgba(15,23,42,0.1), 0 0 25px rgba(59,130,246,0.15)" }}
          >
            Languages & Technologies
          </h2>
          <p className="text-base text-slate-600 sm:text-lg dark:text-slate-400">
            Tools and technologies I work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-500 transition-colors md:hover:border-slate-300 md:hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:md:hover:border-slate-500 dark:md:hover:text-slate-200"
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
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-500 transition-all active:scale-95 md:hover:border-slate-300 md:hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:md:hover:border-slate-500 dark:md:hover:text-slate-200"
          >
            <IconBrandGithub size={15} />
            GitHub
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-500 transition-all active:scale-95 md:hover:border-slate-300 md:hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:md:hover:border-slate-500 dark:md:hover:text-slate-200"
          >
            View Projects
            <IconArrowRight size={15} />
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}

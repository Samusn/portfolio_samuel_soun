import type React from "react";
import { Coffee, Activity, TrendingUp, Search } from "lucide-react";
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandDocker,
  IconBrandNextjs,
  IconBrandGit,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandMysql,
  IconSql,
} from "@tabler/icons-react";

// ── Tech Stack Pills ──────────────────────────────────────────────────────────

export type TechStackItem = {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
};

export const techStack: TechStackItem[] = [
  { icon: IconBrandReact, label: "React" },
  { icon: IconBrandTypescript, label: "TypeScript" },
  { icon: IconBrandJavascript, label: "JavaScript" },
  { icon: IconBrandNextjs, label: "Next.js" },
  { icon: IconBrandTailwind, label: "Tailwind" },
  { icon: IconBrandHtml5, label: "HTML" },
  { icon: IconBrandCss3, label: "CSS" },
  { icon: IconBrandDocker, label: "Docker" },
  { icon: IconBrandGit, label: "Git" },
  { icon: Coffee, label: "Java" },
  { icon: Activity, label: "Grafana" },
  { icon: TrendingUp, label: "Prometheus" },
  { icon: Search, label: "Splunk" },
  { icon: IconSql, label: "SQL" },
  { icon: IconBrandMysql, label: "MariaDB" },
  { icon: IconSql, label: "PostgreSQL" },
];

// ── Skill Progress Bars ───────────────────────────────────────────────────────

export type SkillStat = {
  label: string;
  value: number;
  indicatorClass: string;
  trackClass: string;
};

export const skillsProgress: SkillStat[] = [
  {
    label: "React / Next.js",
    value: 80,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-blue-500!",
    trackClass: "**:data-[slot='progress-track']:bg-blue-500/20!",
  },
  {
    label: "TypeScript / JavaScript",
    value: 80,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-orange-400!",
    trackClass: "**:data-[slot='progress-track']:bg-orange-400/20!",
  },
  {
    label: "Java & REST API",
    value: 60,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-amber-500!",
    trackClass: "**:data-[slot='progress-track']:bg-amber-500/20!",
  },
  {
    label: "Docker & CI/CD",
    value: 80,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-sky-400!",
    trackClass: "**:data-[slot='progress-track']:bg-sky-400/20!",
  },
  {
    label: "Linux",
    value: 70,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-teal-400!",
    trackClass: "**:data-[slot='progress-track']:bg-teal-400/20!",
  },
  {
    label: "Network",
    value: 70,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-violet-400!",
    trackClass: "**:data-[slot='progress-track']:bg-violet-400/20!",
  },
  {
    label: "Monitoring",
    value: 75,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-emerald-400!",
    trackClass: "**:data-[slot='progress-track']:bg-emerald-400/20!",
  },
  {
    label: "Databases (SQL, MariaDB, PostgreSQL)",
    value: 70,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-cyan-400!",
    trackClass: "**:data-[slot='progress-track']:bg-cyan-400/20!",
  },
];

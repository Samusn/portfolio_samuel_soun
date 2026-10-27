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
  IconBrandPython,
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
  { icon: IconBrandPython, label: "Python" },
  { icon: Activity, label: "Grafana" },
  { icon: TrendingUp, label: "Prometheus" },
  { icon: Search, label: "Splunk" },
  { icon: IconSql, label: "SQL" },
  { icon: IconBrandMysql, label: "MariaDB" },
  { icon: IconSql, label: "PostgreSQL" },
];

// ── Skill Levels ──────────────────────────────────────────────────────────────

export type SkillLevel = "Advanced" | "Proficient" | "Intermediate";

export type SkillArea = {
  label: string;
  level: SkillLevel;
  /** Tailwind background class for the accent dot and filled segments */
  color: string;
};

export const skillLevels: SkillLevel[] = ["Intermediate", "Proficient", "Advanced"];

export const skillAreas: SkillArea[] = [
  { label: "React / Next.js", level: "Advanced", color: "bg-blue-500" },
  { label: "TypeScript / JavaScript", level: "Advanced", color: "bg-orange-400" },
  { label: "Linux", level: "Advanced", color: "bg-teal-400" },
  { label: "Git", level: "Advanced", color: "bg-red-400" },
  { label: "Docker & CI/CD", level: "Proficient", color: "bg-sky-400" },
  { label: "Monitoring", level: "Proficient", color: "bg-emerald-400" },
  { label: "Network", level: "Proficient", color: "bg-violet-400" },
  { label: "Databases", level: "Proficient", color: "bg-cyan-400" },
  { label: "Python", level: "Proficient", color: "bg-yellow-400" },
  { label: "Java", level: "Proficient", color: "bg-amber-500" },
];

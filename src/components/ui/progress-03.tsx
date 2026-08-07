"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress-03-utils/progress";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "React / Next.js",
    value: 90,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-blue-500!",
    trackClass: "**:data-[slot='progress-track']:bg-blue-500/20!",
  },
  {
    label: "TypeScript / JavaScript",
    value: 85,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-orange-400!",
    trackClass: "**:data-[slot='progress-track']:bg-orange-400/20!",
  },
  {
    label: "Java & REST API",
    value: 65,
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
    value: 85,
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
] as const;

export default function SkillsProgress() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full space-y-4">
      {stats.map(({ label, value, indicatorClass, trackClass }) => (
        <div key={label} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
            <span className="text-xs font-medium tabular-nums text-slate-400 dark:text-slate-500">
              {mounted ? value : 0}%
            </span>
          </div>
          <Progress
            value={mounted ? value : 0}
            className={cn(indicatorClass, trackClass)}
          />
        </div>
      ))}
    </div>
  );
}

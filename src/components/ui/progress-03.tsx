"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress-03-utils/progress";
import { skillsProgress } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function SkillsProgress() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full space-y-4">
      {skillsProgress.map(({ label, value, indicatorClass, trackClass }) => (
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

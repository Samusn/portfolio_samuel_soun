"use client";

import { motion } from "framer-motion";
import { skillAreas, skillLevels, type SkillArea } from "@/data/skills";
import { cn } from "@/lib/utils";

export function SkillLevels() {
  return (
    <div className="space-y-6">
      <ul className="grid w-full gap-x-8 gap-y-4 sm:grid-cols-2">
        {skillAreas.map((skill, index) => (
          <SkillRow key={skill.label} skill={skill} delay={index * 0.06} />
        ))}
      </ul>

      <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-400">
        {skillLevels.map((level, index) => (
          <span key={level} className="inline-flex items-center gap-1.5">
            <Segments filled={index + 1} color="bg-slate-400" />
            {level}
          </span>
        ))}
      </p>
    </div>
  );
}

function SkillRow({ skill, delay }: { skill: SkillArea; delay: number }) {
  const filled = skillLevels.indexOf(skill.level) + 1;

  return (
    <li className="flex items-center justify-between gap-4 border-b border-slate-200/60 pb-3 text-left">
      <span className="flex min-w-0 items-center gap-2.5">
        <span className={cn("h-2 w-2 flex-shrink-0 rounded-full", skill.color)} />
        <span className="text-sm text-slate-600">{skill.label}</span>
      </span>
      <span className="flex flex-shrink-0 items-center gap-2.5">
        <span className="hidden text-[11px] font-medium text-slate-400 sm:inline">{skill.level}</span>
        <Segments filled={filled} color={skill.color} delay={delay} animated />
      </span>
    </li>
  );
}

type SegmentsProps = {
  filled: number;
  color: string;
  delay?: number;
  animated?: boolean;
};

function Segments({ filled, color, delay = 0, animated = false }: SegmentsProps) {
  return (
    <span className="flex gap-1" aria-hidden>
      {skillLevels.map((level, index) => {
        const isFilled = index < filled;
        return (
          <span key={level} className="relative h-1.5 w-4 overflow-hidden rounded-full bg-slate-200/80">
            {isFilled && (
              <motion.span
                className={cn("absolute inset-0 origin-left rounded-full", color)}
                initial={animated ? { scaleX: 0 } : false}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: delay + index * 0.12, ease: "easeOut" }}
              />
            )}
          </span>
        );
      })}
    </span>
  );
}

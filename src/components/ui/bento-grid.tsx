"use client";

import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
type Project = { title: string; description: string; tags: string[]; href?: string; liveHref?: string; size: "large" | "small" };
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

export function BentoCard({ project, index }: { project: Project; index: number }) {
  const isLarge = project.size === "large";

  return (
    <BlurFade delay={0.05 + index * 0.08} inView className={cn(isLarge && "sm:col-span-2")}>
      <div
        className={cn(
          "group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.07)] transition-all duration-300",
          "md:hover:shadow-[0_12px_40px_rgba(15,23,42,0.13)] md:hover:-translate-y-1",
          "dark:border-slate-700 dark:bg-slate-900",
          isLarge ? "sm:min-h-[320px]" : "min-h-[260px]"
        )}
      >
        {/* glow effect on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
          style={{
            background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59,130,246,0.06), transparent 40%)",
          }}
        />

        {/* top: tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* bottom: content + links */}
        <div className="mt-6 space-y-3">
          <h3 className={cn("font-semibold text-slate-900 dark:text-white", isLarge ? "text-2xl" : "text-lg")}>
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors active:bg-slate-100 md:hover:border-slate-300 md:hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:md:hover:bg-slate-700"
              >
                <IconBrandGithub size={14} />
                GitHub
              </a>
            )}
            {project.liveHref && (
              <a
                href={project.liveHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors active:bg-blue-100 md:hover:border-blue-300 md:hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-400 dark:md:hover:bg-blue-900/50"
              >
                <IconExternalLink size={14} />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </BlurFade>
  );
}

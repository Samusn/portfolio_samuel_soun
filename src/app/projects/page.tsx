"use client";

import { SiteFooter } from "@/components/layout/site-footer";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { BlurFade } from "@/components/ui/blur-fade";
import { projects } from "@/data/projects";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-200 active:scale-95 md:hover:border-slate-300 md:hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:md:hover:border-slate-600 dark:md:hover:bg-slate-700"
        >
          <IconArrowLeft size={16} />
          Portfolio
        </Link>
      </nav>

      <div className="px-4 pt-24 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-12">
        <BlurFade delay={0.05} inView className="space-y-3 max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Work
          </p>
          <h1
            className="text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white"
            style={{ textShadow: "0 4px 12px rgba(15,23,42,0.1), 0 0 25px rgba(59,130,246,0.15)" }}
          >
            Projects
          </h1>
          <p className="text-base text-slate-600 sm:text-lg dark:text-slate-400">
            Things I have built — personal projects, experiments, and work.
          </p>
        </BlurFade>

        <div className="mt-12 max-w-5xl mx-auto">
          <StickyScroll content={projects} />
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

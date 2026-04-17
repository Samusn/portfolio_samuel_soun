"use client";

import { BlogSection } from "@/components/sections/home/blog";
import { SiteFooter } from "@/components/layout/site-footer";
import { politicalBlogPosts } from "@/data/political/blog";
import { IconArrowLeft } from "@tabler/icons-react";
import type { Transition, Variants } from "framer-motion";
import Link from "next/link";
import * as React from "react";

export default function PoliticsBlogPage() {
  const sectionFade: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };
  const sectionTransition: Transition = { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] };

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center px-4 py-4 sm:px-6">
        <Link
          href="/politics"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-200 active:scale-95 md:hover:border-slate-300 md:hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:md:hover:border-slate-600 dark:md:hover:bg-slate-700"
        >
          <IconArrowLeft size={16} />
          Politik
        </Link>
      </nav>

      <div className="pt-16">
        <BlogSection
          blogPosts={politicalBlogPosts}
          sectionFade={sectionFade}
          sectionTransition={sectionTransition}
          isMounted={isMounted}
          subtitle="Meine Gedanken, Meinungen und Neuigkeiten rund um Politik und Gesellschaft"
        />
      </div>

      <SiteFooter />
    </main>
  );
}

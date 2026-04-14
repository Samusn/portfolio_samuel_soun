"use client";

import { BlogSection } from "@/components/sections/home/blog";
import { SiteFooter } from "@/components/layout/site-footer";
import { blogPosts } from "@/data/blog";
import type { Transition, Variants } from "framer-motion";
import * as React from "react";

export default function BlogPage() {
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
      <BlogSection
        blogPosts={blogPosts}
        sectionFade={sectionFade}
        sectionTransition={sectionTransition}
        isMounted={isMounted}
      />

      <SiteFooter />
    </main>
  );
}

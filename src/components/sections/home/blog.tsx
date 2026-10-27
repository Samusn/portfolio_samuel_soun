"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import type { BlogPost } from "@/data/blog";
import { motion, type Transition, type Variants } from "framer-motion";
import Image from "next/image";

type BlogSectionProps = {
  blogPosts: BlogPost[];
  sectionFade: Variants;
  sectionTransition: Transition;
  isMounted: boolean;
  subtitle?: string;
};

export function BlogSection({
  blogPosts,
  sectionFade,
  sectionTransition,
  isMounted,
  subtitle,
}: BlogSectionProps) {
  return (
    <motion.section
      key="blog-section"
      id="blog"
      className="relative flex min-h-screen items-center px-4 py-12 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
      variants={sectionFade}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={sectionTransition}
    >
      <div className="mx-auto w-full max-w-5xl space-y-12">
        <BlurFade delay={0.1} inView className="space-y-4 text-left md:text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">News</p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
            Blogs & News
          </h2>
          <p className="text-base text-slate-500 sm:text-lg">
            {subtitle ?? "My thoughts, opinions, and general news that I want to share"}
          </p>
        </BlurFade>

        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => {
            const isLastOdd = blogPosts.length % 2 !== 0 && index === blogPosts.length - 1;

            return (
              <BlurFade
                key={post.title}
                delay={0.15 + index * 0.05}
                inView
                className={`h-full ${isLastOdd ? "md:col-span-2 md:mx-auto md:max-w-xl" : ""}`}
              >
                <BlogCard post={post} index={index} />
              </BlurFade>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

type BlogCardProps = {
  post: BlogPost;
  index: number;
};

function BlogCard({ post, index }: BlogCardProps) {
  return (
    <article className="group animate-float flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-float backdrop-blur-sm transition-all duration-500 md:hover:shadow-float-hover md:hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition duration-700 md:group-hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5 text-left sm:gap-4 sm:px-8 sm:py-7">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400 sm:text-sm">
          {post.date}
        </p>
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{post.title}</h3>
          {post.tag && (
            <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent sm:text-base">
              {post.tag}
            </p>
          )}
          <p className="text-sm text-slate-600 sm:text-base">{post.excerpt}</p>
        </div>
        <div className="mt-auto pt-2">
          {post.link ? (
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition-all duration-300 active:scale-95 md:hover:text-blue-600 md:hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] sm:text-sm"
            >
              {post.linkLabel || "Read story"}
              <span aria-hidden>↗</span>
            </a>
          ) : (
            <button
              type="button"
              className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition-all duration-300 active:scale-95 md:hover:text-blue-600 md:hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] sm:text-sm"
            >
              {post.linkLabel || "Read story"}
              <span aria-hidden>↗</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

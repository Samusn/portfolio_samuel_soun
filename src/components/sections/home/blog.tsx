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
};

export function BlogSection({
  blogPosts,
  sectionFade,
  sectionTransition,
  isMounted,
}: BlogSectionProps) {
  return (
    <motion.section
      key="blog-section"
      id="blog"
      className="flex min-h-screen items-center px-4 py-12 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
      variants={sectionFade}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      transition={sectionTransition}
    >
      <div className="mx-auto w-full max-w-5xl space-y-12">
        <BlurFade delay={0.1} inView className="space-y-4 text-left md:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">News</p>
          <h2
            className="text-3xl font-bold text-slate-900 sm:text-5xl"
            style={{
              textShadow: "0 4px 12px rgba(15,23,42,0.1), 0 0 30px rgba(59,130,246,0.15)",
            }}
          >
            Blogs & News
          </h2>
          <p className="text-base text-slate-700 sm:text-lg">
            My thoughts, opinions, and general news that I want to share
          </p>
        </BlurFade>

        <div className="grid gap-8 md:grid-cols-2">
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
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.1)] active:shadow-[0_4px_15px_rgba(15,23,42,0.1)] md:hover:shadow-[0_12px_35px_rgba(15,23,42,0.15)] transition-shadow duration-300">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition duration-700 md:hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/20" />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5 text-left sm:gap-4 sm:px-8 sm:py-7">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
          {post.date}
        </p>
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{post.title}</h3>
          {post.tag && (
            <p
              className="text-sm font-semibold text-blue-600 sm:text-base"
              style={{
                textShadow: "0 0 15px rgba(37,99,235,0.3), 0 0 25px rgba(37,99,235,0.15)",
              }}
            >
              {post.tag}
            </p>
          )}
          <p className="text-sm text-slate-600 sm:text-base">{post.excerpt}</p>
        </div>
        <div className="mt-auto">
          {post.link ? (
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition active:scale-95 active:border-blue-400 active:bg-blue-50 active:text-blue-700 md:hover:border-blue-400 md:hover:bg-blue-50 md:hover:text-blue-700 md:active:scale-100 sm:text-sm"
            >
              {post.linkLabel || "Read story"}
              <span aria-hidden>↗</span>
            </a>
          ) : (
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition active:scale-95 active:border-blue-400 active:bg-blue-50 active:text-blue-700 md:hover:border-blue-400 md:hover:bg-blue-50 md:hover:text-blue-700 md:active:scale-100 sm:text-sm"
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


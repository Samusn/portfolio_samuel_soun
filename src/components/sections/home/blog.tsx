"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import type { BlogPost } from "@/data/home";
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
        <BlurFade delay={0.1} inView className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">News</p>
          <h2
            className="text-3xl font-bold text-white sm:text-5xl"
            style={{
              textShadow: "0 12px 32px rgba(2,6,23,0.75), 0 0 55px rgba(79,70,229,0.35)",
            }}
          >
            Blogs & News
          </h2>
          <p className="text-base text-white/80 sm:text-lg">
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
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_25px_60px_rgba(2,6,23,0.9)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition duration-700 hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5 sm:gap-4 sm:px-8 sm:py-7">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60 sm:text-sm">
          {post.date}
        </p>
        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{post.title}</h3>
          <p className="text-sm text-white/75 sm:text-base">{post.excerpt}</p>
        </div>
        <div className="mt-auto">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white hover:text-white sm:text-sm"
          >
            Read story
            <span aria-hidden>↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}


"use client";

import { Spotlight } from "@/components/blocks/spotlight-new";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion, type Transition } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const socialLinks = [
  {
    href: "https://github.com/Samusn?tab=repositories",
    label: "GitHub",
    icon: <IconBrandGithub size={18} />,
  },
  {
    href: "https://www.linkedin.com/in/samuel-soun-a49049247/",
    label: "LinkedIn",
    icon: <IconBrandLinkedin size={18} />,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61580053778411&sk=about",
    label: "Facebook",
    icon: <IconBrandFacebook size={18} />,
  },
  {
    href: "mailto:sounsamuel07@gmail.com",
    label: "Email",
    icon: <IconMail size={18} />,
  },
];

const blogPosts = [
  {
    title: "Swisscom Hackday Insights",
    date: "Nov 2025",
    readTime: "4 min read",
    excerpt:
      "Behind the scenes of building a resilient monitoring dashboard in just 24 hours — from ideation to polished prototype.",
    imageUrl:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Why Apprenticeships Matter",
    date: "Oct 2025",
    readTime: "6 min read",
    excerpt:
      "Reflections on my third year at Swisscom, the lessons learned, and how mentorship accelerates real-world engineering skills.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Designing Human Interfaces",
    date: "Sep 2025",
    readTime: "5 min read",
    excerpt:
      "Translating complex network automation workflows into approachable UI patterns that teams actually enjoy using.",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomePage() {
  const popIn = {
    hidden: { opacity: 0, y: 12, scale: 0.99 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  const popInTransition: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  };


  const sectionFade = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };
  const sectionViewport = { once: false, amount: 0.2 };

  const sectionTransition: Transition = { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] };

  const handleScrollTo = React.useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col overscroll-none md:snap-y md:snap-mandatory">
      <motion.section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:snap-start"
        variants={sectionFade}
        initial="hidden"
        animate="visible"
        transition={sectionTransition}
      >
        <div className="absolute inset-0 hidden md:block">
          <Spotlight xOffset={80} duration={9} />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center sm:gap-8">
          <motion.div
            variants={popIn}
            initial="hidden"
            animate="visible"
            transition={{ ...popInTransition, delay: 0.05 }}
            className="flex flex-col items-center gap-1.5 text-center sm:items-start sm:text-left"
          >
            <span
              className="text-4xl font-semibold tracking-tighter text-white sm:text-6xl xl:text-7xl/none"
              style={{
                textShadow:
                  "0 15px 35px rgba(2,6,23,0.75), 0 0 55px rgba(180,198,252,0.45)",
              }}
            >
              Samuel Soun
            </span>
            <span className="text-lg text-white/80 sm:text-2xl">
              Software Developer
            </span>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            animate="visible"
            transition={{ ...popInTransition, delay: 0.08 }}
            className="flex flex-wrap items-center justify-center gap-3 text-white/70"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white hover:border-white/30 hover:-translate-y-0.5"
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            animate="visible"
            transition={{ ...popInTransition, delay: 0.12 }}
            className="w-full"
          >
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/me"
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
              >
                More About Me
              </Link>
              <button
                type="button"
                onClick={() => handleScrollTo("blog")}
                className="w-full rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:text-white hover:shadow-[0_0_35px_rgba(129,140,248,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
              >
                Blog
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="blog"
        className="flex min-h-screen items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
        variants={sectionFade}
        initial="hidden"
        animate="visible"
        transition={sectionTransition}
      >
        <div className="mx-auto w-full max-w-5xl space-y-12">
          <BlurFade delay={0.1} inView className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
              News
            </p>
            <h2
              className="text-4xl font-bold text-white sm:text-5xl"
              style={{
                textShadow:
                  "0 12px 32px rgba(2,6,23,0.75), 0 0 55px rgba(79,70,229,0.35)",
              }}
            >
              Blogs & News
            </h2>
            <p className="text-lg text-white/80">
              My thoughts, opinions, and general news that I want to share 
            </p>
          </BlurFade>

          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => {
              const isLastOdd =
                blogPosts.length % 2 !== 0 &&
                index === blogPosts.length - 1;

              return (
                <BlurFade
                  key={post.title}
                  delay={0.15 + index * 0.05}
                  inView
                  className={`h-full ${
                    isLastOdd ? "md:col-span-2 md:mx-auto md:max-w-xl" : ""
                  }`}
                >
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
                    <div className="flex flex-1 flex-col gap-4 px-6 py-6 sm:px-8 sm:py-7">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/60">
                      {post.date}
                    </p>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-white">
                          {post.title}
                        </h3>
                        <p className="text-base text-white/75">{post.excerpt}</p>
                      </div>
                      <div className="mt-auto">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white hover:text-white"
                        >
                          Read story
                          <span aria-hidden>↗</span>
                        </button>
                      </div>
                    </div>
                  </article>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-white/10 bg-black/70 px-4 py-6 text-xs text-white/60 sm:px-6 lg:px-12">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 text-center sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Samuel Soun</span>
          <span>Built with Next.js · Tailwind CSS · Framer Motion · Components by 21.st.dev</span>
        </div>
      </footer>
    </main>
  );
}
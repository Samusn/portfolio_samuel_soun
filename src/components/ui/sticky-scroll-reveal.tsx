"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGithub, IconExternalLink, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

export const StickyScroll = ({ content }: { content: Project[] }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const prev = () => {
    setActiveCard((i) => Math.max(0, i - 1));
    setActiveImage(0);
  };
  const next = () => {
    setActiveCard((i) => Math.min(content.length - 1, i + 1));
    setActiveImage(0);
  };
  const goTo = (i: number) => {
    setActiveCard(i);
    setActiveImage(0);
  };

  const item = content[activeCard];
  const images = item.images ?? [];

  return (
    <div className="flex flex-col gap-10 lg:gap-14">

      {/* ── Timeline overview ── */}
      <div className="relative">
        {/* connecting line */}
        <div className="absolute top-[18px] left-0 right-0 h-px bg-slate-200 dark:bg-slate-700" />
        <div
          className="absolute top-[18px] left-0 h-px bg-slate-900 dark:bg-white transition-all duration-500"
          style={{ width: `${((activeCard) / (content.length - 1)) * 100}%` }}
        />
        <div className="relative flex justify-between">
          {content.map((project, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="flex flex-col items-center gap-2 group"
            >
              {/* dot */}
              <div
                className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-[11px] font-bold transition-all duration-300 ${
                  i === activeCard
                    ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900 scale-110"
                    : i < activeCard
                    ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                    : "border-slate-300 bg-white text-slate-400 group-hover:border-slate-500 group-hover:text-slate-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-500"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              {/* label */}
              <span
                className={`hidden sm:block max-w-[100px] text-center text-[11px] font-medium leading-tight transition-colors duration-300 ${
                  i === activeCard
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
                }`}
              >
                {project.title.split("—")[0].trim().split(" ").slice(0, 2).join(" ")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

        {/* left: text + nav */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                Project {String(activeCard + 1).padStart(2, "0")} / {String(content.length).padStart(2, "0")}
              </span>

              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                {item.title}
              </h2>

              <p className="max-w-md text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* prev / next navigation */}
          <div className="mt-10 flex items-center justify-between gap-3">
            <button
              onClick={prev}
              disabled={activeCard === 0}
              aria-label="Previous project"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-600 transition-all disabled:pointer-events-none disabled:opacity-30 md:hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:md:hover:bg-slate-700"
            >
              <IconChevronLeft size={16} />
              Previous
            </button>

            {/* progress dots — center */}
            <div className="flex gap-1.5">
              {content.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeCard
                      ? "w-6 bg-slate-900 dark:bg-white"
                      : "w-1.5 bg-slate-300 dark:bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={activeCard === content.length - 1}
              aria-label="Next project"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-600 transition-all disabled:pointer-events-none disabled:opacity-30 md:hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:md:hover:bg-slate-700"
            >
              Next
              <IconChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* right: image(s) + links */}
        <div className="w-full lg:w-[48%] lg:sticky lg:top-24 flex flex-col gap-3">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCard}-${activeImage}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                {images.length > 0 ? (
                  <Image
                    src={images[activeImage]}
                    fill
                    className="object-cover"
                    alt={`${item.title} — screenshot ${activeImage + 1}`}
                    unoptimized={images[activeImage].startsWith("/")}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                ) : (
                  item.content
                )}
              </motion.div>
            </AnimatePresence>

            {/* image carousel controls — only if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImage((i) => Math.max(0, i - 1))}
                  disabled={activeImage === 0}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-xl bg-black/40 p-2 text-white backdrop-blur-sm transition-all disabled:opacity-20 hover:bg-black/60"
                >
                  <IconChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setActiveImage((i) => Math.min(images.length - 1, i + 1))}
                  disabled={activeImage === images.length - 1}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-xl bg-black/40 p-2 text-white backdrop-blur-sm transition-all disabled:opacity-20 hover:bg-black/60"
                >
                  <IconChevronRight size={16} />
                </button>
                {/* image dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Image ${i + 1}`}
                      className={`rounded-full bg-white transition-all duration-300 ${
                        i === activeImage ? "w-4 h-1.5 opacity-100" : "w-1.5 h-1.5 opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* project links — below image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex gap-3"
            >
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors md:hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:md:hover:bg-slate-700"
                >
                  <IconBrandGithub size={16} />
                  Repo
                </a>
              )}
              {item.liveHref && (
                <a
                  href={item.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors md:hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-400"
                >
                  <IconExternalLink size={16} />
                  Live
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

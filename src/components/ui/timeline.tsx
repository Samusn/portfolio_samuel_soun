"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  period: string;
  project: string;
  team: string;
  description: string;
}

interface TimelineProps {
  data: TimelineEntry[];
  className?: string;
}

export const Timeline = ({ data, className }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setHeight(entry.contentRect.height));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full font-sans text-slate-900",
        className
      )}
    >
      <div ref={ref} className="relative mx-auto max-w-5xl pb-10 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="sticky top-40 z-40 hidden max-w-sm self-start md:flex md:w-full md:flex-row"
            >
              <div className="relative pl-20">
                <div className="absolute left-3 top-1 h-10 w-10 rounded-full border border-slate-200/60 bg-white/60 backdrop-blur-md shadow-float">
                  <TimelineDot isCurrent={isCurrent(item.period)} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-500">
                    {item.period}
                    {isCurrent(item.period) && <CurrentBadge />}
                  </span>
                  <h3 className="text-3xl font-semibold text-slate-900">
                    {item.project}
                  </h3>
                  <span className="text-sm text-slate-600">{item.team}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="relative w-full pl-16 pr-4 sm:pl-20 md:pl-4"
            >
              <div className="absolute left-3 top-3 h-10 w-10 rounded-full border border-slate-200/60 bg-white/60 backdrop-blur-md shadow-float md:hidden">
                <TimelineDot isCurrent={isCurrent(item.period)} />
              </div>
              <div className="md:hidden">
                <span className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                  {item.period}
                  {isCurrent(item.period) && <CurrentBadge />}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  {item.project}
                </h3>
                <span className="text-sm text-slate-600">{item.team}</span>
              </div>
              <p className="glass-subtle mt-4 rounded-2xl p-5 text-justify hyphens-auto text-sm leading-relaxed md:text-left text-slate-600 transition-all duration-300 sm:p-6 sm:text-base md:mt-0 md:hover:-translate-y-0.5 md:hover:shadow-[0_12px_32px_rgba(59,130,246,0.08)]">
                {item.description}
              </p>
            </motion.div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-slate-300 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500/50"
          />
        </div>
      </div>
    </div>
  );
};

function isCurrent(period: string) {
  return /today|heute/i.test(period);
}

function TimelineDot({ isCurrent }: { isCurrent: boolean }) {
  return (
    <div className="relative m-3 h-4 w-4">
      {isCurrent && (
        <span className="absolute inset-0 animate-ping rounded-full bg-indigo-400 opacity-60 motion-reduce:animate-none" />
      )}
      <span className="relative block h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
    </div>
  );
}

function CurrentBadge() {
  return (
    <span className="rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.2em] text-white shadow-[0_4px_12px_rgba(99,102,241,0.3)]">
      NOW
    </span>
  );
}

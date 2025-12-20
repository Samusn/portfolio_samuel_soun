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
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
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
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="sticky top-40 z-40 hidden max-w-sm self-start md:flex md:w-full md:flex-row"
            >
              <div className="relative pl-20">
                <div className="absolute left-3 top-1 h-10 w-10 rounded-full border border-slate-300 bg-slate-100 backdrop-blur">
                  <div className="m-3 h-4 w-4 rounded-full bg-blue-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.4em] text-slate-500">
                    {item.period}
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
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="relative w-full pl-20 pr-4 md:pl-4"
            >
              <div className="absolute left-3 top-3 h-10 w-10 rounded-full border border-slate-300 bg-slate-100 backdrop-blur md:hidden">
                <div className="m-3 h-4 w-4 rounded-full bg-blue-500" />
              </div>
              <div className="md:hidden">
                <span className="text-xs uppercase tracking-[0.4em] text-slate-500">
                  {item.period}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  {item.project}
                </h3>
                <span className="text-sm text-slate-600">{item.team}</span>
              </div>
              <p className="mt-4 text-slate-700">{item.description}</p>
            </motion.div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-slate-300 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-blue-500 via-blue-600 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

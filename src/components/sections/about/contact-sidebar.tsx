"use client";

import type { AboutSocialLink } from "@/data/about";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ContactSidebarProps = {
  homeIcon: ReactNode;
  socialLinks: AboutSocialLink[];
  isSocialOpen: boolean;
  onToggle: () => void;
};

export function ContactSidebar({
  homeIcon,
  socialLinks,
  isSocialOpen,
  onToggle,
}: ContactSidebarProps) {
  return (
    <div className="fixed top-3 left-4 z-40 flex flex-col gap-2 sm:gap-3 sm:top-4">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur transition-all duration-300 active:scale-95 active:text-slate-900 active:border-slate-300 active:bg-white active:shadow-[0_4px_12px_rgba(15,23,42,0.1)] md:hover:text-slate-900 md:hover:border-slate-300 md:hover:bg-white md:hover:shadow-[0_4px_12px_rgba(15,23,42,0.1)] md:hover:scale-105 md:active:scale-100 max-w-fit"
      >
        {homeIcon}
        <span>Home</span>
      </Link>

      <button
        type="button"
        onClick={onToggle}
        className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur transition-all duration-300 hover:text-slate-900 hover:border-slate-300 hover:bg-white hover:shadow-[0_4px_12px_rgba(15,23,42,0.1)] hover:scale-105 max-w-fit"
      >
        <span>Contact</span>
        <motion.span animate={{ rotate: isSocialOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          ▼
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isSocialOpen ? "auto" : 0,
          opacity: isSocialOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex overflow-hidden flex-col gap-3"
      >
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur transition-all duration-300 active:scale-95 active:text-slate-900 active:border-slate-300 active:bg-white active:shadow-[0_4px_12px_rgba(15,23,42,0.1)] md:hover:text-slate-900 md:hover:border-slate-300 md:hover:bg-white md:hover:shadow-[0_4px_12px_rgba(15,23,42,0.1)] md:hover:scale-105 md:active:scale-100 max-w-fit"
          >
            {social.icon}
            <span>{social.label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}


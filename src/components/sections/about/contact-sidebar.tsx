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
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:scale-105 max-w-fit"
      >
        {homeIcon}
        <span>Home</span>
      </Link>

      <button
        type="button"
        onClick={onToggle}
        className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:scale-105 max-w-fit"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:scale-105 max-w-fit"
          >
            {social.icon}
            <span>{social.label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}


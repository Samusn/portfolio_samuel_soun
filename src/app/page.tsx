"use client";

import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { Spotlight } from "@/components/blocks/spotlight-new";
import { BlurFade } from "@/components/ui/blur-fade";
import { Timeline } from "@/components/ui/timeline";
import { motion, type Transition } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import * as React from "react";

const timelineItems = [
  {
    period: "Aug 2025 – Today",
    project: "Fullstack Engineer",
    team: "Swisscom · KeyCom",
    description:
      "KeyCom is an innovative application that helps enterprises respond quickly, reliably, and efficiently in emergencies. At its core is mobilization management, which uses modern APIs such as eAlarm to immediately mobilize the right people. The logging of incidents also ensures structured recording and analysis, so that companies can maintain an overview at all times. Together with a motivated team, I developed new features, integrated modern interfaces, and worked to make KeyCom an indispensable solution for business continuity.", 
  },
  {
    period: "Feb 2025 – Sep 2025",
    project: "Network DevOps Engineer",
    team: "Swisscom · Team Atlas BNS",
    description:
      "Insights into network technology and cybersecurity. Operation of virtualized, cloud-based network devices for customers. Operation of complex corporate networks. Development of new functions and implementation of tests and proof of concepts. Identification and resolution of problems and anomalies in the network.",
  },
  {
    period: "Aug 2024 – Jan 2025",
    project: "Monitoring & Log Solution",
    team: "Swisscom · Team SEO HCS",
    description:
      "Creating dashboards in CoMo (Grafana, Prometheus) and Splunk. Implementing new metrics, logs, thresholds, and alerts. Central collection and analysis of log data from various sources. Early detection of potential security issues and inefficient processes. Goal: Efficient monitoring and analysis for increased security and performance of the Firewall Policy Orchestration Suite.",
  },
  {
    period: "Aug 2023 – Aug 2024",
    project: "Tool-Landschaft & Orch-Cockpit",
    team: "Swisscom · Team Kratos BNS",
    description:
      "Further development of the CI/CD and build tool landscape (Jenkins, Kubernetes, Helm, Ansible, Docker). Further development of the Orch-Cockpit web application, which enables the operation of the orchestration IT (React, Typescript, NodeJS, Ruby). Further development/optimization of the Amigo runtime environments (iAPC aka Cloudfoundry).",
  },
];

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

const presenceHighlights = [
  {
    label: "Apprenticeship @ Swisscom",
    detail: "Informatiker EFZ · Applikationsentwicklung",
  },
  {
    label: "FDP Suhr",
    detail: "Vorstandsmitglied · Protokollführer",
  },
  {
    label: "Jungfreisinnige Schweiz",
    detail: "Mitglied",
  },
];

export default function HomePage() {
  const popIn = {
    hidden: { opacity: 0, y: 24, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  const popInTransition: Transition = {
    type: "spring",
    stiffness: 140,
    damping: 18,
    mass: 0.9,
  };

  const handleScrollTo = React.useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const sectionFade = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  };
  const sectionViewport = { once: false, amount: 0.3 };

  const sectionTransition: Transition = { duration: 0.75, ease: "easeOut" };

  return (
    <main className="flex min-h-screen flex-col overscroll-none md:snap-y md:snap-mandatory">
      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:right-6 md:flex">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white/70 transition hover:-translate-x-1 hover:text-white hover:border-white/40 backdrop-blur"
          >
            {social.icon}
            <span>{social.label}</span>
          </a>
        ))}
      </div>
      <motion.section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:snap-start"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <div className="absolute inset-0 hidden md:block">
          <Spotlight xOffset={80} duration={9} />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center sm:gap-8">
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
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
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            transition={{ ...popInTransition, delay: 0.12 }}
            className="w-full"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "About Me", section: "about", variant: "primary" },
                { label: "Knowledge", section: "skills", variant: "ghost" },
                { label: "Experience", section: "timeline", variant: "ghost" },
                { label: "Blog", section: "blog", variant: "light" },
              ].map(({ label, section, variant }) => {
                const baseClasses =
                  "w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";
                const variants: Record<string, string> = {
                  primary:
                    "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]",
                  ghost:
                    "border border-white/10 text-white/80 hover:border-white/40 hover:text-white hover:shadow-[0_0_35px_rgba(129,140,248,0.35)]",
                  light:
                    "border border-white/20 bg-white text-black hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.45)]",
                };

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleScrollTo(section)}
                    className={`${baseClasses} ${variants[variant]}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            transition={{ ...popInTransition, delay: 0.18 }}
            className="grid w-full max-w-sm grid-cols-2 gap-2 text-white/70 md:hidden sm:max-w-md sm:grid-cols-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/70 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="flex min-h-screen items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <div className="mx-auto w-full max-w-5xl space-y-10 sm:space-y-12">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <motion.div
              variants={popIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ ...popInTransition, delay: 0.02 }}
              className="relative isolate overflow-hidden rounded-3xl shadow-[0_35px_90px_rgba(2,6,23,0.85)]"
            >
              <div 
                className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl"
              >
                <Image
                  src="/images/portfolio.jpg"
                  alt="Samuel Soun - Apprentice at Swisscom"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
            </motion.div>

            <motion.div
              variants={popIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ ...popInTransition, delay: 0.12 }}
              className="space-y-6 drop-shadow-[0_15px_45px_rgba(15,23,42,0.7)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
                About Me
              </p>
              <h2
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
                style={{
                  textShadow:
                    "0 12px 30px rgba(2,6,23,0.75), 0 0 45px rgba(139,92,246,0.4)",
                }}
              >
                Apprentice with a passion for technology and application development.
              </h2>
              <p
                className="text-lg text-white/80"
                style={{ textShadow: "0 0 26px rgba(94,234,212,0.25)" }}
              >
                My name is Samuel Soun and I'm currently in my third year of apprenticeship as an software developer at Swisscom. I discovered my passion for technology early on, which sparked my deep interest in application development. During my apprenticeship, I have the opportunity to expand my technical know-how, deepen my skills in software-based application development, and gain valuable professional experience in a leading company.
              </p>
              <ul className="space-y-3 text-white/80">
                <li>• Third-year software developer apprentice</li>
                <li>• Berufsschule(BBW) und Berufsmaturitätschule(BMS-W) Winterthur</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ ...popInTransition, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {presenceHighlights.map((highlight) => (
              <div
                key={highlight.label}
                className="flex min-w-[260px] flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.35)] backdrop-blur"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {highlight.label}
                  </p>
                  <p className="text-xs text-white/70">
                    {highlight.detail}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="flex min-h-screen items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 sm:gap-10">
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
              Knowledge
            </p>
            <h2
              className="text-4xl font-bold text-white sm:text-5xl"
              style={{
                textShadow:
                  "0 12px 30px rgba(2,6,23,0.75), 0 0 45px rgba(59,130,246,0.3)",
              }}
            >
              Programming Languages & Technologies
            </h2>
            <p className="text-lg text-white/80">
              Tools, programming languages, and technologies I have dealt with so far
            </p>
          </motion.div>

          <FeaturesSectionWithHoverEffects />
        </div>
      </motion.section>

      <motion.section
        id="timeline"
        className="relative flex min-h-screen items-center overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-5xl space-y-12">
          <BlurFade delay={0.15} inView className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60 drop-shadow-[0_8px_30px_rgba(59,130,246,0.4)]">
              Experience 
            </p>
            <h2
              className="text-4xl font-bold text-white sm:text-5xl"
              style={{
                textShadow:
                  "0 12px 35px rgba(2,6,23,0.75), 0 0 55px rgba(14,165,233,0.35)",
              }}
            >
              Projects @ Swisscom
            </h2>
            <p
              className="text-lg text-white/80"
              style={{ textShadow: "0 0 24px rgba(248,250,252,0.25)" }}
            >
              A simple overview of the milestones of my career at Swisscom
            </p>
          </BlurFade>

          <Timeline data={timelineItems} className="pt-4" />
        </div>
      </motion.section>

      <motion.section
        id="blog"
        className="flex min-h-screen items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
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
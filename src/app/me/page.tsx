"use client";

import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { BlurFade } from "@/components/ui/blur-fade";
import { Timeline } from "@/components/ui/timeline";
import { motion, type Transition } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
  IconHome,
} from "@tabler/icons-react";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";

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

export default function AboutPage() {
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

  const [isSocialOpen, setIsSocialOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="fixed top-3 left-4 z-40 flex flex-col gap-2 sm:gap-3 sm:top-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:scale-105 max-w-fit"
        >
          <IconHome size={16} />
          <span>Home</span>
        </Link>
        <button
          type="button"
          onClick={() => setIsSocialOpen(!isSocialOpen)}
          className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:scale-105 max-w-fit"
        >
          <span>Contact</span>
          <motion.span
            animate={{ rotate: isSocialOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
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
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white/70 transition hover:translate-x-1 hover:text-white hover:border-white/40 backdrop-blur"
            >
              {social.icon}
              <span>{social.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
      <motion.section
        key="about-section"
        id="about"
        className="flex min-h-screen items-center px-4 py-12 sm:px-6 sm:py-24 lg:px-12"
        variants={sectionFade}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        transition={sectionTransition}
      >
        <div className="mx-auto w-full max-w-5xl space-y-8 sm:space-y-12">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <motion.div
              variants={popIn}
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
              transition={{ ...popInTransition, delay: 0.12 }}
              className="order-2 md:order-1 relative isolate overflow-hidden rounded-3xl shadow-[0_35px_90px_rgba(2,6,23,0.85)]"
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
              animate={isMounted ? "visible" : "hidden"}
              transition={{ ...popInTransition, delay: 0.02 }}
              className="order-1 md:order-2 space-y-4 sm:space-y-6 drop-shadow-[0_15px_45px_rgba(15,23,42,0.7)] text-center sm:text-left"
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
                About Me
              </p>
              <h2
                className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
                style={{
                  textShadow:
                    "0 12px 30px rgba(2,6,23,0.75), 0 0 45px rgba(139,92,246,0.4)",
                }}
              >
                Apprentice with a passion for technology and application development.
              </h2>
              <p
                className="text-base sm:text-lg text-white/80"
                style={{ textShadow: "0 0 26px rgba(94,234,212,0.25)" }}
              >
                My name is Samuel Soun and I'm currently in my third year of apprenticeship as an software developer at Swisscom. I discovered my passion for technology early on, which sparked my deep interest in application development. During my apprenticeship, I have the opportunity to expand my technical know-how, deepen my skills in software-based application development, and gain valuable professional experience in a leading company.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/80">
                <li>• Third-year software developer apprentice</li>
                <li>• Berufsschule(BBW) und Berufsmaturitätschule(BMS-W) Winterthur</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            variants={popIn}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            transition={{ ...popInTransition, delay: 0.2 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            {presenceHighlights.map((highlight) => (
              <div
                key={highlight.label}
                className="flex w-full sm:min-w-[260px] sm:flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:px-5 sm:py-4 shadow-[0_18px_40px_rgba(15,23,42,0.35)] backdrop-blur"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {highlight.label}
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/70">
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
        className="flex min-h-screen items-center px-4 py-12 sm:px-6 sm:py-24 lg:px-12"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        transition={sectionTransition}
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-10">
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ ...popInTransition, delay: 0.1 }}
            className="space-y-3 sm:space-y-4 text-center"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
              Knowledge
            </p>
            <h2
              className="text-3xl font-bold text-white sm:text-5xl"
              style={{
                textShadow:
                  "0 12px 30px rgba(2,6,23,0.75), 0 0 45px rgba(59,130,246,0.3)",
              }}
            >
              Programming Languages & Technologies
            </h2>
            <p className="text-base sm:text-lg text-white/80">
              Tools, programming languages, and technologies I have dealt with so far
            </p>
          </motion.div>

          <FeaturesSectionWithHoverEffects />
        </div>
      </motion.section>

      <motion.section
        id="timeline"
        className="relative flex min-h-screen items-center overflow-hidden px-4 py-12 sm:px-6 sm:py-24 lg:px-12"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
          <BlurFade delay={0.15} inView className="space-y-3 sm:space-y-4 text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-white/60 drop-shadow-[0_8px_30px_rgba(59,130,246,0.4)]">
              Experience 
            </p>
            <h2
              className="text-3xl font-bold text-white sm:text-5xl"
              style={{
                textShadow:
                  "0 12px 35px rgba(2,6,23,0.75), 0 0 55px rgba(14,165,233,0.35)",
              }}
            >
              Projects @ Swisscom
            </h2>
            <p
              className="text-base sm:text-lg text-white/80"
              style={{ textShadow: "0 0 24px rgba(248,250,252,0.25)" }}
            >
              A simple overview of the milestones of my career at Swisscom
            </p>
          </BlurFade>

          <Timeline data={timelineItems} className="pt-4" />
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


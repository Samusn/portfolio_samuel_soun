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
    href: "sounsamuel07@gmail.com",
    label: "Email",
    icon: <IconMail size={18} />,
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
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:snap-start"
      >
        <Spotlight xOffset={80} duration={9} />

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
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() => handleScrollTo("about")}
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] sm:w-auto"
              >
                About Me
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo("skills")}
                className="w-full rounded-full border border-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:text-white hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] sm:w-auto"
              >
                Knowledge
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo("timeline")}
                className="w-full rounded-full border border-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40 hover:text-white hover:shadow-[0_0_35px_rgba(129,140,248,0.35)] sm:w-auto"
              >
                Experience
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            transition={{ ...popInTransition, delay: 0.18 }}
            className="flex flex-wrap items-center justify-center gap-3 text-white/70 md:hidden"
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
        </div>
      </section>

      <section
        id="about"
        className="flex min-h-screen items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
      >
        <div className="mx-auto grid max-w-5xl gap-10 sm:gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
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
              <li>— Third-year software developer apprentice at Swisscom</li>
              <li>— Berufsschule(BBW) und Berufsmaturitätschule(BMS-W) Winterthur</li>
              <li>— Committed and interested in swiss politics</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section
        id="skills"
        className="flex min-h-screen items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
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
      </section>

      <section
        id="timeline"
        className="flex min-h-screen items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-12 md:snap-start"
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
      </section>
    </main>
  );
}
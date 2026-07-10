"use client";

import {
  Terminal,
  Coffee,
  Braces,
  Layers,
  FileCode,
  Box,
  Shield,
  Activity,
  Globe,
  Users,
} from "lucide-react";
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandDocker,
  IconBrandNextjs,
  IconBrandGit,
  IconBrandTailwind,
  IconArrowRight,
} from "@tabler/icons-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

const skillsData = [
  {
    id: 1,
    title: "React.js",
    date: "seit 2024",
    content:
      "Building component-based UIs and interactive web apps. Includes UI design review, state management, and implementation of user-facing features.",
    category: "Frontend",
    icon: Layers,
    relatedIds: [2, 3],
    status: "in-progress" as const,
    energy: 90,
  },
  {
    id: 2,
    title: "TypeScript",
    date: "seit 2024",
    content:
      "Type-safe application development and API design. Used across frontend and backend to keep large codebases maintainable.",
    category: "Language",
    icon: FileCode,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "JavaScript",
    date: "seit 2023",
    content:
      "Core language for frontend and backend development. Modern ES patterns, async handling, and performance-optimized applications.",
    category: "Language",
    icon: Braces,
    relatedIds: [1, 2],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Java",
    date: "seit 2023",
    content: "Enterprise backend development and REST service implementation.",
    category: "Language",
    icon: Coffee,
    relatedIds: [7, 3],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 5,
    title: "Docker & CI/CD",
    date: "seit 2023",
    content:
      "Containerization, deployment pipelines (Jenkins, Helm, Kubernetes), and release automation for scalable app delivery.",
    category: "DevOps",
    icon: Box,
    relatedIds: [6, 4],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 6,
    title: "Linux",
    date: "seit 2023",
    content:
      "Workstation setup, shell scripting, and system administration. Daily driver for development and network device operations.",
    category: "Infrastructure",
    icon: Terminal,
    relatedIds: [5, 8],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 7,
    title: "REST-API",
    date: "seit 2023",
    content:
      "Design and integration of REST interfaces. Experience with modern API standards, documentation, and microservice communication.",
    category: "Backend",
    icon: Globe,
    relatedIds: [4, 2],
    status: "completed" as const,
    energy: 82,
  },
  {
    id: 8,
    title: "Network",
    date: "seit 2025",
    content:
      "Enterprise network operations at Swisscom. VPN, routing protocols, security policies, and cloud-based network devices.",
    category: "Infrastructure",
    icon: Shield,
    relatedIds: [6, 9],
    status: "completed" as const,
    energy: 70,
  },
  {
    id: 9,
    title: "Monitoring",
    date: "seit 2024",
    content:
      "Grafana, Prometheus, and Splunk for dashboards, metrics, log analysis, and alerting in production environments.",
    category: "Observability",
    icon: Activity,
    relatedIds: [8, 5],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 10,
    title: "Agile",
    date: "seit 2023",
    content:
      "Scrum and Kanban in multi-team environments. Planning, sprint reviews, and iterative delivery across Swisscom teams.",
    category: "Methodology",
    icon: Users,
    relatedIds: [1, 5],
    status: "completed" as const,
    energy: 78,
  },
];

const techStack = [
  { icon: IconBrandReact, label: "React" },
  { icon: IconBrandTypescript, label: "TypeScript" },
  { icon: IconBrandJavascript, label: "JavaScript" },
  { icon: IconBrandNextjs, label: "Next.js" },
  { icon: IconBrandTailwind, label: "Tailwind" },
  { icon: IconBrandDocker, label: "Docker" },
  { icon: IconBrandGit, label: "Git" },
  { icon: Coffee, label: "Java" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <BlurFade delay={0.05} inView className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-12 text-center space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Competencies
          </p>
          <h2
            className="text-3xl font-bold text-slate-900 sm:text-5xl dark:text-white"
            style={{ textShadow: "0 4px 12px rgba(15,23,42,0.1), 0 0 25px rgba(59,130,246,0.15)" }}
          >
            Languages & Technologies
          </h2>
          <p className="text-base text-slate-600 sm:text-lg dark:text-slate-400">
            Tools and technologies I work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-500 transition-colors md:hover:border-slate-300 md:hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:md:hover:border-slate-500 dark:md:hover:text-slate-200"
            >
              <Icon size={15} />
              <span className="text-[11px] font-medium">{label}</span>
            </div>
          ))}
        </div>

      </BlurFade>

      <div className="mt-12 w-full">
        <RadialOrbitalTimeline timelineData={skillsData} />
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-900 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all active:scale-95 md:hover:bg-slate-800 dark:border-slate-600 dark:bg-white dark:text-slate-900 dark:md:hover:bg-slate-100"
        >
          View Projects
          <IconArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

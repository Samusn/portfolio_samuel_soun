"use client";

import {
  Terminal,
  Code2,
  Coffee,
  Braces,
  Layers,
  FileCode,
  Box,
  Shield,
  Search,
  Activity,
  Globe,
  Users,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const skillsData = [
  {
    id: 1,
    title: "Linux",
    date: "seit 2023",
    content:
      "System administration, shell scripting, and automation for virtualized network devices and cloud infrastructure.",
    category: "Infrastructure",
    icon: Terminal,
    relatedIds: [7, 8],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 2,
    title: "Python",
    date: "seit 2023",
    content:
      "Scripting, automation, and tooling for monitoring, log analysis, and infrastructure management.",
    category: "Language",
    icon: Code2,
    relatedIds: [9, 10],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "Java",
    date: "seit 2023",
    content:
      "Enterprise backend development, integrations, and robust service architectures with focus on reliability.",
    category: "Language",
    icon: Coffee,
    relatedIds: [11],
    status: "completed" as const,
    energy: 72,
  },
  {
    id: 4,
    title: "JavaScript",
    date: "seit 2023",
    content:
      "Modern JS patterns, utilities, and performance-optimized frontend applications.",
    category: "Language",
    icon: Braces,
    relatedIds: [5, 6],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "React.js",
    date: "seit 2024",
    content:
      "Component-based UIs, state management, and interactive web applications with React ecosystem tools.",
    category: "Frontend",
    icon: Layers,
    relatedIds: [4, 6],
    status: "in-progress" as const,
    energy: 88,
  },
  {
    id: 6,
    title: "TypeScript",
    date: "seit 2024",
    content:
      "Type-safe codebases, API layers, and design systems that keep large projects maintainable and scalable.",
    category: "Language",
    icon: FileCode,
    relatedIds: [4, 5],
    status: "in-progress" as const,
    energy: 82,
  },
  {
    id: 7,
    title: "Docker",
    date: "seit 2023",
    content:
      "Containerization, container orchestration, and Docker-based deployment pipelines for scalable and portable applications.",
    category: "DevOps",
    icon: Box,
    relatedIds: [1, 11],
    status: "completed" as const,
    energy: 78,
  },
  {
    id: 8,
    title: "Netzwerk",
    date: "seit 2025",
    content:
      "Network security, VPN technologies, routing protocols, and Cisco-based enterprise network operations.",
    category: "Infrastructure",
    icon: Shield,
    relatedIds: [1, 9],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 9,
    title: "Splunk",
    date: "seit 2024",
    content:
      "Central log collection, analysis, dashboard creation, and alerting for security and performance monitoring.",
    category: "Monitoring",
    icon: Search,
    relatedIds: [10, 8],
    status: "completed" as const,
    energy: 70,
  },
  {
    id: 10,
    title: "Grafana / Prometheus",
    date: "seit 2024",
    content:
      "Grafana and Prometheus dashboards, metrics, thresholds, and alerts for infrastructure observability.",
    category: "Monitoring",
    icon: Activity,
    relatedIds: [9, 2],
    status: "completed" as const,
    energy: 73,
  },
  {
    id: 11,
    title: "REST-API",
    date: "seit 2023",
    content:
      "API design, integration, and development for service communication and modern microservice architectures.",
    category: "Backend",
    icon: Globe,
    relatedIds: [3, 7],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 12,
    title: "Agile",
    date: "seit 2023",
    content:
      "Scrum, Kanban, and iterative development practices for collaborative, fast-paced project delivery.",
    category: "Methodology",
    icon: Users,
    relatedIds: [5, 6],
    status: "completed" as const,
    energy: 80,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col items-center py-4 sm:py-10 min-h-[60vh] sm:min-h-screen">
      <div className="mx-auto w-full max-w-5xl space-y-3 px-4 text-left sm:space-y-4 sm:px-6 md:text-center lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 sm:text-sm dark:text-slate-400">
          Competencies
        </p>
        <h2
          className="text-3xl font-bold text-slate-900 sm:text-5xl dark:text-white"
          style={{
            textShadow: "0 4px 12px rgba(15,23,42,0.1), 0 0 25px rgba(59,130,246,0.15)",
          }}
        >
          Programming Languages & Technologies
        </h2>
        <p className="text-base text-slate-700 sm:text-lg dark:text-slate-300">
          Tools, programming languages, and technologies I have dealt with so far
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={skillsData} />
    </section>
  );
}

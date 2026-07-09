"use client";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  liveHref?: string;
  /** Array of image URLs — renders a carousel in the right panel */
  images?: string[];
  /** Fallback custom JSX when no images array is provided */
  content?: React.ReactNode;
};

export const projects: Project[] = [
  {
    title: "Portfolio — samuel-soun.ch",
    description:
      "Mein persönliches Portfolio, gebaut mit Next.js, Tailwind CSS und Framer Motion. Features: Radial Orbital Skills Timeline, Dark Mode, smooth Animationen und vollständig responsive. Deployed auf Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    href: "https://github.com/Samusn/portfolio_samuel_soun",
    liveHref: "https://samuel-soun.vercel.app",
    images: [
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    ],
  },
  {
    title: "Monitoring Dashboard",
    description:
      "Internes Monitoring-Tool bei Swisscom — Grafana Dashboards, Prometheus Metriken und Splunk Log-Analyse für produktive Umgebungen. Alerting-Pipelines für kritische Systemereignisse.",
    tags: ["Grafana", "Prometheus", "Splunk", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
  },
  {
    title: "KeyCom — Fullstack App",
    description:
      "Fullstack-Applikation bei Swisscom als Fullstack Engineer. REST APIs, TypeScript Backend, React Frontend. Fokus auf skalierbare Architektur und saubere Codebasis.",
    tags: ["React", "TypeScript", "Java", "REST API"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    ],
  },
  {
    title: "Network Automation",
    description:
      "Automatisierung von Netzwerkkonfigurationen bei Swisscom · Team Atlas BNS. VPN-Setups, Routing-Protokolle und Security Policies — skriptbasiert mit Linux und CI/CD Pipelines.",
    tags: ["Linux", "Docker", "CI/CD", "Networking"],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    ],
  },
];

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
    title: "Portfolio Website",
    description:
      "My personal Portfolio, build with Next.js, Tailwind CSS and Framer Motion. Features: Radial Orbital Skills Timeline, Dark Mode, smooth animations and full responsive. Deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    href: "https://github.com/Samusn/portfolio_samuel_soun",
    liveHref: "https://samuelsoun.ch/",
    images: ["/images/project1.jpg"],
  },
];

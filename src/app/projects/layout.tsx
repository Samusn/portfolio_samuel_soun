import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Samuel Soun: personal projects, experiments and work.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

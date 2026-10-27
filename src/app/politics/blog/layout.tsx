import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Gedanken, Meinungen und Neuigkeiten von Samuel Soun rund um Politik und Gesellschaft.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

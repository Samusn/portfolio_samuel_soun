import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Samuel Soun: apprenticeship at Swisscom, skills and experience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

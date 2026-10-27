import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich",
  description: "Über Samuel Soun und sein politisches Engagement in Suhr.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

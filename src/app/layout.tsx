import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BGPattern } from "@/components/ui/bg-pattern";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Soun · Portfolio",
  description:
    "Portfolio of Samuel Soun, a software developer crafting cinematic, high-performance experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden bg-white text-slate-900`}
      >
        <BGPattern
          variant="checkerboard"
          mask="fade-y"
          fill="#e5e7eb"
          size={24}
          className="pointer-events-none opacity-30"
        />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
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
        {/* Globaler Checkerboard Background mit vertikalem Verlauf */}
        <BGPattern
          variant="checkerboard"
          mask="fade-y"         // vertikaler Verlauf von oben nach unten
          fill="#e5e7eb"        // hellgraue Quadrate
          size={24}
          className="pointer-events-none opacity-30"
        />

        {/* Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
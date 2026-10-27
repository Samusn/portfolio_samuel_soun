import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BGPattern } from "@/components/ui/bg-pattern";
import { CustomCursor } from "@/components/ui/custom-cursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Soun · Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden`}
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
        <CustomCursor />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BGPattern } from "@/components/ui/bg-pattern";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider>
          <BGPattern
            variant="checkerboard"
            mask="fade-y"
            fill="#e5e7eb"
            size={24}
            className="pointer-events-none opacity-30 dark:opacity-10"
          />
          <div className="relative z-10">
            {children}
          </div>
          <ThemeToggle className="fixed bottom-6 right-6 z-50" />
        </ThemeProvider>
      </body>
    </html>
  );
}

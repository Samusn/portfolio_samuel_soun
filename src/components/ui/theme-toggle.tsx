"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`glass inline-flex items-center justify-center rounded-2xl p-2.5 text-slate-600 shadow-sm transition-all duration-300 active:scale-95 md:hover:text-slate-900 md:hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)] ${className ?? ""}`}
    >
      {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
    </button>
  );
}

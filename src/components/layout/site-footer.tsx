export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/70 px-4 py-6 text-xs text-white/60 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 text-center sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Samuel Soun</span>
        <span>Built with Next.js · Tailwind CSS · Framer Motion · Components by 21.st.dev</span>
      </div>
    </footer>
  );
}


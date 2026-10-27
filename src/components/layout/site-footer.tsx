export function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-slate-100 bg-slate-50/50 px-4 py-8 text-xs text-slate-500 backdrop-blur-sm sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-1.5 text-center sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Samuel Soun</span>
        <span className="text-slate-400">Built with Next.js &middot; Tailwind CSS &middot; Framer Motion</span>
      </div>
    </footer>
  );
}

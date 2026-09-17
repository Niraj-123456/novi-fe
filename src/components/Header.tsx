import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape, on click outside, and when the viewport grows past lg.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const mql = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    mql.addEventListener("change", onBreakpoint);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      mql.removeEventListener("change", onBreakpoint);
    };
  }, [open]);
  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="relative block h-6 w-6">
              <span className="absolute left-0 top-1 h-4 w-4 rounded-full bg-brand-500"></span>
              <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full bg-brand-300"></span>
            </span>
            <span className="text-lg font-bold tracking-tight text-ink">
              Novi
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-muted transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="#login"
              className="text-sm font-medium text-ink transition hover:text-brand-600"
            >
              Log in
            </a>
            <a
              href="#signup"
              className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
            >
              Get started free
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition hover:bg-slate-50 lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t bg-white transition-[grid-template-rows,opacity,border-color] duration-300 ease-out lg:hidden ${
          open
            ? "grid-rows-[1fr] border-slate-100 opacity-100"
            : "grid-rows-[0fr] border-transparent opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 text-sm font-medium text-ink-muted transition hover:bg-slate-50 hover:text-ink"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2 pt-3">
              <a
                href="#login"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-ink transition hover:border-slate-300"
              >
                Log in
              </a>
              <a
                href="#signup"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-brand-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Get started free
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

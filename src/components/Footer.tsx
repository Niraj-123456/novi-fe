const Footer = () => {
  return (
    <footer className="bg-night text-slate-400">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="relative block h-6 w-6">
                <span className="absolute left-0 top-1 h-4 w-4 rounded-full bg-brand-500"></span>
                <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full bg-brand-300"></span>
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Novi
              </span>
            </a>
            <p className="mt-4 max-w-60 text-sm leading-6">
              Project and task management for small, fast-moving teams.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-slate-400 transition hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 5.9c-.7.3-1.5.6-2.4.7a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013.4 4.8a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.8-.5a4.1 4.1 0 003.3 4 4.2 4.2 0 01-1.9.1 4.1 4.1 0 003.8 2.9A8.3 8.3 0 012 18.5a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.8v-.5c.8-.6 1.5-1.3 2-2.1z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-400 transition hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 112.5 6 2.5 2.5 0 014.98 3.5zM3 8.98h4V21H3zM9.5 8.98h3.8v1.64h.05a4.17 4.17 0 013.75-2.06c4 0 4.75 2.64 4.75 6.07V21h-4v-5.5c0-1.31-.02-3-1.83-3s-2.11 1.43-2.11 2.9V21h-4z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-slate-400 transition hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 011-2.7 3.6 3.6 0 01.1-2.7s.8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 01.1 2.7 3.9 3.9 0 011 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-slate-400 transition hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 12s0-3.4-.4-5a2.6 2.6 0 00-1.8-1.8C19 4.8 12 4.8 12 4.8s-7 0-8.8.4A2.6 2.6 0 001.4 7C1 8.6 1 12 1 12s0 3.4.4 5a2.6 2.6 0 001.8 1.8c1.8.4 8.8.4 8.8.4s7 0 8.8-.4A2.6 2.6 0 0022.6 17c.4-1.6.4-5 .4-5zM9.8 15.3V8.7l5.8 3.3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <nav>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Changelog
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm">Get product updates and team tips.</p>
            <form className="mt-4 flex max-w-sm gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Novi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

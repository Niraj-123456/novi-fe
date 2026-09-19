import KanbanBoard from "./KanbanBoard";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div className="text-left">
            <h1
              className="rise display text-3xl text-ink sm:text-4xl lg:text-5xl"
              style={{ animationDelay: "0ms" }}
            >
              Big plans start
              <br className="hidden sm:block" /> with better tasks.
            </h1>

            <p
              className="rise mt-6 max-w-[34ch] text-lg text-ink-muted"
              style={{ animationDelay: "80ms" }}
            >
              Novi helps small, fast-moving teams stay organized, move faster,
              and get more done — together.
            </p>

            <div
              className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "160ms" }}
            >
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Get started free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand-300 hover:bg-brand-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                <svg
                  className="h-4.5 w-4.5 text-brand-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    d="M10 8.5l6 3.5-6 3.5V8.5z"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                Watch demo
              </a>
            </div>

            <p
              className="rise mt-9 border-t border-slate-100 pt-5 text-sm text-ink-faint"
              style={{ animationDelay: "240ms" }}
            >
              Trusted by 2,000+ small teams
            </p>
          </div>

          <div className="rise relative" style={{ animationDelay: "320ms" }}>
            <KanbanBoard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

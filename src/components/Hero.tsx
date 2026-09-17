import { useInView } from "../hooks/useInView";

const Hero = () => {
  const [copyRef, copyIn] = useInView({ threshold: 0.3 });
  const [mockRef, mockIn] = useInView({ threshold: 0.15 });
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-10 hidden h-130 w-180 rounded-full bg-brand-50 blur-3xl lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Copy — fades and rises in first */}
          <div
            ref={copyRef}
            className={`text-left transition-all duration-700 ease-out ${
              copyIn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-medium text-brand-700">
              Project &amp; Task Management
            </span>

            <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Big plans start
              <br className="hidden sm:block" />
              with better tasks.
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-ink-muted">
              Novi helps small, fast-moving teams stay organized, move faster,
              and get more done — together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition hover:bg-brand-600"
              >
                Get started free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand-400"
              >
                <svg
                  className="h-5 w-5 text-brand-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
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

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["#C7D2FE", "#FBCFE8", "#BBF7D0", "#FDE68A"].map((c, i) => (
                  <span
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-white"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <p className="text-sm text-ink-muted">
                Trusted by 2,000+ small teams
              </p>
            </div>
          </div>

          {/* Mockup — reveals just after the copy, with a touch of scale */}
          <div
            ref={mockRef}
            className={`relative transition-all duration-700 ease-out ${
              mockIn
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-[0.97] opacity-0"
            }`}
            style={{ transitionDelay: mockIn ? "150ms" : "0ms" }}
          >
            <svg
              aria-hidden="true"
              className="absolute -right-2 -top-6 hidden h-10 w-10 text-brand-400 lg:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 40 40"
            >
              <path d="M20 4v8M31 8l-5 6M9 8l5 6" />
            </svg>

            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-mockup">
              <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
                <div className="flex w-26 shrink-0 items-center gap-1.5">
                  <span className="relative block h-4 w-4">
                    <span className="absolute left-0 top-0.5 h-3 w-3 rounded-full bg-brand-500" />
                    <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-brand-300" />
                  </span>
                  <span className="text-xs font-bold text-ink">Novi</span>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-md bg-slate-50 px-2.5 py-1.5">
                  <svg
                    className="h-3 w-3 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-[10px] text-slate-400">Search...</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-1.5">
                    {["#C7D2FE", "#FBCFE8", "#BBF7D0"].map((c, i) => (
                      <span
                        key={i}
                        className="h-5 w-5 rounded-full border border-white"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg-brand-50 px-1.5 py-0.5 text-[9px] font-semibold text-brand-600">
                    +2
                  </span>
                </div>
              </div>

              <div className="flex">
                <aside className="hidden w-26 shrink-0 space-y-0.5 border-r border-slate-100 p-2 sm:block">
                  <span className="flex items-center gap-1.5 rounded-md bg-brand-50 px-2 py-1.5 text-[10px] font-semibold text-brand-700">
                    <span className="h-1.5 w-1.5 rounded-sm bg-brand-500" />{" "}
                    Home
                  </span>
                  {["My tasks", "Projects", "Calendar", "Team", "Settings"].map(
                    (label) => (
                      <span
                        key={label}
                        className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] text-slate-500"
                      >
                        <span className="h-1.5 w-1.5 rounded-sm bg-slate-300" />{" "}
                        {label}
                      </span>
                    ),
                  )}
                </aside>

                <div className="min-w-0 flex-1 p-4">
                  <h3 className="text-sm font-semibold text-ink">
                    Product Launch
                  </h3>

                  <div className="mt-3 grid grid-cols-3 gap-2.5">
                    {[
                      {
                        title: "To do",
                        count: 4,
                        cards: [
                          {
                            name: "Design landing page",
                            tag: "High",
                            tone: "rose",
                          },
                          {
                            name: "API integration",
                            tag: "Medium",
                            tone: "amber",
                          },
                          {
                            name: "Write documentation",
                            tag: "Low",
                            tone: "emerald",
                          },
                        ],
                      },
                      {
                        title: "In progress",
                        count: 3,
                        cards: [
                          {
                            name: "Build authentication",
                            tag: "High",
                            tone: "rose",
                          },
                          {
                            name: "UI components",
                            tag: "Medium",
                            tone: "amber",
                          },
                          { name: "Testing & QA", tag: "Low", tone: "emerald" },
                        ],
                      },
                    ].map((col) => (
                      <div
                        key={col.title}
                        className="rounded-lg bg-slate-50 p-2"
                      >
                        <div className="flex items-center justify-between px-0.5 pb-2">
                          <span className="text-[10px] font-semibold text-ink">
                            {col.title}{" "}
                            <span className="text-slate-400">{col.count}</span>
                          </span>
                          <span className="text-[10px] text-slate-400">
                            ···
                          </span>
                        </div>
                        <div className="space-y-2">
                          {col.cards.map((card) => (
                            <article
                              key={card.name}
                              className="rounded-md bg-white p-2 shadow-xs"
                            >
                              <p className="text-[10px] font-medium leading-tight text-ink">
                                {card.name}
                              </p>
                              <span
                                className={`mt-1.5 inline-block rounded px-1.5 py-0.5 text-[8px] font-semibold ${
                                  card.tone === "rose"
                                    ? "bg-rose-50 text-rose-500"
                                    : card.tone === "amber"
                                      ? "bg-amber-50 text-amber-600"
                                      : "bg-emerald-50 text-emerald-600"
                                }`}
                              >
                                {card.tag}
                              </span>
                            </article>
                          ))}
                          <button className="w-full px-1 pt-0.5 text-left text-[9px] text-slate-400">
                            + Add task
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="rounded-lg bg-slate-50 p-2">
                      <div className="flex items-center justify-between px-0.5 pb-2">
                        <span className="text-[10px] font-semibold text-ink">
                          Done <span className="text-slate-400">2</span>
                        </span>
                        <span className="text-[10px] text-slate-400">···</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          "Project setup",
                          "Create wireframes",
                          "Team meeting",
                        ].map((name) => (
                          <article
                            key={name}
                            className="flex items-center justify-between rounded-md bg-white p-2 shadow-xs"
                          >
                            <p className="text-[10px] font-medium text-ink">
                              {name}
                            </p>
                            <svg
                              className="h-3 w-3 text-emerald-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3l-4 4a1 1 0 01-1.4 0l-2-2 1.4-1.4L9 10.6l3.3-3.3 1.4 1.4z" />
                            </svg>
                          </article>
                        ))}
                        <button className="w-full px-1 pt-0.5 text-left text-[9px] text-slate-400">
                          + Add task
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useInView } from "../hooks/useInView";

const FEATURES = [
  {
    title: "Task Management",
    desc: "Create, assign, and track tasks with ease. Keep everyone focused and accountable from start to finish.",
    tone: { bg: "bg-brand-50", fg: "text-brand-600" },
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
        <path
          d="M8.5 12l2.5 2.5 4.5-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Project Organization",
    desc: "Group related tasks, set milestones, and keep your projects on track with a clear, flexible structure.",
    tone: { bg: "bg-emerald-50", fg: "text-emerald-600" },
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0111 0" strokeLinecap="round" />
        <path
          d="M16 6.5a3 3 0 010 5.8M17.5 19a5 5 0 00-2-4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    desc: "Work together with real-time updates, comments, and file sharing — all in one place.",
    tone: { bg: "bg-sky-50", fg: "text-sky-600" },
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <rect x="3.5" y="5" width="17" height="15" rx="3" />
        <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fast & Simple",
    desc: "A clean, intuitive interface that gets out of your way, so you can focus on what matters.",
    tone: { bg: "bg-amber-50", fg: "text-amber-500" },
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.5 2L5 13.2h5.2L9.8 22 19 10.4h-5.4L13.5 2z" />
      </svg>
    ),
  },
  {
    title: "Secure & Reliable",
    desc: "Your data stays safe with industry-standard security and 99.9% uptime.",
    tone: { bg: "bg-rose-50", fg: "text-rose-500" },
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9.5-4.1-1.6-7-5.3-7-9.5V6l7-3z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Works Everywhere",
    desc: "Access Novi on the web, iOS, and Android — whenever and wherever you work.",
    tone: { bg: "bg-violet-50", fg: "text-violet-600" },
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="11" height="9" rx="2" />
        <rect x="14.5" y="9" width="6.5" height="11" rx="2" />
      </svg>
    ),
  },
];
const Features = () => {
  const [headingRef, headingIn] = useInView({ threshold: 0.4 });
  const [gridRef, gridIn] = useInView({ threshold: 0.15 });
  return (
    <section id="features" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={headingRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
            headingIn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Key features
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
            Everything your team needs
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-muted">
            From planning to delivery, Novi gives you the tools to stay aligned,
            move quickly, and make progress — without the chaos.
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-12 text-left grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-14"
        >
          {FEATURES.map((feature, i) => (
            <article
              key={feature.title}
              className={`transition-all duration-700 ease-out ${
                gridIn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: gridIn ? `${i * 80}ms` : "0ms" }}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${feature.tone.bg} ${feature.tone.fg}`}
              >
                {feature.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ink-muted">
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

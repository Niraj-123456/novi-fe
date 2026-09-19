import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Feature = { title: string; desc: string; icon: ReactNode };

/* The attributes a kanban board can't demonstrate, kept deliberately brief. */
const FEATURES: Feature[] = [
  {
    title: "Fast & Simple",
    desc: "A clean interface that gets out of your way.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M13.5 2L5 13.2h5.2L9.8 22 19 10.4h-5.4L13.5 2z" />
      </svg>
    ),
  },
  {
    title: "Secure & Reliable",
    desc: "Industry-standard security and 99.9% uptime.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
        aria-hidden="true"
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
    desc: "Web, iOS, and Android — wherever you work.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="11" height="9" rx="2" />
        <rect x="14.5" y="9" width="6.5" height="11" rx="2" />
      </svg>
    ),
  },
  {
    title: "Import in minutes",
    desc: "Bring your boards over from Trello, Asana, or a CSV.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 3.5v10" strokeLinecap="round" />
        <path d="M8.5 10l3.5 3.5 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 15.5v3a2 2 0 002 2h11a2 2 0 002-2v-3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const Features = () => {
  const [ref, shown] = useReveal();

  return (
    <section className="bg-white pt-16 lg:pt-20">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <article
              key={feature.title}
              className={`transition-[opacity,transform] duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
                shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: shown ? `${i * 60}ms` : "0ms" }}
            >
              <span className="text-brand-500">{feature.icon}</span>
              <h3 className="mt-3 text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-1.5 max-w-[34ch] text-sm text-ink-muted">
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

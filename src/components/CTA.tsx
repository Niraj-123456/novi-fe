import { useReveal } from "../hooks/useReveal";

const CTA = () => {
  const [ref, shown] = useReveal();

  return (
  <section className="bg-white py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div
        ref={ref}
        className={`overflow-hidden rounded-2xl bg-brand-50/70 px-6 py-10 transition-[opacity,transform] duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] sm:px-10 lg:px-14 lg:py-12 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-lg">
            <h2 className="display text-2xl text-ink sm:text-3xl">
              Ready to get more done?
            </h2>
            <p className="mt-4 max-w-[48ch] text-base text-ink-muted">
              Join thousands of small teams already using Novi to turn ideas
              into action.
            </p>
            <a
              href="#signup"
              className="mt-7 inline-flex items-center justify-center rounded-lg bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
            >
              Get started free
            </a>
          </div>

          <div className="relative hidden justify-self-end lg:block">
            <span className="absolute -left-6 -top-4 rotate-[-8deg] rounded-md bg-white px-3 py-2 text-xs font-semibold leading-tight text-ink shadow-sm">
              Better
              <br />
              Together
            </span>
            <svg
              className="h-44 w-56"
              viewBox="0 0 224 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="A person working at a laptop"
            >
              <path
                d="M196 168c-6-18-2-38 10-48-2 16-4 32-10 48z"
                fill="#A5D8C0"
              />
              <path
                d="M196 168c-14-12-20-32-16-46 10 12 18 28 16 46z"
                fill="#7FC7A6"
              />
              <path d="M92 168c0-26 14-44 34-44s34 18 34 44H92z" fill="#5A5BF0" />
              <circle cx="126" cy="106" r="20" fill="#F6C9A8" />
              <path
                d="M106 104c0-14 9-22 20-22s20 8 20 22c-4-6-10-9-20-9s-16 3-20 9z"
                fill="#20223D"
              />
              <path d="M104 100c-5 6-6 16-2 22 4-8 4-14 2-22z" fill="#20223D" />
              <path d="M96 152c-6 4-9 10-9 16h18c-2-6-4-11-9-16z" fill="#4B4CE0" />
              <path d="M78 168l12-26h72l12 26H78z" fill="#E8E9FB" />
              <rect x="72" y="166" width="104" height="8" rx="4" fill="#C9CBF4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CTA;

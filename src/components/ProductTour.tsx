import KanbanBoard, { type BoardStep } from "./KanbanBoard";
import { useActiveStep } from "../hooks/useReveal";

const STEPS = [
  {
    title: "Task Management",
    desc: "Create, assign, and track tasks with ease. Keep everyone focused and accountable from start to finish.",
    note: "A new task lands in To do, tagged and assigned.",
  },
  {
    title: "Project Organization",
    desc: "Group related tasks, set milestones, and keep your projects on track with a clear, flexible structure.",
    note: "Milestones show how close the project is to done.",
  },
  {
    title: "Team Collaboration",
    desc: "Work together with real-time updates, comments, and file sharing — all in one place.",
    note: "Work moves forward, and your team moves with it.",
  },
];

const ProductTour = () => {
  const [setStepRef, active] = useActiveStep(STEPS.length);

  return (
    <section id="features" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="display text-2xl text-ink sm:text-3xl">
            Everything your team needs
          </h2>
          <p className="mt-3 max-w-[58ch] text-base text-ink-muted">
            From planning to delivery, Novi gives you the tools to stay aligned,
            move quickly, and make progress — without the chaos.
          </p>
        </div>

        {/* No board below lg: the hero already shows one, and a pinned panel in
            a short viewport helps no one. The steps read as a plain list. */}
        <div className="mt-10 lg:mt-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <ol className="space-y-10 lg:space-y-0 lg:pb-[26vh]">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                ref={setStepRef(i)}
                className="lg:flex lg:min-h-[58vh] lg:flex-col lg:justify-center"
              >
                <div
                  className={`border-l-2 pl-5 transition-[border-color,opacity] duration-500 ease-out lg:pl-6 ${
                    active === i
                      ? "border-brand-500 opacity-100"
                      : "border-slate-200 lg:opacity-45"
                  }`}
                >
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-base text-ink-muted">
                    {step.desc}
                  </p>
                  <p className="mt-3 text-sm text-ink-faint">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center">
              <div className="w-full">
                <KanbanBoard step={(active + 1) as BoardStep} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTour;

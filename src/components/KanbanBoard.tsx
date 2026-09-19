type Card = {
  id: string;
  name: string;
  tag?: "High" | "Medium" | "Low";
  done?: boolean;
  assignees?: string[];
  comments?: number;
  visible: boolean;
};

const TAG_TONES: Record<string, string> = {
  High: "bg-rose-50 text-rose-500",
  Medium: "bg-amber-50 text-amber-600",
  Low: "bg-emerald-50 text-emerald-600",
};

/**
 * Step 0 is the resting board used in the hero. Steps 1-3 are the product tour:
 * a task gets created, the project gains a milestone, then work moves and picks
 * up collaborators.
 */
export type BoardStep = 0 | 1 | 2 | 3;

type Column = { title: string; cards: Card[] };

const board = (step: BoardStep): Column[] => [
  {
    title: "To do",
    cards: [
      {
        id: "draft",
        name: "Draft launch email",
        tag: "High",
        assignees: ["#C7D2FE"],
        visible: step >= 1,
      },
      { id: "design", name: "Design landing page", tag: "High", visible: true },
      { id: "api", name: "API integration", tag: "Medium", visible: step < 3 },
      { id: "docs", name: "Write documentation", tag: "Low", visible: true },
    ],
  },
  {
    title: "In progress",
    cards: [
      {
        id: "api-moved",
        name: "API integration",
        tag: "Medium",
        assignees: ["#C7D2FE", "#BBF7D0"],
        comments: 3,
        visible: step >= 3,
      },
      { id: "auth", name: "Build authentication", tag: "High", visible: true },
      { id: "ui", name: "UI components", tag: "Medium", visible: true },
      { id: "qa", name: "Testing & QA", tag: "Low", visible: true },
    ],
  },
  {
    title: "Done",
    cards: [
      { id: "setup", name: "Project setup", done: true, visible: true },
      { id: "wires", name: "Create wireframes", done: true, visible: true },
      { id: "meeting", name: "Team meeting", done: true, visible: true },
    ],
  },
];

const Avatars = ({ colors }: { colors: string[] }) => (
  <span className="flex -space-x-1">
    {colors.map((c) => (
      <span
        key={c}
        className="h-3.5 w-3.5 rounded-full border border-white"
        style={{ backgroundColor: c }}
      />
    ))}
  </span>
);

const KanbanBoard = ({ step = 0 }: { step?: BoardStep }) => {
  const columns = board(step);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-mockup">
      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
        <div className="flex shrink-0 items-center gap-1.5">
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
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
          </svg>
          <span className="text-2xs text-slate-400">Search</span>
        </div>
        <div className="flex -space-x-1.5">
          {["#C7D2FE", "#BBF7D0", "#FBCFE8"].map((c) => (
            <span
              key={c}
              className="h-5 w-5 rounded-full border border-white"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-28 shrink-0 space-y-0.5 border-r border-slate-100 p-2 sm:block">
          <span className="flex items-center gap-1.5 rounded-md bg-brand-50 px-2 py-1.5 text-2xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-sm bg-brand-500" />
            Home
          </span>
          {["My tasks", "Projects", "Calendar", "Team", "Settings"].map(
            (label) => (
              <span
                key={label}
                className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-2xs text-slate-500"
              >
                <span className="h-1.5 w-1.5 rounded-sm bg-slate-300" />
                {label}
              </span>
            ),
          )}
        </aside>

        <div className="min-w-0 flex-1 p-4">
          <h3 className="text-sm font-semibold text-ink">Product Launch</h3>

          {/* Milestone bar — arrives with the Project Organization step. */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
              step >= 2 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="mt-2.5 rounded-md border border-brand-100 bg-brand-50/60 px-2.5 py-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xs font-semibold text-brand-700">
                    Launch milestone
                  </span>
                  <span className="text-2xs text-brand-600">3 of 8 done</span>
                </div>
                <span className="mt-1.5 block h-1 rounded-full bg-brand-100">
                  <span className="block h-1 w-[37%] rounded-full bg-brand-500" />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {columns.map((col) => (
              <div key={col.title} className="rounded-lg bg-slate-50 p-2">
                <div className="px-0.5 pb-2">
                  <span className="text-2xs font-semibold text-ink">
                    {col.title}{" "}
                    <span className="text-slate-400">
                      {col.cards.filter((c) => c.visible).length}
                    </span>
                  </span>
                </div>

                <ul>
                  {col.cards.map((card) => (
                    <li
                      key={card.id}
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        card.visible
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <article className="mb-2 rounded-md bg-white p-2 shadow-xs">
                          <div className="flex items-start justify-between gap-1">
                            <p className="min-w-0 break-words text-2xs font-medium leading-tight text-ink">
                              {card.name}
                            </p>
                            {card.done && (
                              <svg
                                className="h-3 w-3 shrink-0 text-emerald-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3l-4 4a1 1 0 01-1.4 0l-2-2 1.4-1.4L9 10.6l3.3-3.3 1.4 1.4z" />
                              </svg>
                            )}
                          </div>

                          {card.tag && (
                            <div className="mt-1.5 flex items-center justify-between gap-1">
                              <span
                                className={`inline-block rounded px-1.5 py-0.5 text-[0.5625rem] font-semibold ${TAG_TONES[card.tag]}`}
                              >
                                {card.tag}
                              </span>
                              <span className="flex items-center gap-1">
                                {card.comments && (
                                  <span className="flex items-center gap-0.5 text-[0.5625rem] text-slate-400">
                                    <svg
                                      className="h-2.5 w-2.5"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                    >
                                      <path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z" />
                                    </svg>
                                    {card.comments}
                                  </span>
                                )}
                                {card.assignees && (
                                  <Avatars colors={card.assignees} />
                                )}
                              </span>
                            </div>
                          )}
                        </article>
                      </div>
                    </li>
                  ))}
                </ul>

                <span className="block px-1 text-[0.5625rem] text-slate-400">
                  + Add task
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;

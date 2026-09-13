interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Heading */}
      <h2 className="text-sm font-bold text-slate-900">Your Stack</h2>

      <p className="mt-1 text-[9px] text-slate-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${
              stack.length === 1 ? "" : "s"
            } Selected`}
      </p>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-4 flex h-24 items-center justify-center rounded-lg border border-dashed border-slate-200">
          <p className="text-center text-[9px] text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          {/* Stack Items */}
          <div className="mt-4 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-2 rounded-lg border border-slate-200 p-2"
              >
                {/* Icon */}
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 object-contain"
                />

                {/* Name + Category */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[10px] font-bold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-[8px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="text-xl leading-none text-slate-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 h-8 w-full rounded-md border border-red-300 text-[10px] font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default StackSidebar;




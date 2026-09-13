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

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-8 w-8 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-6 w-6 object-contain"
          />
        </div>

        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-medium text-emerald-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-2 text-sm font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1 min-h-[42px] text-[9px] leading-[1.5] text-slate-500">
        {technology.description}
      </p>

      {/* Category / Difficulty / Rating */}
      <div className="mt-2 flex items-center justify-between gap-1">
        <span className="rounded bg-slate-100 px-2 py-1 text-[8px] text-slate-500">
          {technology.category}
        </span>

        <span className="text-[8px] text-slate-500">
          {technology.difficulty}
        </span>

        <span className="text-[9px] text-slate-600">
          <span className="text-yellow-500">★</span> {technology.rating}
        </span>
      </div>

      {/* Add to Stack */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-2 h-8 w-full rounded-md text-[9px] font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-emerald-500 text-white"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;

"use client";

interface ArticleFiltersProps {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

const ALL_LABEL = "Todos";

export function ArticleFilters({ categories, active, onChange }: ArticleFiltersProps) {
  const options = [ALL_LABEL, ...categories];

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar artigos por categoria">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={`min-h-[40px] rounded-full border px-4 text-sm font-medium transition-colors ${
              isActive
                ? "border-accent bg-accent text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

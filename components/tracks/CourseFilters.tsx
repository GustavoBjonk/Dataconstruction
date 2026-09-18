"use client";

const ALL_LABEL = "Todos";

export type CourseTypeFilter = "Todos" | "Gratuitos" | "Até R$100";

interface CourseFiltersProps {
  areas: string[];
  levels: string[];
  activeArea: string;
  activeType: CourseTypeFilter;
  activeLevel: string;
  onAreaChange: (value: string) => void;
  onTypeChange: (value: CourseTypeFilter) => void;
  onLevelChange: (value: string) => void;
}

function ChipRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </span>
      <div
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
        role="group"
        aria-label={label}
      >
        {options.map((option) => {
          const isActive = option === active;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option)}
              className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors ${
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
    </div>
  );
}

export function CourseFilters({
  areas,
  levels,
  activeArea,
  activeType,
  activeLevel,
  onAreaChange,
  onTypeChange,
  onLevelChange,
}: CourseFiltersProps) {
  return (
    <div className="flex flex-col gap-5">
      <ChipRow
        label="Área"
        options={[ALL_LABEL, ...areas]}
        active={activeArea}
        onChange={onAreaChange}
      />

      <ChipRow
        label="Tipo"
        options={["Todos", "Gratuitos", "Até R$100"]}
        active={activeType}
        onChange={(value) => onTypeChange(value as CourseTypeFilter)}
      />

      <ChipRow
        label="Nível"
        options={[ALL_LABEL, ...levels]}
        active={activeLevel}
        onChange={onLevelChange}
      />
    </div>
  );
}

export { ALL_LABEL as COURSE_FILTER_ALL };

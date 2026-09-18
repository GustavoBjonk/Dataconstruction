"use client";

import { DatasetCategory, DatasetDifficulty } from "@/data/datasets";

export type DatasetSort = "relevantes" | "nome-asc" | "nome-desc";

const ALL_LABEL = "Todos";

interface DatasetFiltersProps {
  categories: DatasetCategory[];
  difficulties: DatasetDifficulty[];
  activeCategory: string;
  activeDifficulty: string;
  sort: DatasetSort;
  onCategoryChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onSortChange: (value: DatasetSort) => void;
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

export function DatasetFilters({
  categories,
  difficulties,
  activeCategory,
  activeDifficulty,
  sort,
  onCategoryChange,
  onDifficultyChange,
  onSortChange,
}: DatasetFiltersProps) {
  return (
    <div className="flex flex-col gap-5">
      <ChipRow
        label="Categoria"
        options={[ALL_LABEL, ...categories]}
        active={activeCategory}
        onChange={onCategoryChange}
      />

      <ChipRow
        label="Dificuldade"
        options={[ALL_LABEL, ...difficulties]}
        active={activeDifficulty}
        onChange={onDifficultyChange}
      />

      <div className="flex items-center gap-2">
        <label htmlFor="dataset-sort" className="text-sm text-slate-500">
          Ordenar por
        </label>
        <select
          id="dataset-sort"
          value={sort}
          onChange={(event) => onSortChange(event.target.value as DatasetSort)}
          className="min-h-[40px] rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="relevantes">Mais relevantes</option>
          <option value="nome-asc">Nome A–Z</option>
          <option value="nome-desc">Nome Z–A</option>
        </select>
      </div>
    </div>
  );
}

export { ALL_LABEL as DATASET_FILTER_ALL };

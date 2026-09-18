"use client";

import { useMemo, useState } from "react";
import { Dataset, DatasetCategory, DatasetDifficulty } from "@/data/datasets";
import { DatasetSearch } from "./DatasetSearch";
import { DatasetFilters, DatasetSort } from "./DatasetFilters";
import { DatasetGrid } from "./DatasetGrid";
import { DatasetEmptyState } from "./DatasetEmptyState";

const ALL_LABEL = "Todos";

interface DatasetExplorerProps {
  datasets: Dataset[];
  categories: DatasetCategory[];
  difficulties: DatasetDifficulty[];
}

export function DatasetExplorer({ datasets, categories, difficulties }: DatasetExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL_LABEL);
  const [difficulty, setDifficulty] = useState<string>(ALL_LABEL);
  const [sort, setSort] = useState<DatasetSort>("relevantes");

  const hasActiveFilters =
    query.trim() !== "" || category !== ALL_LABEL || difficulty !== ALL_LABEL;

  function clearFilters() {
    setQuery("");
    setCategory(ALL_LABEL);
    setDifficulty(ALL_LABEL);
  }

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = datasets.filter((dataset) => {
      if (category !== ALL_LABEL && dataset.category !== category) return false;
      if (difficulty !== ALL_LABEL && dataset.difficulty !== difficulty) return false;

      if (!normalizedQuery) return true;

      const haystack = [
        dataset.name,
        dataset.description,
        dataset.category,
        ...dataset.technologies,
        ...dataset.topics,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });

    if (sort === "nome-asc") {
      return [...result].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    }

    if (sort === "nome-desc") {
      return [...result].sort((a, b) => b.name.localeCompare(a.name, "pt-BR"));
    }

    return result;
  }, [datasets, category, difficulty, query, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="sm:max-w-xs sm:flex-1">
          <DatasetSearch value={query} onChange={setQuery} />
        </div>
        <p className="whitespace-nowrap text-sm text-slate-500">
          {filtered.length} de {datasets.length} datasets
        </p>
      </div>

      <div className="mt-5">
        <DatasetFilters
          categories={categories}
          difficulties={difficulties}
          activeCategory={category}
          activeDifficulty={difficulty}
          sort={sort}
          onCategoryChange={setCategory}
          onDifficultyChange={setDifficulty}
          onSortChange={setSort}
        />
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <DatasetEmptyState onClear={clearFilters} />
        ) : (
          <DatasetGrid datasets={filtered} />
        )}
      </div>

      {hasActiveFilters && filtered.length > 0 && (
        <div className="mt-6">
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}

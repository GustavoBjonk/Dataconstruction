"use client";

import { useMemo, useState } from "react";
import { NewsArticle, NewsCategory } from "@/data/news";
import { NewsSearch } from "./NewsSearch";
import { NewsFilters } from "./NewsFilters";
import { NewsGrid } from "./NewsGrid";

const ALL_LABEL = "Todos";
const PAGE_SIZE = 9;

interface NewsExplorerProps {
  news: NewsArticle[];
  years: number[];
  categories: string[];
}

export function NewsExplorer({ news, years, categories }: NewsExplorerProps) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<string>(ALL_LABEL);
  const [category, setCategory] = useState<string>(ALL_LABEL);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const hasActiveFilters =
    query.trim() !== "" || year !== ALL_LABEL || category !== ALL_LABEL;

  function clearFilters() {
    setQuery("");
    setYear(ALL_LABEL);
    setCategory(ALL_LABEL);
    setVisibleCount(PAGE_SIZE);
  }

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = news.filter((item) => {
      if (year !== ALL_LABEL && String(item.year) !== year) return false;
      if (category !== ALL_LABEL && !item.category.includes(category as NewsCategory)) return false;

      if (!normalizedQuery) return true;

      const haystack = [
        item.title,
        item.summary,
        item.source,
        ...item.category,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });

    return [...result].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }, [news, year, category, query]);

  const visible = filtered.slice(0, visibleCount);

  function handleFilterChange<T>(setter: (value: T) => void) {
    return (value: T) => {
      setter(value);
      setVisibleCount(PAGE_SIZE);
    };
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="sm:max-w-xs sm:flex-1">
          <NewsSearch
            value={query}
            onChange={(value) => {
              setQuery(value);
              setVisibleCount(PAGE_SIZE);
            }}
          />
        </div>
        <p className="whitespace-nowrap text-sm text-slate-500">
          {filtered.length} de {news.length} notícias
        </p>
      </div>

      <div className="mt-5">
        <NewsFilters
          years={years}
          categories={categories}
          activeYear={year}
          activeCategory={category}
          onYearChange={handleFilterChange(setYear)}
          onCategoryChange={handleFilterChange(setCategory)}
        />
      </div>

      <div className="mt-8">
        <NewsGrid news={visible} emptyMessage="Nenhuma notícia encontrada para essa busca ou filtro." />
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        {visibleCount < filtered.length && (
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="min-h-[44px] rounded-md border border-slate-200 bg-white px-6 text-sm font-medium text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-100"
          >
            Carregar mais notícias
          </button>
        )}

        {hasActiveFilters && filtered.length > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
}

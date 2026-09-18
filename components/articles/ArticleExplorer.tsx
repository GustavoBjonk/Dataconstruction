"use client";

import { useMemo, useState } from "react";
import { Article } from "@/data/articles";
import { ArticleSearch } from "./ArticleSearch";
import { ArticleFilters } from "./ArticleFilters";
import { ArticleGrid } from "./ArticleGrid";

interface ArticleExplorerProps {
  articles: Article[];
  categories: readonly string[];
}

const ALL_LABEL = "Todos";

export function ArticleExplorer({ articles, categories }: ArticleExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL_LABEL);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory = category === ALL_LABEL || article.category === category;
      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;

      const haystack = `${article.title} ${article.description} ${article.category}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [articles, category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="sm:max-w-xs sm:flex-1">
          <ArticleSearch value={query} onChange={setQuery} />
        </div>
        <p className="whitespace-nowrap text-sm text-slate-500">
          {filtered.length} de {articles.length} artigos
        </p>
      </div>

      <div className="mt-4">
        <ArticleFilters categories={categories} active={category} onChange={setCategory} />
      </div>

      <div className="mt-8">
        <ArticleGrid
          articles={filtered}
          emptyMessage="Nenhum artigo encontrado para essa busca ou filtro."
        />
      </div>
    </div>
  );
}

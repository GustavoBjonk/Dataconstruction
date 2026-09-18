import { Article } from "@/data/articles";
import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
  emptyMessage?: string;
}

export function ArticleGrid({
  articles,
  emptyMessage = "Nenhum artigo encontrado.",
}: ArticleGridProps) {
  if (articles.length === 0) {
    return <p className="py-16 text-center text-sm text-slate-500">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

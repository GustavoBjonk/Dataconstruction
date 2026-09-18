import { NewsArticle } from "@/data/news";
import { NewsCard } from "./NewsCard";

interface NewsGridProps {
  news: NewsArticle[];
  emptyMessage?: string;
}

export function NewsGrid({ news, emptyMessage = "Nenhuma notícia encontrada." }: NewsGridProps) {
  if (news.length === 0) {
    return <p className="py-16 text-center text-sm text-slate-500">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
}

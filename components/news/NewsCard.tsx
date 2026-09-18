import Link from "next/link";
import { NewsArticle } from "@/data/news";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/format";

interface NewsCardProps {
  news: NewsArticle;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Link
      href={`/noticias/${news.slug}`}
      className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300"
    >
      <div className="flex items-start justify-between gap-3">
        <Badge variant="accent">{news.category[0]}</Badge>
        <span className="font-mono text-xs text-slate-400">{formatDate(news.publishedAt)}</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">{news.title}</h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{news.summary}</p>

      <p className="mt-4 text-xs text-slate-400">Fonte: {news.source}</p>
    </Link>
  );
}

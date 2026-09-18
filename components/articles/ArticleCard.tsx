import Link from "next/link";
import { Article } from "@/data/articles";
import { Badge } from "@/components/ui/Badge";
import { formatDate, formatReadingTime } from "@/lib/format";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/artigos/${article.id}`}
      className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300"
    >
      <Badge variant="accent">{article.category}</Badge>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
        {article.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {article.description}
      </p>

      <p className="mt-4 font-mono text-xs text-slate-400">
        {formatReadingTime(article.readingTime)} · {formatDate(article.date)}
      </p>
    </Link>
  );
}

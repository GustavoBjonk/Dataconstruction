import Link from "next/link";
import { NewsArticle } from "@/data/news";

interface NewsTimelineProps {
  news: NewsArticle[];
  years: number[];
  itemsPerYear?: number;
}

export function NewsTimeline({ news, years, itemsPerYear = 4 }: NewsTimelineProps) {
  const sortedYears = [...years].sort((a, b) => b - a);

  return (
    <ol className="flex flex-col">
      {sortedYears.map((year, index) => {
        const yearNews = news
          .filter((item) => item.year === year)
          .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
          .slice(0, itemsPerYear);

        if (yearNews.length === 0) return null;

        const isLast = index === sortedYears.length - 1;

        return (
          <li key={year} className="relative flex gap-5 pb-10 last:pb-0">
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute left-5 top-12 h-[calc(100%-2.5rem)] w-px bg-slate-200"
              />
            )}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-sm font-medium text-slate-500">
              {String(year).slice(2)}
            </span>

            <div className="min-w-0 flex-1 pt-1.5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{year}</h3>
              <ul className="mt-3 space-y-2">
                {yearNews.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/noticias/${item.slug}`}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

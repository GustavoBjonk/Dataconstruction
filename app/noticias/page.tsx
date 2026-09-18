import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsTimeline } from "@/components/news/NewsTimeline";
import { NewsExplorer } from "@/components/news/NewsExplorer";
import { news, NEWS_CATEGORIES } from "@/data/news";

export const metadata: Metadata = {
  title: "Notícias sobre Dados e Tecnologia",
  description:
    "Acompanhe os principais acontecimentos que estão transformando dados, analytics, inteligência artificial e tecnologia entre 2022 e 2026.",
};

const YEARS = [2026, 2025, 2024, 2023, 2022];

export default function NoticiasPage() {
  const recentNews = [...news]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 6);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Notícias sobre Dados e Tecnologia
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Acompanhe os principais acontecimentos que estão transformando dados, analytics,
            inteligência artificial e tecnologia.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Notícias recentes
          </h2>
          <div className="mt-6">
            <NewsGrid news={recentNews} />
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-14">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            A evolução dos Dados
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Um recorte de {YEARS[YEARS.length - 1]}–{YEARS[0]} com base em acontecimentos reais
            e verificados.
          </p>
          <div className="mt-8">
            <NewsTimeline news={news} years={YEARS} />
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-14">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Todas as notícias
          </h2>
          <div className="mt-6">
            <NewsExplorer news={news} years={YEARS} categories={[...NEWS_CATEGORIES]} />
          </div>
        </div>
      </Container>
    </section>
  );
}

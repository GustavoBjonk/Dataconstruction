import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ArticleExplorer } from "@/components/articles/ArticleExplorer";
import { articles, ARTICLE_CATEGORIES } from "@/data/articles";

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Todos os artigos técnicos do Dataconstruction sobre Engenharia de Dados, Ciência de Dados, Análise de Dados, SQL, Python, Power BI, Cloud e Backend.",
};

const SORTED_ARTICLES = [...articles].sort((a, b) => b.date.localeCompare(a.date));

export default function ArtigosPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Artigos</h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Conteúdos técnicos sobre dados, engenharia e tecnologia, direto ao ponto.
          </p>
        </div>

        <div className="mt-10">
          <ArticleExplorer articles={SORTED_ARTICLES} categories={ARTICLE_CATEGORIES} />
        </div>
      </Container>
    </section>
  );
}

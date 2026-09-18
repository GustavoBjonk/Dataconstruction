import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ArticleContent } from "@/components/articles/ArticleContent";
import { ArticleReferences } from "@/components/articles/ArticleReferences";
import { ArticleGrid } from "@/components/articles/ArticleGrid";
import { articles } from "@/data/articles";
import { formatDate, formatReadingTime } from "@/lib/format";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.id === slug);

  if (!article) {
    return { title: "Artigo" };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/artigos/${article.id}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.id === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((item) => item.id !== article.id && item.category === article.category)
    .slice(0, 3);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <Badge variant="accent">{article.category}</Badge>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            {article.title}
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            {article.author} · {formatReadingTime(article.readingTime)} ·{" "}
            {formatDate(article.date)}
          </p>

          <p className="mt-6 text-base leading-relaxed text-slate-500">{article.description}</p>
        </div>

        <div className="mt-10">
          <ArticleContent content={article.content} />
        </div>

        <ArticleReferences references={article.references} />

        <div className="mt-12 max-w-prose rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Sobre quem escreveu
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{article.author}</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">{article.authorBio}</p>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Artigos relacionados
            </h2>
            <div className="mt-6">
              <ArticleGrid articles={relatedArticles} />
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link href="/artigos" className="text-sm font-medium text-accent hover:text-accent-hover">
            ← Voltar para todos os artigos
          </Link>
        </div>
      </Container>
    </section>
  );
}

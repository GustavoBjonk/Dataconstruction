import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { NewsGrid } from "@/components/news/NewsGrid";
import { news } from "@/data/news";
import { formatDate } from "@/lib/format";
import { datasets } from "@/data/datasets";
import { projects } from "@/data/projects";
import { roadmaps } from "@/data/roadmaps";
import { articles } from "@/data/articles";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);

  if (!item) {
    return { title: "Notícia" };
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/noticias/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.summary,
      type: "article",
      publishedTime: item.publishedAt,
      tags: item.tags,
    },
    twitter: {
      card: "summary",
      title: item.title,
      description: item.summary,
    },
  };
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedNews = news
    .filter(
      (entry) =>
        entry.id !== item.id &&
        (entry.category.some((cat) => item.category.includes(cat)) ||
          entry.tags.some((tag) => item.tags.includes(tag)))
    )
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  const relatedDatasets = (item.related?.datasetIds ?? [])
    .map((id) => datasets.find((dataset) => dataset.id === id))
    .filter((dataset): dataset is NonNullable<typeof dataset> => Boolean(dataset));

  const relatedProjects = (item.related?.projectIds ?? [])
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const relatedTracks = (item.related?.trackSlugs ?? [])
    .map((trackSlug) => roadmaps.find((roadmap) => roadmap.slug === trackSlug))
    .filter((roadmap): roadmap is NonNullable<typeof roadmap> => Boolean(roadmap));

  const relatedArticles = (item.related?.articleIds ?? [])
    .map((id) => articles.find((article) => article.id === id))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  const hasRelatedContent =
    relatedDatasets.length > 0 ||
    relatedProjects.length > 0 ||
    relatedTracks.length > 0 ||
    relatedArticles.length > 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.publishedAt,
    dateModified: item.verifiedAt,
    author: { "@type": "Organization", name: "Dataconstruction" },
    publisher: { "@type": "Organization", name: "Dataconstruction" },
  };

  return (
    <section className="py-16 sm:py-20">
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <div className="max-w-2xl">
          <ul className="flex flex-wrap gap-2">
            {item.category.map((cat) => (
              <li key={cat}>
                <Badge variant="accent">{cat}</Badge>
              </li>
            ))}
          </ul>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            {item.title}
          </h1>

          <p className="mt-3 text-xs text-slate-400">
            Publicado em {formatDate(item.publishedAt)} · Fonte: {item.source}
          </p>

          <p className="mt-6 text-base leading-relaxed text-slate-500">{item.summary}</p>
        </div>

        <div className="mt-10 max-w-prose">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            O que isso significa para a área de Dados?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">{item.relevance}</p>
        </div>

        <div className="mt-10 max-w-prose">
          <ul className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="neutral">{tag}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 max-w-prose rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-medium text-slate-900">Fonte original</p>
          <p className="mt-1 text-sm text-slate-500">
            Leia a publicação original na fonte: {item.source}.
          </p>
          <div className="mt-4">
            <Button href={item.sourceUrl} external variant="secondary">
              Acessar fonte original
            </Button>
          </div>
        </div>

        {hasRelatedContent && (
          <div className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">Relacionado</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {relatedDatasets.length > 0 && (
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Dataset
                  </p>
                  <ul className="mt-2 space-y-1">
                    {relatedDatasets.map((dataset) => (
                      <li key={dataset.id}>
                        <Link
                          href="/datasets"
                          className="text-sm text-accent hover:text-accent-hover"
                        >
                          {dataset.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedProjects.length > 0 && (
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Projeto
                  </p>
                  <ul className="mt-2 space-y-1">
                    {relatedProjects.map((project) => (
                      <li key={project.id}>
                        <Link
                          href="/projetos"
                          className="text-sm text-accent hover:text-accent-hover"
                        >
                          {project.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedTracks.length > 0 && (
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Trilha
                  </p>
                  <ul className="mt-2 space-y-1">
                    {relatedTracks.map((track) => (
                      <li key={track.id}>
                        <Link
                          href={`/trilhas/${track.slug}`}
                          className="text-sm text-accent hover:text-accent-hover"
                        >
                          {track.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedArticles.length > 0 && (
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Artigo
                  </p>
                  <ul className="mt-2 space-y-1">
                    {relatedArticles.map((article) => (
                      <li key={article.id}>
                        <Link
                          href="/artigos"
                          className="text-sm text-accent hover:text-accent-hover"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {relatedNews.length > 0 && (
          <div className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Notícias relacionadas
            </h2>
            <div className="mt-6">
              <NewsGrid news={relatedNews} />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

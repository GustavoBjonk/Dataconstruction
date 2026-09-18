import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArticleGrid } from "@/components/articles/ArticleGrid";
import { TrackGrid } from "@/components/tracks/TrackGrid";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsGrid } from "@/components/news/NewsGrid";
import { articles } from "@/data/articles";
import { tracks } from "@/data/tracks";
import { news } from "@/data/news";

const RECENT_ARTICLES = [...articles]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

const FEATURED_TRACKS = tracks.slice(0, 3);

const RECENT_NEWS = [...news]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .slice(0, 4);
const [mainNews, ...secondaryNews] = RECENT_NEWS;

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">Dataconstruction</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Dados e engenharia explicados na prática, sem enrolação.
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-slate-500">
              Artigos técnicos e trilhas de aprendizado para quem trabalha ou quer
              trabalhar com dados — da análise em planilha ao pipeline em produção.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/artigos" variant="primary">
                Explorar artigos
              </Button>
              <Button href="/trilhas" variant="secondary">
                Ver trilhas
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {mainNews && (
        <section className="py-16 sm:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Atualidades em Dados
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  O que está acontecendo no ecossistema de Dados e IA.
                </p>
              </div>
              <Link
                href="/noticias"
                className="text-sm font-medium text-accent hover:text-accent-hover"
              >
                Ver todas as notícias →
              </Link>
            </div>

            <div className="mt-8">
              <NewsCard news={mainNews} />
            </div>

            {secondaryNews.length > 0 && (
              <div className="mt-6">
                <NewsGrid news={secondaryNews} />
              </div>
            )}
          </Container>
        </section>
      )}

      <section className="border-t border-slate-200 py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Artigos recentes
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Os últimos conteúdos publicados no Dataconstruction.
              </p>
            </div>
            <Link
              href="/artigos"
              className="text-sm font-medium text-accent hover:text-accent-hover"
            >
              Ver todos os artigos →
            </Link>
          </div>

          <div className="mt-8">
            <ArticleGrid articles={RECENT_ARTICLES} />
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Trilhas de aprendizado
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Roteiros organizados para estudar tecnologia de forma progressiva.
              </p>
            </div>
            <Link
              href="/trilhas"
              className="text-sm font-medium text-accent hover:text-accent-hover"
            >
              Ver todas as trilhas →
            </Link>
          </div>

          <div className="mt-8">
            <TrackGrid tracks={FEATURED_TRACKS} />
          </div>
        </Container>
      </section>
    </>
  );
}

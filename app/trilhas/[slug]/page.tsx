import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { RoadmapTimeline } from "@/components/tracks/RoadmapTimeline";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { roadmaps, ROADMAP_PROJECT_AREAS } from "@/data/roadmaps";
import { courses } from "@/data/courses";
import { projects, ProjectDifficulty } from "@/data/projects";

interface RoadmapPageProps {
  params: Promise<{ slug: string }>;
}

const DIFFICULTY_ORDER: ProjectDifficulty[] = ["Iniciante", "Intermediário", "Avançado"];

export function generateStaticParams() {
  return roadmaps.map((roadmap) => ({ slug: roadmap.slug }));
}

export async function generateMetadata({ params }: RoadmapPageProps): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = roadmaps.find((item) => item.slug === slug);

  if (!roadmap) {
    return { title: "Trilha" };
  }

  return {
    title: roadmap.title,
    description: roadmap.description,
  };
}

export default async function RoadmapPage({ params }: RoadmapPageProps) {
  const { slug } = await params;
  const roadmap = roadmaps.find((item) => item.slug === slug);

  if (!roadmap) {
    notFound();
  }

  const projectArea = ROADMAP_PROJECT_AREAS[roadmap.slug] ?? null;
  const relatedProjects = projectArea
    ? DIFFICULTY_ORDER.map((difficulty) =>
        projects.find(
          (project) => project.area === projectArea && project.difficulty === difficulty
        )
      ).filter((project): project is NonNullable<typeof project> => Boolean(project))
    : [];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Trilha</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {roadmap.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            {roadmap.description}
          </p>
          <div className="mt-5 flex items-center gap-2">
            <Badge variant="outline">{roadmap.level}</Badge>
            <span className="text-xs text-slate-400">
              {roadmap.steps.length} etapas · {roadmap.estimatedDuration}
            </span>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Roadmap</h2>
          <div className="mt-8">
            <RoadmapTimeline steps={roadmap.steps} courses={courses} />
          </div>
        </div>

        <div className="mt-4 border-t border-slate-200 pt-14">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Coloque em prática
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Projetos da seção{" "}
            <Link href="/projetos" className="font-medium text-accent hover:text-accent-hover">
              Projetos
            </Link>{" "}
            para praticar o que você estudou nesta trilha.
          </p>
          <div className="mt-6">
            {relatedProjects.length > 0 ? (
              <ProjectGrid projects={relatedProjects} />
            ) : (
              <p className="text-sm text-slate-500">
                Ainda não há projetos específicos para esta área. Veja todas as ideias em{" "}
                <Link href="/projetos" className="font-medium text-accent hover:text-accent-hover">
                  /projetos
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

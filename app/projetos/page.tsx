import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { projects, PROJECT_AREAS, PROJECT_DIFFICULTIES } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Ideias de projetos práticos organizadas por área e nível de dificuldade para praticar Análise de Dados, Engenharia de Dados, BI, SQL e Machine Learning.",
};

export default function ProjetosPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">+{projects.length} projetos</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Projetos para colocar seus conhecimentos em prática.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            O Dataconstruction reúne ideias de projetos organizadas por área e nível de dificuldade
            para ajudar estudantes e profissionais a praticarem seus conhecimentos em Dados.
          </p>
        </div>

        <div className="mt-12">
          <ProjectExplorer
            projects={projects}
            areas={PROJECT_AREAS}
            difficulties={PROJECT_DIFFICULTIES}
          />
        </div>
      </Container>
    </section>
  );
}

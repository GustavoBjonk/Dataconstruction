import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  emptyMessage?: string;
}

export function ProjectGrid({
  projects,
  emptyMessage = "Nenhum projeto encontrado.",
}: ProjectGridProps) {
  if (projects.length === 0) {
    return <p className="py-16 text-center text-sm text-slate-500">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

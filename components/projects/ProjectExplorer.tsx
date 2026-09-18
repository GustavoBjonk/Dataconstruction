"use client";

import { useMemo, useState } from "react";
import { Project, ProjectArea, ProjectDifficulty } from "@/data/projects";
import { ProjectSearch } from "./ProjectSearch";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectGrid } from "./ProjectGrid";

const ALL_LABEL = "Todos";

interface ProjectExplorerProps {
  projects: Project[];
  areas: ProjectArea[];
  difficulties: ProjectDifficulty[];
}

export function ProjectExplorer({ projects, areas, difficulties }: ProjectExplorerProps) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<string>(ALL_LABEL);
  const [difficulty, setDifficulty] = useState<string>(ALL_LABEL);

  const hasActiveFilters =
    query.trim() !== "" || area !== ALL_LABEL || difficulty !== ALL_LABEL;

  function clearFilters() {
    setQuery("");
    setArea(ALL_LABEL);
    setDifficulty(ALL_LABEL);
  }

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      if (area !== ALL_LABEL && project.area !== area) return false;
      if (difficulty !== ALL_LABEL && project.difficulty !== difficulty) return false;

      if (!normalizedQuery) return true;

      const haystack = [
        project.title,
        project.description,
        project.area,
        ...project.technologies,
        ...project.skills,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [projects, area, difficulty, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="sm:max-w-xs sm:flex-1">
          <ProjectSearch value={query} onChange={setQuery} />
        </div>
        <p className="whitespace-nowrap text-sm text-slate-500">
          {filtered.length} de {projects.length} projetos
        </p>
      </div>

      <div className="mt-5">
        <ProjectFilters
          areas={areas}
          difficulties={difficulties}
          activeArea={area}
          activeDifficulty={difficulty}
          onAreaChange={setArea}
          onDifficultyChange={setDifficulty}
        />
      </div>

      <div className="mt-8">
        <ProjectGrid
          projects={filtered}
          emptyMessage="Nenhum projeto encontrado para essa busca ou filtro."
        />
      </div>

      {hasActiveFilters && filtered.length > 0 && (
        <div className="mt-6">
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}

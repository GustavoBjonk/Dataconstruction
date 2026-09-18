"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `project-details-${project.id}`;

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300">
      <div className="flex items-start justify-between gap-3">
        <Badge variant="accent">{project.area}</Badge>
        <Badge variant="outline">{project.difficulty}</Badge>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-500">{project.description}</p>

      <p className="mt-3 text-xs text-slate-400">⏱ {project.estimatedTime}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Badge variant="neutral">{tech}</Badge>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Habilidades
        </p>
        <p className="mt-2 text-sm text-slate-500">{project.skills.join(" · ")}</p>
      </div>

      {isExpanded && (
        <div id={detailsId} className="mt-4 border-t border-slate-200 pt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Objetivo
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{project.objective}</p>
        </div>
      )}

      <div className="mt-6">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="min-h-[40px] w-full rounded-md border border-slate-200 px-5 text-sm font-medium text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-100"
        >
          {isExpanded ? "Ocultar detalhes" : "Ver projeto"}
        </button>
      </div>
    </article>
  );
}

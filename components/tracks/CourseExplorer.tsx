"use client";

import { useMemo, useState } from "react";
import { Course } from "@/data/courses";
import { CourseSearch } from "./CourseSearch";
import { CourseFilters, CourseTypeFilter } from "./CourseFilters";
import { CourseGrid } from "./CourseGrid";

const ALL_LABEL = "Todos";

interface CourseExplorerProps {
  courses: Course[];
  areas: string[];
  levels: string[];
}

export function CourseExplorer({ courses, areas, levels }: CourseExplorerProps) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<string>(ALL_LABEL);
  const [type, setType] = useState<CourseTypeFilter>("Todos");
  const [level, setLevel] = useState<string>(ALL_LABEL);

  const hasActiveFilters =
    query.trim() !== "" || area !== ALL_LABEL || type !== "Todos" || level !== ALL_LABEL;

  function clearFilters() {
    setQuery("");
    setArea(ALL_LABEL);
    setType("Todos");
    setLevel(ALL_LABEL);
  }

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      if (area !== ALL_LABEL && course.area !== area) return false;
      if (type === "Gratuitos" && course.type !== "free") return false;
      if (type === "Até R$100" && !(course.type === "paid" && (course.price ?? Infinity) < 100)) {
        return false;
      }
      if (level !== ALL_LABEL && course.level !== level) return false;

      if (!normalizedQuery) return true;

      const haystack = [
        course.title,
        course.platform,
        course.area,
        course.description,
        ...course.skills,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [courses, area, type, level, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="sm:max-w-xs sm:flex-1">
          <CourseSearch value={query} onChange={setQuery} />
        </div>
        <p className="whitespace-nowrap text-sm text-slate-500">
          {filtered.length} de {courses.length} cursos
        </p>
      </div>

      <div className="mt-5">
        <CourseFilters
          areas={areas}
          levels={levels}
          activeArea={area}
          activeType={type}
          activeLevel={level}
          onAreaChange={setArea}
          onTypeChange={setType}
          onLevelChange={setLevel}
        />
      </div>

      <div className="mt-8">
        <CourseGrid
          courses={filtered}
          emptyMessage="Nenhum curso encontrado para essa busca ou filtro."
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

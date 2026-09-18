import { Course } from "@/data/courses";
import { CourseCard } from "./CourseCard";

interface CourseGridProps {
  courses: Course[];
  emptyMessage?: string;
}

export function CourseGrid({ courses, emptyMessage = "Nenhum curso encontrado." }: CourseGridProps) {
  if (courses.length === 0) {
    return <p className="py-16 text-center text-sm text-slate-500">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

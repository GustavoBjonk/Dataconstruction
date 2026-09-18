import { Course } from "@/data/courses";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface CourseCardProps {
  course: Course;
}

function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function CourseCard({ course }: CourseCardProps) {
  const meta = [course.platform, course.duration].filter(Boolean).join(" · ");

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300">
      <div className="flex items-start justify-between gap-3">
        <Badge variant={course.type === "free" ? "accent" : "neutral"}>
          {course.type === "free" ? "Gratuito" : "Até R$100"}
        </Badge>
        <Badge variant="outline">{course.level}</Badge>
      </div>

      <h3 className="mt-4 text-base font-semibold leading-snug text-slate-900">
        {course.title}
      </h3>

      <p className="mt-1 text-xs text-slate-400">{meta}</p>

      <p className="mt-3 text-sm leading-relaxed text-slate-500">{course.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {course.skills.map((skill) => (
          <li key={skill}>
            <Badge variant="neutral">{skill}</Badge>
          </li>
        ))}
      </ul>

      {course.type === "paid" && course.price !== undefined && (
        <p className="mt-4 text-sm font-medium text-slate-900">
          {formatPrice(course.price)}
          {course.priceCheckedAt && (
            <span className="ml-1 font-normal text-slate-400">
              · verificado em {course.priceCheckedAt}
            </span>
          )}
        </p>
      )}

      <div className="mt-6">
        <Button href={course.url} external variant="secondary" className="w-full">
          Ver curso
        </Button>
      </div>
    </article>
  );
}

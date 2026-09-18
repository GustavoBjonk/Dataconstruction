import { RoadmapStep } from "@/data/roadmaps";
import { Course } from "@/data/courses";
import { Badge } from "@/components/ui/Badge";
import { CourseCard } from "./CourseCard";

interface RoadmapTimelineProps {
  steps: RoadmapStep[];
  courses: Course[];
}

export function RoadmapTimeline({ steps, courses }: RoadmapTimelineProps) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, index) => {
        const stepCourses = step.courseIds
          .map((id) => courses.find((course) => course.id === id))
          .filter((course): course is Course => Boolean(course));
        const freeCourses = stepCourses.filter((course) => course.type === "free");
        const paidCourses = stepCourses.filter((course) => course.type === "paid");
        const isLast = index === steps.length - 1;

        return (
          <li key={step.id} className="relative flex gap-5 pb-10 last:pb-0">
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute left-5 top-12 h-[calc(100%-2.5rem)] w-px bg-slate-200"
              />
            )}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-sm font-medium text-slate-500">
              {String(step.order).padStart(2, "0")}
            </span>

            <div className="min-w-0 flex-1 pt-1.5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>

              {(step.topics.length > 0 || step.technologies.length > 0) && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {step.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge variant="accent">{tech}</Badge>
                    </li>
                  ))}
                  {step.topics.map((topic) => (
                    <li key={topic}>
                      <Badge variant="neutral">{topic}</Badge>
                    </li>
                  ))}
                </ul>
              )}

              {stepCourses.length > 0 && (
                <div className="mt-5 space-y-6">
                  {freeCourses.length > 0 && (
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Gratuitos
                      </p>
                      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {freeCourses.map((course) => (
                          <CourseCard key={course.id} course={course} />
                        ))}
                      </div>
                    </div>
                  )}

                  {paidCourses.length > 0 && (
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Baixo custo
                      </p>
                      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {paidCourses.map((course) => (
                          <CourseCard key={course.id} course={course} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

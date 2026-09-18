import { Roadmap } from "@/data/roadmaps";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface RoadmapCardProps {
  roadmap: Roadmap;
}

export function RoadmapCard({ roadmap }: RoadmapCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {roadmap.title}
      </span>

      <p className="mt-4 flex-1 text-base leading-relaxed text-slate-500">
        {roadmap.description}
      </p>

      <div className="mt-6 flex items-center gap-2">
        <Badge variant="outline">{roadmap.level}</Badge>
        <span className="text-xs text-slate-400">
          {roadmap.steps.length} etapas · {roadmap.estimatedDuration}
        </span>
      </div>

      <div className="mt-6">
        <Button href={`/trilhas/${roadmap.slug}`} variant="secondary" className="w-full">
          Ver roadmap
        </Button>
      </div>
    </article>
  );
}

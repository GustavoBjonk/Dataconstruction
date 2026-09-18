import { Dataset } from "@/data/datasets";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface DatasetCardProps {
  dataset: Dataset;
  withAnchor?: boolean;
}

export function DatasetCard({ dataset, withAnchor = true }: DatasetCardProps) {
  const meta = [dataset.size, dataset.format].filter(Boolean).join(" · ");

  return (
    <article
      id={withAnchor ? `dataset-${dataset.id}` : undefined}
      className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300"
    >
      <div className="flex items-start justify-between gap-3">
        <Badge variant="accent">{dataset.category}</Badge>
        <Badge variant="outline">{dataset.difficulty}</Badge>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
        {dataset.name}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-500">{dataset.description}</p>

      {meta && <p className="mt-3 font-mono text-xs text-slate-400">{meta}</p>}

      <ul className="mt-4 flex flex-wrap gap-2">
        {dataset.technologies.map((tech) => (
          <li key={tech}>
            <Badge variant="neutral">{tech}</Badge>
          </li>
        ))}
      </ul>

      {dataset.idealFor.length > 0 && (
        <div className="mt-4 flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Ideal para
          </p>
          <ul className="mt-2 space-y-1">
            {dataset.idealFor.map((item) => (
              <li key={item} className="text-sm text-slate-500">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <Button href={dataset.sourceUrl} external variant="secondary" className="w-full">
          Acessar dataset
        </Button>
      </div>
    </article>
  );
}

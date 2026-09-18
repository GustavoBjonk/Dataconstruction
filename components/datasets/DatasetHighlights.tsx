import { Dataset } from "@/data/datasets";
import { DatasetCard } from "./DatasetCard";

interface DatasetHighlightsProps {
  datasets: Dataset[];
}

export function DatasetHighlights({ datasets }: DatasetHighlightsProps) {
  if (datasets.length === 0) return null;

  return (
    <section aria-labelledby="datasets-populares">
      <h2 id="datasets-populares" className="text-xl font-semibold tracking-tight text-slate-900">
        Datasets populares
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {datasets.map((dataset) => (
          <DatasetCard key={dataset.id} dataset={dataset} withAnchor={false} />
        ))}
      </div>
    </section>
  );
}

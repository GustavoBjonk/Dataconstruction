import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { DatasetHighlights } from "@/components/datasets/DatasetHighlights";
import { DatasetStartingPoints } from "@/components/datasets/DatasetStartingPoints";
import { DatasetExplorer } from "@/components/datasets/DatasetExplorer";
import { datasets, DATASET_CATEGORIES, DATASET_DIFFICULTIES } from "@/data/datasets";

export const metadata: Metadata = {
  title: "Datasets",
  description:
    "Datasets conhecidos para estudar análise de dados, SQL, Python, BI e Machine Learning.",
};

const HIGHLIGHT_IDS = ["titanic", "iris", "credit-card-fraud"];

const highlightedDatasets = HIGHLIGHT_IDS.map((id) =>
  datasets.find((dataset) => dataset.id === id)
).filter((dataset): dataset is NonNullable<typeof dataset> => Boolean(dataset));

export default function DatasetsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">+{datasets.length} datasets</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Datasets para aprender fazendo.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Uma seleção de datasets conhecidos para praticar análise de dados, SQL, Python,
            BI, estatística e Machine Learning — todos com link direto para a fonte oficial.
          </p>
        </div>

        <div className="mt-12">
          <DatasetHighlights datasets={highlightedDatasets} />
        </div>

        <div className="mt-14">
          <DatasetStartingPoints />
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Todos os datasets
          </h2>
          <div className="mt-6">
            <DatasetExplorer
              datasets={datasets}
              categories={DATASET_CATEGORIES}
              difficulties={DATASET_DIFFICULTIES}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

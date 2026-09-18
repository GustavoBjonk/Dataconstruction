interface StartingPoint {
  id: string;
  name: string;
}

interface StartingPath {
  question: string;
  datasets: StartingPoint[];
}

const STARTING_PATHS: StartingPath[] = [
  {
    question: "Quero aprender análise de dados",
    datasets: [
      { id: "superstore", name: "Superstore" },
      { id: "netflix-titles", name: "Netflix" },
      { id: "world-happiness-report", name: "World Happiness Report" },
    ],
  },
  {
    question: "Quero aprender Machine Learning",
    datasets: [
      { id: "iris", name: "Iris" },
      { id: "titanic", name: "Titanic" },
      { id: "california-housing", name: "California Housing" },
    ],
  },
  {
    question: "Quero praticar projetos mais próximos do mercado",
    datasets: [
      { id: "credit-card-fraud", name: "Credit Card Fraud Detection" },
      { id: "nyc-taxi-trips", name: "NYC Taxi Trips" },
      { id: "superstore", name: "Superstore" },
    ],
  },
];

export function DatasetStartingPoints() {
  return (
    <section aria-labelledby="por-onde-comecar">
      <h2 id="por-onde-comecar" className="text-xl font-semibold tracking-tight text-slate-900">
        Não sabe qual dataset escolher?
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STARTING_PATHS.map((path) => (
          <div key={path.question} className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-sm font-medium text-slate-900">{path.question}</p>
            <ul className="mt-3 space-y-2">
              {path.datasets.map((dataset) => (
                <li key={dataset.id}>
                  <a
                    href={`#dataset-${dataset.id}`}
                    className="text-sm text-accent hover:text-accent-hover"
                  >
                    → {dataset.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

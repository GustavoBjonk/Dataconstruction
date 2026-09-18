export type DatasetCategory =
  | "Data Analytics"
  | "Data Science"
  | "Machine Learning"
  | "Deep Learning"
  | "SQL"
  | "Business Intelligence"
  | "NLP"
  | "Computer Vision";

export type DatasetDifficulty = "Iniciante" | "Intermediário" | "Avançado";

export interface Dataset {
  id: string;
  name: string;
  description: string;
  category: DatasetCategory;
  difficulty: DatasetDifficulty;
  size?: string;
  format?: string;
  topics: string[];
  technologies: string[];
  idealFor: string[];
  source: string;
  sourceUrl: string;
}

export const DATASET_CATEGORIES: DatasetCategory[] = [
  "Data Analytics",
  "Data Science",
  "Machine Learning",
  "Deep Learning",
  "SQL",
  "Business Intelligence",
  "NLP",
  "Computer Vision",
];

export const DATASET_DIFFICULTIES: DatasetDifficulty[] = [
  "Iniciante",
  "Intermediário",
  "Avançado",
];

export const datasets: Dataset[] = [
  {
    id: "titanic",
    name: "Titanic",
    description:
      "Dataset clássico com dados dos passageiros do Titanic, usado para prever sobrevivência a partir de idade, classe, tarifa e outras variáveis.",
    category: "Machine Learning",
    difficulty: "Iniciante",
    size: "891 registros (conjunto de treino)",
    format: "CSV",
    topics: ["Classificação", "Análise exploratória", "Feature engineering", "Estatística"],
    technologies: ["Python", "Pandas", "Scikit-learn", "SQL"],
    idealFor: ["Primeiro projeto de Machine Learning", "Praticar classificação e EDA"],
    source: "Kaggle",
    sourceUrl: "https://www.kaggle.com/competitions/titanic",
  },
  {
    id: "iris",
    name: "Iris",
    description:
      "Medidas de sépalas e pétalas de três espécies de flor Iris, um dos datasets mais usados para introduzir classificação e visualização de dados.",
    category: "Machine Learning",
    difficulty: "Iniciante",
    size: "150 registros",
    format: "CSV",
    topics: ["Classificação", "Visualização", "Estatística", "Introdução a ML"],
    technologies: ["Python", "Pandas", "Scikit-learn"],
    idealFor: ["Introdução prática a Machine Learning", "Aprender visualização de dados"],
    source: "UCI Machine Learning Repository",
    sourceUrl: "https://archive.ics.uci.edu/dataset/53/iris",
  },
  {
    id: "wine-quality",
    name: "Wine Quality",
    description:
      "Propriedades físico-químicas de vinhos portugueses Vinho Verde (tinto e branco), usadas para prever uma nota de qualidade sensorial.",
    category: "Machine Learning",
    difficulty: "Intermediário",
    size: "cerca de 6.500 registros (tinto + branco)",
    format: "CSV",
    topics: ["Regressão", "Classificação", "Análise exploratória", "Correlação"],
    technologies: ["Python", "Pandas", "Scikit-learn", "R"],
    idealFor: ["Praticar regressão e classificação", "Explorar correlação entre variáveis"],
    source: "UCI Machine Learning Repository",
    sourceUrl: "https://archive.ics.uci.edu/dataset/186/wine+quality",
  },
  {
    id: "california-housing",
    name: "California Housing",
    description:
      "Dados socioeconômicos e geográficos de distritos da Califórnia, usados para prever o valor médio dos imóveis em cada região.",
    category: "Machine Learning",
    difficulty: "Intermediário",
    size: "20.640 registros",
    format: "CSV",
    topics: ["Regressão", "Feature engineering", "Análise exploratória"],
    technologies: ["Python", "Pandas", "Scikit-learn"],
    idealFor: ["Praticar regressão", "Estudar feature engineering"],
    source: "scikit-learn",
    sourceUrl:
      "https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_california_housing.html",
  },
  {
    id: "mnist",
    name: "MNIST",
    description:
      "Base histórica de dígitos manuscritos (0 a 9) em imagens 28x28 em escala de cinza, referência para os primeiros modelos de classificação de imagens.",
    category: "Computer Vision",
    difficulty: "Iniciante",
    size: "70.000 imagens (60 mil treino + 10 mil teste)",
    format: "IDX / imagens 28x28",
    topics: ["Classificação de imagens", "Redes neurais", "Deep Learning"],
    technologies: ["Python", "TensorFlow", "PyTorch"],
    idealFor: ["Primeiro projeto de Deep Learning", "Introdução a redes neurais"],
    source: "Yann LeCun (NYU)",
    sourceUrl: "http://yann.lecun.com/exdb/mnist/",
  },
  {
    id: "fashion-mnist",
    name: "Fashion-MNIST",
    description:
      "Substituto direto do MNIST com imagens 28x28 de peças de vestuário da Zalando, pensado para ser um benchmark um pouco mais desafiador.",
    category: "Computer Vision",
    difficulty: "Iniciante",
    size: "70.000 imagens (60 mil treino + 10 mil teste)",
    format: "IDX / imagens 28x28",
    topics: ["Classificação", "Deep Learning", "Computer Vision"],
    technologies: ["Python", "TensorFlow", "PyTorch"],
    idealFor: [
      "Substituir o MNIST em experimentos de Deep Learning",
      "Praticar classificação de imagens",
    ],
    source: "Zalando Research (GitHub)",
    sourceUrl: "https://github.com/zalandoresearch/fashion-mnist",
  },
  {
    id: "imdb-reviews",
    name: "IMDB Dataset",
    description:
      "Coleção de avaliações de filmes do IMDB rotuladas como positivas ou negativas, um dos benchmarks mais usados em classificação de texto.",
    category: "NLP",
    difficulty: "Intermediário",
    size: "50.000 avaliações rotuladas (+ 50 mil não rotuladas)",
    format: "Texto (.txt)",
    topics: ["Processamento de linguagem natural", "Análise de sentimentos", "Classificação de texto"],
    technologies: ["Python", "Scikit-learn", "Hugging Face"],
    idealFor: ["Primeiro projeto de NLP", "Praticar análise de sentimentos"],
    source: "Stanford AI (Andrew Maas et al.)",
    sourceUrl: "https://ai.stanford.edu/~amaas/data/sentiment/",
  },
  {
    id: "credit-card-fraud",
    name: "Credit Card Fraud Detection",
    description:
      "Transações de cartão de crédito de titulares europeus em setembro de 2013, com uma parcela muito pequena marcada como fraude — clássico caso de classe desbalanceada.",
    category: "Machine Learning",
    difficulty: "Avançado",
    size: "284.807 transações",
    format: "CSV",
    topics: ["Detecção de fraude", "Classificação", "Análise de dados", "Classes desbalanceadas"],
    technologies: ["Python", "Pandas", "Scikit-learn"],
    idealFor: ["Estudar dados desbalanceados", "Praticar detecção de fraude"],
    source: "Kaggle (ULB Machine Learning Group)",
    sourceUrl: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud",
  },
  {
    id: "nyc-taxi-trips",
    name: "NYC Taxi Trips",
    description:
      "Registros oficiais de corridas de táxi de Nova York, com horários, locais de embarque/desembarque e valores — publicados mensalmente desde 2009.",
    category: "Data Analytics",
    difficulty: "Intermediário",
    size: "arquivos mensais com milhões de corridas",
    format: "CSV / Parquet",
    topics: ["Análise temporal", "Geolocalização", "SQL", "Business Intelligence", "Visualização de dados"],
    technologies: ["SQL", "Python", "Pandas", "Power BI"],
    idealFor: ["Praticar SQL em larga escala", "Estudar análise temporal e geoespacial"],
    source: "NYC Taxi & Limousine Commission",
    sourceUrl: "https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page",
  },
  {
    id: "superstore",
    name: "Superstore",
    description:
      "Dataset de vendas de varejo (pedidos, clientes, produtos e regiões) amplamente usado para praticar dashboards e KPIs comerciais.",
    category: "Business Intelligence",
    difficulty: "Iniciante",
    size: "cerca de 10 mil registros de pedidos",
    format: "CSV / XLSX",
    topics: ["Power BI", "Dashboards", "Vendas", "KPIs", "Análise comercial"],
    technologies: ["Power BI", "Tableau", "Excel", "SQL"],
    idealFor: ["Criar dashboard no Power BI", "Praticar storytelling com dados de vendas"],
    source: "Kaggle",
    sourceUrl: "https://www.kaggle.com/datasets/vivek468/superstore-dataset-final",
  },
  {
    id: "world-happiness-report",
    name: "World Happiness Report",
    description:
      "Ranking anual de bem-estar de mais de cem países, combinando indicadores econômicos e sociais com uma nota de felicidade autorreportada.",
    category: "Data Analytics",
    difficulty: "Iniciante",
    size: "mais de 140 países, dados anuais desde 2012",
    format: "CSV / XLSX",
    topics: ["Análise exploratória", "Estatística", "Visualização", "Comparação entre países"],
    technologies: ["Python", "Pandas", "Excel"],
    idealFor: ["Estudar EDA", "Comparar indicadores entre países"],
    source: "World Happiness Report",
    sourceUrl: "https://www.worldhappiness.report/",
  },
  {
    id: "netflix-titles",
    name: "Netflix Movies and TV Shows",
    description:
      "Catálogo de filmes e séries do Netflix com gênero, elenco, país, ano de lançamento e classificação, útil para explorar um catálogo de streaming.",
    category: "Data Analytics",
    difficulty: "Iniciante",
    size: "cerca de 8.800 títulos (catálogo até 2021)",
    format: "CSV",
    topics: ["EDA", "Visualização", "SQL", "Análise de catálogo"],
    technologies: ["SQL", "Python", "Pandas", "Power BI"],
    idealFor: ["Praticar EDA", "Explorar catálogos com SQL"],
    source: "Kaggle",
    sourceUrl: "https://www.kaggle.com/datasets/shivamb/netflix-shows",
  },
  {
    id: "spotify-tracks",
    name: "Spotify Tracks",
    description:
      "Faixas do Spotify com atributos de áudio (dançabilidade, energia, tempo, valência) organizadas por gênero, boas para correlação e visualização.",
    category: "Data Analytics",
    difficulty: "Intermediário",
    size: "mais de 100 mil faixas, 125 gêneros",
    format: "CSV",
    topics: ["Análise musical", "Correlação", "Visualização", "Estatística"],
    technologies: ["Python", "Pandas", "SQL"],
    idealFor: ["Explorar correlação entre atributos musicais", "Praticar visualização de dados"],
    source: "Kaggle",
    sourceUrl: "https://www.kaggle.com/datasets/maharshipandya/-spotify-tracks-dataset",
  },
];

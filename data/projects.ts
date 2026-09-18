export type ProjectArea =
  | "Análise de Dados"
  | "Ciência de Dados"
  | "Engenharia de Dados"
  | "Business Intelligence"
  | "SQL"
  | "Python"
  | "Machine Learning"
  | "Data Visualization";

export type ProjectDifficulty = "Iniciante" | "Intermediário" | "Avançado";

export interface Project {
  id: string;
  title: string;
  description: string;
  area: ProjectArea;
  difficulty: ProjectDifficulty;
  technologies: string[];
  skills: string[];
  estimatedTime: string;
  objective: string;
}

export const PROJECT_AREAS: ProjectArea[] = [
  "Análise de Dados",
  "Ciência de Dados",
  "Engenharia de Dados",
  "Business Intelligence",
  "SQL",
  "Python",
  "Machine Learning",
  "Data Visualization",
];

export const PROJECT_DIFFICULTIES: ProjectDifficulty[] = [
  "Iniciante",
  "Intermediário",
  "Avançado",
];

export const projects: Project[] = [
  // Análise de Dados
  {
    id: "analise-vendas-loja",
    title: "Análise de vendas de uma loja",
    description:
      "Organize os dados de vendas de uma loja para identificar produtos mais vendidos e tendências mensais.",
    area: "Análise de Dados",
    difficulty: "Iniciante",
    technologies: ["Excel", "Python", "Pandas"],
    skills: ["Limpeza de dados", "Agrupamento", "Indicadores", "Análise mensal"],
    estimatedTime: "4–8 horas",
    objective:
      "Praticar limpeza de dados, agrupamento e criação de indicadores para entender o desempenho de vendas de uma loja ao longo do tempo, incluindo a identificação dos produtos mais vendidos.",
  },
  {
    id: "analise-gastos-pessoais",
    title: "Análise de gastos pessoais",
    description:
      "Categorize despesas pessoais e monte um dashboard simples para visualizar padrões de consumo.",
    area: "Análise de Dados",
    difficulty: "Iniciante",
    technologies: ["Excel", "Power BI"],
    skills: ["Categorização", "KPIs", "Dashboard", "Identificação de padrões"],
    estimatedTime: "3–6 horas",
    objective:
      "Categorizar despesas, criar KPIs financeiros pessoais, identificar padrões de consumo e montar um dashboard simples de acompanhamento.",
  },
  {
    id: "analise-churn-clientes",
    title: "Análise de churn de clientes",
    description:
      "Identifique clientes que cancelaram um serviço e investigue os padrões por trás do churn.",
    area: "Análise de Dados",
    difficulty: "Intermediário",
    technologies: ["Python", "Pandas", "SQL", "Power BI"],
    skills: ["Segmentação", "Indicadores", "Insights", "SQL aplicado"],
    estimatedTime: "8–15 horas",
    objective:
      "Identificar clientes que cancelaram, encontrar padrões de comportamento, criar indicadores de churn e gerar insights acionáveis para retenção.",
  },
  {
    id: "analise-fraude-transacoes",
    title: "Análise de fraude em transações",
    description:
      "Explore transações financeiras em busca de padrões suspeitos e construa métricas de monitoramento.",
    area: "Análise de Dados",
    difficulty: "Intermediário",
    technologies: ["Python", "Pandas", "SQL", "Power BI"],
    skills: ["Análise exploratória", "Detecção de padrões", "Métricas", "Visualização"],
    estimatedTime: "10–16 horas",
    objective:
      "Explorar transações, identificar padrões suspeitos, criar métricas de monitoramento e visualizar o comportamento das operações.",
  },
  {
    id: "comportamento-clientes-avancado",
    title: "Sistema de análise de comportamento de clientes",
    description:
      "Construa uma análise completa de comportamento de clientes com segmentação, cohort analysis e métricas de retenção.",
    area: "Análise de Dados",
    difficulty: "Avançado",
    technologies: ["Python", "SQL", "Pandas", "Power BI"],
    skills: ["Segmentação", "Cohort analysis", "Métricas de retenção", "Dashboard executivo"],
    estimatedTime: "20+ horas",
    objective:
      "Aplicar segmentação de clientes, análise temporal e cohort analysis, calcular métricas de retenção e consolidar os resultados em um dashboard executivo.",
  },

  // Ciência de Dados
  {
    id: "previsao-precos-simples",
    title: "Previsão simples de preços",
    description:
      "Construa um modelo de regressão linear para prever preços a partir de variáveis básicas.",
    area: "Ciência de Dados",
    difficulty: "Iniciante",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    skills: ["EDA", "Correlação", "Regressão linear", "Avaliação de modelo"],
    estimatedTime: "4–8 horas",
    objective:
      "Praticar análise exploratória, correlação, regressão linear e avaliação de um modelo simples de previsão de preços.",
  },
  {
    id: "previsao-inadimplencia",
    title: "Previsão de inadimplência",
    description:
      "Treine um modelo de classificação para estimar a probabilidade de inadimplência de clientes.",
    area: "Ciência de Dados",
    difficulty: "Intermediário",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    skills: ["Tratamento de dados", "Feature engineering", "Classificação", "Métricas"],
    estimatedTime: "10–18 horas",
    objective:
      "Tratar os dados, aplicar feature engineering, treinar um modelo de classificação e avaliar seu desempenho com métricas adequadas ao problema.",
  },
  {
    id: "previsao-demanda",
    title: "Sistema de previsão de demanda",
    description:
      "Modele séries temporais para prever a demanda futura de um produto ou serviço.",
    area: "Ciência de Dados",
    difficulty: "Avançado",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    skills: ["Séries temporais", "Feature engineering", "Modelagem", "Visualização"],
    estimatedTime: "20+ horas",
    objective:
      "Trabalhar com séries temporais, aplicar feature engineering, modelar a demanda futura, avaliar os resultados e visualizar as previsões geradas.",
  },

  // Engenharia de Dados
  {
    id: "pipeline-csv-banco",
    title: "Pipeline CSV → Banco de Dados",
    description:
      "Construa um pipeline simples que lê um CSV, trata os dados e carrega tudo em um banco PostgreSQL.",
    area: "Engenharia de Dados",
    difficulty: "Iniciante",
    technologies: ["Python", "PostgreSQL"],
    skills: ["Extração de dados", "Tratamento de dados", "Carga em banco de dados"],
    estimatedTime: "4–8 horas",
    objective:
      "Praticar a construção de um fluxo de dados básico: extrair de um CSV, tratar os dados em Python e carregar em um banco relacional.",
  },
  {
    id: "etl-automatizado",
    title: "Pipeline ETL automatizado",
    description:
      "Automatize um fluxo de Extract, Transform e Load entre uma fonte de dados e um data warehouse.",
    area: "Engenharia de Dados",
    difficulty: "Intermediário",
    technologies: ["Python", "SQL", "PostgreSQL", "Docker"],
    skills: ["Extract", "Transform", "Load", "Automação", "Docker"],
    estimatedTime: "12–20 horas",
    objective:
      "Construir um pipeline ETL automatizado, cobrindo extração, transformação e carga de dados em um ambiente containerizado.",
  },
  {
    id: "data-lake-warehouse",
    title: "Data Lake + Data Warehouse",
    description:
      "Desenhe uma arquitetura conceitual conectando fontes de dados, data lake, ETL/ELT e data warehouse até o consumo em BI.",
    area: "Engenharia de Dados",
    difficulty: "Avançado",
    technologies: ["Python", "SQL", "Docker"],
    skills: ["Arquitetura de dados", "ETL/ELT", "Modelagem de dados", "Data Warehouse"],
    estimatedTime: "20+ horas",
    objective:
      "Explorar conceitualmente a arquitetura completa de um pipeline de dados moderno, da ingestão em um data lake ao consumo analítico em ferramentas de BI.",
  },

  // Business Intelligence
  {
    id: "dashboard-vendas",
    title: "Dashboard de vendas",
    description:
      "Monte um dashboard de vendas com os principais indicadores comerciais de um negócio.",
    area: "Business Intelligence",
    difficulty: "Iniciante",
    technologies: ["Excel", "Power BI"],
    skills: ["KPIs", "Dashboard", "Storytelling com dados"],
    estimatedTime: "4–8 horas",
    objective:
      "Construir um dashboard com faturamento, ticket médio, quantidade de vendas e margem para acompanhar o desempenho comercial.",
  },
  {
    id: "dashboard-comercial-completo",
    title: "Dashboard comercial completo",
    description:
      "Construa um dashboard comercial completo cobrindo vendas, clientes, produtos, regiões e metas.",
    area: "Business Intelligence",
    difficulty: "Intermediário",
    technologies: ["Power BI", "SQL"],
    skills: ["Modelagem de dados", "Comparação temporal", "Dashboard multiseção"],
    estimatedTime: "10–18 horas",
    objective:
      "Consolidar vendas, clientes, produtos, regiões, metas e comparação temporal em um único painel de análise comercial.",
  },
  {
    id: "bi-corporativo",
    title: "BI corporativo",
    description:
      "Simule o BI de uma empresa com múltiplas áreas: comercial, financeiro, marketing e operações.",
    area: "Business Intelligence",
    difficulty: "Avançado",
    technologies: ["Power BI", "SQL"],
    skills: ["Arquitetura de indicadores", "Governança de dados", "Dashboards multiárea"],
    estimatedTime: "20+ horas",
    objective:
      "Projetar uma arquitetura de indicadores e dashboards que atenda simultaneamente às áreas comercial, financeira, de marketing e de operações.",
  },

  // SQL
  {
    id: "sql-biblioteca",
    title: "Banco de dados de biblioteca",
    description:
      "Modele e consulte um banco de dados relacional para o acervo e empréstimos de uma biblioteca.",
    area: "SQL",
    difficulty: "Iniciante",
    technologies: ["SQL", "PostgreSQL"],
    skills: ["Modelagem relacional", "Consultas SQL", "Chaves primárias e estrangeiras"],
    estimatedTime: "4–8 horas",
    objective:
      "Praticar modelagem relacional básica e consultas SQL para gerenciar livros, usuários e empréstimos.",
  },
  {
    id: "sql-vendas",
    title: "Banco de dados de vendas",
    description:
      "Modele um banco de dados de vendas com produtos, clientes e pedidos, e pratique consultas básicas.",
    area: "SQL",
    difficulty: "Iniciante",
    technologies: ["SQL", "PostgreSQL"],
    skills: ["Modelagem relacional", "Consultas SQL", "Agregações"],
    estimatedTime: "4–8 horas",
    objective:
      "Criar um esquema relacional simples de vendas e praticar consultas de seleção, filtro e agregação.",
  },
  {
    id: "sql-escola",
    title: "Banco de dados de escola",
    description:
      "Modele um banco de dados escolar com alunos, turmas e notas, e pratique consultas do dia a dia.",
    area: "SQL",
    difficulty: "Iniciante",
    technologies: ["SQL", "PostgreSQL"],
    skills: ["Modelagem relacional", "Consultas SQL", "Relacionamentos"],
    estimatedTime: "4–8 horas",
    objective:
      "Praticar modelagem relacional e consultas SQL aplicadas ao contexto de alunos, turmas e avaliações.",
  },
  {
    id: "sql-ecommerce",
    title: "Sistema de e-commerce",
    description:
      "Modele o banco de dados de um e-commerce com produtos, pedidos, clientes e pagamentos.",
    area: "SQL",
    difficulty: "Intermediário",
    technologies: ["SQL", "PostgreSQL"],
    skills: ["Modelagem relacional", "JOINs", "Consultas SQL"],
    estimatedTime: "8–14 horas",
    objective:
      "Modelar um sistema de e-commerce e escrever consultas SQL mais complexas envolvendo múltiplas tabelas relacionadas.",
  },
  {
    id: "sql-analise-clientes",
    title: "Análise de clientes",
    description:
      "Escreva consultas SQL para segmentar e analisar o comportamento de clientes a partir de dados transacionais.",
    area: "SQL",
    difficulty: "Intermediário",
    technologies: ["SQL", "PostgreSQL"],
    skills: ["JOINs", "Agregações", "Segmentação via SQL"],
    estimatedTime: "8–14 horas",
    objective:
      "Usar SQL para segmentar clientes, calcular métricas de comportamento e identificar padrões de consumo.",
  },
  {
    id: "sql-relatorio-financeiro",
    title: "Relatório financeiro utilizando JOINs e CTEs",
    description:
      "Construa relatórios financeiros combinando múltiplas tabelas com JOINs e CTEs.",
    area: "SQL",
    difficulty: "Intermediário",
    technologies: ["SQL", "PostgreSQL"],
    skills: ["JOINs", "CTEs", "Relatórios financeiros"],
    estimatedTime: "8–14 horas",
    objective:
      "Praticar JOINs e CTEs para consolidar dados financeiros de diferentes tabelas em relatórios claros.",
  },
  {
    id: "sql-data-warehouse-dimensional",
    title: "Data Warehouse dimensional (Star Schema)",
    description:
      "Modele um data warehouse dimensional usando Star Schema e escreva consultas analíticas otimizadas.",
    area: "SQL",
    difficulty: "Avançado",
    technologies: ["SQL", "PostgreSQL"],
    skills: ["Star Schema", "Modelagem analítica", "Otimização de queries"],
    estimatedTime: "20+ horas",
    objective:
      "Aplicar modelagem analítica com Star Schema, escrever consultas SQL complexas e praticar otimização de queries em um Data Warehouse dimensional.",
  },

  // Machine Learning
  {
    id: "ml-classificacao-flores",
    title: "Classificação de flores",
    description:
      "Treine um modelo de classificação para identificar espécies de flores a partir de suas medidas.",
    area: "Machine Learning",
    difficulty: "Iniciante",
    technologies: ["Python", "Scikit-learn"],
    skills: ["Classificação", "EDA", "Avaliação de modelo"],
    estimatedTime: "3–6 horas",
    objective:
      "Dar os primeiros passos em classificação supervisionada, do treino do modelo à avaliação dos resultados.",
  },
  {
    id: "ml-previsao-precos",
    title: "Previsão de preços",
    description:
      "Treine um modelo de regressão para prever preços a partir de características de um produto ou imóvel.",
    area: "Machine Learning",
    difficulty: "Iniciante",
    technologies: ["Python", "Scikit-learn"],
    skills: ["Regressão", "Preparação de dados", "Avaliação de modelo"],
    estimatedTime: "4–8 horas",
    objective:
      "Praticar regressão supervisionada, da preparação dos dados à avaliação do modelo treinado.",
  },
  {
    id: "ml-classificacao-clientes",
    title: "Classificação de clientes",
    description:
      "Classifique clientes em grupos a partir de características demográficas e comportamentais.",
    area: "Machine Learning",
    difficulty: "Iniciante",
    technologies: ["Python", "Scikit-learn"],
    skills: ["Classificação", "Feature engineering básico"],
    estimatedTime: "4–8 horas",
    objective: "Aplicar um modelo de classificação simples para agrupar clientes segundo seu perfil.",
  },
  {
    id: "ml-deteccao-fraude",
    title: "Detecção de fraude",
    description:
      "Treine um modelo para identificar transações fraudulentas em uma base com classes desbalanceadas.",
    area: "Machine Learning",
    difficulty: "Intermediário",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    skills: ["Classes desbalanceadas", "Classificação", "Métricas de avaliação"],
    estimatedTime: "10–16 horas",
    objective:
      "Lidar com classes desbalanceadas, treinar um classificador de fraude e avaliar métricas além da acurácia.",
  },
  {
    id: "ml-churn-prediction",
    title: "Churn prediction",
    description:
      "Construa um modelo preditivo para identificar clientes com alto risco de cancelamento.",
    area: "Machine Learning",
    difficulty: "Intermediário",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    skills: ["Classificação", "Feature importance", "Avaliação de modelo"],
    estimatedTime: "10–16 horas",
    objective:
      "Treinar um modelo de classificação para prever churn e interpretar as variáveis mais relevantes para o cancelamento.",
  },
  {
    id: "ml-recomendacao-simples",
    title: "Sistema de recomendação simples",
    description:
      "Construa um sistema de recomendação básico usando similaridade entre itens ou usuários.",
    area: "Machine Learning",
    difficulty: "Intermediário",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    skills: ["Similaridade", "Filtragem colaborativa básica"],
    estimatedTime: "10–16 horas",
    objective:
      "Entender os fundamentos de sistemas de recomendação e implementar uma versão simples baseada em similaridade.",
  },
  {
    id: "ml-sistema-recomendacao-avancado",
    title: "Sistema de recomendação",
    description:
      "Evolua um sistema de recomendação mais robusto, combinando diferentes abordagens de recomendação.",
    area: "Machine Learning",
    difficulty: "Avançado",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    skills: ["Recomendação", "Avaliação de recomendações"],
    estimatedTime: "20+ horas",
    objective:
      "Aprofundar técnicas de recomendação, comparando abordagens e avaliando a qualidade das recomendações geradas.",
  },
  {
    id: "ml-deteccao-anomalias",
    title: "Detecção de anomalias",
    description:
      "Identifique comportamentos fora do padrão em um conjunto de dados usando técnicas de detecção de anomalias.",
    area: "Machine Learning",
    difficulty: "Avançado",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    skills: ["Detecção de anomalias", "Análise exploratória avançada"],
    estimatedTime: "16–24 horas",
    objective:
      "Aplicar técnicas de detecção de anomalias para identificar registros ou comportamentos fora do padrão esperado.",
  },
  {
    id: "ml-pipeline-completo",
    title: "Pipeline completo de Machine Learning",
    description:
      "Construa um pipeline de ponta a ponta, da ingestão dos dados ao modelo treinado e avaliado.",
    area: "Machine Learning",
    difficulty: "Avançado",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    skills: ["Pipeline de dados", "Treinamento de modelo", "Avaliação"],
    estimatedTime: "20+ horas",
    objective:
      "Estruturar um pipeline completo de Machine Learning, cobrindo ingestão, preparação, treino, avaliação e exportação do modelo.",
  },
  {
    id: "ml-monitoramento-modelos",
    title: "Monitoramento de modelos",
    description:
      "Acompanhe o desempenho de um modelo em produção e identifique sinais de degradação ao longo do tempo.",
    area: "Machine Learning",
    difficulty: "Avançado",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    skills: ["Monitoramento", "Métricas de desempenho", "Model drift"],
    estimatedTime: "12–20 horas",
    objective:
      "Entender práticas básicas de monitoramento de modelos, acompanhando métricas de desempenho ao longo do tempo.",
  },
];

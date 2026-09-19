export const NEWS_CATEGORIES = [
  "Inteligência Artificial",
  "Data Science",
  "Data Analytics",
  "Data Engineering",
  "Business Intelligence",
  "Bancos de Dados",
  "Cloud",
  "Big Data",
  "Machine Learning",
  "Data Governance",
  "Data Privacy",
  "Open Source",
  "Data Platforms",
  "Infraestrutura",
  "Mercado",
  "Regulamentação",
] as const;

export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

export interface RelatedContent {
  datasetIds?: string[];
  projectIds?: string[];
  trackSlugs?: string[];
  articleIds?: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  /** O que esse acontecimento significa, na prática, para quem estuda ou trabalha com Dados. */
  relevance: string;

  publishedAt: string;
  verifiedAt: string;
  year: number;

  category: NewsCategory[];
  tags: string[];

  source: string;
  sourceUrl: string;

  imageUrl?: string;
  featured?: boolean;

  related?: RelatedContent;
}

export const news: NewsArticle[] = [
  // ===== 2022 =====
  {
    id: "openai-lanca-chatgpt",
    slug: "openai-lanca-chatgpt",
    title: "OpenAI lança o ChatGPT ao público",
    summary:
      "A OpenAI publicou um post de blog anunciando o ChatGPT como uma \"pesquisa de prévia\" (research preview), um modelo conversacional derivado da família GPT-3.5. O lançamento, feito sem grande evento de marketing, ultrapassou 1 milhão de usuários em cinco dias.",
    relevance:
      "Marco que popularizou IA generativa em escala global e mudou a forma como profissionais de dados passaram a usar assistentes de linguagem no dia a dia de trabalho.",
    publishedAt: "2022-11-30",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["ChatGPT", "OpenAI", "IA Generativa", "GPT-3.5"],
    source: "OpenAI (blog oficial)",
    sourceUrl: "https://openai.com/blog/chatgpt",
    featured: true,
  },
  {
    id: "databricks-open-source-delta-lake-2",
    slug: "databricks-open-source-delta-lake-2",
    title: "Databricks abre o código completo do Delta Lake 2.0",
    summary:
      "A Databricks anunciou que todos os recursos do Delta Lake, incluindo funcionalidades antes restritas à sua plataforma paga, passaram a ser 100% open source sob a Linux Foundation. A empresa afirmou que o formato já era usado por milhares de organizações processando grandes volumes de dados diariamente.",
    relevance:
      "Reduz o lock-in em torno do formato de tabelas do lakehouse e acelera a adoção de arquiteturas abertas de dados por equipes de engenharia.",
    publishedAt: "2022-06-30",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Data Engineering", "Open Source"],
    tags: ["Databricks", "Delta Lake", "Lakehouse", "Linux Foundation"],
    source: "Databricks (blog oficial)",
    sourceUrl: "https://www.databricks.com/blog/2022/06/30/open-sourcing-all-of-delta-lake.html",
  },
  {
    id: "snowflake-anuncia-unistore",
    slug: "snowflake-anuncia-unistore",
    title: "Snowflake anuncia o Unistore para unir dados transacionais e analíticos",
    summary:
      "No Snowflake Summit 2022, a empresa anunciou o Unistore, um novo workload baseado em \"hybrid tables\" que combina operações transacionais rápidas com o desempenho analítico do Data Cloud. Clientes como Adobe e Novartis já testavam o recurso em prévia privada.",
    relevance:
      "Sinaliza a tendência de plataformas de dados tentarem eliminar a separação clássica entre bancos transacionais (OLTP) e analíticos (OLAP).",
    publishedAt: "2022-06-14",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Bancos de Dados", "Data Platforms"],
    tags: ["Snowflake", "Unistore", "Hybrid Tables", "HTAP"],
    source: "Snowflake (comunicado oficial)",
    sourceUrl:
      "https://www.snowflake.com/en/news/press-releases/snowflake-launches-new-unistore-workload-to-drive-next-phase-of-innovation-with-transactional-and-analytical-data-together-in-the-data-cloud-2/",
  },
  {
    id: "snowflake-suporte-apache-iceberg",
    slug: "snowflake-suporte-apache-iceberg",
    title: "Snowflake revela suporte nativo a tabelas Apache Iceberg",
    summary:
      "Ao encerrar o Snowflake Summit 2022, a empresa confirmou que \"Iceberg Tables\" estava em desenvolvimento, permitindo que dados armazenados em formato aberto e fora do Snowflake fossem acessados diretamente pelo Data Cloud. Foi um dos primeiros movimentos claros da Snowflake em direção à interoperabilidade com formatos abertos de lakehouse.",
    relevance:
      "Mostra o início da corrida das grandes plataformas de dados para suportar o Apache Iceberg como padrão de tabela aberto, tema central da engenharia de dados nos anos seguintes.",
    publishedAt: "2022-06-22",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Data Engineering", "Open Source"],
    tags: ["Snowflake", "Apache Iceberg", "Lakehouse", "Formato Aberto"],
    source: "Snowflake (comunicado oficial)",
    sourceUrl:
      "https://www.snowflake.com/en/news/press-releases/snowflake-concludes-its-largest-ever-global-user-conference-with-new-innovations-to-drive-application-development-and-increased-collaboration-in-the-data-cloud/",
  },
  {
    id: "google-cloud-lanca-biglake",
    slug: "google-cloud-lanca-biglake",
    title: "Google Cloud lança o BigLake para unificar data warehouse e data lake",
    summary:
      "No Data Cloud Summit, o Google Cloud anunciou o BigLake, um mecanismo de armazenamento que estende o BigQuery para dados em data lakes multi-nuvem sem exigir duplicação de dados. O recurso, em prévia, também previa suporte a formatos abertos como Apache Iceberg e integração com o Dataplex para governança.",
    relevance:
      "Representa a aposta do Google na arquitetura lakehouse, permitindo que equipes de dados analisem dados de diferentes nuvens com um único ponto de controle de acesso.",
    publishedAt: "2022-04-05",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Cloud", "Data Engineering"],
    tags: ["Google Cloud", "BigLake", "BigQuery", "Data Lake"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2022/04/05/google-cloud-launches-biglake-a-new-cross-platform-data-storage-engine/",
  },
  {
    id: "aws-reinvent-2022-zero-etl",
    slug: "aws-reinvent-2022-zero-etl",
    title: "AWS anuncia integração Zero-ETL entre Aurora e Redshift no re:Invent 2022",
    summary:
      "A AWS detalhou os principais anúncios de analytics do re:Invent 2022, incluindo a integração Zero-ETL entre Aurora e Redshift, ingestão em streaming via Kinesis e Kafka, Multi-AZ para o Redshift e o novo Amazon DataZone para catalogação e governança de dados.",
    relevance:
      "Reduz a complexidade de pipelines de ETL tradicionais e mostra a tendência de integração nativa entre bancos operacionais e data warehouses na nuvem.",
    publishedAt: "2022-12-19",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Cloud", "Data Engineering"],
    tags: ["AWS", "Redshift", "re:Invent", "Zero-ETL"],
    source: "AWS (blog oficial)",
    sourceUrl: "https://aws.amazon.com/blogs/big-data/top-analytics-announcements-of-aws-reinvent-2022/",
  },
  {
    id: "postgresql-15-lancado",
    slug: "postgresql-15-lancado",
    title: "PostgreSQL 15 é lançado com o comando MERGE e melhorias de replicação lógica",
    summary:
      "O PostgreSQL 15 foi lançado trazendo o comando SQL MERGE, publicação seletiva de colunas e filtros de linha em replicação lógica, além de suporte à compressão Zstandard. Testes mostraram ganhos de desempenho em ordenação de até 400% dependendo do tipo de dado.",
    relevance:
      "O MERGE facilita operações de upsert diretamente em SQL, algo já comum em outros bancos, tornando o PostgreSQL ainda mais competitivo para cargas analíticas e transacionais.",
    publishedAt: "2022-10-13",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Bancos de Dados", "Open Source"],
    tags: ["PostgreSQL", "SQL", "MERGE", "Banco de Dados Relacional"],
    source: "PostgreSQL Global Development Group (site oficial)",
    sourceUrl: "https://www.postgresql.org/about/news/postgresql-15-released-2526/",
    related: { articleIds: ["ctes-recursivas-sql"], trackSlugs: ["sql"] },
  },
  {
    id: "redis-7-lancado",
    slug: "redis-7-lancado",
    title: "Redis 7.0 chega com Redis Functions e Sharded Pub/Sub",
    summary:
      "Após quase um ano de desenvolvimento e três release candidates, o Redis 7.0 tornou-se disponível de forma geral com quase 50 novos comandos, incluindo Redis Functions, ACLv2 e Sharded Pub/Sub. O lançamento focou em melhorias de desempenho em memória, rede e armazenamento.",
    relevance:
      "Redis é uma das camadas de cache e mensageria mais usadas em arquiteturas de dados modernas, e essas mudanças afetam diretamente como aplicações escalam operações em tempo real.",
    publishedAt: "2022-04-27",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Bancos de Dados", "Open Source"],
    tags: ["Redis", "NoSQL", "Cache", "Redis Functions"],
    source: "Redis (blog oficial)",
    sourceUrl: "https://redis.io/blog/redis-7-generally-available/",
  },
  {
    id: "dbt-labs-serie-d",
    slug: "dbt-labs-serie-d",
    title: "dbt Labs capta US$ 222 milhões em rodada Série D",
    summary:
      "A dbt Labs anunciou uma rodada Série D de US$ 222 milhões liderada pela Altimeter, avaliando a empresa em US$ 4,2 bilhões, com participação estratégica de Databricks e Snowflake. O investimento reforçou a posição do dbt como ferramenta central da chamada \"modern data stack\".",
    relevance:
      "Consolidou o papel do dbt e da disciplina de \"analytics engineering\" como peça-chave entre a ingestão de dados brutos e o consumo analítico final.",
    publishedAt: "2022-02-24",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Mercado", "Data Engineering"],
    tags: ["dbt Labs", "Analytics Engineering", "Funding", "Modern Data Stack"],
    source: "dbt Labs (blog oficial)",
    sourceUrl:
      "https://www.getdbt.com/blog/dbt-labs-raises-222m-in-series-d-funding-at-4-2b-valuation-led-by-altimeter-with-participation-from-databricks-and-snowflake",
  },
  {
    id: "nvidia-anuncia-hopper-h100",
    slug: "nvidia-anuncia-hopper-h100",
    title: "Nvidia anuncia a arquitetura Hopper e a GPU H100",
    summary:
      "Na GTC 2022, a Nvidia revelou a arquitetura Hopper e a GPU H100, com um novo \"Transformer Engine\" voltado à aceleração de modelos de linguagem e sistemas de recomendação. A empresa também apresentou o superchip Grace CPU, com disponibilidade da H100 prevista para o terceiro trimestre de 2022.",
    relevance:
      "A H100 se tornaria a GPU de referência para treinar grandes modelos de IA, sendo peça central da infraestrutura por trás do boom de IA generativa que se seguiria.",
    publishedAt: "2022-03-22",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Infraestrutura", "Machine Learning"],
    tags: ["Nvidia", "GPU", "Hopper", "H100"],
    source: "Nvidia (comunicado oficial)",
    sourceUrl: "https://nvidianews.nvidia.com/news/nvidia-announces-hopper-architecture-the-next-generation-of-accelerated-computing",
  },
  {
    id: "duckdb-060-lancado",
    slug: "duckdb-060-lancado",
    title: "DuckDB 0.6.0 traz leitor CSV paralelo e melhorias de armazenamento",
    summary:
      "A versão 0.6.0 do DuckDB, apelidada \"Oxyura\", trouxe um leitor de CSV paralelo experimental, carregamento paralelo de dados em tabelas e melhorias no gerenciamento de memória para criação de índices. O lançamento reforçou o foco do projeto em desempenho analítico local.",
    relevance:
      "DuckDB ganhava tração como banco analítico \"in-process\" leve, muito usado por cientistas e engenheiros de dados para análises locais sem a necessidade de um cluster.",
    publishedAt: "2022-11-14",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Bancos de Dados", "Open Source"],
    tags: ["DuckDB", "OLAP", "Analytics Engineering", "Banco In-Process"],
    source: "DuckDB (blog oficial)",
    sourceUrl: "https://duckdb.org/2022/11/14/announcing-duckdb-060",
  },
  {
    id: "bc-vazamento-chaves-pix-2022",
    slug: "bc-vazamento-chaves-pix-2022",
    title: "Banco Central comunica vazamento de dados de 160,1 mil chaves Pix",
    summary:
      "O Banco Central informou que dados cadastrais de cerca de 160,1 mil clientes da Acesso Soluções de Pagamento foram expostos entre 3 e 5 de dezembro de 2021, sem envolver senhas, saldos ou extratos. Foi o segundo incidente do tipo desde o lançamento do Pix em 2020.",
    relevance:
      "Reforça a importância de práticas de segurança e governança de dados em instituições que operam infraestrutura financeira crítica sob a LGPD.",
    publishedAt: "2022-01-21",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Data Privacy", "Regulamentação"],
    tags: ["Pix", "Banco Central", "Vazamento de Dados", "LGPD"],
    source: "Agência Brasil",
    sourceUrl: "https://agenciabrasil.ebc.com.br/economia/noticia/2022-01/bc-comunica-vazamento-de-dados-de-1601-mil-chaves-pix",
  },
  {
    id: "power-bi-ignite-2022",
    slug: "power-bi-ignite-2022",
    title: "Microsoft leva novidades de BI corporativo ao Power BI no Ignite 2022",
    summary:
      "No Microsoft Ignite 2022, a Microsoft anunciou integração mais profunda do Power BI com OneDrive e SharePoint, edição de modelos de dados direto no serviço e melhorias de acessibilidade nos relatórios. A instalação do Power BI também passou a ser automática para usuários do Microsoft 365.",
    relevance:
      "Facilita o autoatendimento analítico dentro do ecossistema Microsoft, reduzindo fricção para usuários de negócio que dependem de BI no dia a dia.",
    publishedAt: "2022-10-12",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Business Intelligence"],
    tags: ["Power BI", "Microsoft Ignite", "Self-Service BI", "OneDrive"],
    source: "Microsoft Power BI (blog oficial)",
    sourceUrl: "https://powerbi.microsoft.com/en-us/blog/microsoft-ignite-2022-do-more-with-enterprise-self-service-business-intelligence/",
    related: { trackSlugs: ["business-intelligence"] },
  },
  {
    id: "google-data-studio-vira-looker-studio",
    slug: "google-data-studio-vira-looker-studio",
    title: "Google renomeia o Data Studio para Looker Studio",
    summary:
      "Durante o Google Cloud Next 2022, o Google anunciou que o Data Studio passaria a se chamar Looker Studio, unificando a marca de seus produtos de BI sob o guarda-chuva do Looker, adquirido em 2020. A mudança buscou sinalizar uma trilha única entre a ferramenta gratuita e o Looker corporativo.",
    relevance:
      "Reorganiza o portfólio de BI do Google em um momento de forte disputa entre Power BI, Tableau e Looker pelo mercado de análise de negócios self-service.",
    publishedAt: "2022-10-11",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Business Intelligence"],
    tags: ["Google", "Looker Studio", "Data Studio", "Rebranding"],
    source: "Google Cloud (blog oficial)",
    sourceUrl: "https://cloud.google.com/blog/products/data-analytics/looker-studio-is-data-studio",
  },
  {
    id: "apache-kafka-33-kraft-producao",
    slug: "apache-kafka-33-kraft-producao",
    title: "Apache Kafka 3.3 marca o modo KRaft como pronto para produção",
    summary:
      "A versão 3.3 do Apache Kafka implementou o KIP-833, declarando o modo KRaft (que dispensa o Apache Zookeeper para gerenciamento de metadados) como pronto para produção em novos clusters. A mudança também trouxe atualizações no Kafka Streams e no Kafka Connect.",
    relevance:
      "Simplifica a operação de clusters Kafka ao remover a dependência do Zookeeper, um dos pontos de maior complexidade operacional em arquiteturas de streaming de dados.",
    publishedAt: "2022-10-03",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Data Engineering", "Open Source"],
    tags: ["Apache Kafka", "KRaft", "Streaming", "Zookeeper"],
    source: "Apache Kafka (blog oficial)",
    sourceUrl: "https://blogsarchive.apache.org/kafka/entry/what-rsquo-s-new-in",
  },
  {
    id: "anpd-regras-simplificadas-2022",
    slug: "anpd-regras-simplificadas-2022",
    title: "ANPD aprova regras simplificadas de LGPD para agentes de pequeno porte",
    summary:
      "A Autoridade Nacional de Proteção de Dados publicou a Resolução CD/ANPD nº 2/2022, criando regras simplificadas de conformidade à LGPD para microempresas, startups e pessoas físicas que atuam como agentes de tratamento de dados. O texto dispensa, por exemplo, a obrigatoriedade de encarregado de dados e amplia prazos de resposta a incidentes.",
    relevance:
      "Reduz o custo de conformidade com a LGPD para pequenas empresas e startups de dados, um tema recorrente para quem constrói produtos que tratam dados pessoais no Brasil.",
    publishedAt: "2022-01-27",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Regulamentação", "Data Governance"],
    tags: ["LGPD", "ANPD", "Startups", "Regulamentação"],
    source: "ANPD (site oficial)",
    sourceUrl:
      "https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022",
  },
  {
    id: "irlanda-multa-instagram-gdpr",
    slug: "irlanda-multa-instagram-gdpr",
    title: "Irlanda multa o Instagram em € 405 milhões por exposição de dados de menores",
    summary:
      "A autoridade irlandesa de proteção de dados (DPC) aplicou uma multa recorde de € 405 milhões ao Instagram por permitir que contas comerciais de adolescentes de 13 a 17 anos exibissem publicamente telefone e e-mail. A investigação, iniciada em 2020, resultou em uma das maiores penalidades já aplicadas sob o GDPR europeu.",
    relevance:
      "Mostra o custo real do descumprimento de regras de privacidade para plataformas que lidam com dados de menores, referência direta para quem trabalha com governança e privacidade de dados.",
    publishedAt: "2022-09-05",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Data Privacy", "Regulamentação"],
    tags: ["Meta", "Instagram", "GDPR", "Irlanda DPC"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2022/09/05/instagram-gdpr-fine-childrens-privacy/",
  },
  {
    id: "uber-invasao-lapsus-2022",
    slug: "uber-invasao-lapsus-2022",
    title: "Uber sofre invasão que compromete sistemas internos após ataque de engenharia social",
    summary:
      "Um hacker de 18 anos, ligado ao grupo Lapsus$, obteve acesso administrativo a sistemas internos da Uber, incluindo Slack, AWS, Google Workspace e VMware, após enganar um funcionário via engenharia social. A empresa precisou tirar sistemas internos do ar durante a investigação do incidente.",
    relevance:
      "Exemplo emblemático de como falhas de segurança em credenciais e identidade podem expor toda a infraestrutura de dados corporativa, mesmo sem uso de malware sofisticado.",
    publishedAt: "2022-09-16",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Data Privacy"],
    tags: ["Uber", "Vazamento de Dados", "Segurança", "Lapsus$"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2022/09/16/uber-internal-network-hack/",
  },
  {
    id: "databricks-lider-gartner-2022",
    slug: "databricks-lider-gartner-2022",
    title: "Databricks é nomeada líder no Magic Quadrant de Bancos de Dados em Nuvem do Gartner",
    summary:
      "O Gartner posicionou a Databricks como líder no Magic Quadrant 2022 para Sistemas de Gerenciamento de Banco de Dados em Nuvem, reconhecendo tanto a capacidade de execução quanto a visão da plataforma de lakehouse. Outros players como AWS, Google e Cloudera também apareceram como líderes no mesmo relatório.",
    relevance:
      "Reforça a legitimidade da arquitetura de lakehouse como alternativa consolidada aos data warehouses tradicionais na visão de analistas de mercado.",
    publishedAt: "2022-12-16",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Mercado", "Data Platforms"],
    tags: ["Databricks", "Gartner", "Cloud Database", "Lakehouse"],
    source: "Databricks (blog oficial)",
    sourceUrl: "https://www.databricks.com/blog/2022/12/16/databricks-named-leader-2022-gartner-magic-quadrant-cloud-database-management",
  },
  {
    id: "mongodb-queryable-encryption-preview",
    slug: "mongodb-queryable-encryption-preview",
    title: "MongoDB lança a prévia da Queryable Encryption",
    summary:
      "No MongoDB World 2022, a MongoDB apresentou a prévia da Queryable Encryption, recurso que permite consultar dados totalmente criptografados no lado do cliente sem precisar descriptografá-los no servidor. Inicialmente o recurso suportava consultas de igualdade, com planos de expandir para intervalos e substrings.",
    relevance:
      "Abre caminho para aplicações consultarem dados sensíveis criptografados sem expor texto plano ao banco, relevante para times que lidam com dados regulados ou pessoais.",
    publishedAt: "2022-06-07",
    verifiedAt: "2026-09-18",
    year: 2022,
    category: ["Bancos de Dados", "Data Privacy"],
    tags: ["MongoDB", "Queryable Encryption", "Criptografia", "NoSQL"],
    source: "MongoDB (blog oficial)",
    sourceUrl: "https://www.mongodb.com/company/blog/product-release-announcements/mongodb-releases-queryable-encryption-preview",
  },

  // ===== 2023 =====
  {
    id: "openai-lanca-gpt-4",
    slug: "openai-lanca-gpt-4",
    title: "OpenAI lança o GPT-4, elevando o patamar dos modelos de linguagem multimodais",
    summary:
      "A OpenAI apresentou o GPT-4, seu modelo de linguagem capaz de processar texto e imagens, disponibilizado inicialmente via ChatGPT Plus e por lista de espera na API. O modelo passou a ser usado por empresas como Stripe, Duolingo e Morgan Stanley logo no lançamento.",
    relevance:
      "Marcou a virada do mercado de dados e software para a corrida de IA generativa, influenciando diretamente ferramentas de BI, análise e automação lançadas ao longo do ano.",
    publishedAt: "2023-03-14",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["OpenAI", "GPT-4", "LLM", "Multimodal"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2023/03/14/openai-releases-gpt-4-ai-that-it-claims-is-state-of-the-art/",
  },
  {
    id: "salesforce-einstein-gpt",
    slug: "salesforce-einstein-gpt",
    title: "Salesforce lança Einstein GPT, IA generativa integrada ao CRM",
    summary:
      "A Salesforce anunciou o Einstein GPT, combinando modelos próprios com tecnologia da OpenAI para gerar automaticamente e-mails, respostas de atendimento e código a partir de dados de clientes armazenados na plataforma. A empresa também criou um fundo de US$ 250 milhões para investir em startups de IA generativa.",
    relevance:
      "Mostra como fornecedores de CRM e analytics passaram a embutir IA generativa diretamente nos fluxos de trabalho de dados corporativos já em 2023.",
    publishedAt: "2023-03-07",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Inteligência Artificial", "Business Intelligence"],
    tags: ["Salesforce", "Einstein GPT", "CRM", "OpenAI"],
    source: "Salesforce (comunicado oficial)",
    sourceUrl: "https://www.salesforce.com/news/press-releases/2023/03/07/einstein-generative-ai/",
  },
  {
    id: "tableau-einstein-gpt",
    slug: "tableau-einstein-gpt",
    title: "Tableau anuncia recursos de IA generativa com Einstein GPT",
    summary:
      "A Salesforce anunciou novas funcionalidades para o Tableau apoiadas em IA generativa, incluindo geração automática de narrativas a partir dos dados (Data Stories), integração com Slack e personalização de dashboards por perfil de usuário.",
    relevance:
      "Ilustra a tendência de 2023 de inserir linguagem natural e narrativas automáticas em ferramentas de BI tradicionais, tema central para quem trabalha com Analytics Engineering e dashboards.",
    publishedAt: "2023-03-15",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Business Intelligence", "Data Analytics"],
    tags: ["Tableau", "Einstein GPT", "Data Stories", "BI"],
    source: "Salesforce (comunicado oficial)",
    sourceUrl: "https://www.salesforce.com/news/stories/tableau-visualization-news-23-1/",
    related: { trackSlugs: ["business-intelligence"] },
  },
  {
    id: "pinecone-serie-b",
    slug: "pinecone-serie-b",
    title: "Pinecone capta US$ 100 milhões em rodada Série B para seu banco de dados vetorial",
    summary:
      "A Pinecone anunciou uma rodada Série B de US$ 100 milhões, liderada pela Andreessen Horowitz, avaliando a empresa em US$ 750 milhões. A captação refletiu a demanda crescente por bancos de dados vetoriais para sustentar aplicações de IA generativa com clientes como Shopify e HubSpot.",
    relevance:
      "Marca a consolidação dos bancos vetoriais como categoria de infraestrutura essencial para RAG e busca semântica, um dos temas técnicos mais quentes de 2023 em engenharia de dados.",
    publishedAt: "2023-04-26",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Bancos de Dados", "Mercado"],
    tags: ["Pinecone", "Vetores", "Vector Database", "Funding"],
    source: "Pinecone (blog oficial)",
    sourceUrl: "https://www.pinecone.io/blog/series-b/",
  },
  {
    id: "microsoft-anuncia-fabric",
    slug: "microsoft-anuncia-fabric",
    title: "Microsoft anuncia o Microsoft Fabric, plataforma unificada de dados e analytics",
    summary:
      "Durante o Microsoft Build 2023, a Microsoft apresentou o Fabric, unificando Power BI, Data Factory, Synapse e um data lake compartilhado (OneLake) em uma única plataforma SaaS de análise de dados. Satya Nadella chamou o lançamento de o maior lançamento de produto de dados da empresa desde o SQL Server.",
    relevance:
      "Reorganiza o mercado de data warehouse/lakehouse corporativo ao consolidar engenharia de dados, integração e BI em uma superfície única, afetando diretamente quem trabalha com stacks Microsoft/Azure.",
    publishedAt: "2023-05-23",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Data Engineering", "Cloud"],
    tags: ["Microsoft Fabric", "Power BI", "Data Lake", "Synapse"],
    source: "Microsoft Azure (blog oficial)",
    sourceUrl: "https://azure.microsoft.com/en-us/blog/introducing-microsoft-fabric-data-analytics-for-the-era-of-ai/",
    featured: true,
  },
  {
    id: "snowflake-adquire-neeva",
    slug: "snowflake-adquire-neeva",
    title: "Snowflake adquire a startup de busca Neeva por cerca de US$ 185 milhões",
    summary:
      "A Snowflake anunciou a aquisição da Neeva, startup de busca fundada por ex-executivos do Google, dias depois de a própria Neeva encerrar seu produto de busca ao consumidor. O objetivo é trazer busca conversacional baseada em IA generativa para dentro da Data Cloud.",
    relevance:
      "Exemplifica o movimento de fornecedores de data warehouse comprando tecnologia de IA para tornar a exploração de dados mais acessível a usuários não técnicos.",
    publishedAt: "2023-05-24",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Data Platforms", "Mercado"],
    tags: ["Snowflake", "Neeva", "Busca", "IA Generativa"],
    source: "Snowflake (blog oficial)",
    sourceUrl: "https://www.snowflake.com/en/blog/snowflake-acquires-neeva-to-accelerate-search-in-the-data-cloud-through-generative-ai/",
  },
  {
    id: "databricks-compra-mosaicml",
    slug: "databricks-compra-mosaicml",
    title: "Databricks compra a MosaicML por US$ 1,3 bilhão para acelerar IA generativa própria",
    summary:
      "A Databricks anunciou a aquisição da MosaicML, criadora dos modelos abertos MPT, por aproximadamente US$ 1,3 bilhão. A combinação visa permitir que empresas treinem e personalizem seus próprios modelos de linguagem usando dados internos, sem depender exclusivamente de fornecedores fechados.",
    relevance:
      "Uma das maiores aquisições do ano no setor de dados/IA, consolidando a estratégia de \"lakehouse para IA\" da Databricks e pressionando concorrentes como Snowflake.",
    publishedAt: "2023-06-26",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Inteligência Artificial", "Mercado"],
    tags: ["Databricks", "MosaicML", "LLM", "Aquisição"],
    source: "Databricks (comunicado oficial)",
    sourceUrl:
      "https://www.databricks.com/company/newsroom/press-releases/databricks-signs-definitive-agreement-acquire-mosaicml-leading-generative-ai-platform",
  },
  {
    id: "moveit-vazamento-massivo-2023",
    slug: "moveit-vazamento-massivo-2023",
    title: "Ataque em massa explorando falha no MOVEit expõe dados de milhões de pessoas",
    summary:
      "O grupo de ransomware Clop explorou uma vulnerabilidade de injeção SQL no software de transferência de arquivos MOVEit, da Progress Software, comprometendo dados pessoais de mais de 15 milhões de pessoas em dezenas de organizações, incluindo órgãos governamentais dos EUA.",
    relevance:
      "Reforça para profissionais de dados a importância de governança e segurança em pipelines de transferência de arquivos, um ponto cego comum em arquiteturas de dados corporativas.",
    publishedAt: "2023-06-29",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Data Privacy", "Infraestrutura"],
    tags: ["MOVEit", "Clop", "Vazamento de Dados", "Cibersegurança"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2023/06/29/millions-affected-moveit-mass-hacks/",
    related: { trackSlugs: ["sql"] },
  },
  {
    id: "anthropic-lanca-claude-2",
    slug: "anthropic-lanca-claude-2",
    title: "Anthropic lança o Claude 2, com janela de contexto de 100 mil tokens",
    summary:
      "A Anthropic lançou o Claude 2, disponível via API e por um novo site público em beta (claude.ai), com melhorias em raciocínio, código e matemática em relação à versão anterior. O modelo passou a suportar janelas de contexto de até 100 mil tokens, bem maiores que as oferecidas pela concorrência na época.",
    relevance:
      "Ampliou as opções de LLMs de nível empresarial disponíveis para produtos de dados e análise que dependiam, até então, quase exclusivamente da OpenAI.",
    publishedAt: "2023-07-11",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Inteligência Artificial"],
    tags: ["Anthropic", "Claude 2", "LLM", "Contexto Longo"],
    source: "Anthropic (comunicado oficial)",
    sourceUrl: "https://www.anthropic.com/news/claude-2",
  },
  {
    id: "meta-lanca-llama-2",
    slug: "meta-lanca-llama-2",
    title: "Meta lança o Llama 2 em parceria com a Microsoft, liberando uso comercial",
    summary:
      "A Meta disponibilizou o Llama 2, modelo de linguagem em três tamanhos (7B, 13B e 70B parâmetros), liberado gratuitamente para uso em pesquisa e comercial, em parceria com a Microsoft para distribuição via Azure. O modelo foi treinado com o dobro do volume de dados da primeira versão do Llama.",
    relevance:
      "Foi um marco para a IA open source, dando a equipes de dados e engenharia de ML uma alternativa viável a modelos proprietários para treinar e customizar aplicações próprias.",
    publishedAt: "2023-07-18",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Inteligência Artificial", "Open Source"],
    tags: ["Meta", "Llama 2", "Open Source", "Microsoft Azure"],
    source: "Meta AI (blog oficial)",
    sourceUrl: "https://ai.meta.com/blog/llama-2/",
  },
  {
    id: "snowflake-unifica-iceberg-2023",
    slug: "snowflake-unifica-iceberg-2023",
    title: "Snowflake unifica suporte a tabelas Apache Iceberg em sua Data Cloud",
    summary:
      "A Snowflake anunciou a unificação de suas tabelas externas Iceberg e tabelas Iceberg nativas em um único tipo de tabela, permitindo tanto leitura/escrita gerenciadas pela Snowflake quanto interoperabilidade com motores externos do ecossistema Iceberg.",
    relevance:
      "Reflete a consolidação do Apache Iceberg como padrão de formato de tabela aberto para arquiteturas lakehouse, tema central de engenharia de dados em 2023.",
    publishedAt: "2023-08-31",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Data Engineering", "Data Platforms"],
    tags: ["Snowflake", "Apache Iceberg", "Lakehouse", "Data Lake"],
    source: "Snowflake (blog oficial)",
    sourceUrl: "https://www.snowflake.com/en/blog/unifying-iceberg-tables/",
  },
  {
    id: "postgresql-16-lancado",
    slug: "postgresql-16-lancado",
    title: "PostgreSQL 16 é lançado com ganhos de performance em paralelismo e replicação",
    summary:
      "O PostgreSQL 16 foi lançado com paralelização de consultas com FULL e RIGHT JOIN, melhorias de até 300% em cargas via COPY e suporte a SIMD em x86 e ARM para acelerar processamento de strings e JSON. A versão também trouxe avanços em replicação lógica e novas opções de controle de acesso.",
    relevance:
      "Reforça a posição do PostgreSQL como banco de dados open source de referência, usado como base por diversos serviços gerenciados de nuvem e ferramentas de dados modernas.",
    publishedAt: "2023-09-14",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Bancos de Dados", "Open Source"],
    tags: ["PostgreSQL", "SQL", "Performance", "Replicação"],
    source: "PostgreSQL Global Development Group (postgresql.org)",
    sourceUrl: "https://www.postgresql.org/about/news/postgresql-16-released-2715/",
    related: { articleIds: ["ctes-recursivas-sql"], trackSlugs: ["sql"] },
  },
  {
    id: "amazon-bedrock-ga",
    slug: "amazon-bedrock-ga",
    title: "Amazon Bedrock chega à disponibilidade geral na AWS",
    summary:
      "A AWS tornou o Amazon Bedrock geralmente disponível, oferecendo acesso via API única a modelos de fundação da Amazon, Anthropic, AI21 Labs, Cohere e Stability AI, com o Llama 2 da Meta chegando em seguida. O serviço também passou a permitir a criação de agentes capazes de executar tarefas de múltiplas etapas.",
    relevance:
      "Consolidou a estratégia da AWS de oferecer IA generativa \"as a service\" multi-modelo, tornando-se peça central de infraestrutura para times de dados que constroem aplicações de IA na nuvem.",
    publishedAt: "2023-09-28",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Cloud", "Inteligência Artificial"],
    tags: ["AWS", "Amazon Bedrock", "Foundation Models", "Anthropic"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2023/09/28/amazon-launches-its-bedrock-generative-ai-service-in-general-availability/",
  },
  {
    id: "anpd-nota-tecnica-pl-ia-2023",
    slug: "anpd-nota-tecnica-pl-ia-2023",
    title: "ANPD publica nota técnica sobre o projeto de lei que regula a IA no Brasil",
    summary:
      "A Autoridade Nacional de Proteção de Dados (ANPD) divulgou a Nota Técnica nº 16/2023/CGTP/ANPD, sua segunda análise do PL 2338/2023 (marco legal da IA no Brasil), propondo um novo modelo institucional de fiscalização e apontando sete pontos de interseção e conflito com a LGPD.",
    relevance:
      "Mostra o avanço da regulação de IA no Brasil em paralelo à LGPD, tema direto para quem lida com governança e privacidade de dados em produtos que usam IA no país.",
    publishedAt: "2023-10-24",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Regulamentação", "Data Governance"],
    tags: ["ANPD", "PL 2338/2023", "LGPD", "Regulação de IA"],
    source: "FGV Direito - Regulação em Números",
    sourceUrl: "https://regulacaoemnumeros-direitorio.fgv.br/post/anpd-publica-segunda-analise-do-projeto-de-lei-sobre-inteligencia-artificial",
  },
  {
    id: "nvidia-receita-data-center-2023",
    slug: "nvidia-receita-data-center-2023",
    title: "Receita de data center da Nvidia salta 279% impulsionada pela demanda por GPUs de IA",
    summary:
      "A Nvidia reportou receita recorde de US$ 14,51 bilhões em data center no terceiro trimestre fiscal de 2024, alta de 279% em relação ao ano anterior, impulsionada pela demanda por GPUs como a H100 para treinar modelos de IA generativa.",
    relevance:
      "Evidencia como a explosão de projetos de IA generativa em 2023 se traduziu diretamente em demanda por infraestrutura de GPU, um gargalo relevante para quem planeja capacidade de treinamento de modelos.",
    publishedAt: "2023-11-21",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Infraestrutura", "Mercado"],
    tags: ["Nvidia", "H100", "GPU", "Data Center"],
    source: "Nvidia (comunicado oficial)",
    sourceUrl: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2024",
  },
  {
    id: "mongodb-atlas-vector-search-ga",
    slug: "mongodb-atlas-vector-search-ga",
    title: "MongoDB Atlas Vector Search chega à disponibilidade geral",
    summary:
      "A MongoDB anunciou a disponibilidade geral do Atlas Vector Search, permitindo combinar busca vetorial com dados operacionais em uma única API, e do Atlas Search Nodes, que isola workloads de busca para até 60% mais velocidade em consultas.",
    relevance:
      "Mostra bancos de dados operacionais tradicionais incorporando capacidades vetoriais nativas, reduzindo a necessidade de manter um banco vetorial separado para aplicações de IA.",
    publishedAt: "2023-12-04",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Bancos de Dados", "Machine Learning"],
    tags: ["MongoDB", "Vector Search", "RAG", "Busca Semântica"],
    source: "MongoDB (comunicado oficial)",
    sourceUrl:
      "https://www.mongodb.com/company/newsroom/press-releases/mongo-db-announces-general-availability-of-new-capabilities-to-power-next-generation-apps",
  },
  {
    id: "23andme-vazamento-2023",
    slug: "23andme-vazamento-2023",
    title: "23andMe confirma que hackers acessaram dados de 6,9 milhões de usuários",
    summary:
      "A empresa de testes genéticos 23andMe confirmou que invasores usaram credenciais reaproveitadas de outros vazamentos (credential stuffing) para acessar contas e, por meio do recurso DNA Relatives, obter dados de parentesco, ancestralidade e localização de cerca de 6,9 milhões de usuários.",
    relevance:
      "Caso emblemático de como falhas de autenticação em um pequeno grupo de contas podem expor dados sensíveis de milhões de pessoas conectadas, ponto crítico para quem projeta modelos de dados relacionais/sociais.",
    publishedAt: "2023-12-04",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Data Privacy"],
    tags: ["23andMe", "Vazamento de Dados", "Credential Stuffing", "Dados Genômicos"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2023/12/04/23andme-confirms-hackers-stole-ancestry-data-on-6-9-million-users/",
  },
  {
    id: "google-apresenta-gemini",
    slug: "google-apresenta-gemini",
    title: "Google apresenta o Gemini, seu modelo de IA multimodal mais avançado",
    summary:
      "O Google apresentou o Gemini, descrito como seu modelo de IA mais capaz e flexível, construído desde o início para ser multimodal (texto, código, áudio, imagem e vídeo) e disponível em três tamanhos: Ultra, Pro e Nano. A versão Pro passou a alimentar o Bard, enquanto a Nano foi otimizada para dispositivos móveis.",
    relevance:
      "Foi a resposta mais direta do Google ao GPT-4 da OpenAI, redefinindo a disputa por modelos de fundação multimodais que sustentam produtos de análise e assistentes de dados.",
    publishedAt: "2023-12-06",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Inteligência Artificial"],
    tags: ["Google", "Gemini", "Multimodal", "Bard"],
    source: "Google (blog oficial)",
    sourceUrl: "https://blog.google/technology/ai/google-gemini-ai/",
  },
  {
    id: "eu-ai-act-acordo-politico-2023",
    slug: "eu-ai-act-acordo-politico-2023",
    title: "União Europeia fecha acordo político sobre o AI Act",
    summary:
      "Após negociações que se estenderam por quase três dias, o Conselho e o Parlamento Europeu chegaram a um acordo político provisório sobre o AI Act, primeira lei abrangente do mundo para regular inteligência artificial por níveis de risco. O texto prevê obrigações de transparência para sistemas de propósito geral e multas de até 7% do faturamento global para infrações graves.",
    relevance:
      "Estabeleceu o marco regulatório que hoje molda como empresas de dados e IA precisam documentar, avaliar riscos e reportar o uso de modelos de IA na Europa.",
    publishedAt: "2023-12-09",
    verifiedAt: "2026-09-18",
    year: 2023,
    category: ["Regulamentação", "Data Governance"],
    tags: ["EU AI Act", "Regulação de IA", "União Europeia", "Governança"],
    source: "Conselho da União Europeia (comunicado oficial)",
    sourceUrl:
      "https://www.consilium.europa.eu/en/press/press-releases/2023/12/09/artificial-intelligence-act-council-and-parliament-strike-a-deal-on-the-first-worldwide-rules-for-ai/",
  },

  // ===== 2024 =====
  {
    id: "databricks-adquire-tabular",
    slug: "databricks-adquire-tabular",
    title: "Databricks anuncia aquisição da Tabular, empresa dos criadores do Apache Iceberg",
    summary:
      "A Databricks anunciou acordo para adquirir a Tabular, startup fundada pelos criadores originais do Apache Iceberg, em um negócio avaliado em mais de US$ 1 bilhão. O objetivo declarado é aproximar os formatos abertos Delta Lake e Iceberg, hoje concorrentes no mercado de lakehouse.",
    relevance:
      "Sinaliza a consolidação do Apache Iceberg como padrão de fato para tabelas abertas em data lakes, tema central para quem trabalha com arquitetura de dados moderna.",
    publishedAt: "2024-06-04",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Data Engineering", "Data Platforms"],
    tags: ["Databricks", "Apache Iceberg", "Delta Lake", "Lakehouse", "Aquisição"],
    source: "Databricks (newsroom oficial)",
    sourceUrl:
      "https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-tabular-company-founded-original-creators",
    featured: true,
    related: { trackSlugs: ["engenharia-de-dados"], projectIds: ["data-lake-warehouse"] },
  },
  {
    id: "snowflake-polaris-catalog-open-source",
    slug: "snowflake-polaris-catalog-open-source",
    title: "Snowflake torna o Polaris Catalog open source sob licença Apache 2.0",
    summary:
      "A Snowflake liberou o código do Polaris Catalog, seu catálogo de metadados para tabelas Apache Iceberg, sob licença Apache 2.0, permitindo que qualquer empresa hospede seu próprio catálogo sem ficar presa a um fornecedor. O projeto foi doado à Apache Software Foundation.",
    relevance:
      "Reduz o lock-in de fornecedores em arquiteturas lakehouse e mostra a disputa entre Snowflake e Databricks pela definição dos padrões abertos do setor.",
    publishedAt: "2024-07-30",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Data Engineering", "Open Source"],
    tags: ["Apache Iceberg", "Polaris Catalog", "Snowflake", "Data Catalog"],
    source: "Snowflake (blog oficial)",
    sourceUrl: "https://www.snowflake.com/en/blog/polaris-catalog-open-source/",
  },
  {
    id: "eu-ai-act-aprovacao-final-2024",
    slug: "eu-ai-act-aprovacao-final-2024",
    title: "Conselho da União Europeia dá aprovação final ao AI Act",
    summary:
      "O Conselho da UE deu o aval final ao AI Act, primeira lei abrangente do mundo para regular inteligência artificial, com regras proporcionais ao risco que um sistema representa. O texto entrou em vigor em agosto de 2024, com obrigações escalonadas nos anos seguintes.",
    relevance:
      "Estabelece o primeiro arcabouço regulatório amplo para IA no mundo, com impacto direto em como empresas de dados e IA precisam documentar, avaliar riscos e governar seus modelos.",
    publishedAt: "2024-05-21",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Regulamentação", "Data Governance"],
    tags: ["EU AI Act", "Regulação", "União Europeia", "Governança de IA"],
    source: "Conselho da União Europeia (comunicado oficial)",
    sourceUrl:
      "https://www.consilium.europa.eu/en/press/press-releases/2024/05/21/artificial-intelligence-ai-act-council-gives-final-green-light-to-the-first-worldwide-rules-on-ai/",
  },
  {
    id: "aws-s3-tables-iceberg",
    slug: "aws-s3-tables-iceberg",
    title: "AWS lança o Amazon S3 Tables, com suporte nativo a Apache Iceberg",
    summary:
      "Durante o AWS re:Invent 2024, a AWS anunciou o Amazon S3 Tables, um novo tipo de bucket otimizado para armazenar tabelas Apache Iceberg com desempenho de consulta até 3x mais rápido. É o primeiro object storage de nuvem com suporte nativo ao formato Iceberg.",
    relevance:
      "Mostra a AWS respondendo à adoção maciça do Iceberg, facilitando lakehouses diretamente sobre o S3 sem camadas adicionais de gerenciamento.",
    publishedAt: "2024-12-03",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Cloud", "Data Engineering"],
    tags: ["AWS", "Apache Iceberg", "Amazon S3", "re:Invent"],
    source: "AWS (blog oficial)",
    sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2024/12/amazon-s3-tables-apache-iceberg-tables-analytics-workloads",
  },
  {
    id: "anthropic-claude-3-5-sonnet",
    slug: "anthropic-claude-3-5-sonnet",
    title: "Anthropic lança o Claude 3.5 Sonnet",
    summary:
      "A Anthropic lançou o Claude 3.5 Sonnet, modelo que superou o antigo topo de linha Claude 3 Opus em diversos benchmarks, disponibilizado gratuitamente no Claude.ai e no aplicativo iOS, com limites maiores para assinantes Pro e Team.",
    relevance:
      "Marca um salto de capacidade em modelos de linguagem usados para análise de dados, geração de código e automação, ampliando o uso prático de IA em fluxos de trabalho de dados.",
    publishedAt: "2024-06-21",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["Anthropic", "Claude", "LLM", "IA Generativa"],
    source: "Anthropic (blog oficial)",
    sourceUrl: "https://www.anthropic.com/news/claude-3-5-sonnet",
  },
  {
    id: "duckdb-1-0-estavel",
    slug: "duckdb-1-0-estavel",
    title: "DuckDB atinge a versão estável 1.0",
    summary:
      "O projeto DuckDB anunciou a versão 1.0.0, com foco em estabilidade do formato de arquivo, do dialeto SQL e da API C, encerrando o período em que atualizações exigiam migração de arquivos entre versões. O lançamento foi apelidado de \"Snow Duck\".",
    relevance:
      "Consolida o DuckDB como banco analítico embarcado confiável para produção, muito usado em engenharia de dados local e pipelines leves de analytics.",
    publishedAt: "2024-06-03",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Bancos de Dados", "Data Engineering"],
    tags: ["DuckDB", "OLAP", "Open Source", "Analytics Engineering"],
    source: "DuckDB (blog oficial)",
    sourceUrl: "https://duckdb.org/2024/06/03/announcing-duckdb-100",
  },
  {
    id: "postgresql-17-lancado",
    slug: "postgresql-17-lancado",
    title: "PostgreSQL 17 é lançado com melhorias de performance e memória",
    summary:
      "O PostgreSQL 17 foi lançado com um novo sistema de gerenciamento de memória para o VACUUM, reduzindo consumo de memória e melhorando o desempenho de manutenção do banco, além de outras melhorias de replicação e particionamento.",
    relevance:
      "O PostgreSQL segue como base para grande parte da infraestrutura de dados transacionais e analíticos do mercado, incluindo extensões de IA como pgvector.",
    publishedAt: "2024-09-26",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Bancos de Dados", "Open Source"],
    tags: ["PostgreSQL", "Banco de Dados", "Open Source", "Performance"],
    source: "PostgreSQL Global Development Group (comunicado oficial)",
    sourceUrl: "https://www.postgresql.org/about/news/postgresql-17-released-2936/",
    related: { articleIds: ["ctes-recursivas-sql"], trackSlugs: ["sql"] },
  },
  {
    id: "meta-lanca-llama-3",
    slug: "meta-lanca-llama-3",
    title: "Meta lança o Llama 3, seu modelo de linguagem aberto mais capaz até então",
    summary:
      "A Meta lançou o Llama 3 em versões de 8 bilhões e 70 bilhões de parâmetros, treinado com cerca de 15 trilhões de tokens, disponibilizando os modelos em provedores como AWS, Databricks, Google Cloud e Microsoft Azure.",
    relevance:
      "Reforça a corrida por modelos abertos competitivos com os proprietários, ampliando opções para times de dados que querem rodar LLMs com mais controle sobre custo e privacidade.",
    publishedAt: "2024-04-18",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["Meta", "Llama 3", "LLM", "Open Source"],
    source: "Meta AI (blog oficial)",
    sourceUrl: "https://ai.meta.com/blog/meta-llama-3/",
  },
  {
    id: "national-public-data-vazamento",
    slug: "national-public-data-vazamento",
    title: "National Public Data confirma vazamento com bilhões de registros pessoais",
    summary:
      "A corretora de dados National Public Data confirmou publicamente um vazamento massivo, reconhecendo incidentes em abril e no verão de 2024, associados a um invasor que teria acessado seus sistemas desde dezembro de 2023. Dados como nomes, números de seguro social e endereços foram expostos.",
    relevance:
      "Um dos maiores vazamentos de dados pessoais já registrados, ilustrando os riscos de empresas que acumulam grandes volumes de dados sensíveis sem governança adequada.",
    publishedAt: "2024-08-16",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Data Privacy", "Data Governance"],
    tags: ["Vazamento de Dados", "National Public Data", "Privacidade", "Segurança"],
    source: "BleepingComputer",
    sourceUrl: "https://www.bleepingcomputer.com/news/security/national-public-data-confirms-breach-exposing-social-security-numbers/",
  },
  {
    id: "openai-gpt-4o",
    slug: "openai-gpt-4o",
    title: "OpenAI apresenta o GPT-4o, modelo multimodal em tempo real",
    summary:
      "A OpenAI lançou o GPT-4o (\"omni\"), capaz de processar texto, áudio e imagem de forma nativa e responder por voz quase em tempo real, disponibilizado gradualmente via API e ChatGPT. Recursos de voz completos chegaram em julho de 2024.",
    relevance:
      "Reduz a barreira de latência e custo para aplicações de IA conversacional multimodal, algo relevante para produtos que combinam dados, voz e visão computacional.",
    publishedAt: "2024-05-13",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["OpenAI", "GPT-4o", "Multimodalidade", "IA Generativa"],
    source: "OpenAI (blog oficial)",
    sourceUrl: "https://openai.com/index/hello-gpt-4o/",
  },
  {
    id: "nvidia-blackwell-2024",
    slug: "nvidia-blackwell-2024",
    title: "Nvidia apresenta a arquitetura de GPUs Blackwell",
    summary:
      "Durante o GTC 2024, a Nvidia revelou a arquitetura Blackwell e os chips B100, B200 e o superchip GB200, prometendo até 4x mais desempenho que a geração Hopper para cargas de treinamento e inferência de IA.",
    relevance:
      "Define o próximo patamar de hardware para treinar e servir modelos de IA em escala, impactando diretamente custo e capacidade de infraestrutura de dados/IA das empresas.",
    publishedAt: "2024-03-18",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Infraestrutura", "Inteligência Artificial"],
    tags: ["Nvidia", "GPU", "Blackwell", "Infraestrutura de IA"],
    source: "Nvidia (newsroom oficial)",
    sourceUrl: "https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing",
  },
  {
    id: "dbt-labs-coalesce-2024",
    slug: "dbt-labs-coalesce-2024",
    title: "dbt Labs lança dbt Copilot e suporte a Iceberg na conferência Coalesce 2024",
    summary:
      "Na Coalesce 2024, a dbt Labs anunciou o dbt Copilot (assistente de IA para gerar testes, documentação e modelos semânticos), o dbt Mesh para colaboração entre plataformas de dados distintas, e suporte a tabelas Apache Iceberg em múltiplos engines.",
    relevance:
      "Mostra a IA generativa chegando ao dia a dia da engenharia analítica (analytics engineering), automatizando tarefas repetitivas de modelagem e documentação em SQL.",
    publishedAt: "2024-10-08",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Data Engineering"],
    tags: ["dbt Labs", "dbt Copilot", "dbt Mesh", "Apache Iceberg", "Coalesce"],
    source: "dbt Labs (blog oficial)",
    sourceUrl: "https://www.getdbt.com/blog/coalesce-2024-product-announcements",
  },
  {
    id: "redis-licenciamento-source-available",
    slug: "redis-licenciamento-source-available",
    title: "Redis abandona a licença open source BSD e adota licenciamento \"source-available\"",
    summary:
      "A partir da versão 7.4, o Redis passou a ser distribuído sob as licenças RSALv2 e SSPLv1, deixando de ser open source segundo a definição da OSI, principalmente para impedir que provedores de nuvem revendam o software como serviço sem contrato comercial. A mudança gerou uma fork da comunidade, o Valkey, sob a Linux Foundation.",
    relevance:
      "Reacende o debate sobre sustentabilidade financeira de projetos open source usados em infraestrutura de dados crítica, e força empresas a reavaliar fornecedores e forks.",
    publishedAt: "2024-03-20",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Bancos de Dados", "Open Source"],
    tags: ["Redis", "Licenciamento", "Open Source", "Valkey"],
    source: "Redis (blog oficial)",
    sourceUrl: "https://redis.io/blog/redis-adopts-dual-source-available-licensing/",
  },
  {
    id: "databricks-lanca-dbrx",
    slug: "databricks-lanca-dbrx",
    title: "Databricks lança o DBRX, modelo de linguagem aberto de mistura de especialistas",
    summary:
      "A Databricks lançou o DBRX, um modelo aberto de 132 bilhões de parâmetros com arquitetura de mistura de especialistas (mixture-of-experts), afirmando superar outros modelos abertos como Llama 2 e Mixtral em benchmarks padrão. O modelo foi desenvolvido pelo time Mosaic Research, herdado da aquisição da MosaicML.",
    relevance:
      "Reforça a estratégia da Databricks de oferecer ferramentas de IA generativa integradas à sua plataforma de dados, competindo diretamente com Snowflake nesse espaço.",
    publishedAt: "2024-03-27",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["Databricks", "DBRX", "LLM", "Open Source", "Mixture of Experts"],
    source: "Databricks (via PR Newswire)",
    sourceUrl: "https://www.prnewswire.com/news-releases/databricks-launches-dbrx-a-new-standard-for-efficient-open-source-models-302100601.html",
  },
  {
    id: "gartner-mq-bi-2024",
    slug: "gartner-mq-bi-2024",
    title: "Microsoft e Tableau são nomeados líderes no Gartner Magic Quadrant de BI 2024",
    summary:
      "O relatório Gartner Magic Quadrant 2024 para plataformas de Analytics e BI posicionou Microsoft, Salesforce (Tableau), Google, Qlik, Oracle e ThoughtSpot como líderes, com Microsoft completando 17 anos consecutivos na liderança e Tableau, 12 anos.",
    relevance:
      "É a principal referência de mercado que profissionais de BI usam para comparar ferramentas, e reflete a crescente exigência de recursos de IA generativa embutidos em produtos de analytics.",
    publishedAt: "2024-06-20",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Business Intelligence", "Mercado"],
    tags: ["Gartner", "Power BI", "Tableau", "Business Intelligence"],
    source: "Microsoft (blog oficial Power BI)",
    sourceUrl: "https://powerbi.microsoft.com/en-us/blog/microsoft-named-a-leader-in-the-2024-gartner-magic-quadrant-for-analytics-and-bi-platforms/",
    related: { trackSlugs: ["business-intelligence"] },
  },
  {
    id: "confluent-adquire-warpstream",
    slug: "confluent-adquire-warpstream",
    title: "Confluent adquire a WarpStream para expandir streaming de dados \"traga sua própria nuvem\"",
    summary:
      "A Confluent anunciou a aquisição da WarpStream, startup que reimplementou um serviço compatível com Kafka rodando diretamente sobre object storage, para acelerar sua oferta de streaming de dados no modelo \"traga sua própria nuvem\" (BYOC).",
    relevance:
      "Reflete a tendência de simplificar e baratear infraestrutura de streaming baseada em Kafka, usando armazenamento em nuvem no lugar de discos dedicados.",
    publishedAt: "2024-09-09",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Data Engineering", "Big Data"],
    tags: ["Confluent", "Apache Kafka", "WarpStream", "Streaming", "BYOC"],
    source: "Confluent (comunicado oficial)",
    sourceUrl: "https://www.confluent.io/press-release/confluent-acquires-warpstream-to-advance-next-gen-byoc-data-streaming/",
  },
  {
    id: "databricks-serie-j-2024",
    slug: "databricks-serie-j-2024",
    title: "Databricks capta US$ 10 bilhões em rodada Série J, atingindo valuation de US$ 62 bilhões",
    summary:
      "A Databricks anunciou uma rodada Série J de até US$ 10 bilhões, liderada pela Thrive Capital, elevando sua avaliação de US$ 43 bilhões (2023) para US$ 62 bilhões, citando crescimento de receita acima de 60% ano a ano impulsionado por IA.",
    relevance:
      "Uma das maiores rodadas de venture capital da história, evidenciando o apetite do mercado por plataformas que combinam dados e IA em um único produto.",
    publishedAt: "2024-12-17",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Mercado", "Data Platforms"],
    tags: ["Databricks", "Investimento", "Valuation", "IA"],
    source: "Databricks (newsroom oficial)",
    sourceUrl: "https://www.databricks.com/company/newsroom/press-releases/databricks-raising-10b-series-j-investment-62b-valuation",
  },
  {
    id: "anpd-suspende-meta-ia-2024",
    slug: "anpd-suspende-meta-ia-2024",
    title: "ANPD determina suspensão cautelar do uso de dados pessoais pela Meta para treinar IA",
    summary:
      "A Autoridade Nacional de Proteção de Dados determinou a suspensão imediata, no Brasil, da nova política de privacidade da Meta que permitia usar publicações de usuários para treinar modelos de IA, citando base legal inadequada e falta de transparência.",
    relevance:
      "Primeira ação concreta de um órgão regulador de proteção de dados no mundo bloqueando o treinamento de IA generativa com dados de uma rede social, um precedente para a aplicação da LGPD à IA.",
    publishedAt: "2024-07-02",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Data Privacy", "Regulamentação"],
    tags: ["ANPD", "LGPD", "Meta", "IA Generativa", "Proteção de Dados"],
    source: "ANPD (comunicado oficial)",
    sourceUrl: "https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-determina-suspensao-cautelar-do-tratamento-de-dados-pessoais-para-treinamento-da-ia-da-meta",
  },
  {
    id: "snowflake-vazamento-credenciais-2024",
    slug: "snowflake-vazamento-credenciais-2024",
    title: "Vazamento via credenciais roubadas em contas Snowflake atinge AT&T, Ticketmaster e outras empresas",
    summary:
      "Uma campanha de roubo de credenciais (sem exploração de vulnerabilidade na plataforma) permitiu que invasores acessassem contas de clientes da Snowflake que não usavam autenticação multifator, expondo dados da AT&T, Ticketmaster, Santander e outras mais de 160 organizações.",
    relevance:
      "Reforça que a segurança de plataformas de dados na nuvem depende fortemente da configuração do cliente (MFA, rotação de credenciais), não só do provedor.",
    publishedAt: "2024-07-12",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Data Privacy", "Bancos de Dados"],
    tags: ["Snowflake", "Vazamento de Dados", "Segurança", "AT&T", "Credential Stuffing"],
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2024/07/12/snowflake-shares-slip-after-att-says-hackers-accessed-data.html",
  },
  {
    id: "pgvector-07-lancado",
    slug: "pgvector-07-lancado",
    title: "pgvector 0.7 traz novos tipos de vetor e mais desempenho para busca vetorial no Postgres",
    summary:
      "A extensão pgvector 0.7.0 adicionou os tipos halfvec e sparsevec, suporte a índices para vetores binários, novas funções de distância e paralelismo na construção de índices HNSW, melhorando desempenho de busca por similaridade.",
    relevance:
      "Mostra o PostgreSQL se consolidando como alternativa viável a bancos vetoriais dedicados para aplicações de busca semântica e RAG (retrieval-augmented generation).",
    publishedAt: "2024-04-30",
    verifiedAt: "2026-09-18",
    year: 2024,
    category: ["Bancos de Dados", "Machine Learning"],
    tags: ["pgvector", "PostgreSQL", "Vector Database", "RAG"],
    source: "PostgreSQL Global Development Group (comunicado oficial)",
    sourceUrl: "https://www.postgresql.org/about/news/pgvector-070-released-2852",
    related: { trackSlugs: ["machine-learning"] },
  },

  // ===== 2025 =====
  {
    id: "databricks-serie-l-2025",
    slug: "databricks-serie-l-2025",
    title: "Databricks levanta mais de US$ 4 bilhões em rodada Série L e atinge valuation de US$ 134 bilhões",
    summary:
      "A Databricks anunciou uma rodada Série L acima de US$ 4 bilhões, liderada por Insight Partners, Fidelity e J.P. Morgan Asset Management, elevando seu valuation para US$ 134 bilhões. A empresa revelou taxa de receita recorrente acima de US$ 4,8 bilhões e mais de US$ 1 bilhão em receita anualizada só com produtos de IA.",
    relevance:
      "Mostra o apetite de investidores por plataformas de dados e IA corporativa, e reforça a posição da Databricks como referência em arquitetura lakehouse.",
    publishedAt: "2025-12-16",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Mercado", "Data Platforms"],
    tags: ["Databricks", "Funding", "Lakehouse", "IA"],
    source: "Databricks (blog oficial)",
    sourceUrl: "https://www.databricks.com/company/newsroom/press-releases/databricks-surpasses-4-8b-revenue-run-rate-growing-55-year-over-year",
  },
  {
    id: "snowflake-adquire-crunchy-data",
    slug: "snowflake-adquire-crunchy-data",
    title: "Snowflake anuncia aquisição da Crunchy Data para levar PostgreSQL enterprise à nuvem de IA",
    summary:
      "Durante o Snowflake Summit 2025, a empresa anunciou a intenção de adquirir a Crunchy Data, fornecedora de tecnologia PostgreSQL open source de nível empresarial. O objetivo é lançar o \"Snowflake Postgres\", combinando o banco transacional mais popular entre desenvolvedores com a governança e segurança da AI Data Cloud.",
    relevance:
      "Sinaliza a aposta das grandes plataformas de dados em bancos operacionais compatíveis com PostgreSQL como base para aplicações de IA e agentes.",
    publishedAt: "2025-06-02",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Bancos de Dados", "Mercado"],
    tags: ["Snowflake", "PostgreSQL", "Aquisição", "Cloud"],
    source: "Snowflake (blog oficial)",
    sourceUrl: "https://www.snowflake.com/en/news/press-releases/snowflake-acquires-crunchy-data-to-bring-enterprise-ready-postgres-offering-to-the-ai-data-cloud/",
    related: { trackSlugs: ["sql"] },
  },
  {
    id: "dbt-labs-fusion-engine",
    slug: "dbt-labs-fusion-engine",
    title: "dbt Labs lança o motor Fusion, reescrito em Rust, para acelerar o desenvolvimento analítico",
    summary:
      "A dbt Labs apresentou o Fusion, um novo motor construído em Rust com compreensão nativa de SQL, prometendo parsing até 30x mais rápido e orquestração sensível ao estado que executa apenas os modelos alterados. A empresa relata economia média de 10% em custos de computação para clientes early adopters.",
    relevance:
      "Redefine a experiência de desenvolvimento em Analytics Engineering, tema central para quem trabalha com dbt e pipelines analíticos modernos.",
    publishedAt: "2025-05-28",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Data Engineering", "Data Platforms"],
    tags: ["dbt", "Analytics Engineering", "Rust", "SQL"],
    source: "PR Newswire / dbt Labs",
    sourceUrl: "https://www.prnewswire.com/news-releases/dbt-labs-redefines-dbt-with-new-fusion-engine-built-to-revolutionize-developer-experience-in-the-age-of-ai-302466811.html",
  },
  {
    id: "mongodb-adquire-voyage-ai",
    slug: "mongodb-adquire-voyage-ai",
    title: "MongoDB adquire a Voyage AI para reforçar busca vetorial e reduzir alucinações de IA",
    summary:
      "A MongoDB anunciou a aquisição da Voyage AI, startup especializada em modelos de embedding e reranking usados por empresas como Anthropic e LangChain. A integração busca oferecer recuperação de informação mais precisa dentro do banco operacional.",
    relevance:
      "Reforça a convergência entre bancos de dados operacionais e infraestrutura de busca vetorial/RAG, peça-chave para aplicações de IA generativa confiáveis.",
    publishedAt: "2025-02-24",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Bancos de Dados", "Inteligência Artificial"],
    tags: ["MongoDB", "Embeddings", "RAG", "Aquisição"],
    source: "PR Newswire / MongoDB",
    sourceUrl: "https://www.prnewswire.com/news-releases/mongodb-announces-acquisition-of-voyage-ai-to-enable-organizations-to-build-trustworthy-ai-applications-302382979.html",
    related: { trackSlugs: ["machine-learning"] },
  },
  {
    id: "postgresql-18-lancado",
    slug: "postgresql-18-lancado",
    title: "PostgreSQL 18 é lançado com novo subsistema de I/O assíncrono e ganhos de até 3x em leitura",
    summary:
      "O PostgreSQL Global Development Group lançou a versão 18, trazendo um subsistema de I/O assíncrono com ganhos de até 3x na leitura de armazenamento, upgrades de versão major menos disruptivos, colunas geradas virtuais e a função uuidv7(). A versão inclui mais de 3.000 commits e suporte a autenticação OAuth.",
    relevance:
      "PostgreSQL segue como um dos bancos mais usados no mundo; melhorias de performance e upgrade impactam diretamente times de engenharia de dados e backend.",
    publishedAt: "2025-09-25",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Bancos de Dados", "Open Source"],
    tags: ["PostgreSQL", "SQL", "Performance", "Open Source"],
    source: "PostgreSQL.org (comunicado oficial)",
    sourceUrl: "https://www.postgresql.org/about/news/postgresql-18-released-3142/",
    related: { articleIds: ["ctes-recursivas-sql"], trackSlugs: ["sql"] },
  },
  {
    id: "duckdb-142-lts",
    slug: "duckdb-142-lts",
    title: "DuckDB lança 1.4.2, segunda atualização da sua primeira versão LTS, com correções de segurança",
    summary:
      "A equipe do DuckDB lançou a versão 1.4.2, corrigindo quatro vulnerabilidades relacionadas à criptografia do banco e ampliando a extensão experimental de Iceberg para suportar operações completas de escrita (insert, update, delete).",
    relevance:
      "DuckDB se consolidou como motor analítico embarcado de referência para análise local e integração com lakehouses, tema relevante para quem trabalha com Data Analytics.",
    publishedAt: "2025-11-12",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Bancos de Dados", "Open Source"],
    tags: ["DuckDB", "Iceberg", "Analytics", "OLAP"],
    source: "DuckDB (blog oficial)",
    sourceUrl: "https://duckdb.org/2025/11/12/announcing-duckdb-142",
  },
  {
    id: "anthropic-claude-opus-4-5",
    slug: "anthropic-claude-opus-4-5",
    title: "Anthropic lança Claude Opus 4.5, seu modelo mais forte em codificação e uso de agentes",
    summary:
      "A Anthropic anunciou o Claude Opus 4.5, alcançando o estado da arte no benchmark SWE-bench Verified e reduzindo em até 76% o uso de tokens em relação a modelos anteriores mantendo desempenho. O lançamento trouxe também Claude Code no aplicativo desktop e compactação de contexto para conversas mais longas.",
    relevance:
      "Modelos de raciocínio e agentes como o Opus 4.5 estão sendo cada vez mais usados em automação de pipelines de dados, geração de código analítico e assistentes de engenharia.",
    publishedAt: "2025-11-24",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["Claude", "Anthropic", "AI Agents", "Coding"],
    source: "Anthropic (blog oficial)",
    sourceUrl: "https://www.anthropic.com/news/claude-opus-4-5",
  },
  {
    id: "nvidia-rtx-pro-blackwell-servidores",
    slug: "nvidia-rtx-pro-blackwell-servidores",
    title: "Nvidia leva GPUs Blackwell para servidores empresariais mainstream com o RTX PRO 6000 Server Edition",
    summary:
      "A Nvidia anunciou que servidores 2U de fabricantes como Dell, HPE, Cisco e Lenovo passarão a oferecer a GPU RTX PRO 6000 Blackwell Server Edition, prometendo até 45x mais performance e 18x mais eficiência energética frente a sistemas apenas com CPU.",
    relevance:
      "A disponibilidade de GPUs de ponta em infraestrutura empresarial \"mainstream\" reduz barreiras para treinar e servir modelos de ML em ambientes corporativos comuns.",
    publishedAt: "2025-08-11",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Infraestrutura", "Inteligência Artificial"],
    tags: ["Nvidia", "GPU", "Blackwell", "Data Center"],
    source: "NVIDIA Newsroom (comunicado oficial)",
    sourceUrl: "https://nvidianews.nvidia.com/news/nvidia-rtx-pro-servers-with-blackwell-coming-to-worlds-most-popular-enterprise-systems",
  },
  {
    id: "google-gemini-2-5-pro",
    slug: "google-gemini-2-5-pro",
    title: "Google lança Gemini 2.5 Pro, seu modelo de \"raciocínio\" com janela de contexto de 1 milhão de tokens",
    summary:
      "O Google apresentou o Gemini 2.5 Pro Experimental, um modelo que \"pensa\" antes de responder, liderando o ranking LMArena por margem significativa e atingindo 63,8% no benchmark de codificação SWE-Bench Verified. O modelo chega com janela de contexto de 1 milhão de tokens.",
    relevance:
      "Modelos de raciocínio de longo contexto ampliam o que é possível em análise de grandes volumes de documentos e código, um caso de uso direto para times de dados.",
    publishedAt: "2025-03-25",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["Gemini", "Google DeepMind", "LLM", "Reasoning"],
    source: "Google (blog oficial)",
    sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/",
  },
  {
    id: "meta-lanca-llama-4",
    slug: "meta-lanca-llama-4",
    title: "Meta lança a família Llama 4 com arquitetura mixture-of-experts e contexto de até 10 milhões de tokens",
    summary:
      "A Meta lançou os modelos Llama 4 Scout e Maverick, disponíveis abertamente via Hugging Face e parceiros. Scout se destaca por caber em uma única GPU H100 com janela de contexto de até 10 milhões de tokens, usando pela primeira vez arquitetura mixture-of-experts na família Llama.",
    relevance:
      "Modelos abertos de grande contexto influenciam diretamente arquiteturas de RAG e processamento de bases de dados extensas por equipes que não dependem de APIs fechadas.",
    publishedAt: "2025-04-05",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Inteligência Artificial", "Open Source"],
    tags: ["Meta", "Llama", "Open Source", "Multimodal"],
    source: "Meta AI (blog oficial)",
    sourceUrl: "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
  },
  {
    id: "openai-lanca-gpt-5",
    slug: "openai-lanca-gpt-5",
    title: "OpenAI lança o GPT-5, unificando raciocínio e respostas rápidas em um único modelo",
    summary:
      "A OpenAI lançou o GPT-5 como modelo padrão para todos os usuários do ChatGPT, combinando a capacidade de raciocínio da série \"o\" com a velocidade da série GPT. A empresa destacou redução de alucinações (de cerca de 20% para 4,8% em alguns testes) e melhor desempenho em tarefas reais de codificação.",
    relevance:
      "Como modelo de uso geral mais adotado do mercado, o GPT-5 influencia diretamente ferramentas de geração de consultas, documentação e automação usadas por equipes de dados.",
    publishedAt: "2025-08-07",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["OpenAI", "GPT-5", "LLM", "Agentes"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2025/08/07/openais-gpt-5-is-here/",
  },
  {
    id: "gartner-previsao-agentes-ia-2026",
    slug: "gartner-previsao-agentes-ia-2026",
    title: "Gartner prevê que 40% dos aplicativos corporativos terão agentes de IA específicos até 2026",
    summary:
      "A Gartner projetou que a proporção de aplicativos corporativos com agentes de IA para tarefas específicas saltará de menos de 5% em 2025 para 40% até o fim de 2026. O relatório também alerta que mais de 40% dos projetos de IA agêntica podem ser cancelados até 2027 por falta de valor claro ou controle de custos.",
    relevance:
      "Fornece um contraponto analítico ao hype de agentes de IA, ajudando profissionais de dados a calibrar expectativas de adoção e investimento.",
    publishedAt: "2025-08-26",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Inteligência Artificial", "Mercado"],
    tags: ["AI Agents", "Gartner", "Enterprise", "Previsão"],
    source: "Gartner (comunicado oficial)",
    sourceUrl: "https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025",
  },
  {
    id: "eu-ai-act-obrigacoes-gpai-2025",
    slug: "eu-ai-act-obrigacoes-gpai-2025",
    title: "Últimas obrigações do EU AI Act sobre modelos de IA de uso geral entram em vigor",
    summary:
      "Em 2 de agosto de 2025, entrou em vigor uma nova fase do EU AI Act: o AI Office tornou-se operacional, autoridades nacionais de fiscalização foram designadas e provedores de modelos de IA de uso geral (GPAI) passaram a precisar manter documentação técnica e resumos de dados de treinamento.",
    relevance:
      "Times de dados e IA que atuam na Europa (ou vendem para lá) precisam adequar pipelines de treinamento e documentação de modelos a essas novas exigências regulatórias.",
    publishedAt: "2025-08-07",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Regulamentação", "Data Governance"],
    tags: ["EU AI Act", "Compliance", "GPAI", "Europa"],
    source: "DLA Piper",
    sourceUrl: "https://www.dlapiper.com/en-us/insights/publications/2025/08/latest-wave-of-obligations-under-the-eu-ai-act-take-effect",
  },
  {
    id: "apache-spark-4-0-lancado",
    slug: "apache-spark-4-0-lancado",
    title: "Apache Spark 4.0 é lançado com modo ANSI por padrão e novo tipo de dado VARIANT",
    summary:
      "A comunidade Apache Spark lançou a versão 4.0, com mais de 5.100 tickets resolvidos por 390 contribuidores, trazendo modo ANSI SQL ativado por padrão, o novo tipo de dado VARIANT para JSON semiestruturado e um operador PIPE (|>) para encadear transformações SQL.",
    relevance:
      "Spark continua sendo o motor de processamento distribuído mais usado em engenharia de dados; a nova versão afeta diretamente pipelines batch e streaming em produção.",
    publishedAt: "2025-05-28",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Data Engineering", "Big Data"],
    tags: ["Apache Spark", "Open Source", "ETL", "PySpark"],
    source: "Databricks (blog oficial)",
    sourceUrl: "https://www.databricks.com/blog/introducing-apache-spark-40",
    related: { trackSlugs: ["engenharia-de-dados"] },
  },
  {
    id: "microsoft-fabric-fabcon-vienna-2025",
    slug: "microsoft-fabric-fabcon-vienna-2025",
    title: "Microsoft Fabric anuncia recursos de Graph e Maps para dar contexto a agentes de IA na FabCon Vienna",
    summary:
      "Na conferência FabCon Vienna, a Microsoft anunciou os recursos Graph (para relações entre entidades de negócio) e Maps (para dados geoespaciais), além de um Fabric MCP para desenvolvimento assistido por agentes e uma nova OneLake Table API para tabelas Iceberg e Delta.",
    relevance:
      "Mostra como plataformas de lakehouse corporativo estão se reestruturando para servir como base de dados confiável para agentes de IA, tendência central em 2025.",
    publishedAt: "2025-09-16",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Data Engineering", "Data Platforms"],
    tags: ["Microsoft Fabric", "OneLake", "AI Agents", "Lakehouse"],
    source: "Microsoft Fabric Blog (oficial)",
    sourceUrl: "https://www.microsoft.com/en-us/microsoft-fabric/blog/2025/09/16/fabcon-vienna-build-data-rich-agents-on-an-enterprise-ready-foundation/",
  },
  {
    id: "deepseek-impacto-nvidia-2025",
    slug: "deepseek-impacto-nvidia-2025",
    title: "Ações da Nvidia caem 17% e perdem US$ 600 bilhões em valor de mercado após surpresa da DeepSeek",
    summary:
      "O lançamento do modelo R1 da startup chinesa DeepSeek, que alega desempenho competitivo com muito menos poder computacional, provocou uma queda recorde de 17% nas ações da Nvidia em um único dia, apagando cerca de US$ 600 bilhões em valor de mercado.",
    relevance:
      "Foi um dos eventos que mais reconfigurou a narrativa de investimento em infraestrutura de IA em 2025, com efeitos diretos sobre estratégias de hardware para treinamento de modelos.",
    publishedAt: "2025-01-27",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Inteligência Artificial", "Mercado"],
    tags: ["DeepSeek", "Nvidia", "China", "LLM"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2025/01/27/nvidia-drops-600bn-off-its-market-cap-amid-the-rise-of-deepseek/",
    featured: true,
  },
  {
    id: "apache-iceberg-1-10",
    slug: "apache-iceberg-1-10",
    title: "Apache Iceberg 1.10 amadurece a especificação V3 e o REST Catalog para produção",
    summary:
      "A versão 1.10.0 do Apache Iceberg trouxe compatibilidade total com o Spark 4.0 e o Flink 2.0, além de fechar oficialmente a especificação V3 com deletion vectors para updates eficientes em nível de linha. O Google contribuiu com suporte nativo ao BigQuery Metastore Catalog.",
    relevance:
      "Iceberg é hoje o formato de tabela de referência para arquiteturas lakehouse abertas; esse release consolida sua maturidade para cargas de trabalho críticas.",
    publishedAt: "2025-09-24",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Data Engineering", "Open Source"],
    tags: ["Apache Iceberg", "Lakehouse", "Data Lake", "REST Catalog"],
    source: "Google Open Source Blog",
    sourceUrl: "https://opensource.googleblog.com/2025/09/apache-iceberg-110-maturing-the-v3-spec-the-rest-api-and-google-contributions.html",
  },
  {
    id: "qantas-vazamento-salesforce-2025",
    slug: "qantas-vazamento-salesforce-2025",
    title: "Qantas confirma vazamento de dados de 5,7 milhões de clientes após ataque via plataforma Salesforce",
    summary:
      "A companhia aérea australiana Qantas confirmou que invasores obtiveram acesso a dados de 5,7 milhões de clientes através de uma plataforma de terceiros ligada ao Salesforce, usando técnicas de engenharia social contra uma central de atendimento terceirizada.",
    relevance:
      "Reforça o risco de integrações com plataformas de CRM/SaaS de terceiros como vetor de vazamento, tema central para quem trabalha com governança e segurança de dados.",
    publishedAt: "2025-07-09",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Data Privacy", "Data Governance"],
    tags: ["Vazamento de Dados", "Salesforce", "Cibersegurança", "Engenharia Social"],
    source: "Cybersecurity Dive",
    sourceUrl: "https://www.cybersecuritydive.com/news/qantas-cyberattack-57-million-customers/752571/",
  },
  {
    id: "anpd-mapa-temas-prioritarios-2026-2027",
    slug: "anpd-mapa-temas-prioritarios-2026-2027",
    title: "ANPD publica mapa de temas prioritários 2026-2027 e atualiza agenda regulatória da LGPD",
    summary:
      "A Autoridade Nacional de Proteção de Dados (ANPD) publicou, via Resoluções CD/ANPD 30/2025 e 31/2025, o Mapa de Temas Prioritários de fiscalização para 2026-2027 e atualizou a Agenda Regulatória 2025-2026, incluindo novos temas ligados ao ECA Digital, como mecanismos de verificação de idade.",
    relevance:
      "Define o roteiro oficial de fiscalização e regulamentação da LGPD para os próximos anos, com impacto direto em como empresas brasileiras devem tratar dados pessoais e de menores.",
    publishedAt: "2025-12-24",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Regulamentação", "Data Privacy"],
    tags: ["LGPD", "ANPD", "Brasil", "Privacidade"],
    source: "ANPD / Gov.br (comunicado oficial)",
    sourceUrl: "https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-mapa-de-temas-prioritarios-para-o-bienio-2026-2027-e-atualiza-agenda-regulatoria-2025-2026",
  },
  {
    id: "looker-conversational-analytics-2025",
    slug: "looker-conversational-analytics-2025",
    title: "Google amplia Conversational Analytics no Looker, permitindo consultas em linguagem natural com Gemini",
    summary:
      "O Google detalhou o Conversational Analytics no Looker, recurso que permite perguntas em linguagem natural sobre dados modelados em LookML ou tabelas do BigQuery, com respostas rastreáveis via explicação \"How was this calculated?\". No Google Cloud Next 25, a disponibilidade foi expandida para todos os usuários do Looker.",
    relevance:
      "Representa a virada do BI tradicional para experiências conversacionais assistidas por IA, tendência que está redefinindo como analistas e usuários de negócio consultam dados.",
    publishedAt: "2025-04-29",
    verifiedAt: "2026-09-18",
    year: 2025,
    category: ["Business Intelligence", "Inteligência Artificial"],
    tags: ["Looker", "Gemini", "BI Conversacional", "Google Cloud"],
    source: "Google Cloud Blog (oficial)",
    sourceUrl: "https://cloud.google.com/blog/products/business-intelligence/a-closer-look-at-looker-conversational-analytics/",
    related: { trackSlugs: ["business-intelligence", "data-visualization"] },
  },

  // ===== 2026 =====
  {
    id: "anthropic-claude-opus-5",
    slug: "anthropic-claude-opus-5",
    title: "Anthropic lança o Claude Opus 5, com desempenho próximo do topo por metade do preço",
    summary:
      "A Anthropic lançou o Claude Opus 5, um modelo posicionado para entregar desempenho próximo ao de seu modelo mais avançado em diversas tarefas, mas a um custo bem menor. É o quarto lançamento da família Claude 5 em menos de dois meses.",
    relevance:
      "Mostra a aceleração do ritmo de lançamentos de LLMs em 2026, com foco crescente em custo-benefício além de capacidade bruta — algo direto para quem avalia qual modelo usar em produção.",
    publishedAt: "2026-07-24",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Inteligência Artificial", "Machine Learning"],
    tags: ["Anthropic", "Claude", "LLM", "Modelos de Linguagem"],
    source: "Axios",
    sourceUrl: "https://www.axios.com/2026/07/24/anthropic-releases-new-model-opus-5",
  },
  {
    id: "openai-lanca-gpt-6-astra",
    slug: "openai-lanca-gpt-6-astra",
    title: "OpenAI lança o GPT-6 (codinome \"Astra\"), seu modelo mais avançado até agora",
    summary:
      "A OpenAI lançou o GPT-6, internamente chamado \"Astra\", destacado por forte desempenho em uso de computador/navegador, código e cibersegurança. O lançamento gerou controvérsia por usar \"recorrência opaca\", uma técnica que dificulta a auditoria do raciocínio do modelo (chain-of-thought).",
    relevance:
      "É o primeiro modelo da OpenAI classificado como \"crítico\" em capacidade cibernética sob seu framework de segurança, tema central para quem trabalha com governança e risco de IA.",
    publishedAt: "2026-09-03",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Inteligência Artificial"],
    tags: ["OpenAI", "GPT-6", "Agentes de IA", "Segurança de IA"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/09/03/openai-launches-astra-its-powerful-and-controversial-new-model/",
    featured: true,
  },
  {
    id: "snowflake-adquire-observe",
    slug: "snowflake-adquire-observe",
    title: "Snowflake anuncia aquisição da Observe para observabilidade com IA",
    summary:
      "A Snowflake anunciou acordo definitivo para adquirir a Observe, plataforma de observabilidade com IA que correlaciona logs, métricas e traces usando um \"SRE de IA\". A operação mira o mercado de gestão de operações de TI, avaliado em mais de US$ 50 bilhões.",
    relevance:
      "Sinaliza a expansão das plataformas de dados para observabilidade operacional, um movimento relevante para quem atua com engenharia de dados e infraestrutura de monitoramento.",
    publishedAt: "2026-01-08",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Data Platforms", "Mercado"],
    tags: ["Snowflake", "Observabilidade", "Aquisição", "Apache Iceberg"],
    source: "Snowflake (comunicado oficial)",
    sourceUrl: "https://www.snowflake.com/en/news/press-releases/snowflake-announces-intent-to-acquire-observe-to-deliver-ai-powered-observability-at-enterprise-scale/",
  },
  {
    id: "snowflake-adquire-natoma",
    slug: "snowflake-adquire-natoma",
    title: "Snowflake anuncia intenção de adquirir a Natoma para gestão de acesso de agentes de IA",
    summary:
      "A Snowflake anunciou a intenção de adquirir a Natoma, plataforma de gateway MCP (Model Context Protocol) que centraliza e controla as permissões de agentes de IA em aplicações corporativas, aplicando políticas de segurança no nível de cada chamada de ferramenta.",
    relevance:
      "Reflete a preocupação crescente do mercado com governança de acesso para agentes de IA, um tema emergente essencial para quem projeta arquiteturas de dados seguras para IA agêntica.",
    publishedAt: "2026-05-27",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Data Governance", "Mercado"],
    tags: ["Snowflake", "MCP", "Agentes de IA", "Governança"],
    source: "Snowflake (comunicado oficial)",
    sourceUrl: "https://www.snowflake.com/en/blog/snowflake-acquire-natoma-governed-agentic-access/",
  },
  {
    id: "databricks-governance-hub-2026",
    slug: "databricks-governance-hub-2026",
    title: "Databricks anuncia Governance Hub e novos recursos de segurança no Data + AI Summit 2026",
    summary:
      "No Data + AI Summit 2026, a Databricks anunciou o Governance Hub (painel centralizado para gestão de postura de governança), além de gestão automática de identidade para Entra ID e Okta, políticas de rede \"zero-trust\" e novas certificações de compliance (HITRUST, ISMAP, FedRAMP High).",
    relevance:
      "Confirma a virada estratégica do setor de \"quem constrói o melhor agente\" para \"quem governa dados, custo e segurança\", pauta central para profissionais de governança de dados.",
    publishedAt: "2026-06-17",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Data Governance", "Data Platforms"],
    tags: ["Databricks", "Governança", "Segurança", "Compliance"],
    source: "Databricks (blog oficial)",
    sourceUrl: "https://www.databricks.com/blog/whats-new-databricks-platform-security-and-compliance-data-ai-summit-2026",
  },
  {
    id: "microsoft-fabric-iq",
    slug: "microsoft-fabric-iq",
    title: "Microsoft apresenta o Fabric IQ, camada semântica para IA empresarial no Fabric",
    summary:
      "A Microsoft detalhou o Fabric IQ, uma camada de inteligência que conecta entidades de negócio, relações e regras em uma ontologia unificada, incluindo o componente Graph (motor de grafo nativo) para permitir que agentes de IA raciocinem sobre dados corporativos conectados.",
    relevance:
      "Mostra o movimento das grandes plataformas de dados para camadas semânticas/ontológicas como base para agentes de IA confiáveis, relevante para quem trabalha com modelagem de dados e BI.",
    publishedAt: "2026-05-06",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Data Platforms", "Business Intelligence"],
    tags: ["Microsoft Fabric", "Ontologia", "Grafo", "IA Empresarial"],
    source: "Microsoft Fabric (blog oficial)",
    sourceUrl: "https://community.fabric.microsoft.com/blog/fbc_fabricupdatesblogs/from-data-platform-to-intelligence-platform-introducing-microsoft-fabric-iq/5172484",
    related: { trackSlugs: ["business-intelligence"] },
  },
  {
    id: "bigquery-comments-to-sql",
    slug: "bigquery-comments-to-sql",
    title: "Google Cloud lança recurso que converte comentários em português/inglês em SQL no BigQuery",
    summary:
      "O Google Cloud lançou o recurso \"Comments to SQL\" no BigQuery Studio, que transforma instruções em linguagem natural escritas dentro de comentários SQL em consultas executáveis, usando IA para interpretar o contexto do código ao redor.",
    relevance:
      "Reduz a barreira de entrada para análise de dados via SQL, tema relevante para analistas iniciantes e times que buscam acelerar o desenvolvimento de queries com IA.",
    publishedAt: "2026-01-14",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Data Analytics", "Business Intelligence"],
    tags: ["BigQuery", "Google Cloud", "SQL", "Gemini"],
    source: "Google Cloud (blog oficial)",
    sourceUrl: "https://cloud.google.com/blog/products/data-analytics/vibe-querying-with-comments-to-sql-in-bigquery",
    related: { trackSlugs: ["sql"] },
  },
  {
    id: "fivetran-dbt-labs-fusao",
    slug: "fivetran-dbt-labs-fusao",
    title: "Fivetran e dbt Labs concluem fusão para criar infraestrutura de dados para agentes de IA",
    summary:
      "A fusão entre Fivetran e dbt Labs, anunciada em outubro de 2025, foi oficialmente concluída, unindo movimentação e transformação de dados sob uma só empresa que atende mais de 100 mil times de dados. Na ocasião foi lançado o dbt Core 2.0 em alpha, com motor Fusion em Rust.",
    relevance:
      "Consolida dois pilares do ecossistema moderno de dados (ingestão e transformação) sob uma mesma empresa, mudança estrutural importante para quem usa ferramentas de analytics engineering.",
    publishedAt: "2026-06-01",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Data Engineering", "Mercado"],
    tags: ["dbt Labs", "Fivetran", "Fusão", "Transformação de Dados"],
    source: "Fivetran (comunicado oficial)",
    sourceUrl: "https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents",
  },
  {
    id: "apache-iceberg-1-11",
    slug: "apache-iceberg-1-11",
    title: "Apache Iceberg 1.11.0 é lançado com nova API de formato de arquivo e suporte geoespacial",
    summary:
      "A comunidade Apache Iceberg lançou a versão 1.11.0, resultado de mais de mil commits de 200+ contribuidores, trazendo a finalização da File Format API, criptografia de listas de manifesto, tipos geoespaciais nativos e suporte ao Apache Spark 4.1 e Flink 2.1.",
    relevance:
      "O Iceberg é hoje o padrão de fato para tabelas em data lakehouses; essa release amplia recursos críticos de segurança e desempenho usados por engenheiros de dados diariamente.",
    publishedAt: "2026-05-19",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Data Engineering", "Open Source"],
    tags: ["Apache Iceberg", "Lakehouse", "Open Source", "Apache Spark"],
    source: "Apache Iceberg (blog oficial)",
    sourceUrl: "https://iceberg.apache.org/blog/apache-iceberg-1.11.0-release/",
    related: { trackSlugs: ["engenharia-de-dados"] },
  },
  {
    id: "apache-polaris-top-level-project",
    slug: "apache-polaris-top-level-project",
    title: "Apache Polaris se torna projeto de nível superior da Apache Software Foundation",
    summary:
      "O Apache Polaris, catálogo aberto para tabelas Apache Iceberg originado na Snowflake, graduou-se de projeto incubado para projeto de nível superior (top-level project) da ASF, após 18 meses de incubação com seis releases e cerca de 100 contribuidores.",
    relevance:
      "Reforça a maturidade dos catálogos abertos como padrão de interoperabilidade entre motores (Spark, Snowflake, Databricks etc.) em arquiteturas de lakehouse multi-engine.",
    publishedAt: "2026-02-19",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Open Source", "Data Engineering"],
    tags: ["Apache Polaris", "Catálogo de Dados", "Iceberg", "Lakehouse"],
    source: "Apache Polaris (blog oficial)",
    sourceUrl: "https://polaris.apache.org/blog/2026/02/19/apache-polaris-graduates-to-top-level-project/",
  },
  {
    id: "anpd-multa-tiktok-2026",
    slug: "anpd-multa-tiktok-2026",
    title: "ANPD multa TikTok em R$ 153,7 milhões por uso indevido de dados de crianças e adolescentes",
    summary:
      "A Autoridade Nacional de Proteção de Dados (ANPD) aplicou multa de R$ 153,7 milhões à ByteDance, controladora do TikTok, por tratar dados pessoais de menores sem base legal adequada, tanto no feed de usuários logados quanto deslogados, além de exigir a exclusão dos dados coletados irregularmente.",
    relevance:
      "É uma das maiores sanções já aplicadas pela ANPD, um marco prático de como a fiscalização da LGPD está se intensificando para quem lida com dados de usuários no Brasil.",
    publishedAt: "2026-08-25",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Data Privacy", "Regulamentação"],
    tags: ["LGPD", "ANPD", "TikTok", "Proteção de Menores"],
    source: "ANPD (comunicado oficial)",
    sourceUrl: "https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-multa-tiktok-em-r-153-7-milhoes-por-falhas-na-protecao-de-dados-de-criancas-e-adolescentes",
    featured: true,
  },
  {
    id: "eu-ai-act-fiscalizacao-2026",
    slug: "eu-ai-act-fiscalizacao-2026",
    title: "União Europeia começa a fiscalizar o AI Act e exige transparência sobre conteúdo gerado por IA",
    summary:
      "A partir de 2 de agosto de 2026, o AI Office da UE e as autoridades nacionais passaram a ter poder efetivo de fiscalização sobre o AI Act, exigindo que sistemas de IA se identifiquem como automatizados, que deepfakes sejam sinalizados e que conteúdo gerado por IA tenha marcação detectável, sob multas de até 3% do faturamento global.",
    relevance:
      "Marca o início real da fiscalização da principal lei de IA do mundo, com impacto direto em qualquer produto que use modelos generativos e opere ou atenda usuários na Europa.",
    publishedAt: "2026-08-04",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Regulamentação", "Data Privacy"],
    tags: ["EU AI Act", "Regulamentação de IA", "Transparência", "União Europeia"],
    source: "Help Net Security",
    sourceUrl: "https://www.helpnetsecurity.com/2026/08/04/eu-ai-act-enforcement-ai-models/",
  },
  {
    id: "mongodb-search-self-managed",
    slug: "mongodb-search-self-managed",
    title: "MongoDB libera Search e Vector Search para implantações auto-gerenciadas",
    summary:
      "A MongoDB anunciou disponibilidade geral de busca textual e busca vetorial para o MongoDB Enterprise Advanced e para o Community Edition (a partir da versão 8.2), permitindo busca híbrida e geração de embeddings automatizada mesmo fora do Atlas, incluindo ambientes on-premises e air-gapped.",
    relevance:
      "Elimina a necessidade de ferramentas externas de busca vetorial para quem constrói aplicações de IA/RAG sobre MongoDB fora da nuvem gerenciada, ampliando opções de arquitetura.",
    publishedAt: "2026-07-01",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Bancos de Dados", "Machine Learning"],
    tags: ["MongoDB", "Busca Vetorial", "RAG", "Self-Managed"],
    source: "MongoDB (blog oficial)",
    sourceUrl: "https://www.mongodb.com/company/blog/product-release-announcements/mongodb-search-vector-search-now-run-anywhere",
  },
  {
    id: "redis-iris-agentes-ia",
    slug: "redis-iris-agentes-ia",
    title: "Redis lança o Iris, motor de contexto e memória para agentes de IA",
    summary:
      "A Redis lançou o Iris, uma plataforma que combina recuperação de contexto em tempo real, memória de curto e longo prazo para agentes e integração de dados, unindo ferramentas como Redis Search, Agent Memory e LangCache em uma única camada voltada a aplicações de IA agêntica.",
    relevance:
      "Mostra bancos de dados tradicionais se reposicionando como infraestrutura de memória para agentes de IA, tendência importante para arquitetos de dados que avaliam onde armazenar contexto de IA.",
    publishedAt: "2026-05-18",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Bancos de Dados", "Machine Learning"],
    tags: ["Redis", "Agentes de IA", "Memória", "Contexto"],
    source: "Redis (blog oficial)",
    sourceUrl: "https://redis.io/blog/context-is-all-you-need/",
  },
  {
    id: "duckdb-2-0-preview",
    slug: "duckdb-2-0-preview",
    title: "DuckDB revela prévia da versão 2.0, com arquitetura cliente-servidor e novo parser SQL",
    summary:
      "O projeto DuckDB divulgou uma prévia da versão 2.0 (codinome \"Cyanoptera\"), destacando um novo modo cliente-servidor via extensão \"quack\", suporte a triggers, tipo VARIANT para dados semiestruturados, I/O assíncrono e um novo parser SQL que substitui o herdado do PostgreSQL.",
    relevance:
      "O DuckDB se consolidou como ferramenta analítica local/embarcada de referência; a versão 2.0 amplia seu uso para cenários antes exclusivos de bancos cliente-servidor tradicionais.",
    publishedAt: "2026-08-17",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Bancos de Dados", "Open Source"],
    tags: ["DuckDB", "Banco Analítico", "Open Source", "SQL"],
    source: "DuckDB (blog oficial)",
    sourceUrl: "https://duckdb.org/2026/08/17/duckdb-20-highlights",
  },
  {
    id: "nvidia-vera-rubin-gtc-2026",
    slug: "nvidia-vera-rubin-gtc-2026",
    title: "Nvidia detalha plataforma Vera Rubin e novo chip Groq 3 LPU no GTC 2026",
    summary:
      "No keynote do GTC 2026, Jensen Huang formalizou a plataforma Vera Rubin (CPU Vera + GPU Rubin) como supercomputador em rack voltado a IA agêntica, com ganho de eficiência energética 10x sobre a geração Grace Blackwell, além de revelar o novo chip Groq 3 LPU focado em inferência de baixa latência.",
    relevance:
      "Define o roadmap de hardware que sustentará cargas de trabalho de IA e processamento de grandes volumes de dados pelos próximos anos, informação-chave para quem planeja infraestrutura de dados/ML.",
    publishedAt: "2026-03-16",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Infraestrutura", "Big Data"],
    tags: ["Nvidia", "GPU", "Vera Rubin", "Infraestrutura de IA"],
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/03/16/nvidia-gtc-2026-ceo-jensen-huang-keynote-blackwell-vera-rubin.html",
  },
  {
    id: "databricks-190bi-valuation",
    slug: "databricks-190bi-valuation",
    title: "Databricks capta US$ 5 bilhões e atinge valuation de US$ 190 bilhões",
    summary:
      "A Databricks anunciou uma rodada estratégica de captação liderada pela Coatue, elevando sua avaliação para cerca de US$ 188-190 bilhões, apenas cinco meses após uma rodada anterior de US$ 134 bilhões — evidenciando o apetite do mercado por empresas de dados posicionadas em IA.",
    relevance:
      "Reflete o quanto o mercado de capital de risco continua priorizando empresas de dados/IA, contexto relevante para entender a saúde financeira do setor em que o profissional de dados atua.",
    publishedAt: "2026-07-17",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Mercado", "Data Platforms"],
    tags: ["Databricks", "Investimento", "Valuation", "IA"],
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/2026/07/17/databricks-hits-188b-valuation-extending-its-run-as-ais-favorite-second-act/",
  },
  {
    id: "pandas-3-0-lancado",
    slug: "pandas-3-0-lancado",
    title: "pandas 3.0 é lançado com Copy-on-Write como padrão único e novo dtype de string",
    summary:
      "A biblioteca pandas lançou a versão 3.0, sua primeira grande atualização em anos, tornando o modo Copy-on-Write o único comportamento de cópia de dados (eliminando o antigo aviso SettingWithCopyWarning) e passando a inferir colunas de texto como um novo tipo dedicado \"str\" em vez de \"object\".",
    relevance:
      "É uma mudança estrutural na ferramenta mais usada por cientistas e analistas de dados em Python, exigindo atenção de quem mantém pipelines e notebooks que dependem do comportamento anterior de cópia de dados.",
    publishedAt: "2026-01-21",
    verifiedAt: "2026-09-18",
    year: 2026,
    category: ["Data Science", "Open Source"],
    tags: ["pandas", "Python", "Ciência de Dados", "Breaking Changes"],
    source: "pandas (blog oficial do projeto)",
    sourceUrl: "https://pandas.pydata.org/community/blog/pandas-3.0.html",
    related: { trackSlugs: ["ciencia-de-dados"] },
  },
];

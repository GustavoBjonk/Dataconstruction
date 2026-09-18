export interface ArticleReference {
  /** Referência completa já formatada conforme a ABNT NBR 6023. */
  citation: string;
  /** URL da fonte, quando for um documento eletrônico. */
  url?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: number;
  author: string;
  authorBio: string;
  content: string[];
  references: ArticleReference[];
}

const ACCESS_DATE = "18 set. 2026";

export const ARTICLE_CATEGORIES = [
  "Data Analytics",
  "Data Science",
  "Data Engineering",
  "Backend",
  "SQL",
  "Python",
  "Power BI",
  "Cloud",
] as const;

const AUTHOR = "Gustavo Ananias";
const AUTHOR_BIO =
  "Estudante de Análise e Desenvolvimento de Sistemas na Universidade Presbiteriana Mackenzie e futuro analista/engenheiro de dados.";

export const articles: Article[] = [
  {
    id: "particionamento-tabelas-postgres",
    title: "Particionamento de tabelas no PostgreSQL: quando vale a pena",
    description:
      "Como decidir entre particionar por data, por hash ou não particionar, e o impacto real no plano de execução das queries.",
    category: "Backend",
    date: "2026-09-10",
    readingTime: 9,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "Particionar uma tabela parece, à primeira vista, uma otimização óbvia: dividir os dados em pedaços menores deveria deixar tudo mais rápido. Na prática, particionamento errado deixa o banco mais lento e mais difícil de manter do que uma tabela única bem indexada.",
      "## O problema que o particionamento resolve",
      "PostgreSQL guarda cada tabela em arquivos no disco. Conforme uma tabela cresce para dezenas ou centenas de milhões de linhas, operações como VACUUM, criação de índice e até um simples DELETE em massa passam a competir por I/O e podem travar outras queries por minutos. Particionar divide essa tabela grande em várias tabelas físicas menores (as partições), unidas por uma tabela-pai que o Postgres trata como se fosse uma só.",
      "O ganho real não é em toda query. É em duas situações específicas: quando a maioria das consultas filtra pela coluna de partição (o planner consegue eliminar partições inteiras sem nem abri-las, o chamado partition pruning) e quando você precisa apagar dados antigos com frequência — descartar uma partição inteira é praticamente instantâneo, contra um DELETE que percorre linha a linha e gera bloat.",
      "## Partição por data vs. por hash",
      "Particionamento por intervalo (RANGE), geralmente por data, é a escolha certa quando os dados têm um ciclo de vida claro: logs, eventos, pedidos por mês. Ele também deixa o partition pruning previsível, porque a maioria dos relatórios já filtra por período.",
      "Particionamento por hash faz sentido quando não existe uma coluna de data natural e o objetivo é apenas distribuir o volume de escrita e leitura entre partições — por exemplo, particionar por hash do tenant_id em um sistema multi-inquilino para evitar que uma tabela por cliente vire centenas de tabelas para gerenciar.",
      "## Quando não particionar",
      "Tabelas com menos de alguns milhões de linhas raramente justificam a complexidade. Particionamento adiciona overhead de planejamento em cada query (o planner precisa decidir quais partições visitar) e complica constraints, foreign keys e índices únicos, que no Postgres precisam incluir a coluna de partição.",
      "Se a maior parte das suas queries não filtra pela coluna de partição escolhida, o Postgres acaba varrendo todas as partições mesmo assim — nesse cenário você paga o custo de manter partições sem ganhar o benefício do pruning.",
      "## Um roteiro prático",
      "Antes de particionar, rode EXPLAIN ANALYZE nas queries mais pesadas e observe se elas já filtram por uma coluna com cardinalidade e distribuição adequadas para virar chave de partição. Depois, comece com um número modesto de partições (por mês, não por dia) — é mais fácil dividir uma partição grande depois do que gerenciar milhares de partições pequenas desde o início.",
    ],
    references: [
      {
        citation: `POSTGRESQL GLOBAL DEVELOPMENT GROUP. Table Partitioning. Disponível em: https://www.postgresql.org/docs/current/ddl-partitioning.html. Acesso em: ${ACCESS_DATE}.`,
        url: "https://www.postgresql.org/docs/current/ddl-partitioning.html",
      },
    ],
  },
  {
    id: "orquestrando-pipelines-airflow",
    title: "Orquestrando pipelines com Airflow: sensores, retries e SLAs",
    description:
      "Um guia prático sobre como configurar sensores, políticas de retry e alertas de SLA sem transformar a DAG em uma caixa-preta.",
    category: "Data Engineering",
    date: "2026-09-05",
    readingTime: 11,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "Uma DAG do Airflow que só encadeia tarefas na ordem certa resolve o problema errado. O trabalho real de orquestração está em decidir o que acontece quando uma tarefa falha, quando uma dependência externa atrasa, e como alguém descobre isso antes que o relatório da manhã chegue errado.",
      "## Sensores: esperar de forma inteligente",
      "Sensores existem para uma tarefa esperar uma condição externa — um arquivo chegar em um bucket, uma partição aparecer em outra tabela, uma API responder. O erro mais comum é usar o modo padrão (poke), que mantém um worker slot ocupado só esperando. Em pipelines com muitos sensores rodando ao mesmo tempo, isso esgota os workers disponíveis para tarefas que realmente precisam processar algo.",
      "O modo reschedule resolve isso: o sensor libera o worker entre as verificações e só o ocupa de novo quando vai checar a condição. Para esperas mais longas (uma hora ou mais), reschedule é praticamente obrigatório para não desperdiçar capacidade do cluster.",
      "## Retries não são um curativo",
      "Configurar retries=3 em toda tarefa sem pensar é uma forma de esconder problemas até eles ficarem grandes. Retry faz sentido para falhas transitórias — timeout de rede, rate limit de uma API, deadlock momentâneo no banco. Não faz sentido para erros determinísticos, como um schema que mudou ou uma credencial expirada: nesses casos, tentar de novo três vezes só atrasa em três vezes o tempo até alguém ser notificado do problema real.",
      "Vale diferenciar retry_delay fixo de retry_exponential_backoff. Para chamadas a APIs externas com rate limit, backoff exponencial evita que o pipeline vire, sem querer, parte do problema que está sobrecarregando o serviço de terceiros.",
      "## SLAs: alertar antes do atraso virar incidente",
      "O parâmetro sla de uma tarefa não interrompe a execução — ele dispara um alerta quando a tarefa ultrapassa o tempo esperado, mesmo que ela ainda termine com sucesso depois. Isso é diferente de um timeout, que mata a tarefa. Usar os dois separadamente ajuda: o SLA avisa cedo que algo está mais lento que o normal (talvez o volume de dados cresceu), e o timeout evita que uma tarefa travada consuma recursos indefinidamente.",
      "## Fazendo a DAG parar de ser uma caixa-preta",
      "Duas práticas simples mudam isso: nomear tarefas pelo que elas fazem em termos de negócio (carregar_pedidos_do_dia, não task_3), e usar callbacks (on_failure_callback, on_sla_miss_callback) para mandar contexto de verdade — qual tabela, qual partição, qual foi o erro — para onde o time realmente olha, seja Slack, e-mail ou um sistema de tickets.",
      "Um pipeline orquestrado bem não é o que nunca falha. É aquele em que, quando falha, alguém sabe exatamente o quê, onde e por quê em menos de um minuto.",
    ],
    references: [
      {
        citation: `APACHE SOFTWARE FOUNDATION. Sensors — Airflow Documentation. Disponível em: https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/sensors.html. Acesso em: ${ACCESS_DATE}.`,
        url: "https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/sensors.html",
      },
    ],
  },
  {
    id: "window-functions-sql",
    title: "Window functions: a diferença entre RANK, DENSE_RANK e ROW_NUMBER",
    description:
      "Exemplos comentados para escolher a função de janela certa em relatórios de ranking e deduplicação de registros.",
    category: "SQL",
    date: "2026-08-28",
    readingTime: 7,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "As três funções de janela mais confundidas em SQL fazem quase a mesma coisa — atribuir uma posição a cada linha dentro de um grupo — mas se comportam de forma diferente quando existem empates. Escolher a errada gera relatórios sutilmente incorretos que passam despercebidos até alguém somar os números.",
      "## A diferença na prática",
      "ROW_NUMBER() sempre atribui um número único e sequencial, mesmo quando os valores usados no ORDER BY são idênticos — em caso de empate, a ordem entre eles é arbitrária (a menos que você desempate explicitamente no ORDER BY). RANK() dá a mesma posição para valores empatados, mas pula números depois do empate: dois primeiros lugares empatados fazem o próximo ser o terceiro, não o segundo. DENSE_RANK() também empata, mas não deixa buracos na sequência: depois de dois primeiros lugares, o próximo é o segundo.",
      "```sql\nSELECT\n  vendedor,\n  valor_vendido,\n  ROW_NUMBER() OVER (ORDER BY valor_vendido DESC) AS linha,\n  RANK()       OVER (ORDER BY valor_vendido DESC) AS posicao,\n  DENSE_RANK() OVER (ORDER BY valor_vendido DESC) AS posicao_densa\nFROM vendas;\n```",
      "## Quando usar cada uma",
      "ROW_NUMBER() é a escolha certa para deduplicação: numerar registros duplicados dentro de um PARTITION BY (por exemplo, o mesmo cliente cadastrado duas vezes) e manter só a linha de número 1. Como a numeração nunca empata, você tem garantia de manter exatamente uma linha por grupo.",
      "RANK() serve para rankings onde pular posições é semanticamente correto — uma prova com dois primeiros colocados empatados não tem um \"segundo lugar\" isolado, o próximo competidor já é o terceiro. É o comportamento mais próximo de como rankings esportivos costumam ser divulgados.",
      "DENSE_RANK() é útil quando o número da posição vai virar um filtro, como \"traga os 3 produtos mais vendidos por categoria\": usar RANK() ali pode devolver mais ou menos que 3 produtos se houver empates, enquanto DENSE_RANK() garante que você está pegando as 3 primeiras posições distintas de valor.",
      "## Um erro comum",
      "Usar ROW_NUMBER() para paginação sem incluir uma coluna de desempate único (como um id) no ORDER BY é uma fonte clássica de bugs: se duas linhas têm o mesmo valor na coluna de ordenação, o banco pode devolvê-las em ordens diferentes entre uma página e outra da mesma consulta, fazendo registros sumirem ou se repetirem na paginação.",
    ],
    references: [
      {
        citation: `MICROSOFT. Ranking Functions (Transact-SQL). Disponível em: https://learn.microsoft.com/en-us/sql/t-sql/functions/ranking-functions-transact-sql. Acesso em: ${ACCESS_DATE}.`,
        url: "https://learn.microsoft.com/en-us/sql/t-sql/functions/ranking-functions-transact-sql",
      },
      {
        citation: `POSTGRESQL GLOBAL DEVELOPMENT GROUP. Window Functions. Disponível em: https://www.postgresql.org/docs/current/tutorial-window.html. Acesso em: ${ACCESS_DATE}.`,
        url: "https://www.postgresql.org/docs/current/tutorial-window.html",
      },
    ],
  },
  {
    id: "type-hints-pandas-polars",
    title: "Type hints em DataFrames: como o Polars empurrou o ecossistema Python",
    description:
      "O que mudou na forma de tipar DataFrames depois que o Polars popularizou schemas explícitos e validação em tempo de execução.",
    category: "Python",
    date: "2026-08-20",
    readingTime: 8,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "Por muito tempo, um DataFrame em Python foi uma caixa-preta para o sistema de tipos: o editor sabia que uma variável era um DataFrame, mas não fazia ideia de quais colunas existiam ali dentro nem de que tipo elas eram. Erros como somar uma coluna de texto só apareciam em tempo de execução — às vezes em produção.",
      "## O modelo do pandas: schema implícito",
      "No pandas, o schema de um DataFrame é uma consequência dos dados, não uma declaração. Uma coluna pode silenciosamente virar object (o tipo genérico do pandas para \"não sei o que é isso\") assim que aparece um valor nulo ou um tipo misto, e essa mudança não gera nenhum aviso — só se manifesta mais tarde, quando uma operação numérica falha ou, pior, retorna um resultado sutilmente errado.",
      "## O que o Polars mudou",
      "O Polars foi construído em Rust com um schema explícito desde o início: cada coluna tem um tipo definido (Int64, Utf8, Float64, e assim por diante), e esse schema é conhecido antes mesmo da query rodar, graças ao seu motor de execução lazy. Isso significa que um erro de tipo — como tentar comparar uma coluna de texto com um número — pode ser pego na fase de planejamento da consulta, antes de processar uma única linha.",
      "Essa exigência de schema explícito teve um efeito colateral no ecossistema: bibliotecas de validação de dados como o Pandera e o Pydantic passaram a tratar schemas de DataFrame como cidadãos de primeira classe, e não como uma verificação manual escrita à parte.",
      "## Type hints na prática",
      "Com Polars, é comum ver funções anotadas recebendo e devolvendo pl.DataFrame, mas isso sozinho não garante quais colunas existem — o type checker do Python não entende schemas de DataFrame nativamente. Para isso, ferramentas como o Pandera permitem declarar um schema como uma classe Python e validar um DataFrame contra ele em tempo de execução, lançando um erro claro (não um NaN silencioso) quando uma coluna esperada não existe ou tem o tipo errado.",
      "```python\nimport polars as pl\nimport pandera.polars as pa\n\nclass VendasSchema(pa.DataFrameModel):\n    produto_id: int\n    valor: float\n    data_venda: pa.typing.polars.Date\n\n@pa.check_types\ndef calcular_receita(df: pl.DataFrame) -> pl.DataFrame:\n    return df.group_by(\"produto_id\").agg(pl.col(\"valor\").sum())\n```",
      "## O ganho real não é performance",
      "Muita gente migra para o Polars esperando só velocidade, e realmente ganha nisso. Mas o efeito mais duradouro no dia a dia é outro: um pipeline que falha imediatamente com uma mensagem clara quando o schema não bate é infinitamente mais fácil de depurar do que um relatório que roda até o fim e entrega um número errado sem avisar.",
    ],
    references: [
      {
        citation: `POLARS. Polars User Guide. Disponível em: https://docs.pola.rs/. Acesso em: ${ACCESS_DATE}.`,
        url: "https://docs.pola.rs/",
      },
      {
        citation: `PANDERA. Data Validation with Polars. Disponível em: https://pandera.readthedocs.io/en/stable/polars.html. Acesso em: ${ACCESS_DATE}.`,
        url: "https://pandera.readthedocs.io/en/stable/polars.html",
      },
    ],
  },
  {
    id: "modelagem-estrela-power-bi",
    title: "Modelagem em estrela no Power BI: evitando métricas DAX gigantes",
    description:
      "Por que um modelo em estrela bem desenhado evita fórmulas DAX intermináveis e métricas que não batem entre si.",
    category: "Power BI",
    date: "2026-08-12",
    readingTime: 10,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "É comum abrir um relatório de Power BI e encontrar uma medida DAX com trinta linhas cheias de CALCULATE, FILTER e ALL aninhados. Na maioria das vezes, isso não é sinal de uma métrica complexa — é sinal de um modelo de dados mal desenhado, que a fórmula está tentando compensar na marra.",
      "## O que é, de fato, um modelo em estrela",
      "Um modelo em estrela separa os dados em tabelas fato (eventos que aconteceram: vendas, pedidos, acessos) e tabelas dimensão (o contexto desses eventos: produto, cliente, data, região). A tabela fato fica no centro, conectada por relacionamentos simples de um-para-muitos às dimensões ao redor — daí o formato de estrela.",
      "A regra prática é: se uma coluna descreve algo (nome do produto, categoria, cidade do cliente), ela pertence a uma dimensão. Se uma coluna é um número que aconteceu em um momento (valor vendido, quantidade), ela pertence à fato. Misturar os dois em uma tabela única e larga é o que obriga o DAX a fazer, na fórmula, o trabalho que o modelo deveria fazer sozinho.",
      "## Por que isso evita DAX gigante",
      "Quando o modelo está correto, o motor do Power BI (o VertiPaq) já sabe filtrar a tabela fato automaticamente a partir de qualquer filtro aplicado nas dimensões — um slicer de \"Ano\" na tabela de datas filtra vendas sem que a medida precise saber disso. Isso é o chamado contexto de filtro se propagando pelos relacionamentos.",
      "Quando o modelo é uma tabela larga só ou tem relacionamentos mal definidos, essa propagação automática não acontece, e cada medida precisa recriar manualmente a lógica de filtro com CALCULATE e FILTER — o mesmo trecho de código repetido, com pequenas variações, em dezenas de medidas diferentes.",
      "## Um sintoma comum: métricas que não batem",
      "Duas medidas que deveriam mostrar o mesmo total de vendas, mas retornam números diferentes dependendo do visual em que são usadas, quase sempre indicam relacionamentos duplos ou tabelas fato conectadas diretamente entre si (fato-a-fato) em vez de passarem por uma dimensão comum. O Power BI permite modelar assim, mas o contexto de filtro se propaga de forma inconsistente nesse desenho, e cada visual pode acabar aplicando o filtro em um caminho diferente do relacionamento.",
      "## Um ponto de partida",
      "Antes de escrever a próxima medida complicada, vale perguntar: essa lógica deveria estar em DAX, ou é sintoma de uma tabela dimensão faltando? Extrair uma coluna de categoria repetida para sua própria tabela de dimensão costuma eliminar de uma vez várias fórmulas que tentavam simular esse relacionamento na mão.",
    ],
    references: [
      {
        citation: `MICROSOFT. DAX overview. Disponível em: https://learn.microsoft.com/en-us/dax/dax-overview. Acesso em: ${ACCESS_DATE}.`,
        url: "https://learn.microsoft.com/en-us/dax/dax-overview",
      },
      {
        citation: `MICROSOFT. Understand star schema and the importance for Power BI. Disponível em: https://learn.microsoft.com/en-us/power-bi/guidance/star-schema. Acesso em: ${ACCESS_DATE}.`,
        url: "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema",
      },
    ],
  },
  {
    id: "custos-escondidos-data-lake",
    title: "Custos escondidos em data lakes na nuvem: storage barato, consulta cara",
    description:
      "Como egress, partições pequenas demais e formatos ineficientes inflam a fatura de serviços como Athena e BigQuery.",
    category: "Cloud",
    date: "2026-08-01",
    readingTime: 6,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "Armazenar um terabyte de dados em um data lake custa poucos dólares por mês. É por isso que a conta de um data lake surpreende tanta gente: o custo real quase nunca está no armazenamento, está em como os dados são lidos.",
      "## O problema das partições pequenas demais",
      "Serviços como Amazon Athena e Google BigQuery cobram, majoritariamente, pelo volume de dados escaneado em cada consulta. Se um pipeline grava milhares de arquivos pequenos (alguns quilobytes cada) em vez de poucos arquivos maiores, o motor de consulta paga um custo fixo de abertura e leitura de metadados para cada arquivo, mesmo que o dado útil dentro dele seja mínimo.",
      "Esse padrão é comum em pipelines de streaming que gravam um arquivo por micro-lote sem nenhuma etapa de compactação depois. O resultado é uma consulta que devia escanear alguns megabytes acabando por tocar em milhares de arquivos, inflando tanto o tempo quanto o custo.",
      "## Formato de arquivo importa mais do que parece",
      "Guardar dados em CSV ou JSON obriga o motor de consulta a ler o arquivo inteiro linha por linha, mesmo que a query só precise de duas colunas. Formatos colunares como Parquet permitem que o motor leia apenas as colunas necessárias e ainda se beneficiem de metadados (min/max por bloco) que permitem pular trechos inteiros do arquivo sem lê-los — o predicate pushdown.",
      "A diferença de custo entre consultar um mesmo dataset em CSV e em Parquet bem particionado costuma ser de uma ordem de grandeza, não um ajuste marginal.",
      "## O egress que ninguém prevê",
      "Mover dados para fora da nuvem — ou até entre regiões da mesma nuvem — tem uma tarifa própria (egress) que raramente aparece na estimativa inicial de um projeto. Arquiteturas que replicam o mesmo dataset entre múltiplas regiões para reduzir latência, ou que exportam resultados de consultas para ferramentas de BI fora da nuvem original, acumulam esse custo silenciosamente ao longo dos meses.",
      "## Três hábitos que evitam a maior parte da fatura",
      "Compactar arquivos pequenos periodicamente (idealmente para algo entre 128MB e 1GB por arquivo), particionar pelas colunas que realmente aparecem nos filtros do dia a dia (não por tudo que parece relevante), e usar formato colunar como padrão — não como uma migração que fica para depois — resolvem a maior parte dos custos que pegam times de surpresa.",
    ],
    references: [
      {
        citation: `AMAZON WEB SERVICES. Top 10 performance tuning tips for Amazon Athena. Disponível em: https://aws.amazon.com/blogs/big-data/top-10-performance-tuning-tips-for-amazon-athena/. Acesso em: ${ACCESS_DATE}.`,
        url: "https://aws.amazon.com/blogs/big-data/top-10-performance-tuning-tips-for-amazon-athena/",
      },
      {
        citation: `GOOGLE CLOUD. Estimate and control costs. Disponível em: https://cloud.google.com/bigquery/docs/best-practices-costs. Acesso em: ${ACCESS_DATE}.`,
        url: "https://cloud.google.com/bigquery/docs/best-practices-costs",
      },
    ],
  },
  {
    id: "data-drift-em-producao",
    title: "Data drift em produção: como perceber antes que o modelo erre silenciosamente",
    description:
      "Métricas simples de monitoramento que revelam quando a distribuição dos dados de entrada mudou em relação ao treino.",
    category: "Data Science",
    date: "2026-07-22",
    readingTime: 9,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "Um modelo de Machine Learning não avisa quando está errando. Ele continua devolvendo previsões com a mesma confiança de sempre, mesmo depois que o mundo que ele descreve mudou. Esse descompasso entre os dados que o modelo viu no treino e os dados que ele recebe em produção é o data drift.",
      "## Drift de dados não é o mesmo que drift de conceito",
      "Vale separar dois problemas parecidos. Data drift (ou covariate shift) é quando a distribuição das variáveis de entrada muda — por exemplo, a faixa etária média dos clientes de um e-commerce muda depois de uma campanha de marketing em um novo canal. Concept drift é quando a própria relação entre entrada e saída muda — o mesmo perfil de cliente que antes indicava baixo risco de inadimplência passa a indicar risco alto por causa de um cenário econômico novo. O segundo é mais perigoso e mais difícil de detectar, porque as entradas podem parecer normais.",
      "## Métricas simples que já ajudam",
      "Não é preciso uma ferramenta sofisticada para começar. Comparar o histograma de cada variável de entrada em produção com o histograma da mesma variável no conjunto de treino já revela mudanças grosseiras. Para uma medida mais formal, o Population Stability Index (PSI) resume essa comparação em um único número: valores acima de 0,2 costumam ser tratados como um sinal de alerta na indústria de crédito, de onde essa métrica é mais usada.",
      "Para variáveis categóricas, acompanhar a proporção de cada categoria ao longo do tempo (e alertar quando uma categoria nova aparece ou uma categoria conhecida desaparece) captura boa parte dos problemas antes que virem um PSI alto.",
      "## O sinal mais direto: monitorar a saída, não só a entrada",
      "Mesmo sem saber o rótulo verdadeiro (que muitas vezes só chega dias ou semanas depois), a distribuição das previsões do próprio modelo já conta uma história. Se um modelo de classificação binária historicamente prevê 8% de positivos e, de uma semana para outra, passa a prever 25%, isso é um sinal de alerta, independente de qualquer métrica sobre as variáveis de entrada.",
      "## Construindo o hábito, não só o alerta",
      "Monitoramento de drift só é útil se alguém tiver um plano para quando ele dispara: retreinar com dados recentes, investigar se houve uma mudança real no negócio, ou revisar se um pipeline upstream começou a mandar dados diferentes por engano (uma coluna que virou nula, uma unidade de medida que mudou). Sem esse plano, o alerta de drift vira só mais uma notificação ignorada.",
    ],
    references: [
      {
        citation: `AMAZON WEB SERVICES. Data and model quality monitoring with Amazon SageMaker Model Monitor. Disponível em: https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html. Acesso em: ${ACCESS_DATE}.`,
        url: "https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html",
      },
    ],
  },
  {
    id: "metricas-vaidosas",
    title: "Métricas vaidosas: como identificar KPIs que parecem bons mas não dizem nada",
    description:
      "Um roteiro para revisar dashboards e separar métricas acionáveis de números que só enfeitam o relatório.",
    category: "Data Analytics",
    date: "2026-07-15",
    readingTime: 6,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "Uma métrica de vaidade é qualquer número que sobe quase sempre, deixa todo mundo satisfeito ao olhar o dashboard, mas não ajuda ninguém a decidir o que fazer diferente amanhã. \"Total de usuários cadastrados desde o lançamento\" é o exemplo clássico: só cresce, nunca cai, e não diz nada sobre se esses usuários estão ativos, satisfeitos ou prestes a cancelar.",
      "## O teste simples para identificar uma métrica vaidosa",
      "Basta perguntar: se esse número mudasse amanhã, alguém tomaria uma decisão diferente? Métricas acumulativas (total histórico de algo) quase sempre falham nesse teste, porque uma mudança de um dia é invisível diante do total acumulado de anos. Métricas de período (essa semana, comparado à semana passada) tendem a passar no teste, porque uma queda ou alta real muda a conversa.",
      "## Vaidosa não é sinônimo de inútil",
      "O problema não é acompanhar número de usuários cadastrados — é tratá-lo como o KPI principal de um relatório executivo. Ele continua sendo um dado operacional válido para outras finalidades (dimensionar infraestrutura, por exemplo). O erro é colocá-lo no topo do dashboard como se fosse uma medida de saúde do negócio.",
      "## Trocando por métricas acionáveis",
      "Em vez de \"total de downloads do app\", uma métrica como \"usuários ativos que voltaram nos últimos 7 dias\" já embute retenção, não só aquisição. Em vez de \"número de leads gerados\", \"taxa de conversão de lead para venda por canal\" mostra onde investir mais e onde parar de investir — o total de leads, sozinho, pode estar subindo só porque um canal está gerando volume de baixa qualidade.",
      "## Um cuidado ao revisar dashboards existentes",
      "Métricas vaidosas costumam sobreviver em relatórios porque ninguém quer ser a pessoa que propõe tirar um número que sempre \"deu bom\". Vale revisar cada card do dashboard perguntando quem realmente usa aquele número para decidir algo — se a resposta for ninguém, ele está ocupando espaço que poderia mostrar uma métrica que efetivamente muda uma ação.",
    ],
    references: [
      {
        citation: "RIES, Eric. The Lean Startup. New York: Crown Business, 2011.",
      },
    ],
  },
  {
    id: "change-data-capture-debezium",
    title: "Change Data Capture com Debezium: replicando um banco sem travar produção",
    description:
      "Conceitos de CDC baseado em log de transação e os cuidados ao ligar essa captura pela primeira vez num banco em produção.",
    category: "Data Engineering",
    date: "2026-07-02",
    readingTime: 12,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "A forma mais comum de tirar dados de um banco transacional para análise ainda é rodar uma query periódica que busca tudo que mudou desde a última execução. Funciona até o banco crescer, até a query ficar lenta o suficiente para competir com o tráfego de produção, ou até alguém perceber que um DELETE nunca aparece em um pipeline baseado só em \"linhas atualizadas depois de X\".",
      "## O que muda com CDC baseado em log",
      "Change Data Capture (CDC) baseado em log lê diretamente o log de transação do banco — o write-ahead log (WAL) no PostgreSQL, o binlog no MySQL — em vez de consultar as tabelas. Esse log já registra, na ordem exata em que aconteceram, todo INSERT, UPDATE e DELETE, incluindo os valores antes e depois da mudança. Isso resolve dois problemas de uma vez: captura deleções (que uma query baseada em timestamp de atualização nunca vê) e não adiciona carga de leitura nas tabelas de produção, porque o log já está sendo escrito de qualquer forma.",
      "## Como o Debezium se encaixa nisso",
      "O Debezium é um conjunto de conectores (rodando sobre o Kafka Connect) que sabe ler o formato de log de bancos específicos e traduzir cada mudança em um evento estruturado, publicado em um tópico do Kafka. Um UPDATE em uma linha vira um evento com o estado \"antes\" e \"depois\" dessa linha, prontos para quem for consumir — seja outro banco, um data warehouse ou um serviço que reage a essa mudança.",
      "## O primeiro cuidado: snapshot inicial",
      "Antes de começar a capturar mudanças novas, o Debezium precisa de um estado inicial das tabelas — o snapshot. Esse processo lê a tabela inteira e pode gerar carga real de I/O em uma tabela grande. Em bancos de produção, vale configurar o modo de snapshot para rodar em horário de menor tráfego, ou usar snapshots incrementais (disponíveis nas versões mais recentes do Debezium), que dividem essa leitura inicial em blocos pequenos intercalados com a captura de mudanças ao vivo, em vez de travar tudo em uma leitura única e longa.",
      "## O segundo cuidado: retenção do log de transação",
      "No PostgreSQL, habilitar replicação lógica (pré-requisito do Debezium) cria um replication slot, que impede o banco de descartar segmentos do WAL até que o Debezium os tenha lido. Se o conector do Debezium cair e ficar offline por muito tempo, o WAL retido pode crescer até encher o disco do banco de produção — um dos incidentes mais comuns em implantações mal monitoradas de CDC. Monitorar o tamanho do replication slot não é opcional, é parte da operação.",
      "## O terceiro cuidado: schema evolution",
      "Quando uma coluna é adicionada, removida ou tem o tipo alterado na tabela de origem, os eventos publicados no Kafka também mudam de formato. Sem um registro de schema (como o Confluent Schema Registry) e uma política clara de compatibilidade, consumidores desses eventos podem quebrar silenciosamente na primeira migração de banco que ninguém avisou.",
      "CDC com Debezium resolve um problema real de latência e completude de dados, mas troca a simplicidade de uma query agendada por uma peça de infraestrutura contínua que precisa de monitoramento — vale a troca quando o negócio realmente precisa de dados quase em tempo real, não como padrão para todo pipeline.",
    ],
    references: [
      {
        citation: `DEBEZIUM. Debezium Documentation. Disponível em: https://debezium.io/documentation/reference/stable/index.html. Acesso em: ${ACCESS_DATE}.`,
        url: "https://debezium.io/documentation/reference/stable/index.html",
      },
      {
        citation: `POSTGRESQL GLOBAL DEVELOPMENT GROUP. Logical Replication. Disponível em: https://www.postgresql.org/docs/current/logical-replication.html. Acesso em: ${ACCESS_DATE}.`,
        url: "https://www.postgresql.org/docs/current/logical-replication.html",
      },
    ],
  },
  {
    id: "ctes-recursivas-sql",
    title: "CTEs recursivas: resolvendo hierarquias sem depender de loops na aplicação",
    description:
      "Como modelar árvores de categorias ou organogramas direto em SQL usando WITH RECURSIVE.",
    category: "SQL",
    date: "2026-06-20",
    readingTime: 8,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "Uma tabela de categorias de produtos onde cada linha aponta para o próprio pai (categoria_pai_id) é simples de armazenar, mas percorrê-la inteira — do produto até a categoria raiz, ou o caminho inverso, listando todas as subcategorias de uma categoria — é onde muita gente desiste do SQL puro e escreve um loop na aplicação, buscando um nível de cada vez.",
      "## O que uma CTE recursiva realmente faz",
      "Uma Common Table Expression recursiva (WITH RECURSIVE) tem duas partes: um termo âncora, que define o ponto de partida, e um termo recursivo, que referencia a própria CTE para buscar o próximo nível. O banco executa isso repetidamente, unindo os resultados de cada rodada, até que o termo recursivo não retorne mais nenhuma linha nova.",
      "```sql\nWITH RECURSIVE arvore_categorias AS (\n  -- termo âncora: a categoria raiz que queremos expandir\n  SELECT id, nome, categoria_pai_id, 1 AS nivel\n  FROM categorias\n  WHERE id = 1\n\n  UNION ALL\n\n  -- termo recursivo: busca os filhos de cada nível já encontrado\n  SELECT c.id, c.nome, c.categoria_pai_id, ac.nivel + 1\n  FROM categorias c\n  JOIN arvore_categorias ac ON c.categoria_pai_id = ac.id\n)\nSELECT * FROM arvore_categorias ORDER BY nivel;\n```",
      "## Por que isso é melhor que resolver na aplicação",
      "Resolver hierarquias em loop na aplicação significa uma query por nível — se a árvore tem seis níveis de profundidade, são seis round-trips ao banco, cada um esperando o anterior terminar. A CTE recursiva resolve isso em uma única ida ao banco, deixando o motor de execução decidir a melhor forma de percorrer os dados, inclusive usando índices na coluna de chave estrangeira.",
      "## O cuidado obrigatório: evitar recursão infinita",
      "Se os dados tiverem um ciclo por engano (uma categoria que, por erro de cadastro, aponta para uma descendente sua como pai), uma CTE recursiva sem proteção entra em loop até o banco estourar memória ou um limite de profundidade. É boa prática incluir uma coluna de controle (como um array com o caminho percorrido) e uma condição que interrompe a recursão se um id já visitado aparecer de novo, ou pelo menos um limite de nível como salvaguarda.",
      "## Onde isso aparece na prática",
      "Além de árvores de categoria, CTEs recursivas resolvem organogramas (todo mundo que reporta, direta ou indiretamente, a um gerente), listas de materiais em sistemas de manufatura (todos os componentes de um produto, incluindo componentes de componentes) e grafos de dependência entre tarefas — qualquer estrutura onde uma linha se relaciona com outra linha da mesma tabela em profundidade variável.",
    ],
    references: [
      {
        citation: `POSTGRESQL GLOBAL DEVELOPMENT GROUP. WITH Queries (Common Table Expressions). Disponível em: https://www.postgresql.org/docs/current/queries-with.html. Acesso em: ${ACCESS_DATE}.`,
        url: "https://www.postgresql.org/docs/current/queries-with.html",
      },
    ],
  },
  {
    id: "idempotencia-em-apis",
    title: "Idempotência em APIs: por que reprocessar um webhook não pode duplicar dados",
    description:
      "Padrões de chave de idempotência e deduplicação para endpoints que recebem eventos de sistemas de terceiros.",
    category: "Backend",
    date: "2026-06-05",
    readingTime: 10,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "Todo sistema que recebe webhooks de terceiros — um gateway de pagamento, uma plataforma de e-commerce, um provedor de mensageria — vai, mais cedo ou mais tarde, receber o mesmo evento duas vezes. Isso não é um bug do lado de quem envia: a maioria dos provedores reenvia um webhook deliberadamente se não recebe uma confirmação rápida de recebimento (o status 2xx), justamente para garantir que o evento não se perca em caso de falha de rede.",
      "## O problema não é receber duas vezes, é processar duas vezes",
      "Um endpoint que, ao receber um evento de \"pagamento aprovado\", credita saldo na conta do cliente, vai creditar duas vezes se o mesmo evento chegar duplicado e o endpoint não tiver nenhuma proteção. A solução não é tentar impedir o reenvio — isso está fora do seu controle — e sim garantir que processar o mesmo evento duas vezes tenha o mesmo efeito de processá-lo uma vez só. Essa propriedade é a idempotência.",
      "## Chave de idempotência: o padrão mais comum",
      "A prática mais usada é exigir (ou aceitar) uma chave de idempotência única por evento — geralmente um ID que o próprio provedor já envia (event_id, payment_intent_id). Antes de processar, o endpoint verifica se essa chave já foi vista: se sim, devolve a mesma resposta que devolveu da primeira vez, sem repetir nenhum efeito colateral; se não, processa normalmente e registra a chave.",
      "```sql\nCREATE TABLE eventos_processados (\n  chave_idempotencia TEXT PRIMARY KEY,\n  processado_em TIMESTAMPTZ NOT NULL DEFAULT now()\n);\n```",
      "O ponto delicado é a ordem das operações: registrar a chave como processada e aplicar o efeito (creditar saldo, criar um pedido) precisam acontecer na mesma transação de banco. Se o efeito for aplicado antes de registrar a chave, e o processo cair exatamente nesse intervalo, o reenvio do mesmo evento vai processar tudo de novo — a proteção só existe de fato quando as duas coisas são atômicas.",
      "## Deduplicação não substitui validação",
      "Uma chave de idempotência evita processar o mesmo evento duas vezes, mas não evita processar um evento fora de ordem. Se o webhook \"pedido cancelado\" chegar antes do \"pedido criado\" por causa de um reenvio fora de ordem, o sistema precisa lidar com isso — seja validando o estado atual antes de aplicar a transição, seja usando um timestamp do evento (não da chegada) para decidir qual é a versão mais recente.",
      "## Um efeito colateral positivo",
      "Depois que o endpoint tem esse registro de eventos processados, ele vira também uma ferramenta de auditoria e depuração: quando um cliente reclama que um pagamento não refletiu no sistema, é possível checar diretamente se o evento chegou, se foi processado, e o resultado exato daquele processamento — sem depender de logs espalhados ou de reproduzir o problema manualmente.",
    ],
    references: [
      {
        citation: `STRIPE. Idempotent requests. Disponível em: https://docs.stripe.com/api/idempotent_requests. Acesso em: ${ACCESS_DATE}.`,
        url: "https://docs.stripe.com/api/idempotent_requests",
      },
      {
        citation: `INTERNET ENGINEERING TASK FORCE (IETF). The Idempotency-Key HTTP Header Field. Disponível em: https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/. Acesso em: ${ACCESS_DATE}.`,
        url: "https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/",
      },
    ],
  },
  {
    id: "ambientes-virtuais-uv",
    title: "Ambientes virtuais em 2026: o que muda usando uv no lugar de pip e venv",
    description:
      "Comparando tempo de instalação e resolução de dependências entre uv, pip-tools e poetry num projeto de dados real.",
    category: "Python",
    date: "2026-05-18",
    readingTime: 7,
    author: AUTHOR,
    authorBio: AUTHOR_BIO,
    content: [
      "Gerenciar ambientes virtuais em Python sempre envolveu escolher entre ferramentas com pontos fortes diferentes: venv para isolar o ambiente, pip para instalar pacotes, pip-tools ou Poetry para travar versões de forma reprodutível. O uv, escrito em Rust pela Astral (a mesma equipe do Ruff), se propõe a substituir esse conjunto inteiro por uma única ferramenta.",
      "## O que realmente muda",
      "A diferença mais sentida no dia a dia é velocidade de instalação e resolução de dependências. Boa parte disso vem de um cache global de pacotes já baixados e resolvidos, compartilhado entre projetos diferentes na mesma máquina — a segunda vez que qualquer projeto no computador precisa da mesma versão de uma biblioteca, ela não é baixada nem recompilada de novo, e sim reaproveitada desse cache.",
      "Isso importa mais do que parece em times de dados, onde é comum ter vários projetos (um pipeline, uma API, um notebook de experimentação) usando bibliotecas pesadas em comum, como pandas, numpy ou scikit-learn — cada uma delas normalmente precisando ser baixada e instalada separadamente em cada ambiente virtual.",
      "## Compatibilidade com o que já existe",
      "O uv não inventou um formato de projeto novo: ele lê o mesmo pyproject.toml usado por Poetry e por outras ferramentas modernas, e sabe gerar um arquivo de lock próprio (uv.lock) que trava versões exatas de todas as dependências, transitivas incluídas — o mesmo princípio do poetry.lock ou do requirements.txt gerado por pip-tools, mas resolvido de forma mais rápida.",
      "```bash\n# criar o ambiente e instalar dependências do pyproject.toml\nuv sync\n\n# rodar um comando dentro do ambiente, sem precisar ativar manualmente\nuv run python pipeline.py\n```",
      "## O que ainda vale considerar antes de migrar",
      "Times com pipelines de CI já maduros em torno de Poetry ou pip-tools devem pesar o custo de reescrever esses scripts contra o ganho de velocidade — que é real, mas mais sentido em máquinas de desenvolvimento local (onde ambientes são criados e recriados com frequência) do que em um pipeline de CI que já usa cache de dependências entre execuções.",
      "Vale lembrar também que o uv é uma ferramenta relativamente nova comparada a pip e Poetry: times com dependências de pacotes muito específicos ou processos de build customizados devem testar a migração em um projeto pequeno antes de aplicá-la a um monorepo inteiro de produção.",
    ],
    references: [
      {
        citation: `ASTRAL. uv Documentation. Disponível em: https://docs.astral.sh/uv/. Acesso em: ${ACCESS_DATE}.`,
        url: "https://docs.astral.sh/uv/",
      },
      {
        citation: `PYTHON PACKAGING AUTHORITY (PYPA). Python Packaging User Guide. Disponível em: https://packaging.python.org/. Acesso em: ${ACCESS_DATE}.`,
        url: "https://packaging.python.org/",
      },
    ],
  },
];

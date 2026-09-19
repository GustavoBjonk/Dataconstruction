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

export const ARTICLE_CATEGORIES = ["SQL", "Python", "Power BI"] as const;

const AUTHOR = "Gustavo Ananias";
const AUTHOR_BIO =
  "Estudante de Análise e Desenvolvimento de Sistemas na Universidade Presbiteriana Mackenzie e futuro analista/engenheiro de dados.";

export const articles: Article[] = [
  {
    id: "window-functions-sql",
    title: "Window functions: a diferença entre RANK, DENSE_RANK e ROW_NUMBER",
    description:
      "Exemplos comentados para escolher a função de janela certa em relatórios de ranking e deduplicação de registros.",
    category: "SQL",
    date: "2026-09-14",
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
        citation:
          "MICROSOFT. Ranking Functions (Transact-SQL). Disponível em: https://learn.microsoft.com/en-us/sql/t-sql/functions/ranking-functions-transact-sql. Acesso em: 16 set. 2026.",
        url: "https://learn.microsoft.com/en-us/sql/t-sql/functions/ranking-functions-transact-sql",
      },
      {
        citation:
          "POSTGRESQL GLOBAL DEVELOPMENT GROUP. Window Functions. Disponível em: https://www.postgresql.org/docs/current/tutorial-window.html. Acesso em: 16 set. 2026.",
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
    date: "2026-08-22",
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
        citation:
          "POLARS. Polars User Guide. Disponível em: https://docs.pola.rs/. Acesso em: 25 ago. 2026.",
        url: "https://docs.pola.rs/",
      },
      {
        citation:
          "PANDERA. Data Validation with Polars. Disponível em: https://pandera.readthedocs.io/en/stable/polars.html. Acesso em: 25 ago. 2026.",
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
    date: "2026-08-06",
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
        citation:
          "MICROSOFT. DAX overview. Disponível em: https://learn.microsoft.com/en-us/dax/dax-overview. Acesso em: 10 ago. 2026.",
        url: "https://learn.microsoft.com/en-us/dax/dax-overview",
      },
      {
        citation:
          "MICROSOFT. Understand star schema and the importance for Power BI. Disponível em: https://learn.microsoft.com/en-us/power-bi/guidance/star-schema. Acesso em: 10 ago. 2026.",
        url: "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema",
      },
    ],
  },
  {
    id: "ctes-recursivas-sql",
    title: "CTEs recursivas: resolvendo hierarquias sem depender de loops na aplicação",
    description:
      "Como modelar árvores de categorias ou organogramas direto em SQL usando WITH RECURSIVE.",
    category: "SQL",
    date: "2026-07-12",
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
        citation:
          "POSTGRESQL GLOBAL DEVELOPMENT GROUP. WITH Queries (Common Table Expressions). Disponível em: https://www.postgresql.org/docs/current/queries-with.html. Acesso em: 15 jul. 2026.",
        url: "https://www.postgresql.org/docs/current/queries-with.html",
      },
    ],
  },
];

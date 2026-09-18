export type OrganizationCategory =
  | "Educação"
  | "Inclusão digital"
  | "Tecnologia"
  | "Formação profissional"
  | "Apoio estudantil";

export interface Organization {
  id: string;
  name: string;
  description: string;
  category: OrganizationCategory;
  officialSiteUrl: string;
  donationUrl: string;
}

export const organizations: Organization[] = [
  {
    id: "instituto-ayrton-senna",
    name: "Instituto Ayrton Senna",
    description:
      "Organização brasileira que desenvolve programas e pesquisas para melhorar a qualidade da educação pública no Brasil.",
    category: "Educação",
    officialSiteUrl: "https://institutoayrtonsenna.org.br/",
    donationUrl: "https://doacao.institutoayrtonsenna.org.br/",
  },
  {
    id: "khan-academy",
    name: "Khan Academy",
    description:
      "Organização sem fins lucrativos que oferece educação gratuita e de qualidade em diversas áreas, incluindo matemática, ciências e programação.",
    category: "Educação",
    officialSiteUrl: "https://www.khanacademy.org/",
    donationUrl: "https://www.khanacademy.org/donate",
  },
  {
    id: "recode",
    name: "Recode",
    description:
      "ONG que promove inclusão digital e formação em tecnologia para jovens em situação de vulnerabilidade social.",
    category: "Inclusão digital",
    officialSiteUrl: "https://recode.org.br/",
    donationUrl: "https://recode.org.br/seja-um-apoiador/",
  },
  {
    id: "wikimedia-foundation",
    name: "Wikimedia Foundation",
    description:
      "Organização sem fins lucrativos responsável pela Wikipédia e por outros projetos que mantêm o conhecimento livre e acessível para todos.",
    category: "Tecnologia",
    officialSiteUrl: "https://wikimediafoundation.org/",
    donationUrl: "https://donate.wikimedia.org/",
  },
  {
    id: "fundacao-estudar",
    name: "Fundação Estudar",
    description:
      "Fundação que apoia o desenvolvimento pessoal e profissional de jovens brasileiros por meio de bolsas de estudo e formação de lideranças.",
    category: "Apoio estudantil",
    officialSiteUrl: "https://www.estudar.org.br/",
    donationUrl: "https://pagamento.estudar.org.br/",
  },
];

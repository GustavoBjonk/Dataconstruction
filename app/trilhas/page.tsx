import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { RoadmapGrid } from "@/components/tracks/RoadmapGrid";
import { CourseExplorer } from "@/components/tracks/CourseExplorer";
import { roadmaps } from "@/data/roadmaps";
import { courses, COURSE_AREAS } from "@/data/courses";

export const metadata: Metadata = {
  title: "Trilhas de Aprendizado",
  description:
    "Escolha uma área de Dados, siga o roadmap e encontre cursos gratuitos ou de baixo custo para avançar em cada etapa.",
};

const COURSE_LEVELS = ["Iniciante", "Intermediário", "Avançado"];

const AREA_COMPARISON: { area: string; focus: string }[] = [
  { area: "Análise de Dados", focus: "Transformar dados em insights" },
  { area: "Ciência de Dados", focus: "Estatística + modelos + dados" },
  { area: "Engenharia de Dados", focus: "Construção de pipelines e infraestrutura" },
  { area: "Business Intelligence", focus: "Indicadores, dashboards e tomada de decisão" },
  { area: "Machine Learning", focus: "Construção de modelos preditivos" },
  { area: "SQL / Analytics", focus: "Consulta e transformação de dados" },
  { area: "Data Visualization", focus: "Comunicação visual de informações" },
];

export default function TrilhasPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Aprenda Dados com um caminho claro.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Escolha uma área, siga o roadmap e encontre cursos gratuitos ou de baixo custo
            para avançar em cada etapa.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Escolha sua área
          </h2>
          <div className="mt-6">
            <RoadmapGrid roadmaps={roadmaps} />
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-14">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Ainda não sabe qual área seguir?
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Uma comparação objetiva do foco principal de cada área. Nenhuma delas é
            &quot;melhor&quot; — o objetivo é ajudar você a entender as diferenças.
          </p>
          <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th scope="col" className="w-2/5 px-4 py-3 font-medium text-slate-900">
                    Área
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-slate-900">
                    Principal foco
                  </th>
                </tr>
              </thead>
              <tbody>
                {AREA_COMPARISON.map((row) => (
                  <tr key={row.area} className="border-b border-slate-200 last:border-b-0">
                    <th
                      scope="row"
                      className="px-4 py-3 align-top font-medium text-slate-900"
                    >
                      {row.area}
                    </th>
                    <td className="px-4 py-3 align-top text-slate-500">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-14">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Todos os cursos
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Busque e filtre cursos gratuitos e de baixo custo recomendados nas trilhas.
          </p>
          <div className="mt-6">
            <CourseExplorer courses={courses} areas={COURSE_AREAS} levels={COURSE_LEVELS} />
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-14">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Como selecionamos os cursos?
          </h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-500">
            O Dataconstruction prioriza cursos gratuitos e opções de baixo custo para facilitar o
            acesso ao aprendizado. Preços e disponibilidade podem mudar de acordo com a
            plataforma, região, promoções e condições comerciais.
          </p>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-500">
            Os cursos são oferecidos por plataformas externas. O Dataconstruction não é responsável
            pelo conteúdo, preço, disponibilidade ou alterações realizadas por essas
            plataformas.
          </p>
        </div>
      </Container>
    </section>
  );
}

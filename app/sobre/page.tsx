import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Sobre o Dataconstruction",
  description:
    "Conheça o Dataconstruction: uma plataforma de conteúdo e aprendizado voltada para tecnologia e dados.",
};

export default function SobrePage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Sobre o Dataconstruction
          </h1>
        </div>

        <div className="mt-12 max-w-prose space-y-10">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              O que é o Dataconstruction?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              O Dataconstruction é uma plataforma de conteúdo e aprendizado voltada para tecnologia
              e dados, com artigos técnicos, trilhas de estudo e ideias de projetos práticos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Para que serve o site?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              O site reúne em um só lugar:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-relaxed text-slate-500">
              <li>Artigos técnicos</li>
              <li>Datasets para praticar</li>
              <li>Trilhas de aprendizado</li>
              <li>Ideias de projetos</li>
              <li>Conteúdos educacionais</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Para quem é?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              O conteúdo é pensado para:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-relaxed text-slate-500">
              <li>Estudantes</li>
              <li>Iniciantes na área de Dados</li>
              <li>Pessoas migrando de carreira para Dados</li>
              <li>Desenvolvedores</li>
              <li>Profissionais que desejam praticar</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Nossa proposta
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              O objetivo é tornar o aprendizado de Dados e Tecnologia mais acessível, prático
              e organizado — sem enrolação, do jeito que a gente gostaria de ter aprendido.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

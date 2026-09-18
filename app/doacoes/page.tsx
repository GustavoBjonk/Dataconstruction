import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { OrganizationCard } from "@/components/donations/OrganizationCard";
import { organizations } from "@/data/donations";

export const metadata: Metadata = {
  title: "Apoie a Educação",
  description:
    "Conheça organizações verificadas que atuam com educação, inclusão digital e formação profissional e apoie diretamente o trabalho delas.",
};

export default function DoacoesPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Aprender também é uma forma de transformar.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            O Dataconstruction apresenta organizações e iniciativas que atuam com educação,
            inclusão digital, formação profissional e acesso a tecnologia. Se quiser
            contribuir, você pode apoiar diretamente qualquer uma delas.
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-500">
          O Dataconstruction não processa nem recebe essas doações. Ao clicar em uma organização,
          você será direcionado ao canal oficial disponibilizado por ela.
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((organization) => (
            <OrganizationCard key={organization.id} organization={organization} />
          ))}
        </div>
      </Container>
    </section>
  );
}

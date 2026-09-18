import Link from "next/link";
import { Container } from "./Container";

const NAVIGATION_LINKS = [
  { href: "/", label: "Início" },
  { href: "/noticias", label: "Notícias" },
  { href: "/artigos", label: "Artigos" },
  { href: "/datasets", label: "Datasets" },
  { href: "/trilhas", label: "Trilhas" },
  { href: "/projetos", label: "Projetos" },
];

const ABOUT_LINKS = [
  { href: "/sobre", label: "Sobre o Dataconstruction" },
  { href: "/doacoes", label: "Doações" },
];

function FooterNav({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{title}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <Container className="flex flex-col gap-10 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold tracking-tight text-slate-900">
            DATACONSTRUCTION<span className="font-medium text-slate-400"> | </span>
            <span className="font-medium text-slate-500">BLOG</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-slate-500">
            Conteúdo técnico sobre dados, engenharia e tecnologia.
          </p>
          <p className="mt-4 text-xs text-slate-400">© 2026 Dataconstruction</p>
        </div>

        <div className="flex flex-wrap gap-10">
          <FooterNav title="Navegação" links={NAVIGATION_LINKS} />
          <FooterNav title="Sobre" links={ABOUT_LINKS} />
        </div>
      </Container>
    </footer>
  );
}

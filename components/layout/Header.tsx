"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";

const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/noticias", label: "Notícias" },
  { href: "/artigos", label: "Artigos" },
  { href: "/datasets", label: "Datasets" },
  { href: "/trilhas", label: "Trilhas" },
  { href: "/projetos", label: "Projetos" },
  { href: "/doacoes", label: "Doações" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-slate-50">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="shrink-0 text-sm font-bold tracking-tight text-slate-900"
          onClick={() => setIsMenuOpen(false)}
        >
          DATACONSTRUCTION<span className="font-medium text-slate-400"> | </span>
          <span className="font-medium text-slate-500">BLOG</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm transition-colors ${
                      isActive
                        ? "font-medium text-slate-900"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Menu mobile"
        className={`overflow-hidden border-t border-slate-200 bg-slate-50 transition-[max-height] duration-200 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-[28rem]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block min-h-[44px] py-3 text-sm transition-colors ${
                    isActive ? "font-medium text-slate-900" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

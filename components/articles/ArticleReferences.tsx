import { ArticleReference } from "@/data/articles";

interface ArticleReferencesProps {
  references: ArticleReference[];
}

export function ArticleReferences({ references }: ArticleReferencesProps) {
  if (references.length === 0) return null;

  const sorted = [...references].sort((a, b) => a.citation.localeCompare(b.citation));

  return (
    <div className="mt-12 max-w-prose">
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">Referências</h2>
      <p className="mt-1 text-xs text-slate-400">Conforme ABNT NBR 6023.</p>
      <ul className="mt-4 space-y-4">
        {sorted.map((reference) => (
          <li key={reference.citation} className="text-sm leading-relaxed text-slate-500">
            {reference.url ? (
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent hover:underline"
              >
                {reference.citation}
              </a>
            ) : (
              reference.citation
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

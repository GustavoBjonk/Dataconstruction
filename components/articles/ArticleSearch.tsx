"use client";

interface ArticleSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ArticleSearch({ value, onChange }: ArticleSearchProps) {
  return (
    <div>
      <label htmlFor="article-search" className="sr-only">
        Buscar artigos
      </label>
      <input
        id="article-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar artigos..."
        autoComplete="off"
        className="w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  );
}

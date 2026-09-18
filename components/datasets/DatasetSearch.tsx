"use client";

interface DatasetSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function DatasetSearch({ value, onChange }: DatasetSearchProps) {
  return (
    <div>
      <label htmlFor="dataset-search" className="sr-only">
        Buscar datasets
      </label>
      <input
        id="dataset-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar datasets..."
        autoComplete="off"
        className="w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  );
}

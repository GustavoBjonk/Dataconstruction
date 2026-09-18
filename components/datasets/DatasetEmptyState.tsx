"use client";

interface DatasetEmptyStateProps {
  onClear: () => void;
}

export function DatasetEmptyState({ onClear }: DatasetEmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <div>
        <p className="text-sm font-medium text-slate-900">Nenhum dataset encontrado.</p>
        <p className="mt-1 text-sm text-slate-500">
          Tente pesquisar por outro termo ou remover alguns filtros.
        </p>
      </div>
      <button
        type="button"
        onClick={onClear}
        className="min-h-[40px] rounded-md border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100"
      >
        Limpar filtros
      </button>
    </div>
  );
}

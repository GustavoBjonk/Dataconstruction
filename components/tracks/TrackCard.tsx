import { Track } from "@/data/tracks";
import { Badge } from "@/components/ui/Badge";

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300">
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {track.level}
        </span>
        <Badge variant="accent">100% Gratuito</Badge>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
        {track.title}
      </h3>

      <div className="mt-2 flex-1">
        <p className="text-sm leading-relaxed text-slate-500">{track.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {track.topics.map((topic) => (
            <li key={topic}>
              <Badge variant="neutral">{topic}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 font-mono text-xs text-slate-400">
        {track.steps} etapas · {track.duration}
      </p>
    </article>
  );
}

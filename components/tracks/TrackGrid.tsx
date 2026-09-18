import { Track } from "@/data/tracks";
import { TrackCard } from "./TrackCard";

interface TrackGridProps {
  tracks: Track[];
}

export function TrackGrid({ tracks }: TrackGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  );
}

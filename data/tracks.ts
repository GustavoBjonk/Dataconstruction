import { roadmaps } from "@/data/roadmaps";

export interface Track {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  steps: number;
  topics: string[];
}

export const tracks: Track[] = roadmaps.map((roadmap) => ({
  id: roadmap.slug,
  title: roadmap.title,
  description: roadmap.description,
  level: roadmap.level,
  duration: roadmap.estimatedDuration,
  steps: roadmap.steps.length,
  topics: roadmap.steps.slice(0, 5).map((step) => step.title),
}));

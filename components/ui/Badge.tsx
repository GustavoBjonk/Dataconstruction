type BadgeVariant = "accent" | "neutral" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  accent: "bg-blue-50 text-accent",
  neutral: "bg-slate-100 text-slate-600",
  outline: "border border-slate-200 text-slate-600",
};

export function Badge({ children, variant = "accent", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

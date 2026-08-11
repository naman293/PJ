import { cn } from "@/lib/utils";

type PlaceholderProps = {
  /** What should eventually replace this shape, e.g. "hero character cutout" */
  replaceWith: string;
  className?: string;
  /** aspect ratio helper class, e.g. "aspect-video" */
  ratio?: string;
  light?: boolean;
  note?: string;
};

/**
 * Shape-only placeholder. No imagery is shipped — every visual slot is a
 * labelled block telling the team exactly what asset belongs there.
 */
export function Placeholder({
  replaceWith,
  className,
  ratio = "aspect-video",
  light = false,
  note,
}: PlaceholderProps) {
  return (
    <div
      className={cn("ph grain p-4", light && "ph-light", ratio, className)}
      role="img"
      aria-label={`Placeholder — replace with ${replaceWith}`}
    >
      <div className="relative z-10 max-w-[85%]">
        <p className="label-xs">Replace with</p>
        <p className="display mt-1 text-[clamp(0.71rem,1.2vw,1.05rem)] leading-tight">
          {replaceWith}
        </p>
        {note ? <p className="mt-2 text-xs opacity-70">{note}</p> : null}
      </div>
    </div>
  );
}

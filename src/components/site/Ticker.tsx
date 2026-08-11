/** Horizontally scrolling ticker tape. Repeats items twice so it loops seamlessly. */
export function Ticker({
  items,
  className = "border-border bg-signal text-white",
  speed = "280s",
  textClassName = "label-xs",
}: {
  items: string[];
  className?: string;
  speed?: string;
  textClassName?: string;
}) {
  // Repeat the items enough times to fill a massive container like 300vw
  const doubled = Array(20).fill(items).flat();

  return (
    <div
      className={`ticker overflow-hidden border-y py-2 ${className}`}
      aria-hidden
    >
      <div
        className="ticker-inner"
        style={{ animationDuration: speed }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`${textClassName} mx-6 whitespace-nowrap`}
          >
            {item}
            <span className="mx-6 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-current opacity-50" />
          </span>
        ))}
      </div>
    </div>
  );
}

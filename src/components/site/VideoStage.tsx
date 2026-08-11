import { useEffect, useRef } from "react";
import { Placeholder } from "./Placeholder";

// Fan card data — represents PJ's most-viewed videos
const fanCards = [
  {
    label: "Short — Iss Tarah Ka Pyaar Mt Karna",
    category: "Shorts",
    views: "30M",
    rotate: -18,
    translateY: 48,
    scale: 0.78,
    z: 0,
  },
  {
    label: "Worst Things Joker Has Done",
    category: "Listicle",
    views: "18M",
    rotate: -9,
    translateY: 20,
    scale: 0.89,
    z: 1,
  },
  {
    label: "Dr. Doom Powers Leaked?",
    category: "Breakdown",
    views: "21M",
    rotate: 0,
    translateY: 0,
    scale: 1,
    z: 2,
  },
  {
    label: "Deleted Scenes Marvel & DC",
    category: "Deep Dive",
    views: "14M",
    rotate: 9,
    translateY: 20,
    scale: 0.89,
    z: 1,
  },
  {
    label: "Spider-Verse Timeline",
    category: "Explained",
    views: "11M",
    rotate: 18,
    translateY: 48,
    scale: 0.78,
    z: 0,
  },
];

/**
 * VideoStage — the cinematic fan-card layout matching the layout inspiration.
 * Cards fan out from center with 3D perspective. Hover lifts a card fully upright.
 * Side "wings" replicate the wide-angle cinematic stills from the reference.
 */
export function VideoStage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const cards = el.querySelectorAll<HTMLElement>(".fan-card");
      cards.forEach((card, i) => {
        const depth = (i - 2) * 6;
        card.style.setProperty(
          "--parallax-x",
          `${dx * depth * 0.4}px`,
        );
        card.style.setProperty(
          "--parallax-y",
          `${dy * depth * 0.2}px`,
        );
      });
    };

    const onLeave = () => {
      const cards = el.querySelectorAll<HTMLElement>(".fan-card");
      cards.forEach((card) => {
        card.style.setProperty("--parallax-x", "0px");
        card.style.setProperty("--parallax-y", "0px");
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-border bg-carbon">
      {/* Radial dark-red glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, color-mix(in srgb, var(--deep-red) 30%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Outer ring accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1600px] px-4 py-20">
        <div className="grid items-center gap-0 lg:grid-cols-[280px_1fr_280px] xl:grid-cols-[340px_1fr_340px]">

          {/* ── Left wing ─────────────────────────── */}
          <div
            className="hidden lg:block"
            style={{ perspective: "800px" }}
            aria-hidden
          >
            <div
              style={{
                transform: "rotateY(32deg) translateX(-20px)",
                transformOrigin: "right center",
              }}
            >
              <Placeholder
                replaceWith="cinematic still — superhero action shot (left wing)"
                ratio="aspect-[4/3]"
                className="rounded-[16px] opacity-80"
              />
            </div>
          </div>

          {/* ── Center: fan cards + text ───────────── */}
          <div className="text-center" ref={containerRef}>
            <p className="label-xs text-signal">The Watch Wall</p>
            <h2 className="display mt-2 text-[clamp(1.35rem,3.0vw,2.1rem)] text-paper/70">
              Most-viewed breakdowns
            </h2>

            {/* Fan card row */}
            <div
              className="relative mt-10 flex items-end justify-center"
              style={{ perspective: "1400px", perspectiveOrigin: "50% 80%" }}
            >
              {fanCards.map((c, i) => (
                <div
                  key={c.label}
                  className="fan-card relative mx-[-12px] w-[110px] shrink-0 sm:w-[130px] md:mx-[-8px] md:w-[140px]"
                  style={{
                    transform: `rotate(${c.rotate}deg) translateY(${c.translateY}px) scale(${c.scale}) translateX(var(--parallax-x, 0px)) translateY(var(--parallax-y, 0px))`,
                    zIndex: c.z + 1,
                    transformOrigin: "bottom center",
                    transition: "transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 350ms ease, z-index 0ms",
                  }}
                >
                  <Placeholder
                    replaceWith={c.label}
                    ratio="aspect-[3/4]"
                    className="rounded-[10px] border border-white/10"
                  />
                  {/* View count badge */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-signal px-2 py-0.5">
                    <span className="label-xs text-[10px] text-white">{c.views}</span>
                  </div>
                  {/* Category */}
                  <div className="absolute left-0 right-0 top-2 flex justify-center">
                    <span className="label-xs rounded-full bg-ink/70 px-2 py-0.5 text-[9px] text-ash backdrop-blur-sm">
                      {c.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-lg text-ash">
              Every week: the breakdown you actually needed. Plots, timelines,
              easter eggs, and the weird detail nobody else caught.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="https://www.youtube.com/@PJExplained"
                target="_blank"
                rel="noreferrer noopener"
                id="watch-latest-btn"
                className="label-xs rounded-[10px] bg-signal px-6 py-3 text-white transition-opacity hover:opacity-90"
              >
                Watch latest →
              </a>
              <a
                href="#latest"
                id="browse-archive-btn"
                className="label-xs rounded-[10px] border border-border px-6 py-3 text-paper transition-colors hover:border-signal/50"
              >
                Browse archive
              </a>
            </div>
          </div>

          {/* ── Right wing ────────────────────────── */}
          <div
            className="hidden lg:block"
            style={{ perspective: "800px" }}
            aria-hidden
          >
            <div
              style={{
                transform: "rotateY(-32deg) translateX(20px)",
                transformOrigin: "left center",
              }}
            >
              <Placeholder
                replaceWith="cinematic still — Bollywood dramatic shot (right wing)"
                ratio="aspect-[4/3]"
                className="rounded-[16px] opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

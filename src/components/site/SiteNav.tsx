import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Youtube } from "lucide-react";

const links = [
  { to: "/videos", label: "Videos" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow/border after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-ink/95 shadow-[0_4px_30px_oklch(0_0_0/40%)] backdrop-blur-md"
          : "border-transparent bg-ink/80 backdrop-blur"
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-site items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" id="site-logo">
          <span
            className="display text-xl tracking-wide transition-colors group-hover:text-signal"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
          >
            PJ
          </span>
          <span
            className="inline-block h-2.5 w-2.5 rounded-full bg-signal transition-transform group-hover:scale-125"
            aria-hidden
          />
          <span
            className="display text-xl tracking-wide transition-colors group-hover:text-signal"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
          >
            Explained
          </span>
        </Link>

        {/* Centered Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="label-xs relative px-3 py-2 text-ash transition-colors hover:text-paper after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:scale-x-0 after:rounded-full after:bg-signal after:transition-transform hover:after:scale-x-100"
              activeProps={{
                className: "label-xs relative px-3 py-2 text-paper after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-signal",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side controls (Subscribe + Mobile Menu) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://moctale.in/u/pjexplained"
              target="_blank"
              rel="noreferrer noopener"
              className="opacity-80 transition-all hover:scale-110 hover:opacity-100 active:scale-95"
              title="Moctale"
            >
              <img src="https://www.google.com/s2/favicons?domain=moctale.in&sz=128" alt="Moctale" className="h-6 w-6 rounded-[4px]" />
            </a>
            <a
              href="https://www.youtube.com/@PJExplained"
              target="_blank"
              rel="noreferrer noopener"
              id="nav-subscribe-btn"
              className="text-ash transition-all hover:scale-110 hover:text-signal active:scale-95"
              title="YouTube"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            id="mobile-menu-btn"
            className="label-xs flex items-center gap-2 rounded-[10px] border border-border px-3 py-2 transition-colors hover:border-signal/50 md:hidden"
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded bg-paper transition-transform origin-top-left ${open ? "rotate-45 translate-x-0.5" : ""}`}
              />
              <span
                className={`block h-0.5 rounded bg-paper transition-all ${open ? "w-0 opacity-0" : "w-full opacity-100"}`}
              />
              <span
                className={`block h-0.5 w-full rounded bg-paper transition-transform origin-bottom-left ${open ? "-rotate-45 translate-x-0.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-80" : "max-h-0"}`}
      >
        <nav className="border-t border-border bg-carbon px-6 pb-4 pt-3" aria-label="Mobile navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="display block border-b border-border/50 py-4 text-2xl transition-colors hover:text-signal"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-6 flex justify-center gap-8 pb-4">
            <a
              href="https://moctale.in/u/pjexplained"
              target="_blank"
              rel="noreferrer noopener"
              className="opacity-80 transition-all hover:scale-110 hover:opacity-100 active:scale-95"
              title="Moctale"
            >
              <img src="https://www.google.com/s2/favicons?domain=moctale.in&sz=128" alt="Moctale" className="h-7 w-7 rounded-[4px]" />
            </a>
            <a
              href="https://www.youtube.com/@PJExplained"
              target="_blank"
              rel="noreferrer noopener"
              className="text-ash transition-all hover:scale-110 hover:text-signal active:scale-95"
              title="YouTube"
            >
              <Youtube className="h-7 w-7" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

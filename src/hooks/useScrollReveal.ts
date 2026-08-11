import { useEffect, useRef } from "react";

/**
 * useScrollReveal — attaches an IntersectionObserver to a container ref.
 * When the element enters the viewport, adds the class "revealed".
 * Works with .reveal-up and .reveal-stagger CSS utilities in styles.css.
 */
export function useScrollReveal<T extends Element>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
      if (!entry) return;
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

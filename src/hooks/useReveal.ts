import { useEffect, useRef, useState } from "react";

/** True when motion should be skipped entirely and content shown immediately. */
function shouldSkipMotion() {
  if (typeof window === "undefined") return true;
  return (
    typeof IntersectionObserver === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * One shared reveal for the quiet sections. Fires once, then stops observing —
 * content never re-hides on the way back up.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  rootMargin = "0px 0px -12% 0px",
) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(shouldSkipMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    let observed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        observed = true;
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.1 },
    );

    observer.observe(node);

    // Content must never depend on the observer firing. If it has not reported
    // at all, show everything rather than leave the section blank.
    const failsafe = window.setTimeout(() => {
      if (!observed) setShown(true);
    }, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [rootMargin, shown]);

  return [ref, shown] as const;
}

/**
 * Tracks which tour step is nearest the middle of the viewport. Drives the
 * pinned board; scrolling itself is never intercepted.
 *
 * Measured synchronously on scroll: three rect reads and no writes, and React
 * bails out when the index is unchanged, so this settles to one render per
 * step change.
 */
export function useActiveStep(count: number) {
  const nodes = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const measure = () => {
      const middle = window.innerHeight / 2;
      let best = 0;
      let bestDistance = Infinity;

      nodes.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });

      setActive(best);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [count]);

  const setStepRef = (index: number) => (el: HTMLElement | null) => {
    nodes.current[index] = el;
  };

  return [setStepRef, active] as const;
}

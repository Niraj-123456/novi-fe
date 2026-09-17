import { useEffect, useRef, useState } from "react";

function getInitialInView() {
  if (typeof window === "undefined") return false;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  return prefersReducedMotion || typeof IntersectionObserver === "undefined";
}

export function useInView({
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
} = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(getInitialInView);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return; // already true from initializer, skip observing

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, inView]);

  return [ref, inView] as const;
}

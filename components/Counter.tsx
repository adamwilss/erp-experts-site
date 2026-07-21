"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/**
 * Counts up from 0 to target when scrolled into view.
 * Honours prefers-reduced-motion (jumps straight to target).
 */
export default function Counter({
  target,
  duration = 1800,
  prefix = "",
  suffix = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const start = () => {
      if (started.current) return;
      started.current = true;

      if (reduce) {
        setValue(target);
        return;
      }

      const startTs = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTs) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) start();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}

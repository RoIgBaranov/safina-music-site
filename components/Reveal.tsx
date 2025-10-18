"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  rootMargin?: string;
  once?: boolean;
};

export default function Reveal({
  className = "",
  children,
  rootMargin = "0px 0px -10% 0px",
  once = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("reveal--in");
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove("reveal--in");
          }
        });
      },
      { root: null, rootMargin, threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

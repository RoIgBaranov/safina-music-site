"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Прокрутить вверх"
      onClick={() => {
        // уважение reduce-motion
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      }}
      className={[
        "fixed right-4 bottom-5 z-50 select-none",
        "rounded-full border border-[#2e3353] shadow",
        "bg-white/8 backdrop-blur px-3 py-2 text-sm",
        "text-white hover:opacity-90 transition",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      style={{
        background:
          "linear-gradient(180deg, rgba(26,29,51,.85), rgba(21,23,43,.85))",
      }}
    >
      ↑ Вверх
    </button>
  );
}

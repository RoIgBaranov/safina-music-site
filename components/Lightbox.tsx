"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  images: string[];        // абсолютные пути из /public
  startIndex?: number;     // с какого начать
  alt?: string;            // общий alt-префикс
  onClose: () => void;     // закрытие
};

export default function Lightbox({ images, startIndex = 0, alt = "Фото", onClose }: Props) {
  const [i, setI] = useState(startIndex);
  const total = images.length;

  const reduce = useMemo(
    () => (typeof window !== "undefined"
      ? window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
      : false),
    []
  );

  // Блокируем прокрутку фона
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // ESC/стрелки
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((v) => (v + 1) % total);
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, total]);

  // Свайпы
  const touch = useRef<{x: number; y: number} | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      setI((v) => (dx < 0 ? (v + 1) % total : (v - 1 + total) % total));
    }
    touch.current = null;
  };

  // Предзагрузка соседних
  const nextSrc = images[(i + 1) % total];
  const prevSrc = images[(i - 1 + total) % total];

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр фото"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ background: "linear-gradient(180deg, rgba(8,10,24,.92), rgba(10,12,28,.92))" }}
    >
      {/* клик «сквозь» запрещаем на контенте */}
      <div
        className="relative w-[92vw] h-[80vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* само фото */}
        <div
          className={[
            "absolute inset-0 rounded-2xl overflow-hidden border",
            "border-[#2e3353] bg-black/30",
            reduce ? "" : "transition-transform duration-300 ease-out",
          ].join(" ")}
        >
          <Image
            key={images[i]} /* чтобы анимация мягче проходила */
            src={images[i]}
            alt={`${alt} ${i + 1} из ${total}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* кнопки навигации */}
        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Предыдущее"
              onClick={() => setI((v) => (v - 1 + total) % total)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[#2e3353] bg-white/10 backdrop-blur px-3 py-2 hover:bg-white/20 transition shadow"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Следующее"
              onClick={() => setI((v) => (v + 1) % total)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[#2e3353] bg-white/10 backdrop-blur px-3 py-2 hover:bg-white/20 transition shadow"
            >
              ›
            </button>
          </>
        )}

        {/* закрыть */}
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full border border-[#2e3353] bg-white/10 backdrop-blur px-3 py-2 hover:bg-white/20 transition shadow"
        >
          ✕
        </button>

        {/* индикатор */}
        {total > 1 && (
          <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-white/90">
            {i + 1} / {total}
          </div>
        )}
      </div>

      {/* предзагрузка соседних кадов — браузер сам закэширует */}
      <link rel="preload" as="image" href={nextSrc} />
      <link rel="preload" as="image" href={prevSrc} />
    </div>
  );
}

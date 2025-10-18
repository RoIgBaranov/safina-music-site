"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  title: string;
  images: string[];
  href: string; // "Смотреть всё"
  altPrefix?: string;
  /** Управляемый индекс. Если не передан — компонент хранит индекс сам. */
  index?: number;
  onIndexChange?: (next: number) => void;
};

export default function Carousel({
  title,
  images,
  href,
  altPrefix = "Галерея",
  index,
  onIndexChange,
}: Props) {
  const n = images.length;
  const [innerI, setInnerI] = useState(0);
  const i = typeof index === "number" ? index : innerI;
  const setI = onIndexChange ?? setInnerI;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setI((i - 1 + n) % n);
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setI((i + 1) % n);
  };

  return (
    <div className="group">
      {/* Заголовок + ссылка */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">{title}</h3>
        <Link
          href={href}
          className="text-muted text-sm nav-link hover:text-[var(--brand)] transition"
        >
          Смотреть всё →
        </Link>
      </div>

      {/* Карусель */}
      <div className="relative mt-3 aspect-[4/3] rounded-2xl overflow-hidden card--border">
        {/* Кроссфейд между кадрами (мягкий) */}
        <div className="h-full w-full relative">
          {images.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt={`${altPrefix}: ${title}`}
              fill
              sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
              priority={idx === 0}
              className={[
                "absolute inset-0 object-cover",
                "transition-opacity transition-transform duration-500 ease-out",
                "will-change-[opacity,transform]",
                idx === i ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]",
                "pointer-events-none", // клики обрабатывают кнопки/точки
              ].join(" ")}
            />
          ))}
        </div>

        {/* Стрелки */}
        {n > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Назад"
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center
                         w-9 h-9 rounded-full border border-[#2e3353] bg-white/10 backdrop-blur
                         hover:bg-white/20 transition shadow z-10 cursor-pointer hover:scale-[1.03]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                className="pointer-events-none"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Вперёд"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center
                         w-9 h-9 rounded-full border border-[#2e3353] bg-white/10 backdrop-blur
                         hover:bg-white/20 transition shadow z-10 cursor-pointer hover:scale-[1.03]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                className="pointer-events-none"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}

        {/* Точки */}
        {n > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
            {images.map((_, idx) => {
              const active = idx === i;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setI(idx);
                  }}
                  aria-label={`Показать слайд ${idx + 1}`}
                  className={[
                    "h-1.5 rounded-full transition-all cursor-pointer",
                    active
                      ? "w-4 bg-white/90"
                      : "w-2 bg-white/50 hover:bg-white/70",
                  ].join(" ")}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Carousel from "@/components/Carousel";
import Reveal from "@/components/Reveal";

type Item = {
  title: string;
  href: string;
  images: string[];
  alt?: string;
};

type Props = {
  items: [Item, Item, Item]; // три карусели
  delayMs?: number;          // задержка между кадрами активной, по умолчанию 3500
};

export default function CarouselGroup({ items, delayMs = 3500 }: Props) {
  // индексы каждого слайдера
  const [idx, setIdx] = useState<[number, number, number]>([0, 0, 0]);
  // какая карусель сейчас активна (крутится)
  const [active, setActive] = useState<0 | 1 | 2>(0);

  const reduce = useMemo(
    () =>
      typeof window !== "undefined"
        ? window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
        : false,
    []
  );

  // ⬇️ вместо setInterval используем «одноразовый» таймер
  const timeoutRef = useRef<number | null>(null);
  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Если у текущей карусели 0 или 1 кадр — мгновенно передаём эстафету дальше
  useEffect(() => {
    const n = items[active].images.length;
    if (n <= 1) {
      setActive(((active + 1) % 3) as 0 | 1 | 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Главная логика авто-переключения с «перезапуском» таймера
  useEffect(() => {
    if (reduce) return; // уважение reduce motion
    clearTimer();

    const n = items[active].images.length;
    if (n <= 1) return;

    // Запланировать переключение РОВНО через delayMs
    timeoutRef.current = window.setTimeout(() => {
      setIdx((prev) => {
        const next = [...prev] as [number, number, number];
        const nextIndex = (prev[active] + 1) % n;
        next[active] = nextIndex;
        // если замкнули круг — передаём ход следующей карусели
        if (nextIndex === 0) {
          setActive(((active + 1) % 3) as 0 | 1 | 2);
        }
        return next;
      });
    }, delayMs) as unknown as number;

    // очистка таймера при любом изменении зависимостей/анмаунте
    return clearTimer;
    // ВАЖНО: когда пользователь вручную меняет кадр в активной карусели,
    // меняется idx[active] → эффект пересоздаст таймер с полной задержкой.
    // Поэтому завязываемся именно на «текущий индекс активной карусели».
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, items, delayMs, reduce, idx[active]]);

  // Когда пользователь вручную листает конкретную карусель — отдаём ей ход
  // и сбрасываем таймер на полную задержку (это произойдёт автоматически,
  // т.к. изменится idx[active] или active).
  const handleChange = (which: 0 | 1 | 2) => (val: number) => {
    setIdx((prev) => {
      const next = [...prev] as [number, number, number];
      next[which] = val;
      return next;
    });
    setActive(which); // если пользователь листает уже активную — active не поменяется,
    // но idx[active] изменится → таймер перезапустится эффектом выше.
  };

  return (
    <section className="section-topline">
      <div className="container-max py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal className="reveal">
            <Carousel
              title={items[0].title}
              href={items[0].href}
              images={items[0].images}
              altPrefix={items[0].alt ?? "Галерея"}
              index={idx[0]}
              onIndexChange={handleChange(0)}
            />
          </Reveal>

          <Reveal className="reveal reveal-delay-1">
            <Carousel
              title={items[1].title}
              href={items[1].href}
              images={items[1].images}
              altPrefix={items[1].alt ?? "Галерея"}
              index={idx[1]}
              onIndexChange={handleChange(1)}
            />
          </Reveal>

          <Reveal className="reveal reveal-delay-2">
            <Carousel
              title={items[2].title}
              href={items[2].href}
              images={items[2].images}
              altPrefix={items[2].alt ?? "Галерея"}
              index={idx[2]}
              onIndexChange={handleChange(2)}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

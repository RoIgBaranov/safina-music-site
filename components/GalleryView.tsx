"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Lightbox from "@/components/Lightbox";

const lessons = [
  "/images/gallery-lessons-1.JPG",
  "/images/gallery-lessons-2.png",
  "/images/gallery-lessons-3.png",
  
];

const concerts = [
  "/images/gallery-concerts-1.png",
  "/images/gallery-concerts-2.png",
  "/images/gallery-concerts-3.png",
];

const backstage = [
  "/images/gallery-backstage-1.png",
  "/images/gallery-backstage-2.png",
  "/images/gallery-backstage-3.png",
];

function Section({
  id,
  title,
  images,
  onOpen,
}: {
  id: string;
  title: string;
  images: string[];
  onOpen: (group: string[], index: number, alt: string) => void;
}) {
  // кнопки прокрутки
  const rowRef = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    const page = el.clientWidth * 0.9; // почти на ширину
    el.scrollBy({ left: dir === "left" ? -page : page, behavior: "smooth" });
  };

  return (
    <section id={id} className="section-topline">
      <div className="container-max py-12 relative">
        <div className="flex items-end justify-between gap-4">
          <h2 className="section-title">{title}</h2>
          <Link href="#top" className="text-muted text-sm hover:opacity-80">
            Наверх ↑
          </Link>
        </div>

        {/* Лента превью (в одну строку) */}
        <div className="relative mt-6">
          {/* Скролл-контейнер */}
          <div
            ref={rowRef}
            className="overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            <div className="flex gap-4 pr-2">
              {images.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => onOpen(images, idx, title)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden card--border
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]
                             cursor-zoom-in shrink-0 w-[240px] sm:w-[280px] md:w-[300px] snap-start"
                >
                  <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Градиентные подсказки по краям (намёк на скролл) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(15,17,32,1), rgba(15,17,32,0))",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10"
            style={{
              background:
                "linear-gradient(270deg, rgba(15,17,32,1), rgba(15,17,32,0))",
            }}
          />

          {/* Кнопки пролистывания (показываются на md+) */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              aria-label="Прокрутить влево"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[#2e3353]
                         bg-white/10 backdrop-blur px-3 py-2 hover:bg-white/20 transition shadow"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              aria-label="Прокрутить вправо"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[#2e3353]
                         bg-white/10 backdrop-blur px-3 py-2 hover:bg-white/20 transition shadow"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GalleryView() {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<string[]>([]);
  const [start, setStart] = useState(0);
  const [alt, setAlt] = useState("Фото");

  const handleOpen = (g: string[], index: number, a: string) => {
    setGroup(g);
    setStart(index);
    setAlt(a);
    setOpen(true);
  };

  return (
    <>
      <a id="top" />
      <div className="container-max py-10 md:py-14">
        <h1 className="section-title">Галерея</h1>
        <p className="text-secondary mt-2">
          Фото нашей школы: занятия, концерты и немного бекстейджа.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <a href="#lessons" className="btn btn-outline">
            Занятия
          </a>
          <a href="#concerts" className="btn btn-outline">
            Концерты
          </a>
          <a href="#backstage" className="btn btn-outline">
            Бекстейдж
          </a>
        </div>
      </div>

      <Section
        id="lessons"
        title="Занятия"
        images={lessons}
        onOpen={handleOpen}
      />
      <Section
        id="concerts"
        title="Концерты"
        images={concerts}
        onOpen={handleOpen}
      />
      <Section
        id="backstage"
        title="Бекстейдж"
        images={backstage}
        onOpen={handleOpen}
      />

      {open && (
        <Lightbox
          images={group}
          startIndex={start}
          alt={alt}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

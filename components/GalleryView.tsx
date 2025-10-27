"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Lightbox from "@/components/Lightbox";

type CloudItem = { id: string; url: string; width?: number; height?: number };
type SectionKey = "lessons" | "concerts" | "backstage";

async function fetchSection(section: SectionKey): Promise<CloudItem[]> {
  const res = await fetch(`/api/gallery/${section}`, { cache: "no-store" });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  return (data?.items || []) as CloudItem[];
}

function useGalleryData() {
  const [data, setData] = useState<Record<SectionKey, CloudItem[]>>({
    lessons: [],
    concerts: [],
    backstage: [],
  });
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const [lessons, concerts, backstage] = await Promise.all([
          fetchSection("lessons"),
          fetchSection("concerts"),
          fetchSection("backstage"),
        ]);
        if (!cancelled) {
          setData({ lessons, concerts, backstage });
        }
      } catch (e: any) {
        if (!cancelled) setErr(e?.message || "Failed to load gallery");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, err };
}

function RowSkeleton() {
  return (
    <div className="flex gap-4 pr-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="shrink-0 w-[240px] sm:w-[280px] md:w-[300px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#2e3353] bg-white/5 animate-pulse"
        />
      ))}
    </div>
  );
}

function Section({
  id,
  title,
  images,
  loading,
  onOpen,
}: {
  id: SectionKey;
  title: string;
  images: CloudItem[];
  loading?: boolean;
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

  const urls = useMemo(() => images.map((i) => i.url), [images]);

  return (
    <section id={id} className="section-topline">
      <div className="container-max py-12 relative">
        <div className="flex items-end justify-between gap-4">
          <h2 className="section-title">{title}</h2>
          <Link href="#top" className="text-muted text-sm hover:opacity-80">
            Наверх ↑
          </Link>
        </div>

        <div className="relative mt-6">
          <div
            ref={rowRef}
            className="overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {loading ? (
              <RowSkeleton />
            ) : urls.length === 0 ? (
              <p className="text-secondary py-6 px-1">Пока нет фотографий.</p>
            ) : (
              <div className="flex gap-4 pr-2">
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => onOpen(urls, idx, title)}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden card--border
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]
                               cursor-zoom-in shrink-0 w-[240px] sm:w-[280px] md:w-[300px] snap-start"
                    aria-label={`Открыть фото ${idx + 1} в разделе ${title}`}
                  >
                    <Image
                      src={img.url}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="300px"
                      // Cloudinary уже даёт f_auto,q_auto из нашего helper’а
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Градиентные подсказки по краям */}
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

          {/* Кнопки пролистывания (md+) */}
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
  const { data, loading, err } = useGalleryData();

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

        {/* Быстрые якоря */}
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

        {/* Сообщение об ошибке (если что-то пошло не так) */}
        {err && (
          <div className="mt-4 card card--tint card--border">
            <div className="text-red-400 font-semibold">Не удалось загрузить галерею</div>
            <div className="text-secondary text-sm mt-1">{err}</div>
          </div>
        )}
      </div>

      <Section
        id="lessons"
        title="Занятия"
        images={data.lessons}
        loading={loading}
        onOpen={handleOpen}
      />
      <Section
        id="concerts"
        title="Концерты"
        images={data.concerts}
        loading={loading}
        onOpen={handleOpen}
      />
      <Section
        id="backstage"
        title="Бекстейдж"
        images={data.backstage}
        loading={loading}
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

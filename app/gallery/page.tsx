import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Галерея — Safina Music School",
  description: "Фото с занятий, концертов и бекстейджа.",
};

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

function Section({ id, title, images }: { id: string; title: string; images: string[] }) {
  return (
    <section id={id} className="section-topline">
      <div className="container-max py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="section-title">{title}</h2>
          <Link href="#top" className="text-muted text-sm hover:opacity-80">Наверх ↑</Link>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src) => (
            <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden card--border">
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
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
          <a href="#lessons" className="btn btn-outline">Занятия</a>
          <a href="#concerts" className="btn btn-outline">Концерты</a>
          <a href="#backstage" className="btn btn-outline">Бекстейдж</a>
        </div>
      </div>

      <Section id="lessons" title="Занятия" images={lessons} />
      <Section id="concerts" title="Концерты" images={concerts} />
      <Section id="backstage" title="Бекстейдж" images={backstage} />
    </>
  );
}

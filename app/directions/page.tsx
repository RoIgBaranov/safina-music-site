import Link from "next/link";

const items = [
  {
    slug: "vocal-kids",
    title: "Вокал — дети",
    desc: "Играем, поём, развиваем дыхание и уверенность.",
  },
  {
    slug: "vocal-adults",
    title: "Вокал — взрослые",
    desc: "Техника без зажимов, любимые песни, уверенность.",
  },
  {
    slug: "piano",
    title: "Фортепиано",
    desc: "С нуля: ноты, техника, репертуар. Подготовка к сцене.",
  },
  {
    slug: "guitar",
    title: "Гитара",
    desc: "Аккорды, ритм, переборы. Разбор песен под ваши цели.",
  },
];

export const metadata = {
  title: "Направления — Safina Music School",
  description:
    "Вокал для детей и взрослых, фортепиано, гитара. Индивидуальные и мини-группы.",
};

export default function DirectionsPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Направления</h1>
      <p className="text-gray-600 mt-2">
        Выберите направление, чтобы узнать, как проходит пробный, что получите за 8 занятий,
        и записаться на удобное время.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <Link
            key={i.slug}
            href={`/directions/${i.slug}`}
            className="card card--tint lift hover:shadow-md"
          >
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-gray-600 mt-1">{i.desc}</p>
            <span className="text-[var(--brand)] text-sm mt-3 inline-block">
              Подробнее →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";

type Teacher = {
  name: string;
  role: string;
  bio: string;
  photo?: string; // путь в /public/images
  video?: string; // путь в /public, например /videos/maria-intro.mp4
};

const teachers: Teacher[] = [
  {
    name: "Мария Баранова",
    role: "Педагог по вокалу",
    bio: "8+ лет практики: техника без зажимов, дыхание, уверенность на сцене. Индивидуально и мини-группы.",
    photo: "/images/maria.jpg", // поставь своё фото (или убери строку — будет заглушка)
    // video: "/videos/maria-intro.mp4", // добавишь при желании
  },
  {
    name: "Кати Чаусова",
    role: "Преподаватель вокала/инструментов",
    bio: "Подбор программы под цель ученика: для души, сцены, поступления. Дружелюбный подход.",
    photo: "/images/katya.jpg",
  },
];

export const metadata = {
  title: "Преподаватели — Safina Music School",
  description:
    "Команда Safina: бережный подход, техника без зажимов, подготовка к сцене и конкурсам.",
};

export default function TeachersPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Преподаватели</h1>
      <p className="text-gray-600 mt-2">
        Мы помогаем бережно раскрыть голос и уверенно выйти на сцену. Ниже — кратко о каждом.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {teachers.map((t) => (
          <article key={t.name} className="card hover:-translate-y-0.5 transition">
            <div className="flex gap-4">
              {/* Фото или заглушка */}
              {t.photo ? (
                <Image
                src={t.photo}
                alt={t.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-xl object-cover shrink-0"
              />
              ) : (
                <div className="w-24 h-24 rounded-xl bg-gray-200 shrink-0" />
              )}

              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <div className="text-sm text-gray-500">{t.role}</div>
                <p className="text-gray-700 mt-2">{t.bio}</p>

                <Link
                  href="/directions"
                  className="text-[var(--brand)] text-sm mt-3 inline-block"
                >
                  Посмотреть направления →
                </Link>
              </div>
            </div>

            {/* Блок под видео (если добавишь файл) */}
            {t.video && (
              <div className="mt-4">
                <video
                  controls
                  className="w-full rounded-xl"
                  src={t.video}
                  // poster="/images/video-poster.jpg"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

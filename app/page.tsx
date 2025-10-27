import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import CarouselGroup from "@/components/CarouselGroup";
import HomePrices from "@/components/home/HomePrices";
import HomeAudience from "@/components/home/HomeAudience";

import {
  MicIcon,
  MusicIcon,
  SparklesIcon,
  HeartIcon,
  TicketIcon,
  UserIcon,
  UsersIcon,
} from "@/components/Icons";

export default function HomePage() {
  const audience = [
    {
      title: "Дети 5–7",
      text: "Играем и поём, ставим дыхание мягко.",
      icon: <SparklesIcon />,
    },
    {
      title: "Дети 8–12",
      text: "Раскрываем голос, снимаем зажимы.",
      icon: <MusicIcon />,
    },
    {
      title: "Подростки",
      text: "Подготовка к сцене/конкурсам.",
      icon: <MicIcon />,
    },
    {
      title: "Взрослые",
      text: "С нуля и для души, любимые песни.",
      icon: <HeartIcon />,
    },
  ];

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-transparent">
        {/* Мягкая «сфера» позади контента, но поверх фона секции */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 -top-24 -left-24 md:-top-28 md:-left-28 w-[28rem] h-[28rem] md:w-[34rem] md:h-[34rem] rounded-full blur-3xl opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(closest-side, #4f46e5, transparent 72%)",
          }}
        />
        {/* Вторая мягкая «сфера» справа-сверху, поменьше */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 -top-16 -right-10 md:-top-24 md:-right-16 w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem] rounded-full blur-3xl opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(closest-side, #3b82f6, transparent 72%)",
          }}
        />

        {/* Основной контент HERO */}
        <div className="container-max relative z-10 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* Левая колонка */}
          <Reveal>
            <div className="mobile-scrim">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight ">
                Музыкальная школа в&nbsp;Холоне —{" "}
                <span className="text-[var(--brand-500)]">вокал</span>,
                фортепиано, гитара
              </h1>

              <p className="mt-4 text-lg text-secondary">
                Для детей и взрослых. Дружелюбная атмосфера, сцена и концерты.
                Пробный урок — запишитесь за 1 минуту.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/directions" className="btn btn-outline">
                  Направления
                </Link>
                <Link href="/pricing" className="btn btn-primary-calm">
                  Цены и запись
                </Link>
              </div>

              <ul className="mt-6 grid gap-2 text-secondary">
                <li>• 4 кабинета + зал для выступлений</li>
                <li>• Индивидуально и мини-группы</li>
                <li>• 30+ учеников, регулярные концерты</li>
              </ul>
            </div>
          </Reveal>

          {/* Правая колонка: фото */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/hall.jpg"
              alt="Зал школы"
              fill
              className="object-cover rounded-2xl"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== Мини-галерея: 3 карусели ===== */}
      <CarouselGroup
        items={[
          {
            title: "Фото с занятий",
            href: "/gallery#lessons",
            images: [
              "/images/gallery-lessons-1.JPG",
              "/images/gallery-lessons-2.png",
              "/images/gallery-lessons-3.png",
            ],
          },
          {
            title: "Фото с концертов",
            href: "/gallery#concerts",
            images: [
              "/images/gallery-concerts-1.png",
              "/images/gallery-concerts-2.png",
              "/images/gallery-concerts-3.png",
            ],
          },
          {
            title: "Бекстейдж",
            href: "/gallery#backstage",
            images: [
              "/images/gallery-backstage-1.png",
              "/images/gallery-backstage-2.png",
              "/images/gallery-backstage-3.png",
            ],
          },
        ]}
      />

      {/* ===== ДЛЯ КОГО (заменено на HomeAudience) ===== */}
      <section className="section-topline">
        <div className="container-max py-14">
          <Reveal>
            <HomeAudience />
          </Reveal>
        </div>
      </section>

      {/* ===== ПРЕПОДАВАТЕЛИ (превью) ===== */}
      <section className="bg-gray-50 section-topline  on-light">
        <Reveal className="container-max py-14">
          <h2 className="section-title">Преподаватели</h2>
          <p className="text-secondary mt-2">
            Бережный подход, техника без зажимов, сцена.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div className="card card--tint lift card--border flex gap-4">
              <img
                src="/images/maria.jpg"
                alt="Мария Баранова"
                className="w-24 h-24 rounded-xl object-cover"
              />

              <div>
                <h3 className="font-semibold">Мария Баранова</h3>
                <p className="text-700 text-sm mt-1">
                  Педагог по вокалу. 8+ лет практики. Подготовка к сцене.
                </p>
                <Link
                  href="/teachers"
                  className="text-[var(--brand)] text-sm mt-2 inline-block"
                >
                  Подробнее →
                </Link>
              </div>
            </div>

            <div className="card card--tint lift card--border flex gap-4">
              <img
                src="/images/katya.jpg"
                alt="Екатерина Чаусова"
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div>
                <h3 className="font-semibold">Екатерина Чаусова</h3>
                <p className="text-700 text-sm mt-1">
                  Вокал/фортепиано/гитара — адаптация под цель ученика.
                </p>
                <Link
                  href="/teachers"
                  className="text-[var(--brand)] text-sm mt-2 inline-block"
                >
                  Подробнее →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== ЦЕНЫ (заменено на HomePrices) ===== */}
      <section className="section-topline">
        <div className="container-max py-14">
          <Reveal>
            <HomePrices />
          </Reveal>
        </div>
      </section>

      {/* ===== КАРТА ===== */}
      <section className="bg-gray-50 section-topline  on-light">
        <Reveal className="container-max py-14">
          <h2 className="section-title">Как нас найти</h2>
          <p className="text-secondary mt-2">
            Холон, рядом с удобной парковкой.
          </p>

          <div className="mt-6 rounded-2xl overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.098788805216!2d34.797980599999995!3d32.0124376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4c6add71da9%3A0xd339b217ec4083c2!2sHaOrgim%201%2C%20Holon!5e0!3m2!1sru!2sil!4v1760587861679!5m2!1sru!2sil"
              height="360"
              className="w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}

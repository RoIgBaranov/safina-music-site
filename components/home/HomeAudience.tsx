"use client";

import Link from "next/link";

function buildWaLink(phone: string, text: string) {
  const clean = (phone || "").replace(/[^\d+]/g, "").replace("+", "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

const ITEMS = [
  {
    title: "Детям",
    desc: "Игра, слух, дыхание и уверенность. Пробный в мягком формате.",
    href: "/directions/vocal-kids",
    waText:
      "Привет! Ищу вокал для ребёнка. Возраст: __. Рассмотрите, пожалуйста, подходящий формат.",
  },
  {
    title: "Взрослым",
    desc: "Техника без зажимов, любимые песни, подготовка к сцене.",
    href: "/directions/vocal-adults",
    waText:
      "Привет! Ищу занятия вокалом для взрослого. Цель: ____. Подскажите формат и время.",
  },
  {
    title: "С нуля",
    desc: "Первые шаги во фортепиано/гитаре или вокале. От простого к красивому.",
    href: "/directions/piano",
    waText:
      "Привет! Хочу начать с нуля (фортепиано/гитара/вокал). Помогите подобрать стартовый курс.",
  },
  {
    title: "К сцене",
    desc: "Подготовка к выступлению, конкурсу, записи кавера.",
    href: "/directions/vocal-adults",
    waText:
      "Привет! Нужна подготовка к выступлению/конкурсу. Срок: ____. Что посоветуете?",
  },
];

export default function HomeAudience() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+972501234567";

  return (
    <section className="section-topline">
      <div className="container-max py-10 md:py-14">
        <h2 className="section-title">Для кого подойдёт</h2>
        <p className="text-secondary mt-2">
          Выберите ваш сценарий — покажем подходящее направление и формат.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((i) => {
            const wa = buildWaLink(phone, i.waText);
            return (
              <div key={i.title} className="group">
                {/* основной клик — на страницу направления */}
                <Link
                  href={i.href}
                  className="card card--tint lift card--border block hover:shadow-md cursor-pointer h-full"
                >
                  <h3 className="font-semibold">{i.title}</h3>
                  <p className="text-secondary mt-1">{i.desc}</p>
                  <span className="mt-3 inline-block text-[var(--brand)] text-sm">
                    Подобрать курс →
                  </span>
                </Link>

                {/* вторичный CTA — сразу в WhatsApp с контекстом */}
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[var(--brand)] text-sm hover:opacity-90"
                >
                  Спросить в WhatsApp →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

function buildWaLink(phone: string, text: string) {
  const clean = (phone || "").replace(/[^\d+]/g, "").replace("+", "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

const CARDS = [
  {
    title: "Пробный урок",
    price: "₪90",
    desc: "30–45 минут",
    anchor: "trial",
    waText: "Привет! Хочу записаться на пробный урок. Удобное время: _____.",
  },
  {
    title: "Индивидуальный",
    price: "₪180",
    desc: "45–60 минут",
    anchor: "individual",
    waText: "Привет! Интересуют индивидуальные занятия. Удобное время: _____.",
  },
  {
    title: "Мини-группа",
    price: "₪120",
    desc: "за человека",
    anchor: "group",
    waText: "Привет! Хочу в мини-группу (2–3 чел.). Удобное время: _____.",
  },
];

export default function HomePrices() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+972501234567";

  return (
    <section className="section-topline">
      <div className="container-max py-10 md:py-14">
        <h2 className="section-title">Цены и форматы</h2>
        <p className="text-secondary mt-2">
          Выберите формат или напишите нам — подскажем оптимальный вариант.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((c) => {
            const wa = buildWaLink(phone, c.waText);
            return (
              <div key={c.anchor} className="group">
                {/* основной клик — на страницу цен к нужному тарифу */}
                <Link
                  href={`/pricing#${c.anchor}`}
                  className="card card--tint lift card--border block hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{c.title}</h3>
                    <span className="text-sm text-[var(--brand)] opacity-90 group-hover:opacity-100 transition">
                      Подробнее →
                    </span>
                  </div>
                  <p className="text-2xl font-extrabold mt-2 text-white">{c.price}</p>
                  <p className="text-secondary">{c.desc}</p>
                </Link>

                {/* вторичный CTA — сразу в WhatsApp */}
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[var(--brand)] text-sm hover:opacity-90"
                >
                  Написать в WhatsApp →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

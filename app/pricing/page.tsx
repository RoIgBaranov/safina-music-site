export const metadata = {
  title: "Цены — Safina Music School",
  description:
    "Пробный, индивидуальные занятия, мини-группы. Правила переносов и заморозок абонемента.",
};

const tariffs = [
  { title: "Пробный урок", price: "₪90", desc: "30–45 минут" },
  { title: "Индивидуальный", price: "₪180", desc: "45–60 минут" },
  { title: "Мини-группа", price: "₪120", desc: "за человека" },
];

const rules = [
  "Перенос урока — предупредить минимум за 24 часа.",
  "Заморозка абонемента — индивидуально по договорённости.",
  "Семейные скидки — при занятиях для 2+ членов семьи.",
  "Оплата — наличными/переводом в день занятия или авансом за абонемент.",
];

const faq = [
  {
    q: "Сколько длится занятие?",
    a: "Обычно 45–60 минут. Пробный — 30–45 минут.",
  },
  {
    q: "Как часто лучше заниматься?",
    a: "Стартово 1 раз в неделю + короткие домашние 10–15 минут.",
  },
  {
    q: "Можно ли менять преподавателя?",
    a: "Да, по согласованию — важно чувствовать комфорт и прогресс.",
  },
  {
    q: "Есть ли онлайн-занятия?",
    a: "Возможны по запросу, но живые обычно эффективнее.",
  },
];

export default function PricingPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Цены и абонементы</h1>
      <p className="text-gray-600 mt-2">
        Выберите формат, а если сомневаетесь — приходите на пробный урок.
      </p>

      {/* Тарифы */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tariffs.map((t) => (
          <div key={t.title} className="card hover:-translate-y-0.5 transition">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="text-2xl font-extrabold mt-2">{t.price}</p>
            <p className="text-gray-600">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Правила */}
      <div className="card hover:-translate-y-0.5 transition mt-8">
        <h2 className="font-semibold">Правила</h2>
        <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
          {rules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="card hover:-translate-y-0.5 transition mt-8">
        <h2 className="font-semibold">Частые вопросы</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          {faq.map((item) => (
            <div key={item.q}>
              <div className="font-medium">{item.q}</div>
              <p className="text-gray-700 mt-1">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

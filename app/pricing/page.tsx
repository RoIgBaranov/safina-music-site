import {
  TicketIcon,
  UserIcon,
  UsersIcon,
  ChevronDownIcon,
} from "@/components/Icons";

export const metadata = {
  title: "Цены — Safina Music School",
  description:
    "Пробный, индивидуальные занятия, мини-группы. Правила переносов и заморозок абонемента.",
};

const tariffs = [
  {
    title: "Пробный урок",
    price: "₪90",
    desc: "30–45 минут",
    icon: TicketIcon,
  },
  {
    title: "Индивидуальный",
    price: "₪180",
    desc: "45–60 минут",
    icon: UserIcon,
  },
  { title: "Мини-группа", price: "₪120", desc: "за человека", icon: UsersIcon },
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
        {tariffs.map(({ title, price, desc, icon: Icon }) => (
          <div key={title} className="card card--tint lift card--border">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#2e3353] bg-white/5 text-white/90">
                <Icon />
              </span>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="text-2xl font-extrabold mt-2 text-white">{price}</p>
            <p className="text-secondary">{desc}</p>
          </div>
        ))}
      </div>
      <div className="hr" />

      {/* Правила */}
      <div className="card hover:-translate-y-0.5 transition mt-8">
        <h2 className="font-semibold">Правила</h2>
        <ul className="list-disc pl-5 text-secondary mt-2 space-y-1">
          {rules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
      <div className="hr" />

      {/* FAQ */}
      <section className="section-topline">
        <div className="container-max py-14">
          <h2 className="section-title text-secondary">FAQ</h2>
          <div className="faq mt-6 text-secondary">
            {[
              {
                q: "Как проходит пробный урок?",
                a: "Знакомство с преподавателем, 30–45 минут. Определяем цели, пробуем упражнения/песню, даём рекомендации по формату и расписанию.",
              },
              {
                q: "Можно ли в мини-группу с другом?",
                a: "Да. Мини-группа 2–3 человека, подбираем по уровню и возрасту. Можно прийти вместе — будет веселее и дешевле.",
              },
              {
                q: "Нужен ли свой инструмент?",
                a: "Для занятий в школе — нет (всё есть). Для домашней практики по фортепиано и гитаре желательно иметь инструмент.",
              },
            ].map(({ q, a }) => (
              <details key={q}>
                <summary>
                  <ChevronDownIcon className="chev" />
                  {q}
                </summary>
                <div className="answer">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

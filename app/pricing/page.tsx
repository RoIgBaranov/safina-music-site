import {
  TicketIcon,
  UserIcon,
  UsersIcon,
  ChevronDownIcon,
} from "@/components/Icons";
import WaCta from "@/components/WaCta";

export const metadata = {
  title: "Цены — Safina Music School",
  description:
    "Пробный, индивидуальные занятия, мини-группы. Правила переносов и заморозок абонемента.",
};

// утилита для wa.me
function buildWaLink(phone: string, text: string) {
  const clean = (phone || "").replace(/[^\d+]/g, "").replace("+", "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

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

export default function PricingPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+972501234567";

  return (
    <section className="container-max py-14">
      <h1 className="section-title">Цены и абонементы</h1>
      <p className="text-gray-600 mt-2">
        Выберите формат, а если сомневаетесь — приходите на пробный урок.
      </p>

      {/* Тарифы → кликабельные карточки с переходом в WhatsApp */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tariffs.map(({ title, price, desc, icon: Icon }) => {
          const slug =
            title === "Пробный урок"
              ? "trial"
              : title === "Индивидуальный"
              ? "individual"
              : "group";

          const msg = `Привет! Хочу записаться на ${title.toLowerCase()}. Удобное время: _____.`;
          const href = buildWaLink(phone, msg);

          return (
            <a
              id={slug} // ← якорь для /pricing#trial|individual|group
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card card--tint lift card--border block hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
              aria-label={`Записаться в WhatsApp: ${title}`}
              title={`Записаться в WhatsApp: ${title}`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#2e3353] bg-white/5 text-white/90">
                  <Icon />
                </span>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="text-2xl font-extrabold mt-2 text-white">{price}</p>
              <p className="text-secondary">{desc}</p>

              {/* подсказка внизу карточки */}
              <span className="mt-3 inline-block text-[var(--brand)] text-sm">
                Написать в WhatsApp →
              </span>
            </a>
          );
        })}
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
      <div className="mt-8">
              <WaCta message="Привет! Хочу записаться на пробный урок вокала (взрослый). Удобное время: _____.">
                Записаться на пробный
              </WaCta>
            </div>
    </section>
  );
}

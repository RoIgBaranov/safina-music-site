import WaCta from "@/components/WaCta";
import { ChevronDownIcon } from "@/components/Icons";

export const metadata = {
  title: "Гитара | Safina Music School",
  description:
    "Гитара в Холоне: аккорды, ритм, переборы, разбор песен. Индивидуально и мини-группы. Запишитесь на пробный.",
  alternates: { canonical: "/directions/guitar" },
  openGraph: {
    title: "Гитара | Safina Music School",
    description:
      "Гитара с нуля: базовые аккорды, бой/переборы и любимые песни. Холон.",
    url: "/directions/guitar",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Гитара | Safina Music School",
    description:
      "Индивидуальные и мини-группы. Пробный урок — в один клик.",
    images: ["/twitter-image.png"],
  },
};


export default function GuitarPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Гитара</h1>
      <p className="text-secondary mt-3">
        Быстрый старт с аккордами и ритмом, затем подключаем переборы, боем и
        любимые песни. Подберём инструмент и струны, объясним, как тренироваться
        10–15 минут в день.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card card--tint lift">
          <h2 className="font-semibold">Результаты за 8 занятий</h2>
          <ul className="list-disc pl-5 text-secondary mt-2 space-y-1">
            <li>5–8 базовых аккордов и смена между ними</li>
            <li>1–2 песни целиком под бой/перебор</li>
            <li>Понимание ритма и «как звучит красиво»</li>
            <li>Уверенность играть перед друзьями</li>
          </ul>
        </div>
        <div className="card card--tint lift">
          <h2 className="font-semibold">Пробный урок</h2>
          <ol className="list-decimal pl-5 text-secondary mt-2 space-y-1">
            <li>Диагностика уровня (с нуля — ок)</li>
            <li>Постановка рук и первые аккорды</li>
            <li>Простой ритм + кусочек песни</li>
            <li>Домашний план на 2 недели</li>
          </ol>
        </div>
      </div>
      <div className="hr" />

      <div className="card card--tint lift">
        <h2 className="font-semibold">Форматы и цены</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          <div>
            <div className="font-semibold">Пробный</div>
            <div className="text-2xl font-extrabold">₪90</div>
            <div className="text-secondary">30–45 минут</div>
          </div>
          <div>
            <div className="font-semibold">Индивидуальный</div>
            <div className="text-2xl font-extrabold">₪180</div>
            <div className="text-secondary">45–60 минут</div>
          </div>
          <div>
            <div className="font-semibold">Мини-группа</div>
            <div className="text-2xl font-extrabold">₪120</div>
            <div className="text-secondary">за человека</div>
          </div>
        </div>
      </div>

      <section className="section-topline text-secondary">
        <div className="container-max py-14">
          <h2 className="section-title">FAQ</h2>
          <div className="faq mt-6">
            {[
              {
                q: "Какую гитару купить новичку?",
                a: "Подойдёт классическая (нейлоновые струны) или акустическая (металлические). Для детей чаще берём классическую 3/4.",
              },
              {
                q: "Можно ли сразу учить любимые песни?",
                a: "Да. Осваиваем базовые аккорды, бой/переборы и параллельно разбираем треки по уровню.",
              },
              {
                q: "Делаете ли подготовку к выступлениям?",
                a: "Да. Поможем со сценической подачей, подбором тональности и настроим гитару под репертуар.",
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
        <WaCta message="Привет! Интересуют уроки гитары. Хочу на пробный. Уровень: с нуля/немного играл.">
          Записаться на пробный
        </WaCta>
      </div>
    </section>
  );
}

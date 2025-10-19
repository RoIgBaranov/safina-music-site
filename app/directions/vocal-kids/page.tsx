import WaCta from "@/components/WaCta";
import { ChevronDownIcon } from "@/components/Icons";

export const metadata = {
  title: "Вокал — дети | Safina Music School",
  description:
    "Детский вокал в Холоне: мягкая постановка дыхания, игры, уверенность на сцене. Пробный урок — запишитесь за 1 минуту.",
  alternates: { canonical: "/directions/vocal-kids" },
  openGraph: {
    title: "Вокал — дети | Safina Music School",
    description:
      "Занятия по вокалу для детей в Холоне: дыхание без зажимов, слух и ритм, мини-выступления.",
    url: "/directions/vocal-kids",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Вокал — дети | Safina Music School",
    description:
      "Детский вокал: мягко, интересно, результативно. Пробный — запись в 1 клик.",
    images: ["/twitter-image.png"],
  },
};

export default function VocalKidsPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Вокал — дети</h1>
      <p className="text-secondary mt-3">
        На детских занятиях мы бережно знакомим ребёнка с голосом: через игру,
        ритм и любимые песни. Мягко ставим дыхание, развиваем слух и чувство
        ритма, помогаем почувствовать уверенность.
      </p>

      {/* Что получите */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card card--tint lift">
          <h2 className="font-semibold">Что ребёнок получит за 8 занятий</h2>
          <ul className="list-disc pl-5 text-secondary mt-2 space-y-1">
            <li>Понимание правильного дыхания без зажимов</li>
            <li>Расширение диапазона в комфортном темпе</li>
            <li>Уверенность в исполнении и выступлении</li>
            <li>Мини-выступление к концу курса</li>
          </ul>
        </div>

        {/* Пробный урок */}
        <div className="card card--tint lift">
          <h2 className="font-semibold">Как проходит пробный урок</h2>
          <ol className="list-decimal pl-5 text-secondary mt-2 space-y-1">
            <li>Короткое знакомство: цель, любимые песни</li>
            <li>Дыхание и 2–3 простых упражнения</li>
            <li>Разбор знакомой песни (маленький фрагмент)</li>
            <li>Домашнее задание и план на 4–8 занятий</li>
          </ol>
        </div>
      </div>
      <div className="hr" />

      {/* Форматы и цены */}
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

      {/* FAQ */}
      <section className="section-topline">
        <div className="container-max py-14 text-secondary">
          <h2 className="section-title">FAQ</h2>
          <div className="faq mt-6 ">
            {[
              {
                q: "С какого возраста лучше начинать?",
                a: "Обычно с 5–6 лет. В этом возрасте занимаемся в игровой форме, развиваем слух, дыхание и чувство ритма.",
              },
              {
                q: "Нужен ли опыт и «музыкальность»?",
                a: "Не обязательно. Всё строим от простого к сложному, без давления. Важно, чтобы ребёнку было интересно.",
              },
              {
                q: "Даете ли домашние задания?",
                a: "Короткие и посильные. Цель — поддерживать интерес и привычку, а не перегружать ребёнка.",
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

      {/* CTA */}
      <div className="mt-8">
        <WaCta message="Привет! Хочу записать ребёнка на пробный урок вокала. Возраст: ___ лет.">
          Записаться на пробный
        </WaCta>
      </div>
    </section>
  );
}

import WaCta from "@/components/WaCta";

export const metadata = {
  title: "Вокал — дети | Safina Music School",
  description:
    "Детский вокал в Холоне: мягкая постановка дыхания, игры, уверенность на сцене. Пробный урок — запишитесь за 1 минуту.",
};

export default function VocalKidsPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Вокал — дети</h1>
      <p className="text-gray-700 mt-3">
        На детских занятиях мы бережно знакомим ребёнка с голосом: через игру, ритм и любимые
        песни. Мягко ставим дыхание, развиваем слух и чувство ритма, помогаем почувствовать уверенность.
      </p>

      {/* Что получите */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card card--tint lift">
          <h2 className="font-semibold">Что ребёнок получит за 8 занятий</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
            <li>Понимание правильного дыхания без зажимов</li>
            <li>Расширение диапазона в комфортном темпе</li>
            <li>Уверенность в исполнении и выступлении</li>
            <li>Мини-выступление к концу курса</li>
          </ul>
        </div>

        {/* Пробный урок */}
        <div className="card card--tint lift">
          <h2 className="font-semibold">Как проходит пробный урок</h2>
          <ol className="list-decimal pl-5 text-gray-700 mt-2 space-y-1">
            <li>Короткое знакомство: цель, любимые песни</li>
            <li>Дыхание и 2–3 простых упражнения</li>
            <li>Разбор знакомой песни (маленький фрагмент)</li>
            <li>Домашнее задание и план на 4–8 занятий</li>
          </ol>
        </div>
      </div>

      {/* Форматы и цены */}
      <div className="card card--tint lift">
        <h2 className="font-semibold">Форматы и цены</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          <div>
            <div className="font-semibold">Пробный</div>
            <div className="text-2xl font-extrabold">₪90</div>
            <div className="text-gray-600">30–45 минут</div>
          </div>
          <div>
            <div className="font-semibold">Индивидуальный</div>
            <div className="text-2xl font-extrabold">₪180</div>
            <div className="text-gray-600">45–60 минут</div>
          </div>
          <div>
            <div className="font-semibold">Мини-группа</div>
            <div className="text-2xl font-extrabold">₪120</div>
            <div className="text-gray-600">за человека</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="card card--tint lift">
        <h2 className="font-semibold">Частые вопросы</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          <div>
            <div className="font-medium">С какого возраста можно?</div>
            <p className="text-gray-700 mt-1">Обычно с 5 лет, но смотрим индивидуально.</p>
          </div>
          <div>
            <div className="font-medium">Нужно ли иметь опыт?</div>
            <p className="text-gray-700 mt-1">Нет, начинаем с игры и простых упражнений.</p>
          </div>
          <div>
            <div className="font-medium">Что взять на урок?</div>
            <p className="text-gray-700 mt-1">Воду и список любимых песен.</p>
          </div>
          <div>
            <div className="font-medium">Будут ли концерты?</div>
            <p className="text-gray-700 mt-1">Да, у нас есть зал и мини-сцены.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <WaCta message="Привет! Хочу записать ребёнка на пробный урок вокала. Возраст: ___ лет.">
          Записаться на пробный
        </WaCta>
      </div>
    </section>
  );
}

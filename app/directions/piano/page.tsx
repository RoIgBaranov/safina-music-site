import WaCta from "@/components/WaCta";

export const metadata = {
  title: "Фортепиано | Safina Music School",
  description:
    "Уроки фортепиано в Холоне: ноты, техника, репертуар. Индивидуально и мини-группы. Пробный урок — запись в 1 клик.",
};

export default function PianoPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Фортепиано</h1>
      <p className="text-gray-700 mt-3">
        Начинаем с основ: постановка рук, нотная грамота, чувство ритма.
        Подбираем репертуар под ваши цели: для души, для сцены, для поступления.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card hover:-translate-y-0.5 transition">
          <h2 className="font-semibold">За 8 занятий вы освоите</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
            <li>Базовую технику и чтение нот</li>
            <li>2–3 несложные пьесы/песни</li>
            <li>Правильные привычки рук и корпуса</li>
            <li>Уверенность при игре перед близкими</li>
          </ul>
        </div>
        <div className="card hover:-translate-y-0.5 transition">
          <h2 className="font-semibold">Пробный урок</h2>
          <ol className="list-decimal pl-5 text-gray-700 mt-2 space-y-1">
            <li>Диагностика уровня (с нуля — ок)</li>
            <li>Правильная посадка и постановка рук</li>
            <li>Простое упражнение + знакомая мелодия</li>
            <li>Домашний план на 2 недели</li>
          </ol>
        </div>
      </div>

      <div className="card hover:-translate-y-0.5 transition mt-8">
        <h2 className="font-semibold">Форматы и цены</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          <div><div className="font-semibold">Пробный</div><div className="text-2xl font-extrabold">₪90</div><div className="text-gray-600">30–45 минут</div></div>
          <div><div className="font-semibold">Индивидуальный</div><div className="text-2xl font-extrabold">₪180</div><div className="text-gray-600">45–60 минут</div></div>
          <div><div className="font-semibold">Мини-группа</div><div className="text-2xl font-extrabold">₪120</div><div className="text-gray-600">за человека</div></div>
        </div>
      </div>

      <div className="card hover:-translate-y-0.5 transition mt-8">
        <h2 className="font-semibold">Частые вопросы</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          <div><div className="font-medium">Можно ли без своего инструмента дома?</div><p className="text-gray-700 mt-1">Можно начать без него, но для прогресса лучше иметь клавиши.</p></div>
          <div><div className="font-medium">С какого возраста детям?</div><p className="text-gray-700 mt-1">С 5–6 лет, иногда раньше — индивидуально.</p></div>
          <div><div className="font-medium">Готовите к поступлению/конкурсам?</div><p className="text-gray-700 mt-1">Да, составим программу и график.</p></div>
          <div><div className="font-medium">Сколько заниматься дома?</div><p className="text-gray-700 mt-1">10–20 минут в день на старте достаточно.</p></div>
        </div>
      </div>

      <div className="mt-8">
        <WaCta message="Привет! Интересует фортепиано. Уровень: с нуля/немного играл. Хочу на пробный.">
          Записаться на пробный
        </WaCta>
      </div>
    </section>
  );
}

import WaCta from "@/components/WaCta";

export const metadata = {
  title: "Гитара | Safina Music School",
  description:
    "Гитара в Холоне: аккорды, ритм, переборы, разбор песен. Индивидуально и мини-группы. Запишитесь на пробный.",
};

export default function GuitarPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Гитара</h1>
      <p className="text-gray-700 mt-3">
        Быстрый старт с аккордами и ритмом, затем подключаем переборы, боем и любимые песни.
        Подберём инструмент и струны, объясним, как тренироваться 10–15 минут в день.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card card--tint lift">
          <h2 className="font-semibold">Результаты за 8 занятий</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
            <li>5–8 базовых аккордов и смена между ними</li>
            <li>1–2 песни целиком под бой/перебор</li>
            <li>Понимание ритма и «как звучит красиво»</li>
            <li>Уверенность играть перед друзьями</li>
          </ul>
        </div>
        <div className="card card--tint lift">
          <h2 className="font-semibold">Пробный урок</h2>
          <ol className="list-decimal pl-5 text-gray-700 mt-2 space-y-1">
            <li>Диагностика уровня (с нуля — ок)</li>
            <li>Постановка рук и первые аккорды</li>
            <li>Простой ритм + кусочек песни</li>
            <li>Домашний план на 2 недели</li>
          </ol>
        </div>
      </div>

      <div className="card card--tint lift">
        <h2 className="font-semibold">Форматы и цены</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          <div><div className="font-semibold">Пробный</div><div className="text-2xl font-extrabold">₪90</div><div className="text-gray-600">30–45 минут</div></div>
          <div><div className="font-semibold">Индивидуальный</div><div className="text-2xl font-extrabold">₪180</div><div className="text-gray-600">45–60 минут</div></div>
          <div><div className="font-semibold">Мини-группа</div><div className="text-2xl font-extrabold">₪120</div><div className="text-gray-600">за человека</div></div>
        </div>
      </div>

      <div className="card card--tint lift">
        <h2 className="font-semibold">Частые вопросы</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          <div><div className="font-medium">Нужна ли своя гитара?</div><p className="text-gray-700 mt-1">Желательно, но можем подсказать что купить.</p></div>
          <div><div className="font-medium">Больно ли на первых занятиях?</div><p className="text-gray-700 mt-1">Кончики пальцев немного привыкают — это нормально.</p></div>
          <div><div className="font-medium">Аккустика или классика?</div><p className="text-gray-700 mt-1">Подберём под цель и репертуар.</p></div>
          <div><div className="font-medium">Можно ли разбирать конкретные песни?</div><p className="text-gray-700 mt-1">Конечно. Принесите список любимых треков.</p></div>
        </div>
      </div>

      <div className="mt-8">
        <WaCta message="Привет! Интересуют уроки гитары. Хочу на пробный. Уровень: с нуля/немного играл.">
          Записаться на пробный
        </WaCta>
      </div>
    </section>
  );
}

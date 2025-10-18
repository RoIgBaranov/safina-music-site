import WaCta from "@/components/WaCta";
import { ChevronDownIcon } from "@/components/Icons";

export const metadata = {
  title: "Фортепиано | Safina Music School",
  description:
    "Уроки фортепиано в Холоне: ноты, техника, репертуар. Индивидуально и мини-группы. Пробный урок — запись в 1 клик.",
};

export default function PianoPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Фортепиано</h1>
      <p className="text-secondary mt-3">
        Начинаем с основ: постановка рук, нотная грамота, чувство ритма.
        Подбираем репертуар под ваши цели: для души, для сцены, для поступления.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card card--tint lift">
          <h2 className="font-semibold">За 8 занятий вы освоите</h2>
          <ul className="list-disc pl-5 text-secondary mt-2 space-y-1">
            <li>Базовую технику и чтение нот</li>
            <li>2–3 несложные пьесы/песни</li>
            <li>Правильные привычки рук и корпуса</li>
            <li>Уверенность при игре перед близкими</li>
          </ul>
        </div>
        <div className="card card--tint lift">
          <h2 className="font-semibold">Пробный урок</h2>
          <ol className="list-decimal pl-5 text-secondary mt-2 space-y-1">
            <li>Диагностика уровня (с нуля — ок)</li>
            <li>Правильная посадка и постановка рук</li>
            <li>Простое упражнение + знакомая мелодия</li>
            <li>Домашний план на 2 недели</li>
          </ol>
        </div>
      </div>
      <div className="hr" />

      <div className="card card--tint lift">
        <h2 className="font-semibold">Форматы и цены</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          <div><div className="font-semibold">Пробный</div><div className="text-2xl font-extrabold">₪90</div><div className="text-secondary">30–45 минут</div></div>
          <div><div className="font-semibold">Индивидуальный</div><div className="text-2xl font-extrabold">₪180</div><div className="text-secondary">45–60 минут</div></div>
          <div><div className="font-semibold">Мини-группа</div><div className="text-2xl font-extrabold">₪120</div><div className="text-secondary">за человека</div></div>
        </div>
      </div>
 

      <section className="section-topline">
  <div className="container-max py-14 text-secondary">
    <h2 className="section-title">FAQ</h2>
    <div className="faq mt-6">
      {[
        {
          q: "Нужен ли дома инструмент?",
          a: "Для занятий в школе — нет. Для домашней практики желательно пианино или цифровой клавишный (61–88 клавиш).",
        },
        {
          q: "Какая длительность занятия оптимальна?",
          a: "Обычно 45–60 минут. Детям младшего возраста подойдёт 30–45 минут — смотрим по концентрации.",
        },
        {
          q: "Играете классику или современную музыку?",
          a: "И то, и другое. База — техніка и чтение с листа, репертуар подбираем под вкус ученика.",
        },
      ].map(({ q, a }) => (
        <details key={q}>
          <summary><ChevronDownIcon className="chev" />{q}</summary>
          <div className="answer">{a}</div>
        </details>
      ))}
    </div>
  </div>
</section>


      <div className="mt-8">
        <WaCta message="Привет! Интересует фортепиано. Уровень: с нуля/немного играл. Хочу на пробный.">
          Записаться на пробный
        </WaCta>
      </div>
    </section>
  );
}

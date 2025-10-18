import WaCta from "@/components/WaCta";
import { ChevronDownIcon } from "@/components/Icons";

export const metadata = {
  title: "Вокал — взрослые | Safina Music School",
  description:
    "Вокал для взрослых в Холоне: техника без зажимов, любимые песни, уверенность на сцене. Пробный урок — записывайтесь.",
};

export default function VocalAdultsPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Вокал — взрослые</h1>
      <p className="text-secondary mt-3">
        Развиваем голос без зажимов, подбираем удобные тональности и репертуар, который нравится.
        Работаем над дыханием, артикуляцией, диапазоном и сценическим ощущением.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card card--tint lift">
          <h2 className="font-semibold">Результаты за 8 занятий</h2>
          <ul className="list-disc pl-5 text-secondary mt-2 space-y-1">
            <li>Осознанное дыхание и базовая техника</li>
            <li>Уверенность в исполнении любимых песен</li>
            <li>Снятие основных зажимов и страх сцены</li>
            <li>Мини-выступление или запись видео</li>
          </ul>
        </div>
        <div className="card card--tint lift">
          <h2 className="font-semibold">Пробный урок</h2>
          <ol className="list-decimal pl-5 text-secondary mt-2 space-y-1">
            <li>Диагностика дыхания и диапазона</li>
            <li>2–3 упражнения под вашу задачу</li>
            <li>Разбор фрагмента песни</li>
            <li>План на 4–8 занятий</li>
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
          q: "Можно ли начать «с нуля» во взрослом возрасте?",
          a: "Да. Работаем с дыханием, опорой и подбираем комфортный репертуар. Заниматься можно в 30, 40 и 60+.",
        },
        {
          q: "Сколько нужно времени, чтобы появились результаты?",
          a: "Через 4–6 занятий уже слышно прогресс в дыхании и свободе голоса. Темп зависит от регулярности.",
        },
        {
          q: "Готовите к выступлениям/кавер-записям?",
          a: "Да: работа с микрофоном, сценой и базовой записью. Поможем выбрать минуса и подстроим тональность.",
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
        <WaCta message="Привет! Хочу записаться на пробный урок вокала (взрослый). Удобное время: _____.">
          Записаться на пробный
        </WaCta>
      </div>
    </section>
  );
}

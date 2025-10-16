import WaCta from "@/components/WaCta";

export const metadata = {
  title: "Вокал — взрослые | Safina Music School",
  description:
    "Вокал для взрослых в Холоне: техника без зажимов, любимые песни, уверенность на сцене. Пробный урок — записывайтесь.",
};

export default function VocalAdultsPage() {
  return (
    <section className="container-max py-14">
      <h1 className="section-title">Вокал — взрослые</h1>
      <p className="text-gray-700 mt-3">
        Развиваем голос без зажимов, подбираем удобные тональности и репертуар, который нравится.
        Работаем над дыханием, артикуляцией, диапазоном и сценическим ощущением.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card hover:-translate-y-0.5 transition">
          <h2 className="font-semibold">Результаты за 8 занятий</h2>
          <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
            <li>Осознанное дыхание и базовая техника</li>
            <li>Уверенность в исполнении любимых песен</li>
            <li>Снятие основных зажимов и страх сцены</li>
            <li>Мини-выступление или запись видео</li>
          </ul>
        </div>
        <div className="card hover:-translate-y-0.5 transition">
          <h2 className="font-semibold">Пробный урок</h2>
          <ol className="list-decimal pl-5 text-gray-700 mt-2 space-y-1">
            <li>Диагностика дыхания и диапазона</li>
            <li>2–3 упражнения под вашу задачу</li>
            <li>Разбор фрагмента песни</li>
            <li>План на 4–8 занятий</li>
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
          <div><div className="font-medium">«У меня нет слуха» — это проблема?</div><p className="text-gray-700 mt-1">Нет. Начинаем с простых упражнений и движемся шаг за шагом.</p></div>
          <div><div className="font-medium">Можно ли готовиться к событию (свадьба/корпоратив)?</div><p className="text-gray-700 mt-1">Да, подберём репертуар и отработаем уверенность.</p></div>
          <div><div className="font-medium">Онлайн-уроки?</div><p className="text-gray-700 mt-1">Возможны по запросу, но живые эффективнее.</p></div>
          <div><div className="font-medium">Сколько раз в неделю ходить?</div><p className="text-gray-700 mt-1">Обычно 1 раз/нед + короткие домашние.</p></div>
        </div>
      </div>

      <div className="mt-8">
        <WaCta message="Привет! Хочу записаться на пробный урок вокала (взрослый). Удобное время: _____.">
          Записаться на пробный
        </WaCta>
      </div>
    </section>
  );
}

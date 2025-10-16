import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-purple-50 to-white">
        <div className="container-max relative  py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* Декоративная мягкая «сфера» позади контента */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 -top-24 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(closest-side, #7c3aed, transparent 70%)",
            }}
          />

          {/* Левая колонка: текст и кнопки */}
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Музыкальная школа в&nbsp;Холоне —{" "}
              <span className="text-[var(--brand)]">вокал</span>, фортепиано,
              гитара
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Для детей и взрослых. Дружелюбная атмосфера, сцена и концерты.
              Пробный урок — запишитесь за 1 минуту.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/directions" className="btn btn-outline">
                Направления
              </Link>

              <Link
                href="/pricing"
                className="btn btn-primary-calm"
                style={{ backgroundColor: "var(--brand)" }}
              >
                Цены и запись
              </Link>
            </div>

            <ul className="mt-6 grid gap-2 text-gray-600">
              <li>• 4 кабинета + зал для выступлений</li>
              <li>• Индивидуально и мини-группы</li>
              <li>• 30+ учеников, регулярные концерты</li>
            </ul>
          </div>

          {/* Правая колонка: место под фото зала/класса (заменишь на <img .../>) */}
          <div className="aspect-[4/3] rounded-2xl bg-gray-200" />
          {/*
            Позже поменяешь на:
            <img src="/images/hall.jpg" alt="Зал школы" className="w-full aspect-[4/3] object-cover rounded-2xl" />
          */}
        </div>
      </section>

      {/* ===== ДЛЯ КОГО ===== */}
      <section>
        <div className="container-max py-14">
          <h2 className="section-title">Для кого подойдёт</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Дети 5–7",
                text: "Играем и поём, ставим дыхание мягко.",
              },
              { title: "Дети 8–12", text: "Раскрываем голос, снимаем зажимы." },
              { title: "Подростки", text: "Подготовка к сцене/конкурсам." },
              { title: "Взрослые", text: "С нуля и для души, любимые песни." },
            ].map((c) => (
              <div key={c.title} className="card card--tint lift">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-gray-600 mt-2">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ПРЕПОДАВАТЕЛИ (превью) ===== */}
      <section className="bg-gray-50">
        <div className="container-max py-14">
          <h2 className="section-title">Преподаватели</h2>
          <p className="text-gray-600 mt-2">
            Бережный подход, техника без зажимов, сцена.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {/* Карточка 1 — подставим реальное имя и факты позже */}
            <div className="card card--tint lift flex gap-4">
              {/* Заглушка для фото */}
              <div className="w-24 h-24 rounded-xl bg-gray-200 shrink-0" />
              {/* Вместо этого:
                <img src="/images/maria.jpg" alt="Мария Баранова" className="w-24 h-24 rounded-xl object-cover" />
              */}
              <div>
                <h3 className="font-semibold">Мария Баранова</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Педагог по вокалу. 8+ лет практики. Подготовка к сцене.
                </p>
                <Link
                  href="/teachers"
                  className="text-[var(--brand)] text-sm mt-2 inline-block"
                >
                  Подробнее →
                </Link>
              </div>
            </div>

            {/* Карточка 2 — второй педагог/направление */}
            <div className="card card--tint lift flex gap-4">
              <div className="w-24 h-24 rounded-xl bg-gray-200 shrink-0" />
              <div>
                <h3 className="font-semibold">Педагог 2</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Вокал/фортепиано/гитара — адаптация под цель ученика.
                </p>
                <Link
                  href="/teachers"
                  className="text-[var(--brand)] text-sm mt-2 inline-block"
                >
                  Подробнее →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ЦЕНЫ (превью) ===== */}
      <section>
        <div className="container-max py-14">
          <h2 className="section-title">Цены и форматы</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Пробный урок", price: "₪90", desc: "30–45 минут" },
              { title: "Индивидуальный", price: "₪180", desc: "45–60 минут" },
              { title: "Мини-группа", price: "₪120", desc: "за человека" },
            ].map((p) => (
              <div key={p.title} className="card card--tint lift">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-2xl font-extrabold mt-2">{p.price}</p>
                <p className="text-gray-600">{p.desc}</p>
                <Link
                  href="/pricing"
                  className="mt-4 inline-block rounded-xl px-4 py-2 text-white"
                  style={{ backgroundColor: "var(--brand)" }}
                >
                  Записаться
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== КАРТА ===== */}
      <section className="bg-gray-50">
        <div className="container-max py-14">
          <h2 className="section-title">Как нас найти</h2>
          <p className="text-gray-600 mt-2">
            Холон, рядом с удобной парковкой.
          </p>

          <div className="mt-6 rounded-2xl overflow-hidden border">
            {/* ЗАМЕНИ src на ваш адрес (Google Maps → Поделиться → Встроить карту → скопируй <iframe ...>) */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.098788805216!2d34.797980599999995!3d32.0124376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4c6add71da9%3A0xd339b217ec4083c2!2sHaOrgim%201%2C%20Holon!5e0!3m2!1sru!2sil!4v1760587861679!5m2!1sru!2sil"
              height="360"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-max py-16">
      <div className="card card--tint card--border lift">
        <h1 className="section-title">Страница не найдена</h1>
        <p className="text-secondary mt-2">
          Похоже, такой страницы у нас нет или ссылка устарела.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary-calm">На главную</Link>
          <Link href="/directions" className="btn btn-outline">Направления</Link>
          <Link href="/pricing" className="btn btn-outline">Цены</Link>
          <Link href="/contact" className="btn btn-outline">Контакты</Link>
        </div>

        {/* Быстрый CTA на WhatsApp */}
        <a
          href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+972501234567").replace(/[^\d+]/g, "").replace("+", "")}?text=${encodeURIComponent("Привет! Ищу информацию на сайте, подскажите, пожалуйста 😊")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 btn btn-primary-calm"
        >
          Написать в WhatsApp
        </a>
      </div>

      <div className="hr" />
      <p className="text-muted text-sm">
        Код ошибки: 404 • Если перешли по внешней ссылке, попробуйте меню выше.
      </p>
    </section>
  );
}

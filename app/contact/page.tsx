import ContactForm from "@/components/ContactForm";
import { MapPinIcon, ClockIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata = {
  title: "Контакты — Safina Music School",
  description:
    "Запишитесь на пробный урок: напишите в WhatsApp. Карта и адрес школы.",
};

export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+972501234567";

  function buildWaLink(number: string, text: string) {
    const clean = (number || "").replace(/[^\d+]/g, "").replace("+", "");
    return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
  }

  // Короткая ссылка для инфо-карточки «Написать в WhatsApp»
  const quickWaLink = buildWaLink(
    phone,
    "Привет! Хочу записаться на пробный урок."
  );

  return (
    <section className="container-max py-14">
      <h1 className="section-title">Контакты</h1>
      <p className="text-secondary mt-2">
        Напишите нам — подберём удобное время уже на этой неделе.
      </p>
      {/* Инфо-карточки (2 колонки на md+, одна — на мобиле) */}
<div className="mt-6 grid sm:grid-cols-2 gap-3">
  <div className="flex items-center gap-3 card card--tint card--border">
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#2e3353] bg-white/5 text-white/90">
      <MapPinIcon />
    </span>
    <div>
      <div className="font-medium">Холон</div>
      <div className="text-muted text-sm">точный адрес пришлём в WhatsApp</div>
    </div>
  </div>

  <div className="flex items-center gap-3 card card--tint card--border">
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#2e3353] bg-white/5 text-white/90">
      <ClockIcon />
    </span>
    <div>
      <div className="font-medium">Пн–Чт 10:00–20:00</div>
      <div className="text-muted text-sm">пятница по записи</div>
    </div>
  </div>
</div>

{/* разделитель и подпись */}
<div className="hr" />
<div className="text-muted text-sm mb-2">или заполните короткую форму</div>

{/* Форма — на всю ширину контейнера */}
<div className="card card--tint card--border">
  <ContactForm />
</div>

    </section>
  );
}

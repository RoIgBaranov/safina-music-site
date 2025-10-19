import ContactForm from "@/components/ContactForm";
import { MapPinIcon, ClockIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata = {
  title: "Контакты — Safina Music School",
  description:
    "Запишитесь на пробный урок в Холоне: напишите в WhatsApp. Карта и адрес школы.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Контакты — Safina Music School",
    description:
      "Safina Music School, Холон. Быстрая запись в WhatsApp, режим работы, карта.",
    url: "/contact",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты — Safina Music School",
    description:
      "Напишите нам в WhatsApp — подберём удобное время.",
    images: ["/twitter-image.png"],
  },
};


export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+972501234567";

  function buildWaLink(number: string, text: string) {
    const clean = (number || "").replace(/[^\d+]/g, "").replace("+", "");
    return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
  }

  const quickWaLink = buildWaLink(
    phone,
    "Привет! Хочу записаться на пробный урок."
  );

  return (
    <>
      <section className="container-max py-14">
        <h1 className="section-title">Контакты</h1>
        <p className="text-secondary mt-2">
          Напишите нам — подберём удобное время уже на этой неделе.
        </p>

        {/* Инфо-карточки */}
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
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

          {/* NEW: Быстрый WhatsApp */}
          <a
            href={quickWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 card card--tint card--border hover:opacity-95 transition"
            aria-label="Написать в WhatsApp"
            title="Написать в WhatsApp"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#2e3353] bg-[#25D366]/10 text-[#25D366]">
              <WhatsAppIcon />
            </span>
            <div>
              <div className="font-medium">Написать в WhatsApp</div>
              <div className="text-muted text-sm">откроется диалог с сообщением</div>
            </div>
          </a>
        </div>

        <div className="hr" />
        <div className="text-muted text-sm mb-2">или заполните короткую форму</div>

        {/* Форма */}
        <div className="card card--tint card--border">
          <ContactForm />
        </div>
      </section>

      {/* NEW: Карта (без API ключа) */}
      <section className="section-topline">
        <div className="container-max py-10 md:py-12">
          <h2 className="section-title">Как добраться</h2>
          <p className="text-secondary mt-2">Мы находимся в Холоне. Точный адрес сообщим после записи.</p>

          <div className="mt-4 rounded-2xl overflow-hidden card--border" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              title="Карта: Holon, Israel"
              src="https://www.google.com/maps?q=Holon,Israel&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* NEW: JSON-LD (Organization + ContactPoint) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Safina Music School",
            url: "https://example.com", // заменишь после деплоя
            address: {
              "@type": "PostalAddress",
              addressLocality: "Holon",
              addressCountry: "IL",
            },
            sameAs: [
              "https://instagram.com/safinavoice_israel",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                areaServed: "IL",
                availableLanguage: ["ru", "he", "en"],
                telephone: phone,
              },
            ],
          }),
        }}
      />
    </>
  );
}

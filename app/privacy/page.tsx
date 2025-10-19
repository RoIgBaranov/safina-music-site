export const metadata = {
  title: "Политика конфиденциальности — Safina Music School",
  description: "Как мы обрабатываем персональные данные посетителей и учеников.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Политика конфиденциальности — Safina Music School",
    description: "Сведения об обработке персональных данных.",
    url: "/privacy",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Политика конфиденциальности — Safina Music School",
    description: "Правовая информация для пользователей сайта.",
    images: ["/twitter-image.png"],
  },
};


export default function PrivacyPage() {
    return (
      <section className="container-max py-14">
        <h1 className="text-2xl md:text-3xl font-bold">Политика конфиденциальности</h1>
        <p className="text-gray-600 mt-2">Текст политики появится позже.</p>
      </section>
    );
  }
  
export const metadata = {
  title: "Публичная оферта — Safina Music School",
  description: "Условия оказания услуг музыкальной школы Safina.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Публичная оферта — Safina Music School",
    description: "Правила, условия, порядок оплаты и возвратов.",
    url: "/terms",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Публичная оферта — Safina Music School",
    description: "Основные условия оказания услуг.",
    images: ["/twitter-image.png"],
  },
};


export default function TermsPage() {
    return (
      <section className="container-max py-14">
        <h1 className="text-2xl md:text-3xl font-bold">Публичная оферта</h1>
        <p className="text-gray-600 mt-2">Условия оказания услуг появятся позже.</p>
      </section>
    );
  }
  
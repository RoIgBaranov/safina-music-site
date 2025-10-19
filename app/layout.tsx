import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Manrope } from "next/font/google";
import ScrollTop from "@/components/ScrollTop";
import SmoothFAQ from "@/components/SmoothFAQ";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

// Базовый URL берём из .env, чтобы не хардкодить домен
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  title: "Safina — музыкальная школа в Холоне | Вокал, фортепиано, гитара",
  description:
    "Уроки для детей и взрослых. Дружелюбная атмосфера, сцена и концерты. Пробный урок — запишитесь за 1 минуту.",

  // Важно для корректных абсолютных ссылок в мета-тегах (OG/Twitter)
  metadataBase: new URL(siteUrl),

  // Иконки (см. шаг D1: app/icon.png и app/apple-icon.png)
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },

  // Open Graph (добавил images; url теперь опирается на metadataBase)
  openGraph: {
    title: "Safina — музыкальная школа в Холоне",
    description: "Вокал, фортепиано, гитара. Пробный урок уже на этой неделе.",
    type: "website",
    url: "/", // абсолютный соберётся из metadataBase + этот путь
    images: [
      {
        url: "/opengraph-image.png", // 1200x630, положи файл в app/
        width: 1200,
        height: 630,
        alt: "Safina Music School",
      },
    ],
    siteName: "Safina Music School",
    locale: "ru_RU",
  },

  // Канонический URL: теперь относительный (на базе metadataBase)
  alternates: { canonical: "/" },

  // Twitter-карточка
  twitter: {
    card: "summary_large_image",
    title: "Safina — музыкальная школа в Холоне",
    description:
      "Вокал, фортепиано, гитара. Индивидуально и мини-группы. Пробный урок — запись в 1 клик.",
    images: ["/twitter-image.png"], // можно использовать тот же файл, что и для OG
    // site: "@your_handle", // заполним, если появится
    // creator: "@your_handle",
  },

  // Мелкая полезная гигиена
  other: { "format-detection": "telephone=no" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Телефон подставим в JSON-LD из env
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+972501234567";

  return (
    <html lang="ru">
      <body className={`min-h-screen flex flex-col bg-app ${manrope.variable}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* JSON-LD: уточнил url/telephone через env, тип оставил как был */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              name: "Safina Music School",
              url: siteUrl,
              image: `${siteUrl}/opengraph-image.png`,
              logo: `${siteUrl}/icon.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Holon",
                addressCountry: "IL",
              },
              telephone: phone,
              priceRange: "₪₪", // ориентир уровня цен
              sameAs: [
                "https://instagram.com/safinavoice_israel",
                // добавим сайт/карты, если появятся
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "10:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "10:00",
                  closes: "18:00",
                },
              ],
              areaServed: { "@type": "AdministrativeArea", name: "Holon" },
            }),
          }}
        />

        <SmoothFAQ />
        <ScrollTop />
      </body>
    </html>
  );
}

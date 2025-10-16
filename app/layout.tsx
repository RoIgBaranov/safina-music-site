import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Safina — музыкальная школа в Холоне | Вокал, фортепиано, гитара",
  description:
    "Уроки для детей и взрослых. Дружелюбная атмосфера, сцена и концерты. Пробный урок — запишитесь за 1 минуту.",
  openGraph: {
    title: "Safina — музыкальная школа в Холоне",
    description:
      "Вокал, фортепиано, гитара. Пробный урок уже на этой неделе.",
    type: "website",
    url: "https://example.com", // заменишь после деплоя
  },
  alternates: { canonical: "https://example.com" }, // заменишь
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col bg-app">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Упрощённая микроразметка — позже дополним */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              name: "Safina Music School",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Holon",
                addressCountry: "IL",
              },
              telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
              url: "https://example.com",
            }),
          }}
        />
      </body>
    </html>
  );
}

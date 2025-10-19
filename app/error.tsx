"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { error, reset } = props;
  const isProd = process.env.NODE_ENV === "production";

  useEffect(() => {
    // Можешь заменить на Sentry/LogRocket и т.п.
    // eslint-disable-next-line no-console
    console.error("App error:", error);
  }, [error]);

  const wa = (() => {
    const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+972501234567")
      .replace(/[^\d+]/g, "")
      .replace("+", "");
    const msg = encodeURIComponent(
      "Здравствуйте! На сайте возникла ошибка. Подскажите, пожалуйста 🙏"
    );
    return `https://wa.me/${phone}?text=${msg}`;
  })();

  return (
    <section className="container-max py-16">
      <div className="card card--tint card--border lift">
        <h1 className="section-title">Что-то пошло не так</h1>
        <p className="text-secondary mt-2">
          Мы уже знаем о проблеме. Попробуйте обновить страницу или вернуться
          на главную.
        </p>

        {!isProd && (
          <div className="mt-4 text-sm text-muted">
            <div className="font-medium">Техническая информация (dev):</div>
            <div className="opacity-90 break-words">
              {error.message || "Unknown error"}
            </div>
            {error.digest && (
              <div className="opacity-70">digest: {error.digest}</div>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-primary-calm"
          >
            Повторить попытку
          </button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn btn-outline"
          >
            Обновить страницу
          </button>
          <Link href="/" className="btn btn-outline">
            На главную
          </Link>
        </div>

        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 btn btn-primary-calm"
        >
          Написать в WhatsApp
        </a>
      </div>

      <div className="hr" />
      <p className="text-muted text-sm">
        Код: 500 • Если ошибка повторяется, напишите нам — поможем.
      </p>
    </section>
  );
}

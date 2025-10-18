"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

/** wa.me линк */
function buildWhatsAppLink(phone: string, text: string) {
  const cleanPhone = phone.replace(/[^\d+]/g, "");
  const encodedText = encodeURIComponent(text);
  const phoneForWa = cleanPhone.replace("+", "");
  return `https://wa.me/${phoneForWa}?text=${encodedText}`;
}

export const Header: React.FC = () => {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+972501234567";
  const waLink = useMemo(
    () =>
      buildWhatsAppLink(
        phone,
        "Привет! Хочу записаться на пробный урок. Подскажите доступное время 🙏"
      ),
    [phone]
  );

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Закрывать меню при ресайзе на большие экраны
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Меняем фон шапки при скролле
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Блокируем скролл боди, когда открыт оверлей
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b backdrop-blur transition-colors duration-200",
        scrolled
          ? "bg-[#0f1120e6] border-[#22263f] shadow-[0_10px_30px_-20px_#000c]"
          : "bg-[#0f1120cc] border-[#1a1d33]",
      ].join(" ")}
    >
      {/* тонкая светящаяся линия у нижней границы (деликатно) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,.35), rgba(59,130,246,.35), transparent)",
          opacity: scrolled ? 1 : 0.6,
        }}
      />

      <div className="container-max py-3 flex items-center justify-between relative">
        {/* Лого */}
        <Link
          href="/"
          className="font-extrabold text-lg hover:opacity-90 transition text-secondary"
        >
          Safina
        </Link>

        {/* Десктоп-меню */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link
            href="/directions"
            className="nav-link  hover:text-[var(--brand)] transition"
          >
            Направления
          </Link>
          <Link
            href="/teachers"
            className="nav-link hover:text-[var(--brand)] transition "
          >
            Преподаватели
          </Link>
          <Link
            href="/pricing"
            className="nav-link hover:text-[var(--brand)] transition "
          >
            Цены
          </Link>
          <Link
            href="/gallery"
            className="nav-link hover:text-[var(--brand)] transition "
          >
            Галерея
          </Link>
          <Link
            href="/contact"
            className="nav-link hover:text-[var(--brand)] transition "
          >
            Контакты
          </Link>
        </nav>

        {/* Кнопка WhatsApp (десктоп) */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center btn btn-primary-calm"
          aria-label="Записаться в WhatsApp"
        >
          Записаться
        </a>

        {/* Бургер для мобилок */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-gray-50/5 transition"
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Иконка-гамбургер/крестик */}
          <span className="relative block w-5 h-3">
            <span
              className={`absolute block h-0.5 w-5 bg-white transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-white transition-opacity duration-200 top-1.5 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-white transition-transform duration-300 top-3 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Мобильное меню-оверлей */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          {/* затемнение фона */}
          <div className="absolute inset-0 bg-black/30" />

          {/* панель меню */}
          <div
            className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-[#12142a] border-l border-[#1e2240] shadow-xl p-6 animate-[slideIn_.25s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="grid gap-4 text-base">
              <Link
                href="/directions"
                className="menu-link hover:text-[var(--brand)]"
                onClick={() => setOpen(false)}
              >
                Направления
              </Link>
              <Link
                href="/teachers"
                className="menu-link hover:text-[var(--brand)]"
                onClick={() => setOpen(false)}
              >
                Преподаватели
              </Link>
              <Link
                href="/pricing"
                className="menu-link hover:text-[var(--brand)]"
                onClick={() => setOpen(false)}
              >
                Цены
              </Link>
              <Link
                href="/gallery"
                className="menu-link hover:text-[var(--brand)]"
                onClick={() => setOpen(false)}
              >
                Галерея
              </Link>
              <Link
                href="/contact"
                className="menu-link hover:text-[var(--brand)]"
                onClick={() => setOpen(false)}
              >
                Контакты
              </Link>
            </nav>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full text-center btn btn-primary-calm"
            >
              Записаться в WhatsApp
            </a>
          </div>
        </div>
      )}
      {/* keyframes для боковой панели */}
      <style>
        {`@keyframes slideIn {
            from { transform: translateX(100%); opacity: .4 }
            to   { transform: translateX(0%);   opacity: 1   }
          }`}
      </style>
    </header>
  );
};

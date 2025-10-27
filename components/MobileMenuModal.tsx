"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  waLink: string;
};

export default function MobileMenuModal({ open, onClose, waLink }: Props) {
  const [mounted, setMounted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveRef = useRef<Element | null>(null);

  useEffect(() => setMounted(true), []);

  // lock scroll + возврат фокуса
  useEffect(() => {
    if (!mounted) return;
    if (open) {
      lastActiveRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
      (lastActiveRef.current as HTMLElement | null)?.focus?.();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, mounted]);

  // ESC
  useEffect(() => {
    if (!open || !mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, mounted, onClose]);

  if (!open || !mounted) return null;

  const modalUI = (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center" // центруем flex'ом
      role="dialog"
      aria-modal="true"
      aria-label="Мобильное меню"
    >
      {/* затемнение всей страницы с плавным фейдом */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm animate-[fadeIn_.16s_ease-out]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* контент поверх, без left/top, без translate — никаких «рывков» */}
      <div
        className="relative z-[1] w-[90%] max-w-sm card card--tint card--border lift p-5
                   animate-[popIn_.18s_cubic-bezier(.22,.61,.36,1)] will-change-transform"
        role="document"
      >
        <div className="flex items-center justify-between">
          <div className="font-extrabold text-lg">Меню</div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border hover:bg-gray-50/5"
            aria-label="Закрыть меню"
          >
            <span className="relative block w-4 h-4">
              <span
                className="absolute left-0 right-0 top-1/2 bg-white"
                style={{ height: 2, transform: "translateY(-50%) rotate(45deg)" }}
              />
              <span
                className="absolute left-0 right-0 top-1/2 bg-white"
                style={{ height: 2, transform: "translateY(-50%) rotate(-45deg)" }}
              />
            </span>
          </button>
        </div>

        <nav className="grid gap-3 mt-4">
          <Link href="/directions" className="menu-link hover:text-[var(--brand)]" onClick={onClose}>
            Направления
          </Link>
          <Link href="/teachers" className="menu-link hover:text-[var(--brand)]" onClick={onClose}>
            Преподаватели
          </Link>
          <Link href="/pricing" className="menu-link hover:text-[var(--brand)]" onClick={onClose}>
            Цены
          </Link>
          <Link href="/gallery" className="menu-link hover:text-[var(--brand)]" onClick={onClose}>
            Галерея
          </Link>
          <Link href="/contact" className="menu-link hover:text-[var(--brand)]" onClick={onClose}>
            Контакты
          </Link>
        </nav>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block w-full text-center btn btn-primary-calm"
          onClick={onClose}
        >
          Записаться в WhatsApp
        </a>
      </div>

      {/* локальные анимации */}
      <style>{`
        @keyframes popIn {
          from { opacity: .0; transform: scale(.96); }
          to   { opacity: 1;  transform: scale(1);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[popIn_.18s_cubic-bezier(.22,.61,.36,1)],
          .animate-[fadeIn_.16s_ease-out] { animation: none !important; }
        }
      `}</style>
    </div>
  );

  return createPortal(modalUI, document.body);
}

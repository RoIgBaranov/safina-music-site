"use client";
import Link from "next/link";
import { useState } from "react";
import { WhatsAppIcon, MailIcon, InstagramIcon } from "@/components/Icons";
export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  // Подставь реальную почту или вынеси в .env как NEXT_PUBLIC_EMAIL
  const email = process.env.NEXT_PUBLIC_EMAIL ?? "safina.school@example.com";

  async function copyEmail() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Фолбэк для старых браузеров/несекюрного контекста
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // если вдруг не удалось — можно открыть mailto как запасной вариант
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <footer className="border-t">
      <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-500">© {year} Safina Music School, Holon</p>
        <div className="mt-3 footer-icons">
          {/* WhatsApp */}

          {/* Email — подставь реальный адрес */}
          <button
            type="button"
            onClick={copyEmail}
            className="icon-link"
            aria-label="Скопировать e-mail"
            title={`Скопировать ${email}`}
          >
            <MailIcon width={25} height={25} />
          </button>

          {/* Instagram — подставь реальный профиль */}
          <a
            href="https://instagram.com/safinavoice_israel"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="Instagram"
          >
            <InstagramIcon width={25} height={25} />
          </a>
        </div>

        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-[var(--brand)]">
            Политика конфиденциальности
          </Link>
          <Link href="/terms" className="hover:text-[var(--brand)]">
            Публичная оферта
          </Link>
        </div>
      </div>
      {copied && (
        <div className="toast toast--show" role="status" aria-live="polite">
          Email скопирован
        </div>
      )}
    </footer>
  );
};

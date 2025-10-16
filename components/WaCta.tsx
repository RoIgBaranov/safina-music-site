"use client";

type Props = {
  children?: React.ReactNode;
  message?: string; // что впишем в WhatsApp по умолчанию
  className?: string;
};

function buildWhatsAppLink(phone: string, text: string) {
  const cleanPhone = (phone || "").replace(/[^\d+]/g, "").replace("+", "");
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export default function WaCta({
  children = "Записаться в WhatsApp",
  message = "Привет! Хочу записаться на пробный урок.",
  className = "",
}: Props) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+972501234567";
  const href = buildWhatsAppLink(phone, message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-xl px-5 py-3 text-white hover:opacity-90 transition ${className}`}
      style={{ backgroundColor: "var(--brand)" }}
    >
      {children}
    </a>
  );
}

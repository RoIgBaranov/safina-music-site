"use client";

type Props = {
  children?: React.ReactNode;
  message?: string;   // текст, который уйдёт в WhatsApp
  className?: string; // доп. классы (например, mt-6 w-full)
  title?: string;     // тултип
};

function buildWhatsAppLink(phone: string, text: string) {
  const clean = (phone || "").replace(/[^\d+]/g, "").replace("+", "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

export default function WaCta({
  children = "Записаться в WhatsApp",
  message = "Привет! Хочу записаться на пробный урок.",
  className = "",
  title = "Открыть WhatsApp и записаться",
}: Props) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+972501234567";
  const href = buildWhatsAppLink(phone, message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary-calm ${className}`}
      title={title}
    >
      {children}
    </a>
  );
}

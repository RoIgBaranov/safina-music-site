"use client";

import { useMemo, useState } from "react";

function buildWhatsAppLink(phone: string, text: string) {
  const clean = (phone || "").replace(/[^\d+]/g, "").replace("+", "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

export default function ContactForm() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+972501234567";

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("Вокал");
  const [msg, setMsg] = useState("");

  const message = useMemo(() => {
    const parts = [
      `Привет! Меня зовут ${name || "___"}.`,
      `Хочу записаться на пробный урок.`,
      `Направление: ${course}.`,
      age ? `Возраст: ${age}.` : "",
      msg ? `Комментарий: ${msg}` : "",
    ].filter(Boolean);
    return parts.join(" ");
  }, [name, age, course, msg]);

  const waLink = useMemo(() => buildWhatsAppLink(phone, message), [phone, message]);

  return (
    <div className="mt-6 grid gap-4 max-w-2xl">
      <input
        className="border rounded-xl px-4 py-3"
        placeholder="Имя родителя / ученика"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          className="border rounded-xl px-4 py-3"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option>Вокал</option>
          <option>Фортепиано</option>
          <option>Гитара</option>
        </select>

        <input
          className="border rounded-xl px-4 py-3"
          placeholder="Возраст (если ребёнок)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <textarea
        className="border rounded-xl px-4 py-3"
        placeholder="Пожелания по времени / цели занятий"
        rows={4}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block rounded-xl px-6 py-3 text-white text-center hover:opacity-90 transition"
        style={{ backgroundColor: "var(--brand)" }}
      >
        Отправить в WhatsApp
      </a>
    </div>
  );
}

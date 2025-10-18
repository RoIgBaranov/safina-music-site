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

  const [touched, setTouched] = useState(false);
  const hasError = touched && name.trim() === "";

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

  const waLink = useMemo(
    () => buildWhatsAppLink(phone, message),
    [phone, message]
  );

  return (
    <div className="grid gap-4">
      <input
        className={`input ${hasError ? "input--error" : ""}`}
        placeholder="Имя родителя / ученика *"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (touched) setTouched(false);
        }}
        aria-label="Имя"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          className="input"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          aria-label="Направление"
        >
          <option>Вокал</option>
          <option>Фортепиано</option>
          <option>Гитара</option>
        </select>

        <input
          className="input"
          placeholder="Возраст (если ребёнок)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          aria-label="Возраст"
          inputMode="numeric"
        />
      </div>

      <textarea
        className="input textarea"
        placeholder="Пожелания по времени / цели занятий"
        rows={4}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        aria-label="Комментарий"
      />

      {/* Кнопка — как раньше */}
      <a
        href={name.trim() ? waLink : undefined}
        onClick={(e) => {
          if (!name.trim()) {
            e.preventDefault();
            setTouched(true);
          }
        }}
        className="mt-2 inline-block rounded-xl px-6 py-3 text-white text-center hover:opacity-90 transition btn btn-primary-calm"
        aria-disabled={!name.trim()}
        role="button"
      >
        Отправить в WhatsApp
      </a>

      {/* Простая подсказка под формой */}
      <p className="text-muted text-sm">
        Поле «Имя» обязательно — это поможет быстрее связаться с вами.
      </p>
    </div>
  );
}

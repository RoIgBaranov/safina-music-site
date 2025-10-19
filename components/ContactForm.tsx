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

  // NEW: honeypot — скрытое поле (боты заполняют => блокируем отправку)
  const [hp, setHp] = useState("");

  const [touched, setTouched] = useState(false);
  const nameError = name.trim().length < 2; // NEW: минимум 2 символа

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

  const disabled = nameError || !!hp; // NEW: запрещаем отправку, если имя не ок или honeypot заполнен

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        // форма у нас "псевдо", реальная отправка — переход по ссылке
        e.preventDefault();
        if (!disabled) window.open(waLink, "_blank", "noopener,noreferrer");
        else setTouched(true);
      }}
    >
      {/* Имя */}
      <div>
        <label htmlFor="cf-name" className="sr-only">
          Имя
        </label>
        <input
          id="cf-name"
          className={`input ${touched && nameError ? "input--error" : ""}`}
          placeholder="Имя родителя / ученика *"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (touched) setTouched(false);
          }}
          aria-label="Имя"
          aria-invalid={touched && nameError}
          aria-describedby={touched && nameError ? "cf-name-err" : undefined}
          required
          minLength={2}
          maxLength={64}
          autoComplete="name"
          name="name"
        />
        {touched && nameError && (
          <div
            id="cf-name-err"
            className="form-hint form-hint--error"
            role="alert"
            aria-live="polite"
          >
            {/* Иконка-значок (inline SVG, чтобы не тянуть лишние импорты) */}
            <svg
              className="form-hint__icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v5" />
              <path d="M12 16h.01" />
            </svg>

            <div>
              <div className="font-medium">Имя слишком короткое</div>
              <div className="text-sm opacity-90">
                Укажите минимум 2 символа — например: «Анна».
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Направление + Возраст */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <label htmlFor="cf-course" className="sr-only">
            Направление
          </label>
          <select
            id="cf-course"
            className="input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            aria-label="Направление"
            name="course"
          >
            <option className="text-black">Вокал</option>
            <option className="text-black">Фортепиано</option>
            <option className="text-black">Гитара</option>
          </select>
        </div>

        <div>
          <label htmlFor="cf-age" className="sr-only">
            Возраст
          </label>
          <input
            id="cf-age"
            className={`input ${touched && nameError ? "input--error" : ""}`}
            placeholder="Возраст (если ребёнок)"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            aria-label="Возраст"
            inputMode="numeric"
            pattern="\d{1,2}"
            maxLength={2}
            name="age"
          />
        </div>
      </div>

      {/* Комментарий */}
      <div>
        <label htmlFor="cf-msg" className="sr-only">
          Комментарий
        </label>
        <textarea
          id="cf-msg"
          className="input textarea"
          placeholder="Пожелания по времени / цели занятий"
          rows={4}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          aria-label="Комментарий"
          maxLength={500}
          name="message"
        />
        <div className="text-muted text-xs mt-1">{msg.length}/500</div>
      </div>

      {/* Honeypot (визуально скрыто, но доступно ботам) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          height: 0,
          overflow: "hidden",
        }}
      >
        <label htmlFor="cf-company">Компания</label>
        <input
          id="cf-company"
          tabIndex={-1}
          autoComplete="off"
          className="input"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          name="company"
        />
      </div>

      {/* Кнопка */}
      <button
        type="submit"
        className={`mt-2 inline-block rounded-xl px-6 py-3 text-white text-center transition btn btn-primary-calm  ${
          disabled ? "opacity-60 cursor-not-allowed" : "hover:opacity-90 cursor-pointer"
        }`}
        aria-disabled={disabled}
      >
        Отправить в WhatsApp
      </button>

      <p className="text-muted text-sm">
        Поле «Имя» обязательно. Нажимая кнопку, вы откроете диалог в WhatsApp с
        заполненным сообщением.
      </p>
    </form>
  );
}

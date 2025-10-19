export default function Loading() {
  return (
    <section
      className="min-h-[60vh] flex items-center justify-center px-6"
      role="status"
      aria-live="polite"
      aria-label="Загрузка страницы"
    >
      <div className="card card--tint card--border lift text-center py-8 px-7">
        {/* Эквалайзер */}
        <div className="mt-2 flex items-end justify-center gap-2 h-12 eq" aria-hidden="true">
          <div className="eq-bar" style={{ animationDelay: "0ms" }} />
          <div className="eq-bar" style={{ animationDelay: "120ms" }} />
          <div className="eq-bar" style={{ animationDelay: "240ms" }} />
          <div className="eq-bar" style={{ animationDelay: "360ms" }} />
          <div className="eq-bar" style={{ animationDelay: "480ms" }} />
        </div>

        <p className="text-secondary mt-4">Загружаем контент…</p>
      </div>

      {/* локальные стили анимации */}
      <style>{`
        .eq-bar {
          width: 10px;
          border-radius: 8px;
          background: linear-gradient(180deg, var(--brand), #6d86e6);
          box-shadow: 0 6px 16px -8px rgba(138,164,255,0.55);
          height: 8px;
          animation: safina-bounce 900ms ease-in-out infinite;
          transform-origin: center bottom;
          opacity: .95;
        }
        @keyframes safina-bounce {
          0%, 100% { height: 8px;   filter: saturate(.9);  }
          40%      { height: 48px;  filter: saturate(1.1); }
          60%      { height: 22px; }
        }
        .eq > .eq-bar:nth-child(2) { animation-duration: 960ms; }
        .eq > .eq-bar:nth-child(3) { animation-duration: 880ms; }
        .eq > .eq-bar:nth-child(4) { animation-duration: 940ms; }
        .eq > .eq-bar:nth-child(5) { animation-duration: 900ms; }

        @media (prefers-reduced-motion: reduce) {
          .eq-bar { animation: none; height: 18px; }
        }
      `}</style>
    </section>
  );
}

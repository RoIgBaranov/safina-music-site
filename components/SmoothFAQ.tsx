"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Плавное раскрытие всех .faq details (WAAPI, очень мягко) */
export default function SmoothFAQ() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const items = Array.from(
      document.querySelectorAll<HTMLDetailsElement>(".faq details")
    );
    if (items.length === 0) return;

    items.forEach((d) => {
      const content = d.querySelector<HTMLElement>(".answer");
      if (!content) return;
      content.style.overflow = "hidden";
      content.style.willChange = "height";
      if (!d.open) content.style.height = "0px";
      else content.style.height = "auto";

      // отмена текущей анимации, если была
      (content as any)._anim?.cancel();
    });

    const animateToggle = (d: HTMLDetailsElement) => {
      const content = d.querySelector<HTMLElement>(".answer");
      if (!content) return;

      // если reduce motion — просто переключаем высоту
      if (prefersReduced) {
        content.style.height = d.open ? "auto" : "0px";
        return;
      }

      // Отменяем предыдущую анимацию, если есть
      const prevAnim: Animation | undefined = (content as any)._anim;
      prevAnim?.cancel();

      // Текущая (from) и целевая (to) высота
      const fromH =
        content.style.height === "auto" ? content.scrollHeight : parseFloat(content.style.height || "0");
      // Чтобы корректно посчитать toH при открытии — делаем auto, меряем, возвращаем
      if (d.open) {
        content.style.height = "auto";
        const toH = content.scrollHeight;
        content.style.height = `${fromH}px`;

        const anim = content.animate(
          [{ height: `${fromH}px` }, { height: `${toH}px` }],
          {
            duration: 320, // длиннее = плавнее
            easing: "cubic-bezier(.22,.61,.36,1)", // мягкий ease-out
          }
        );
        (content as any)._anim = anim;

        anim.onfinish = () => {
          content.style.height = "auto";
          (content as any)._anim = null;
        };
        anim.oncancel = () => {
          (content as any)._anim = null;
        };
      } else {
        // закрытие
        const toH = 0;
        // если сейчас auto — надо выставить явную стартовую высоту
        const current = content.style.height === "auto" ? content.scrollHeight : fromH;
        content.style.height = `${current}px`;

        const anim = content.animate(
          [{ height: `${current}px` }, { height: `${toH}px` }],
          {
            duration: 280,
            easing: "cubic-bezier(.22,.61,.36,1)",
          }
        );
        (content as any)._anim = anim;

        anim.onfinish = () => {
          content.style.height = "0px";
          (content as any)._anim = null;
        };
        anim.oncancel = () => {
          (content as any)._anim = null;
        };
      }
    };

    const disposers: Array<() => void> = [];
    items.forEach((d) => {
      const handler = () => animateToggle(d);
      d.addEventListener("toggle", handler);
      disposers.push(() => d.removeEventListener("toggle", handler));
    });

    return () => disposers.forEach((off) => off());
  }, [pathname]);

  return null;
}

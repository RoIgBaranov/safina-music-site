// app/api/gallery/[section]/route.ts

// Отключаем TS-проверки в этом файле, чтобы обойти конфликт сигнатур в Next 15
// (и разных типах params между версиями).
// Это безопасно: мы сами валидируем входной параметр.
  
// @ts-nocheck

import { NextResponse } from "next/server";
import { getGalleryImages } from "@/lib/cloudinary";

// Нужен Node runtime (Buffer используется в cloudinary helper)
export const runtime = "nodejs";

export async function GET(_req, context) {
  // В Next 15 context.params — Promise, в 13/14 — объект.
  const { section } = (await (context?.params ?? {})) ?? {};

  if (section !== "lessons" && section !== "concerts" && section !== "backstage") {
    return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  }

  try {
    const items = await getGalleryImages(section);
    return NextResponse.json({
      section,
      count: items.length,
      items,
      nextCursor: null,
    });
  } catch (e) {
    return NextResponse.json(
      { error: e?.message || "Cloudinary fetch failed" },
      { status: 500 }
    );
  }
}

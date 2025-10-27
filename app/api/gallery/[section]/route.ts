// app/api/gallery/[section]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getGalleryImages } from "@/lib/cloudinary";

// В Next 15 context.params является Promise.
// Такая сигнатура совместима и с 15-й, и с предыдущими версиями.
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ section: string }> }
) {
  const { section } = await context.params;

  if (section !== "lessons" && section !== "concerts" && section !== "backstage") {
    return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  }

  try {
    const items = await getGalleryImages(section as "lessons" | "concerts" | "backstage");
    return NextResponse.json({
      section,
      count: items.length,
      items,
      nextCursor: null,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Cloudinary fetch failed" },
      { status: 500 }
    );
  }
}

// Нужен Node runtime (Buffer используется в cloudinary helper)
export const runtime = "nodejs";

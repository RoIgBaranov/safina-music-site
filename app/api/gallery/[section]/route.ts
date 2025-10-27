// app/api/gallery/[section]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getGalleryImages } from "@/lib/cloudinary";

type Section = "lessons" | "concerts" | "backstage";

export async function GET(_req: NextRequest, context: any) {
  // В Next 15 context.params — Promise; в 13/14 — обычный объект.
  // await безопасно и для того, и для другого.
  const { section } = await context.params as { section?: string };

  if (!section || !["lessons", "concerts", "backstage"].includes(section)) {
    return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  }

  try {
    const sec = section as Section;
    const items = await getGalleryImages(sec);
    return NextResponse.json({
      section: sec,
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

// Явно фиксируем Node runtime (Buffer нужен для Basic auth к Cloudinary)
export const runtime = "nodejs";

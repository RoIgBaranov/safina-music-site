// app/api/gallery/[section]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getGalleryImages } from "@/lib/cloudinary";

type Section = "lessons" | "concerts" | "backstage";

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ section: string }> } // ⬅ params теперь Promise
) {
  const { section } = await ctx.params; // ⬅ распаковываем

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

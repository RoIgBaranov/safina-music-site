// app/api/gallery/[section]/route.ts
import { NextResponse } from "next/server";
import { getGalleryImages } from "@/lib/cloudinary";

type Section = "lessons" | "concerts" | "backstage";

export async function GET(
  _req: Request,
  { params }: { params: { section: Section } }
) {
  const section = params?.section;

  if (!section || !["lessons", "concerts", "backstage"].includes(section)) {
    return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  }

  try {
    const items = await getGalleryImages(section);
    return NextResponse.json({ section, count: items.length, items });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Cloudinary fetch failed" },
      { status: 500 }
    );
  }
}

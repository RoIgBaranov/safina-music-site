// lib/cloudinary.ts
// Серверный хелпер для получения списка изображений из Cloudinary папки.
// Работает ТОЛЬКО на сервере (использует API Secret).

type CloudImage = {
  id: string;            // public_id (без протокола/домена)
  url: string;           // готовый CDN-URL с автоформатом/качеством
  width: number;
  height: number;
  format: string;
  createdAt: string;
};

/** Build CDN url like:
 *  https://res.cloudinary.com/<cloud>/image/upload/f_auto,q_auto/<public_id>.<format>
 */
function buildCloudinaryUrl(
  cloud: string,
  publicId: string,
  format?: string
) {
  const base = `https://res.cloudinary.com/${cloud}/image/upload`;
  const transform = "f_auto,q_auto"; // автоформат (webp/avif) и качество
  // Если у public_id уже есть расширение, Cloudinary его игнорирует, так что добавлять безопасно.
  return `${base}/${transform}/${publicId}${format ? `.${format}` : ""}`;
}

/** Основной метод: получить до 100 изображений из папки gallery/<section> */
export async function getGalleryImages(section: "lessons" | "concerts" | "backstage"): Promise<CloudImage[]> {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME!;
  const key = process.env.CLOUDINARY_API_KEY!;
  const secret = process.env.CLOUDINARY_API_SECRET!;

  if (!cloud || !key || !secret) {
    throw new Error("Cloudinary env vars are missing. Check CLOUDINARY_* in .env.local / Vercel.");
  }

  // Cloudinary Search API (Admin) — POST /resources/search
  // Докладно: expression: "folder=gallery/lessons"
  const auth = "Basic " + Buffer.from(`${key}:${secret}`).toString("base64");

  const folder = `gallery/${section}`;
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud}/resources/search`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      // Кэш Next.js: переиспользовать ответ 1 час
      next: { revalidate: 3600 },
      body: JSON.stringify({
        expression: `folder=${folder}`,
        sort_by: [{ created_at: "desc" }], // самые свежие — первыми
        max_results: 100,
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Cloudinary search failed: ${res.status} ${res.statusText} ${text}`);
  }

  const data = await res.json();
  const resources = (data?.resources || []) as Array<{
    public_id: string;
    width: number;
    height: number;
    format: string;
    created_at: string;
  }>;

  return resources.map((r) => ({
    id: r.public_id,
    url: buildCloudinaryUrl(cloud, r.public_id, r.format),
    width: r.width,
    height: r.height,
    format: r.format,
    createdAt: r.created_at,
  }));
}

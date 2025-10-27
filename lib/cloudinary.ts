// lib/cloudinary.ts
// Серверный хелпер для получения списка изображений из Cloudinary папки.
// Работает ТОЛЬКО на сервере (использует API Secret).

export type CloudImage = {
  id: string;      // public_id (без протокола/домена)
  url: string;     // готовый CDN-URL с автоформатом/качеством
  width: number;
  height: number;
  format: string;
  createdAt: string;
};

/** Собираем CDN URL:
 *  https://res.cloudinary.com/<cloud>/image/upload/f_auto,q_auto/<public_id>.<format>
 */
function buildCloudinaryUrl(cloud: string, publicId: string, format?: string) {
  const base = `https://res.cloudinary.com/${cloud}/image/upload`;
  const transform = "f_auto,q_auto"; // автоформат (webp/avif) и качество
  return `${base}/${transform}/${publicId}${format ? `.${format}` : ""}`;
}

/** Получить до 100 изображений из папки gallery/<section> */
export async function getGalleryImages(
  section: "lessons" | "concerts" | "backstage"
): Promise<CloudImage[]> {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME!;
  const key = process.env.CLOUDINARY_API_KEY!;
  const secret = process.env.CLOUDINARY_API_SECRET!;

  if (!cloud || !key || !secret) {
    throw new Error(
      "Cloudinary env vars are missing. Check CLOUDINARY_* in .env.local / Vercel."
    );
  }

  const auth = "Basic " + Buffer.from(`${key}:${secret}`).toString("base64");
  const folder = `gallery/${section}`;

  // Кэш: dev — всегда свежо; prod — revalidate раз в час
  const isDev = process.env.NODE_ENV === "development";
  const revalidate = isDev ? 0 : 3600;

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud}/resources/search`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      ...(isDev
        ? ({ cache: "no-store" } as const)
        : ({ next: { revalidate } } as const)),
      body: JSON.stringify({
        expression: `folder=${folder}`,
        sort_by: [{ created_at: "desc" }],
        max_results: 100,
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Cloudinary search failed: ${res.status} ${res.statusText} ${text}`
    );
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

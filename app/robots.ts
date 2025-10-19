import type { MetadataRoute } from "next";

function getBaseUrl() {
  // пробуем из env, иначе—локальный dev
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3000";
}

export default function robots(): MetadataRoute.Robots {
  const base = getBaseUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // можно запретить служебные пути, если появятся
        disallow: [
          "/api/",       // если будете добавлять API-роуты
          "/_next/",     // статические ассеты Next
        ],
      },
      // пример: закрыть индексацию для превью-веток (если заведёте)
      // { userAgent: "*", disallow: "/", sitemap: `${base}/sitemap.xml` },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

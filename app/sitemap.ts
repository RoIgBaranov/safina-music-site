import type { MetadataRoute } from "next";

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();

  // перечисляем основные страницe
  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`,              changeFrequency: "weekly",  priority: 1.0  },
    { url: `${base}/directions`,    changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/teachers`,      changeFrequency: "monthly", priority: 0.7  },
    { url: `${base}/pricing`,       changeFrequency: "monthly", priority: 0.7  },
    { url: `${base}/gallery`,       changeFrequency: "monthly", priority: 0.6  },
    { url: `${base}/contact`,       changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/privacy`,       changeFrequency: "yearly",  priority: 0.3  },
    { url: `${base}/terms`,         changeFrequency: "yearly",  priority: 0.3  },
  ];

  // дочерние «Направления» (ручной список — у нас статические страницы)
  const directions = [
    "vocal-kids",
    "vocal-adults",
    "piano",
    "guitar",
  ].map((slug) => ({
    url: `${base}/directions/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...directions];
}

import GalleryView from "@/components/GalleryView";

export const metadata = {
  title: "Галерея — Safina Music School",
  description: "Фото с занятий, концертов и бекстейджа.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Галерея — Safina Music School",
    description: "Живая атмосфера нашей школы: занятия, сцена, backstage.",
    url: "/gallery",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Галерея — Safina Music School",
    description: "Safina Music School — фото и моменты.",
    images: ["/twitter-image.png"],
  },
};


export default function GalleryPage() {
  return <GalleryView />;
}

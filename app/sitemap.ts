import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const lastModified = new Date("2026-06-25");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${site.url}${site.ogImage}`],
    },
  ];
}




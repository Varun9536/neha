import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}${site.resume}`,
      lastModified: new Date("2026-05-04"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const host = new URL(site.url).host;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host,
    sitemap: `${site.url}/sitemap.xml`,
  };
}

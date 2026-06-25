import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.shortTitle,
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0d0520",
    theme_color: "#0d0520",
    lang: "en-IN",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

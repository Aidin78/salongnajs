import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/salon";

const routes = [
  { path: "", priority: 1 },
  { path: "/boka-tid", priority: 0.9 },
  { path: "/priser", priority: 0.9 },
  { path: "/om-oss", priority: 0.7 },
  { path: "/kontakt", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}

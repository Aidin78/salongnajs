import type { NextConfig } from "next";

const legacyPaths = [
  ["/work/bokatid", "/boka-tid"],
  ["/work/priser", "/priser"],
  ["/work/omoss", "/om-oss"],
  ["/work/kontakt", "/kontakt"],
  ["/hem.html", "/"],
] as const;

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return legacyPaths.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `${source}/`, destination, permanent: true },
    ]);
  },
};

export default nextConfig;

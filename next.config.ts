import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit /about/index.html (not /about.html) so trailing-slash canonicals
  // match the file layout exactly on Cloudflare Pages.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Cache Components hangs every React-rendered route on Cloudflare Workers
  // (the runtime cannot guarantee setTimeout). Classic full SSG instead.
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

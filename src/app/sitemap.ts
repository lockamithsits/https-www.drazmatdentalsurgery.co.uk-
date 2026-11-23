import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://drazmatdentalsurgery.co.uk";
const LAST_MODIFIED = new Date("2026-11-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/about/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/contact/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/privacy/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms/`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
  ];
}

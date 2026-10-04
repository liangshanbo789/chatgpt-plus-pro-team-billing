import type { MetadataRoute } from "next";
import { HELP_ARTICLES } from "@/config/helpArticles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gongsi.one";
  const lastModified = new Date();

  const helpRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/help/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...HELP_ARTICLES.map((article) => ({
      url: `${baseUrl}/help/${article.slug}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solutions/codex-procurement/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/gpt-bulk-procurement/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide/stability/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...helpRoutes,
    {
      url: `${baseUrl}/docs/proposal/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/pricing/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/sla/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/agreement/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

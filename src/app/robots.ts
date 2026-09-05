import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot", "ClaudeBot", "*"],
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "CCBot",
          "Google-Extended",
          "Bytespider",
          "Amazonbot",
          "Meta-ExternalAgent",
          "Applebot-Extended",
          "Diffbot",
          "cohere-ai",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

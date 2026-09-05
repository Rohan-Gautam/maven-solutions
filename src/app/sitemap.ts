import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { programs } from "@/data/programs";
import { siteUrl } from "@/lib/seo";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/products", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/programs", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/TCMP", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/become-a-reseller", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/careers", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...programs.map((program) => ({
      url: `${siteUrl}/programs/${program.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { programs } from "@/data/programs";
import { siteUrl } from "@/lib/seo";
const lastModified = new Date("2026-08-17T00:00:00.000Z");
export default function sitemap(): MetadataRoute.Sitemap { const staticPages = [{ path: "", priority: 1 }, { path: "/about", priority: .7 }, { path: "/solutions", priority: .8 }, { path: "/products", priority: .8 }, { path: "/programs", priority: .8 }, { path: "/technical-resources", priority: .6 }, { path: "/contact", priority: .7 }]; return [...staticPages.map(({ path, priority }) => ({ url: `${siteUrl}${path}`, lastModified, changeFrequency: "monthly" as const, priority })), ...products.map((product) => ({ url: `${siteUrl}/products/${product.slug}`, lastModified, changeFrequency: "monthly" as const, priority: .6 })), ...programs.map((program) => ({ url: `${siteUrl}/programs/${program.slug}`, lastModified, changeFrequency: "monthly" as const, priority: .7 }))]; }

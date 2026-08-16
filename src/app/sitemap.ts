import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { programs } from "@/data/programs";
const base = "https://www.mavensolutions.in";
export default function sitemap(): MetadataRoute.Sitemap { const staticPages = ["", "/about", "/solutions", "/products", "/programs", "/technical-resources", "/contact"]; return [...staticPages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 })), ...products.map((product) => ({ url: `${base}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .6 })), ...programs.map((program) => ({ url: `${base}/programs/${program.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 }))]; }

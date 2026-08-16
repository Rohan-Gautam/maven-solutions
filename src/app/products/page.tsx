import { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProductCatalog } from "@/components/ProductCatalog";
import { products, productCategories } from "@/data/products";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Paper Industry Chemicals", "Browse Maven Solutions process chemicals for retention, drainage, fibre recovery, process water, surface sizing and starch applications.", "/products");
export default function Products() { return <section className="py-20 sm:py-28"><Container><p className="eyebrow">Product catalogue</p><h1 className="mt-3 max-w-3xl text-5xl font-bold tracking-[-.07em] text-slate-950 sm:text-6xl">Technical products, clearly organised.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Browse Maven’s documented product range by application category, code or product name.</p><ProductCatalog products={products} categories={productCategories} /></Container></section>; }

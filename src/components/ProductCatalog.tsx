"use client";

import {useMemo, useState} from "react";
import {Search} from "lucide-react";
import type {Product} from "@/types";
import {ProductCard} from "./ProductCard";

export function ProductCatalog({products, categories}: { products: Product[]; categories: string[] }) {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All");
    const matches = useMemo(() => products.filter((product) => (category === "All" || product.category === category) && `${product.code} ${product.name} ${product.shortDescription}`.toLowerCase().includes(query.toLowerCase())), [products, query, category]);
    return <>
        <div
            className="mt-10 grid gap-5 border-y border-[#d8e0e5] bg-[#eef3f5]/55 p-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <label className="block"><span
                className="mb-2 block text-sm font-semibold text-[#17212b]">Search products</span><span
                className="relative block"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#53616e]"
                                                   size={18}/><input value={query}
                                                                     onChange={(event) => setQuery(event.target.value)}
                                                                     placeholder="Search by product name or code"
                                                                     className="min-h-12 w-full border border-[#bcc8d0] bg-white pl-10 pr-3 text-base text-[#17212b] outline-none transition focus:border-[#1769aa] focus:ring-2 focus:ring-[#1769aa]/15"/></span></label><label
            className="block"><span
            className="mb-2 block text-sm font-semibold text-[#17212b]">Product family</span><select value={category}
                                                                                                     onChange={(event) => setCategory(event.target.value)}
                                                                                                     className="min-h-12 w-full border border-[#bcc8d0] bg-white px-3 text-base text-[#17212b] outline-none transition focus:border-[#1769aa] focus:ring-2 focus:ring-[#1769aa]/15">
            <option value="All">All product families</option>
            {categories.map((item) => <option value={item} key={item}>{item}</option>)}</select></label></div>
        <p className="mt-7 text-base text-[#53616e]"><span
            className="font-semibold text-[#17212b]">{matches.length}</span> {matches.length === 1 ? "product" : "products"} shown
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{matches.map((product) => <ProductCard
            key={product.slug} product={product}/>)}</div>
        {matches.length === 0 &&
            <p className="mt-10 border border-dashed border-[#bcc8d0] bg-white p-10 text-center text-[#53616e]">No
                products match that search. <button className="font-bold text-[#1769aa] underline underline-offset-4"
                                                    onClick={() => {
                                                        setQuery("");
                                                        setCategory("All");
                                                    }}>Clear filters</button></p>}</>;
}

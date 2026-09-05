import {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight, Droplets, Network, ScanLine, Layers} from "lucide-react";
import {Container} from "@/components/Container";
import {products} from "@/data/products";
import {programs} from "@/data/programs";
import {pageMetadata} from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Paper Mill Chemical Solutions", "Explore pulp and paper chemical solutions for retention, drainage, filler efficiency, process water, recovery, sizing and starch.", "/solutions");
const sections = [{
    id: "retention",
    title: "Improve retention & drainage",
    copy: "Build a more controllable wet end with retention aids and programme-led optimisation.",
    icon: Network,
    categories: ["Retention & Drainage"]
}, {
    id: "filler-programmes",
    title: "Specialised filler programmes",
    copy: "Novel filler technology designed to provide up to 100% filler retention while maintaining the strength properties of paper.",
    icon: Layers,
    programmes: programs.filter(p => p.slug.startsWith("filmax"))
}, {
    id: "programmes",
    title: "Our specialised programmes",
    copy: "Maven’s flagship programmes combine chemistry, application guidance and technical evaluation into a practical operating approach.",
    icon: Layers,
    programmes: programs.filter(p => !p.slug.startsWith("filmax"))
}, {
    id: "water",
    title: "Manage process water & recovery",
    copy: "Control particulate load, improve water clarity and support downstream fibre recovery.",
    icon: Droplets,
    categories: ["Process Water & Fines Control", "Fibre Recovery & ETP"]
}, {
    id: "sizing",
    title: "Optimise surface sizing & starch",
    copy: "Support surface properties, strength contribution and starch-use efficiency at the size press.",
    icon: ScanLine,
    categories: ["Surface Sizing & Starch"]
}];
export default function Solutions() {
    return <>
        <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#0b2239] py-12 text-white sm:py-16 lg:min-h-[480px] lg:py-20">
            <div className="grid-fade absolute inset-0 opacity-35" />
            <div className="absolute inset-0 w-full overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[60%] z-0">
                <Image src="/images/brand/solutions.webp" alt="Maven Solutions" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-center lg:object-left" priority />
                <div className="absolute inset-0 bg-[#0b2239]/85 lg:hidden" />
                <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b2239] via-[#0b2239]/40 to-[#0b2239]/10 lg:block" />
            </div>
            <Container className="relative z-10">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="max-w-4xl">
                        <p className="tech-label text-[#b7d7bd]">Solutions</p>
                        <h1 className="mt-4 text-5xl font-bold tracking-[-.065em] sm:text-6xl lg:text-7xl">Find chemistry by the problem you need to solve.</h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                            Maven’s products and programs are organised around paper-machine requirements, rather than product codes alone.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
        <div className="py-8"><Container>
            <div className="flex flex-wrap gap-3">{sections.map((section) => <a key={section.id}
                                                                                          className="inline-flex items-center rounded-full border border-[#0753b5]/10 bg-[#0753b5]/5 px-5 py-2.5 text-sm font-bold text-[#0753b5] shadow-[0_2px_10px_-3px_rgba(7,83,181,0.1)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-[#0753b5]/10 hover:text-[#16943e] hover:shadow-[0_4px_12px_-3px_rgba(7,83,181,0.15)]"
                                                                                          href={`#${section.id}`}>{section.title}</a>)}</div>
        </Container></div>
        {sections.map((section, index) => {
            const Icon = section.icon;
            const items = section.categories ? products.filter((product) => section.categories?.includes(product.category)) : [];
            const isProgrammes = section.programmes !== undefined;
            return <section key={section.id} id={section.id}
                            className={index % 2 ? "bg-[#f8fbfd] py-20 sm:py-28" : "py-20 sm:py-28"}><Container>
                <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
                    <div><Icon className="text-[#16943e]" size={32}/><h2
                        className="mt-6 text-4xl font-bold tracking-[-.06em] text-slate-950">{section.title}</h2><p
                        className="mt-5 text-base leading-7 text-slate-600">{section.copy}</p></div>
                    {items.length > 0 &&
                        <div className="grid gap-3 sm:grid-cols-2">{items.map((product) => <Link key={product.slug}
                                                                                                 href={`/products/${product.slug}`}
                                                                                                 className="rounded-md border border-slate-200 bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-[#1769aa] hover:shadow-md">
                            <p className="tech-label">{product.code}</p><h3
                            className="mt-5 text-xl font-bold">{product.name}</h3><p
                            className="mt-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
                        </Link>)}</div>}
                    {isProgrammes &&
                        <div className="grid gap-3 sm:grid-cols-2">{section.programmes!.map((prog) => <Link key={prog.slug}
                                                                                                 href={`/programs/${prog.slug}`}
                                                                                                 className="group flex flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-[#1769aa] hover:shadow-md">
                            <h3 className="text-xl font-bold text-slate-900">{prog.name}</h3>
                            <p className="mt-1 text-sm font-semibold text-[#16943e]">{prog.label}</p>
                            <p className="mt-4 text-sm leading-6 text-slate-600">{prog.description}</p>
                            <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0753b5] transition group-hover:text-[#16943e]">View programme <ArrowRight size={16}/></span>
                        </Link>)}</div>}
                </div>
            </Container></section>;
        })}</>;
}

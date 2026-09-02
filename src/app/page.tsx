import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    Award,
    Beaker,
    Droplets,
    Factory,
    Leaf,
    MoveRight,
    Network,
    ShieldCheck,
    Target,
    Workflow
} from "lucide-react";
import {Container} from "@/components/Container";
import {Button} from "@/components/Button";
import {SectionHeading} from "@/components/SectionHeading";
import {ProductCard} from "@/components/ProductCard";
import {ProgramCard} from "@/components/ProgramCard";
import {products} from "@/data/products";
import {programs} from "@/data/programs";

const solutions = [
    {
        title: "Retention & drainage",
        copy: "Bring fines, filler and fibre performance into a more controllable wet end.",
        icon: Network,
        href: "/solutions#retention"
    },
    {
        title: "Filler engineering",
        copy: "Support efficient filler use while maintaining the paper matrix.",
        icon: Beaker,
        href: "/solutions#filler"
    },
    {
        title: "Process water & ETP",
        copy: "Manage colloidal load, water quality and fibre recovery pathways.",
        icon: Droplets,
        href: "/solutions#water"
    },
    {
        title: "Surface sizing & starch",
        copy: "Enhance starch contribution and surface-sizing efficiency.",
        icon: Factory,
        href: "/solutions#sizing"
    }
];

export default function Home() {
    return <>
        <section className="relative isolate overflow-hidden bg-[#061a37] text-white"><Image
            src="/images/brand/maven-paper-roll-warehouse.jpg"
            alt="Finished paper rolls stored in a paper mill warehouse" fill sizes="100vw"
            className="object-cover object-[62%_center] opacity-100" priority/>
            <div className="absolute inset-0 bg-[#061a37]/30"/>
            <div
                className="absolute inset-0 bg-gradient-to-r from-[#061a37]/80 via-[#061a37]/65 via-42% to-[#061a37]/15"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a37]/65 via-transparent to-[#061a37]/25"/>
            <div className="grid-fade absolute inset-0 opacity-15"/>
            <Container
                className="relative flex min-h-[100svh] flex-col pb-12 pt-[calc(3rem+4.75rem)] sm:pb-16 sm:pt-[calc(4rem+4.75rem)] lg:h-[100svh] lg:min-h-0 lg:max-h-[100svh] lg:pb-10 lg:pt-[calc(2.5rem+4.75rem)]">
                <div className="max-w-4xl pt-4 lg:pt-0"><p
                    className="reveal inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-[.13em] text-[#d5e3d7] backdrop-blur-sm sm:text-sm">SPECIALTY
                    PULP &amp; PAPER SOLUTIONS</p><h1
                    className="reveal mt-4 max-w-4xl text-[clamp(3rem,5.5vw,5.5rem)] lg:mt-4 !font-black uppercase leading-[.84] tracking-[-.075em] text-white">Speciality <span
                    className="text-slate-300/75">chemicals</span>{" "}<br/>for pulp &amp; paper{" "}<br/>manufacturing.
                </h1><p
                    className="reveal mt-5 max-w-2xl lg:mt-4 text-lg leading-8 text-slate-100 sm:text-xl">Performance-focused
                    chemistry for retention, drainage, fibre recovery, sizing and process-water treatment.</p><p
                    className="mt-2 max-w-2xl text-base leading-7 text-slate-200">Maven Solutions combines customised
                    chemistry with practical process understanding for paper mills and their technical teams.</p>
                    <div className="reveal mt-5 flex flex-wrap gap-3"><Button href="/products" variant="light"
                                                                              className="group shadow-lg shadow-blue-950/30">Explore
                        products <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1"
                                             size={17}/></Button><Button href="/contact" variant="secondary"
                                                                         className="border-white/35 bg-transparent text-white shadow-sm shadow-blue-950/20 hover:border-white hover:bg-white hover:shadow-md hover:shadow-blue-950/25 hover:text-[#102a43]">Technical
                        enquiry <ArrowUpRight size={17}/></Button></div>
                </div>
                <div className="mt-auto pt-6">
                    <div className="border-t border-white/25 pt-3">
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-100"><p
                            className="flex items-center gap-2"><span
                            className="h-1.5 w-1.5 rounded-full bg-[#8be1a5]"/><strong
                            className="font-semibold text-white">Customised chemistry</strong><span
                            className="text-slate-300">For individual process conditions</span></p><p
                            className="flex items-center gap-2"><span
                            className="h-1.5 w-1.5 rounded-full bg-[#8be1a5]"/><strong
                            className="font-semibold text-white">Technical programmes</strong><span
                            className="text-slate-300">Built around mill requirements</span></p><p
                            className="flex items-center gap-2"><span
                            className="h-1.5 w-1.5 rounded-full bg-[#8be1a5]"/><strong
                            className="font-semibold text-white">Practical support</strong><span
                            className="text-slate-300">A field-led working approach</span></p></div>
                        <div
                            className="mt-3 hidden items-center justify-center gap-3 text-[.65rem] font-bold uppercase tracking-[.22em] text-slate-300 lg:flex">
                            <span>Scroll</span><span className="h-px w-12 bg-[#8be1a5]/80"/></div>
                    </div>
                </div>
            </Container></section>
        <section className="bg-[#f7f6f2] py-20 sm:py-24"><Container>
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
                <div><p className="eyebrow">Maven Solutions</p><h2
                    className="mt-3 text-4xl font-bold tracking-[-.06em] text-slate-950 sm:text-5xl">We don’t just sell
                    products. We build workable solutions.</h2></div>
                <div className="max-w-2xl text-lg leading-8 text-slate-600"><p>Maven brings together technical
                    expertise, customised chemistry and a transparent working approach for pulp and paper manufacturing.
                    Our programmes are designed around the real conditions of your process.</p><Link
                    className="mt-7 inline-flex items-center gap-2 border-b border-[#0753b5] pb-1 text-sm font-bold text-[#0753b5]"
                    href="/about">Learn about Maven <MoveRight size={16}/></Link></div>
            </div>
        </Container></section>
        <section className="py-20 sm:py-28"><Container><SectionHeading eyebrow="Solutions by process need"
                                                                       title="Start with the challenge in your mill."
                                                                       copy="Explore focused chemistry pathways for key paper-making and water-management requirements."/>
            <div
                className="mt-12 grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">{solutions.map(({
                                                                                                                            title,
                                                                                                                            copy,
                                                                                                                            icon: Icon,
                                                                                                                            href
                                                                                                                        }) =>
                <Link href={href} key={title}
                      className="group border-b border-r border-slate-200 p-6 transition hover:bg-[#0753b5]"><Icon
                    className="text-[#16943e] group-hover:text-[#8be1a5]" size={26}/><h3
                    className="mt-12 text-xl font-bold tracking-[-.04em] text-slate-950 group-hover:text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 group-hover:text-slate-200">{copy}</p>
                    <ArrowRight className="mt-8 text-[#0753b5] group-hover:text-white" size={18}/></Link>)}</div>
        </Container></section>
        <section className="overflow-hidden bg-[#eaf3ff] py-20 sm:py-28"><Container><SectionHeading
            eyebrow="Flagship programmes" title="Targeted chemistry. One cohesive programme."
            copy="Maven’s flagship technical programmes translate complex paper-machine challenges into a structured, field-oriented approach."/>
            <div className="mt-12 grid gap-5 lg:grid-cols-2"><ProgramCard program={programs[0]} dark/><ProgramCard
                program={programs[1]}/></div>
        </Container></section>
        <section className="py-20 sm:py-28"><Container><SectionHeading eyebrow="Selected catalogue"
                                                                       title="Technical products for focused process improvements."
                                                                       action={<Button href="/products"
                                                                                       variant="secondary">View all
                                                                           products <ArrowRight size={16}/></Button>}/>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{products.slice(0, 6).map((product) =>
                <ProductCard key={product.slug} product={product}/>)}</div>
        </Container></section>
        <section className="relative overflow-hidden bg-[#061a37] py-20 text-white sm:py-28">
            <div className="paper-lines absolute inset-0 opacity-70"/>
            <Container className="relative">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
                    <div><p className="eyebrow text-[#8be1a5]">A technical partnership</p><h2
                        className="mt-4 max-w-3xl text-4xl font-bold tracking-[-.06em] sm:text-5xl">Need help selecting
                        the right chemistry for your process?</h2><p
                        className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Talk to Maven’s technical team about
                        your mill conditions, requirements and next evaluation.</p></div>
                    <div className="lg:justify-self-end"><Button href="/contact" variant="light">Talk to
                        Maven <ArrowUpRight size={17}/></Button></div>
                </div>
                <div className="mt-14 grid gap-6 sm:grid-cols-3">
                    <div className="flex gap-3 text-sm text-slate-200"><ShieldCheck
                        className="shrink-0 text-[#8be1a5]"/>Field-oriented assessment
                    </div>
                    <div className="flex gap-3 text-sm text-slate-200"><Leaf className="shrink-0 text-[#8be1a5]"/>Sustainable,
                        cost-effective intent
                    </div>
                    <div className="flex gap-3 text-sm text-slate-200"><Network className="shrink-0 text-[#8be1a5]"/>Technical
                        programmes by process need
                    </div>
                </div>
            </Container></section>
    </>;
}

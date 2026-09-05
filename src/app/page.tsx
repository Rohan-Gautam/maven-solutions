import Link from "next/link";
import Image from "next/image";
import {
    Search,
    FlaskConical,
    BarChart3,
    Settings,
    Waves,
    Grid,
    Layers,
    Droplet,
    Leaf,
    Phone,
    Mail,
    ArrowRight
} from "lucide-react";
import {Container} from "@/components/Container";
import {Button} from "@/components/Button";
import {products} from "@/data/products";
import {programs} from "@/data/programs";
import {company} from "@/data/company";

export default function Home() {
    return (
        <>
            {/* Section 1 - Hero */}
            <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
                <div className="absolute right-0 top-0 h-full w-full lg:w-[55%]">
                    <Image
                        src="/images/hero.png"
                        alt="Paper machine"
                        fill
                        className="object-cover object-[20%_center]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:via-white/30" />
                    <div className="absolute bottom-6 right-6 text-right hidden lg:block">
                        <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white drop-shadow-md">PEOPLE<br/>PROCESS<br/>CHEMISTRY</p>
                        <p className="mt-1 text-[0.55rem] uppercase tracking-[0.2em] text-slate-200 drop-shadow-md">A STRONGER TOMORROW</p>
                    </div>
                </div>
                <Container className="relative">
                    <div className="max-w-2xl">
                        <p className="text-xs font-bold tracking-widest text-slate-500 mb-6">SPECIALTY CHEMISTRY FOR THE PAPER INDUSTRY</p>
                        <h1 className="text-[clamp(3.5rem,6.5vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.04em] text-[#0B2B45]">
                            Where Creativity <br></br> <span className="text-[#2E9FB0]">Meets Innovation.</span>
                        </h1>
                        <p className="mt-8 text-lg leading-8 text-slate-600 max-w-lg font-medium">
                            Process-focused chemical solutions to improve performance, efficiency and sustainability in your paper mill.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button href="/solutions" className="bg-[#0B2B45] hover:bg-[#0B2B45]/90 text-white rounded-full px-7">
                                Explore Solutions <ArrowRight size={16} className="ml-2" />
                            </Button>
                            <Button href="/contact" variant="secondary" className="border-[#0B2B45] text-[#0B2B45] hover:bg-slate-50 rounded-full px-7">
                                Talk to Maven
                            </Button>
                        </div>
                        <div className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.65rem] font-bold tracking-[0.2em] text-[#0B2B45]">
                            <span>RETENTION</span>
                            <span className="w-px h-3 bg-slate-300"></span>
                            <span>DRAINAGE</span>
                            <span className="w-px h-3 bg-slate-300"></span>
                            <span>STARCH</span>
                            <span className="w-px h-3 bg-slate-300"></span>
                            <span>PROCESS WATER</span>
                            <span className="w-px h-3 bg-slate-300"></span>
                            <span>ETP</span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 2 - The Maven Approach */}
            <section className="bg-[#F8F9FA] py-20 sm:py-28 border-y border-slate-200">
                <Container>
                    <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
                        <div>
                            <p className="text-xs font-bold tracking-[0.15em] text-slate-500 mb-5">THE MAVEN APPROACH</p>
                            <h2 className="text-4xl font-bold tracking-tight text-[#0B2B45] sm:text-[2.75rem] leading-[1.1]">
                                Real challenges.<br />Practical solutions.
                            </h2>
                            <p className="mt-6 text-[1.1rem] leading-7 text-slate-600">
                                We work with paper manufacturers to solve process challenges through customised chemistry, technical programmes and continuous support.
                            </p>
                            <div className="mt-8">
                                <Button href="/about" className="bg-[#0B2B45] hover:bg-[#0B2B45]/90 text-white rounded-md">
                                    Our Approach <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </div>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-3">
                            <div>
                                <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-[#0B2B45] mb-6">
                                    <Search size={24} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-lg font-bold text-[#0B2B45] mb-3">Understand</h3>
                                <p className="text-[0.95rem] text-slate-600 leading-relaxed">We study your process and operating conditions.</p>
                            </div>
                            <div>
                                <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-[#0B2B45] mb-6">
                                    <FlaskConical size={24} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-lg font-bold text-[#0B2B45] mb-3">Engineer</h3>
                                <p className="text-[0.95rem] text-slate-600 leading-relaxed">We develop the right chemical approach.</p>
                            </div>
                            <div>
                                <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-[#0B2B45] mb-6">
                                    <BarChart3 size={24} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-lg font-bold text-[#0B2B45] mb-3">Optimise</h3>
                                <p className="text-[0.95rem] text-slate-600 leading-relaxed">We support implementation and drive continuous improvement.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 3 - Featured Programme (TCMP) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF7FA] to-[#E2F0F7] py-20 sm:py-32">
                <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-white/70 skew-x-[-12deg] translate-x-20 hidden lg:block" />
                <Container className="relative">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        <div>
                            <p className="text-[0.7rem] font-bold tracking-[0.15em] text-slate-600 mb-4">FEATURED PROGRAM</p>
                            <h2 className="text-[5.5rem] font-black tracking-tighter mb-1 leading-none">
                                <span className="text-[#0B2B45]">T</span>
                                <span className="text-[#13618C]">C</span>
                                <span className="text-[#248B57]">M</span>
                                <span className="text-[#3CB371]">P</span>
                            </h2>
                            <h3 className="text-[1.35rem] font-bold text-[#0B2B45] mb-4">Total Chemical Management Program</h3>
                            <p className="text-lg text-slate-600 mb-8 max-w-md">
                                A complete, mill-focused approach to managing chemical consumption, performance and process efficiency.
                            </p>
                            <div className="mt-8">
                                <Button href="/tcmp" className="bg-[#0B2B45] hover:bg-[#0B2B45]/90 text-white rounded-md">
                                    Explore TCMP <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </div>
                            <ul className="mt-12 space-y-5">
                                <li className="flex items-center gap-4 text-[#0B2B45] font-semibold text-[0.95rem]">
                                    <Settings className="text-[#2E9FB0]" size={22} strokeWidth={2.5} /> Holistic Process View
                                </li>
                                <li className="flex items-center gap-4 text-[#0B2B45] font-semibold text-[0.95rem]">
                                    <BarChart3 className="text-[#2E9FB0]" size={22} strokeWidth={2.5} /> Optimised Chemical Usage
                                </li>
                                <li className="flex items-center gap-4 text-[#0B2B45] font-semibold text-[0.95rem]">
                                    <Leaf className="text-[#2E9FB0]" size={22} strokeWidth={2.5} /> Measurable Mill Results
                                </li>
                            </ul>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-square max-w-[450px] mx-auto lg:mr-0 lg:ml-auto w-full rounded-[40px] sm:rounded-full overflow-hidden shadow-2xl border-[12px] border-white/60">
                            <Image src="/images/tcmp-feature.png" alt="TCMP Feature" fill className="object-cover" />
                            <div className="absolute top-10 right-10 text-right">
                                <p className="text-[0.6rem] font-bold tracking-[0.15em] text-[#0B2B45] leading-tight">CHEMISTRY<br/>FOR A BRIGHTER<br/>TOMORROW</p>
                            </div>
                            <div className="absolute bottom-10 left-10 text-left bg-white/70 backdrop-blur-md p-3 rounded-lg border border-white/50">
                                <p className="text-[0.55rem] font-bold tracking-[0.15em] text-[#0B2B45] leading-[1.4]">SMARTER CHEMISTRY<br/>STRONGER BUSINESS</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 4 - What are you trying to improve? */}
            <section className="py-16 bg-white border-b border-slate-200">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-14">
                        <p className="text-[0.7rem] font-bold tracking-[0.15em] text-[#0B2B45]">WHAT ARE YOU TRYING TO IMPROVE?</p>
                        <p className="text-[0.85rem] text-slate-500">Different mills. Different challenges. A stronger tomorrow.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 sm:justify-between text-center max-w-5xl mx-auto">
                        {[
                            { icon: Settings, label: "Retention" },
                            { icon: Waves, label: "Drainage" },
                            { icon: Grid, label: "Formation" },
                            { icon: Layers, label: "Filler" },
                            { icon: Droplet, label: "Starch" },
                            { icon: Leaf, label: "Process Water" },
                            { icon: BarChart3, label: "Cost Efficiency" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer w-24">
                                <div className="text-[#0B2B45] transition-colors group-hover:text-[#2E9FB0]">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <span className="text-[0.8rem] font-bold text-[#0B2B45]">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Section 5 - Sustainability */}
            <section className="relative overflow-hidden bg-[#0F3020] py-24 sm:py-32 text-white">
                <div className="absolute inset-0 w-full h-full lg:w-[60%] lg:left-[40%]">
                    <Image src="/images/sustainability.png" alt="Sustainability" fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F3020] via-[#0F3020]/90 to-transparent" />
                </div>
                <Container className="relative">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <p className="text-[0.7rem] font-bold tracking-[0.15em] text-[#8BE1A5] mb-5">SUSTAINABLE PROGRESS</p>
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 leading-tight">
                                Better performance.<br />A cleaner tomorrow.
                            </h2>
                            <p className="text-lg text-[#B1D2BE] mb-10 max-w-md leading-relaxed">
                                Higher retention. Lower waste. More efficient use of resources. Our chemistry helps you do more with less.
                            </p>
                            <Button href="/about" variant="secondary" className="border-white text-white hover:bg-white hover:text-[#0F3020] rounded-full px-7">
                                Our Commitment <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </div>
                        <div className="lg:mt-auto lg:justify-self-end w-full max-w-md">
                            <ul className="space-y-6">
                                {[
                                    { icon: Leaf, text: "Lower fibre loss" },
                                    { icon: Droplet, text: "Reduced water footprint" },
                                    { icon: Settings, text: "Efficient resource use" },
                                    { icon: Search, text: "A cleaner tomorrow" },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-[1.05rem] text-white">
                                        <item.icon className="text-[#8BE1A5]" size={22} strokeWidth={2} /> {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 6 - Our Products */}
            <section className="py-24 bg-[#F8F9FA]">
                <Container>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 border-b border-slate-200 pb-6">
                        <div>
                            <p className="text-[0.7rem] font-bold tracking-[0.15em] text-slate-500 mb-3">OUR PRODUCTS</p>
                            <h2 className="text-3xl sm:text-[2.25rem] font-bold tracking-tight text-[#0B2B45]">Focused chemistry for real results.</h2>
                        </div>
                        <Link href="/products" className="inline-flex items-center text-[0.85rem] font-bold text-[#0B2B45] hover:text-[#2E9FB0] transition-colors pb-2">
                            View All Products <ArrowRight size={16} className="ml-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {products.map((product) => (
                            <Link href={`/products/${product.slug}`} key={product.slug} className="group bg-white flex flex-col rounded-lg overflow-hidden border border-slate-200 transition-all duration-300 hover:border-[#2E9FB0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                                <div className="relative h-32 sm:h-40 w-full overflow-hidden">
                                    <Image 
                                        src={`/images/products/${product.slug}.png`}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4 sm:p-5 flex flex-col flex-1">
                                    <h3 className="text-sm sm:text-[0.95rem] font-bold text-[#0B2B45] uppercase tracking-wide mb-1">{product.name}</h3>
                                    <p className="text-[0.75rem] text-slate-500">{product.category}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Section 7 - Our Programmes */}
            <section className="py-24 bg-white border-t border-slate-100">
                <Container>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 border-b border-slate-200 pb-6">
                        <div>
                            <p className="text-[0.7rem] font-bold tracking-[0.15em] text-slate-500 mb-3">OUR PROGRAMMES</p>
                            <h2 className="text-3xl sm:text-[2.25rem] font-bold tracking-tight text-[#0B2B45]">Structured programmes for real mill outcomes.</h2>
                        </div>
                        <Link href="/programs" className="inline-flex items-center text-[0.85rem] font-bold text-[#0B2B45] hover:text-[#2E9FB0] transition-colors pb-2">
                            View All Programmes <ArrowRight size={16} className="ml-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((program) => (
                            <Link href={`/programs/${program.slug}`} key={program.slug} className="group flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200 transition-all duration-300 hover:border-[#2E9FB0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image 
                                        src={`/images/programs/${program.slug}.png`}
                                        alt={program.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-[#0B2B45] uppercase tracking-wide mb-2">{program.name}</h3>
                                    <p className="text-[0.9rem] leading-relaxed text-slate-600 line-clamp-2">{program.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Section 8 - Closing CTA */}
            <section className="bg-[#F8F9FA] py-24 border-t border-slate-200">
                <Container>
                    <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
                        <div>
                            <p className="text-[0.7rem] font-bold tracking-[0.15em] text-slate-500 mb-5">LET&#39;S SOLVE IT TOGETHER</p>
                            <h2 className="text-4xl font-bold tracking-tight text-[#0B2B45] sm:text-[2.75rem] leading-[1.1]">
                                Have a process challenge?<br />Let&#39;s solve it.
                            </h2>
                        </div>
                        <div className="lg:border-l lg:border-slate-300 lg:pl-16 flex flex-col items-start gap-8">
                            <p className="text-[1.05rem] text-slate-600 leading-relaxed max-w-sm">
                                Tell us what you&#39;re trying to improve. Our technical team is ready to help.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center w-full">
                                <Button href="/contact" className="bg-[#0B2B45] hover:bg-[#0B2B45]/90 text-white rounded-md px-6 py-3 h-auto shrink-0">
                                    Start a Discussion <ArrowRight size={16} className="ml-2" />
                                </Button>
                                <div className="flex flex-col gap-3 text-[0.9rem] font-medium text-[#0B2B45]">
                                    <a href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-[#2E9FB0] transition-colors">
                                        <Phone size={18} className="text-slate-400" /> {company.phones[0]}
                                    </a>
                                    <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-[#2E9FB0] transition-colors">
                                        <Mail size={18} className="text-slate-400" /> {company.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

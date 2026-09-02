import {Metadata} from "next";
import Image from "next/image";
import {Mail, MapPin, Phone} from "lucide-react";
import {Container} from "@/components/Container";
import {ContactForm} from "@/components/ContactForm";
import {company} from "@/data/company";
import {pageMetadata} from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Contact Maven Solutions India", "Contact Maven Solutions for a technical enquiry about pulp and paper process chemicals, retention, drainage, recovery and sizing.", "/contact");
export default function Contact() {
    return <>
        <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#0b2239] py-12 text-white sm:py-16 lg:min-h-[480px] lg:py-20">
            <div className="grid-fade absolute inset-0 opacity-35" />
            <div className="absolute inset-0 w-full overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[60%] z-0">
                <Image src="/images/brand/contact.png" alt="Contact Maven Solutions" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-center lg:object-left" priority />
                <div className="absolute inset-0 bg-[#0b2239]/85 lg:hidden" />
                <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b2239] via-[#0b2239]/40 to-[#0b2239]/10 lg:block" />
            </div>
            <Container className="relative z-10">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="max-w-4xl">
                        <p className="tech-label text-[#b7d7bd]">Technical enquiry</p>
                        <h1 className="mt-4 text-5xl font-bold tracking-[-.065em] sm:text-6xl lg:text-7xl">Bring us the process challenge.</h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                            Tell Maven about your paper grade, system conditions or chemistry requirement. We’ll help direct the conversation to the right technical area.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
        <section className="py-16 sm:py-24"><Container>
            <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
                <aside><p className="eyebrow">Contact details</p><h2
                    className="mt-4 text-3xl font-bold tracking-[-.05em] text-slate-950">Speak with Maven Solutions</h2>
                    <div className="mt-9 space-y-7 text-sm leading-6 text-slate-600">
                        <div className="flex gap-3"><Mail className="shrink-0 text-[#16943e]" size={19}/>
                            <div><p className="font-bold text-slate-900">Email</p><a className="hover:text-[#0753b5]"
                                                                                     href={`mailto:${company.email}`}>{company.email}</a>
                            </div>
                        </div>
                        <div className="flex gap-3"><Phone className="shrink-0 text-[#16943e]" size={19}/>
                            <div><p className="font-bold text-slate-900">Telephone</p><a
                                className="block hover:text-[#0753b5]" href="tel:+918477050005">+91 84770 50005</a></div>
                        </div>
                        <div className="flex gap-3"><MapPin className="shrink-0 text-[#16943e]" size={19}/>
                            <div><p className="font-bold text-slate-900">Head Office</p><p>{company.headOffice}</p><p
                                className="mt-4 font-bold text-slate-900">Marketing Office</p>
                                <p>{company.marketingOffice}</p></div>
                        </div>
                    </div>
                </aside>
                <ContactForm/></div>
        </Container></section>
    </>;
}

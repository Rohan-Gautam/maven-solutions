import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Settings2, Download } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TechnicalGraphic } from "@/components/TechnicalGraphic";
import { getProgram, programs } from "@/data/programs";
import { pageMetadata, siteUrl } from "@/lib/seo";

export function generateStaticParams() { return programs.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { return params.then(({ slug }) => { const program = getProgram(slug); return program ? pageMetadata(`${program.name} Program`, program.description, `/programs/${program.slug}`) : {}; }); }

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const program = getProgram((await params).slug); if (!program) notFound();
  
  const structuredData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Programs", item: `${siteUrl}/programs` }, { "@type": "ListItem", position: 3, name: program.name, item: `${siteUrl}/programs/${program.slug}` }] };
  
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="relative isolate overflow-hidden bg-[#102a43] py-8 text-white sm:py-10 lg:py-12">
      <div className="grid-fade absolute inset-0 opacity-35" />
      <div className="absolute -right-10 top-0 h-full w-[50%] overflow-hidden text-[#1769aa]/30"><TechnicalGraphic variant="dots" className="absolute right-[-4rem] top-1/2 w-[38rem] -translate-y-1/2" /></div>
      <Container className="relative">
        <Breadcrumbs items={[{ label: "Programs", href: "/programs" }, { label: program.name }]} />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="tech-label text-[#9ed7d1]">{program.eyebrow}</p>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h1 className="text-5xl font-bold tracking-[-.06em] sm:text-6xl">{program.name}</h1>
            </div>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{program.label}</p>
          </div>
          <div className="flex gap-4">
            <Button href={program.resource} variant="light">Download PDF <Download size={16} /></Button>
            <Button href="/contact" variant="primary">Technical Enquiry <ArrowRight size={16} /></Button>
          </div>
        </div>
      </Container>
    </section>

    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 xl:grid-cols-[minmax(0,1.15fr)_minmax(25rem,.85fr)] xl:gap-20">
          <div>
            <p className="eyebrow">Program overview</p>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-700 sm:text-2xl sm:leading-10">{program.description}</p>
            
            <div className="mt-14">
              <h3 className="text-2xl font-bold tracking-[-.04em] text-slate-900">The Challenge</h3>
              <p className="mt-4 text-lg text-slate-600">{program.challenge}</p>
            </div>
            
            <div className="mt-14">
              <h3 className="text-2xl font-bold tracking-[-.04em] text-slate-900">Our Approach</h3>
              <ul className="mt-6 space-y-4">
                {program.approach.map((item, i) => (
                  <li key={i} className="flex gap-4 border-t border-slate-200 pt-4 text-base leading-7 text-slate-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1769aa]" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {program.benefits.map((benefit, index) => (
                <article key={benefit} className="border-t-2 border-[#1769aa] bg-[#eef3f5] p-5">
                  <span className="text-xs font-black tracking-[.15em] text-[#102a43]">0{index + 1}</span>
                  <Check className="mt-7 text-[#1769aa]" size={19} />
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-800">{benefit}</p>
                </article>
              ))}
            </div>
          </div>
          
          <aside className="h-fit overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/[.04]">
            <div className="relative overflow-hidden bg-[#102a43] p-7 text-white">
              <TechnicalGraphic variant="crosses" className="absolute -right-20 -top-10 h-52 w-80 text-white/20" />
              <div className="relative">
                <p className="tech-label text-[#9ed7d1]">Technical details</p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-.04em]">Components & Properties</h2>
              </div>
            </div>
            
            {program.components && (
              <dl>
                {program.components.map((component, index) => (
                  <div key={component.name} className="spec-row grid grid-cols-1 gap-1 border-b border-slate-200 px-6 py-5 text-sm last:border-0">
                    <dt className="font-semibold text-slate-500"><span className="mr-2 text-[.65rem] font-black text-[#1769aa]">0{index + 1}</span>{component.name}</dt>
                    <dd className="font-bold leading-6 text-slate-900">Point: {component.point}</dd>
                    <dd className="text-slate-600">Dosage: {component.dosage}</dd>
                  </div>
                ))}
              </dl>
            )}
            
            {program.properties && (
              <dl>
                {program.properties.map((property, index) => (
                  <div key={property.label} className="spec-row grid grid-cols-[minmax(8rem,.8fr)_1.2fr] gap-5 border-b border-slate-200 px-6 py-5 text-sm last:border-0">
                    <dt className="font-semibold text-slate-500"><span className="mr-2 text-[.65rem] font-black text-[#1769aa]">0{index + 1}</span>{property.label}</dt>
                    <dd className="font-bold leading-6 text-slate-900">{property.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            
            {program.applicationMethod && (
              <div className="border-t border-slate-200 bg-[#f8fafb] p-6">
                <h4 className="font-bold text-slate-900 mb-4">Application Method</h4>
                <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2">
                  {program.applicationMethod.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </section>
    
    <section className="technical-surface border-y border-slate-200 py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3"><Settings2 className="text-[#1769aa]" size={22} /><p className="eyebrow">Application pathway</p></div>
            <h2 className="mt-5 text-4xl font-bold tracking-[-.06em] text-slate-950">Targeted application areas.</h2>
            <div className="mt-8 grid gap-3">
              {program.applications.map((application, index) => (
                <div key={application} className="flex items-center gap-5 border border-slate-200 bg-white p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-[#102a43] text-xs font-black text-[#9ed7d1]">0{index + 1}</span>
                  <p className="text-base font-semibold text-slate-800">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  </>;
}

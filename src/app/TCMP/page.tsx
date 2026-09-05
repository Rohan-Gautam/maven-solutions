import { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Total Chemical Management Program", "Complete chemical program management by Maven Solutions, delivering 10% lower cost or 10% better efficiency.", "/TCMP");

const steps = [
  { id: "01", name: "Understand", description: "We study your existing process, chemical consumption, costs, suppliers and performance requirements." },
  { id: "02", name: "Audit", description: "We conduct a detailed chemical program audit to identify inefficiencies, excessive consumption and optimization opportunities." },
  { id: "03", name: "Benchmark", description: "We establish your current baseline—including chemical cost, consumption, dosage and relevant process-performance parameters." },
  { id: "04", name: "Optimize", description: "Our technical team develops and implements the most suitable chemical and application strategy." },
  { id: "05", name: "Measure", description: "We compare the optimized program against the established baseline using agreed performance parameters." },
  { id: "06", name: "Improve", description: "We continuously monitor the program and introduce further improvements wherever opportunities are identified." },
];

const benefits = [
  "Reduced Chemical Costs",
  "Optimized Chemical Consumption",
  "Better Process Efficiency",
  "Fewer Suppliers to Manage",
  "Centralized Technical Support",
  "Improved Chemical Consistency",
  "Continuous Process Optimization",
  "Data-Driven Performance Monitoring",
];

const features = [
  {
    title: "1. Complete Chemical Requirement Management",
    desc: "Maven Solutions can take responsibility for managing your complete range of process chemicals. From individual specialty chemicals to your entire chemical basket, we work towards simplifying procurement and creating a single, technically capable partner for your chemical requirements."
  },
  {
    title: "2. Chemical Program Audit",
    desc: "We evaluate chemical compatibility, quality and consistency, existing suppliers, inventory and logistics, and opportunities for optimization. We focus on cost per unit of production and actual process performance, rather than simply comparing product prices."
  },
  {
    title: "3. Product & Application Optimization",
    desc: "Our approach includes product optimization, dosage reduction, product substitution, and multi-product optimization alongside improved application techniques and new chemical technologies."
  },
  {
    title: "4. Cost Reduction",
    desc: "Where possible, we work towards reducing your total chemical expenditure without compromising product quality or process performance. Target → Minimum 10% reduction in chemical program cost."
  },
  {
    title: "5. Chemical Performance Improvement",
    desc: "In many cases, the bigger opportunity is to obtain better results from the same or lower quantity of chemicals. Target → Minimum 10% improvement in chemical Performance."
  },
  {
    title: "6. Technical Support & Continuous Monitoring",
    desc: "TCMP doesn't end after implementation. We continuously work with your technical and production teams to monitor the chemical program and identify further opportunities."
  },
];

export default function TCMP() {
  return (
    <>
      <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#0b2239] py-12 text-white sm:py-16 lg:min-h-[480px] lg:py-20">
        <div className="grid-fade absolute inset-0 opacity-35" />
        <div className="absolute inset-0 w-full overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[60%] z-0">
          <Image src="/images/brand/tcmp.png" alt="Total Chemical Management Program" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-center lg:object-left" priority />
          <div className="absolute inset-0 bg-[#0b2239]/85 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b2239] via-[#0b2239]/40 to-[#0b2239]/10 lg:block" />
        </div>
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="tech-label text-[#b7d7bd]">TCMP by Maven Solutions</p>
              <h1 className="mt-4 text-5xl font-bold tracking-[-.065em] sm:text-6xl lg:text-7xl">Total Chemical Management Program.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                You focus on production. We take care of the chemicals. Designed to take complete responsibility for your chemical requirements and help you achieve measurable improvement in both cost and chemical efficiency.
              </p>
              <div className="mt-8">
                 <Button href="/contact" variant="primary">Schedule an Audit <ArrowRight size={16} /></Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">About the Program</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-.06em] text-slate-950">10% Lower Chemical Cost OR 10% Better Chemical Performance</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>Managing chemicals is more than buying the right products. It involves supplier selection, product performance, inventory, application, dosage, process compatibility, quality consistency, technical support, and—most importantly—the overall cost of your chemical program.</p>
              <p>With TCMP, Maven Solutions works with you as an extension of your team—not just as another chemical supplier. The goal is not merely to replace chemicals. The goal is to improve the entire chemical program.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f8fc] py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
             <p className="eyebrow">What does TCMP cover?</p>
             <h2 className="mt-3 text-3xl font-bold tracking-[-.05em] text-slate-950 sm:text-4xl">Comprehensive management of your chemical ecosystem.</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {features.map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                   <h3 className="text-xl font-bold tracking-[-.04em] text-slate-900">{feature.title}</h3>
                   <p className="mt-4 text-slate-600 leading-7">{feature.desc}</p>
                </div>
             ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
         <Container>
            <div className="max-w-3xl mb-14">
               <p className="eyebrow">The Process</p>
               <h2 className="mt-3 text-3xl font-bold tracking-[-.05em] text-slate-950 sm:text-4xl">How TCMP Works</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {steps.map((step) => (
                  <div key={step.id} className="relative pl-9">
                     <span className="absolute left-0 top-1 text-sm font-black text-[#16943e] tracking-widest">{step.id}</span>
                     <h3 className="text-xl font-bold text-slate-900">{step.name}</h3>
                     <p className="mt-3 text-slate-600 leading-7">{step.description}</p>
                  </div>
               ))}
            </div>
         </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Why Maven Solutions?</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-.06em] text-slate-950">We don&#39;t just supply chemicals. We manage the program.</h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">
                <p>Traditional chemical procurement often focuses on one question: &#34;What is the price per kilogram?&#34; TCMP asks a much more important question: <strong>&#34;What is the total cost and performance of the chemical program?&#34;</strong></p>
                <p>A product that costs 10% less but requires 20% more dosage is not a saving. Similarly, a product that costs more but significantly improves process efficiency may actually reduce your total operating cost.</p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafb] p-8 shadow-sm sm:p-12">
               <h3 className="text-2xl font-bold tracking-[-.04em] text-[#0753b5]">Our Promise</h3>
               <p className="mt-4 text-slate-600">By consolidating your chemical requirements under Maven Solutions, you can benefit from:</p>
               <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                  <p key={benefit} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                     <Check className="mt-0.5 shrink-0 text-[#16943e]" size={18} />
                     {benefit}
                  </p>
                  ))}
               </div>
               <div className="mt-10 pt-8 border-t border-slate-200">
                  <p className="text-lg font-bold text-slate-900">Your chemicals. Your process. Our responsibility.</p>
               </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

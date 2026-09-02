import { Metadata } from "next";
import Image from "next/image";
import { Check, Compass, Leaf, Users } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("About Maven", "Learn about Maven Solutions, an India-based provider of practical specialty chemical programmes for pulp and paper manufacturing.", "/about");
const values = ["Customised chemistry for every client", "Technically equipped staff for analysing problems", "Strategic planning for undisturbed execution", "Sustainable and cost-effective solutions", "Technically advanced data-tabulation systems", "A wide range of exclusive products"];
export default function About() {
  return (
    <>
      <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#0b2239] py-12 text-white sm:py-16 lg:min-h-[480px] lg:py-20">
        <div className="grid-fade absolute inset-0 opacity-35" />
        <div className="absolute inset-0 w-full overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[60%] z-0">
          <Image src="/images/brand/about.png" alt="About Maven Solutions" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-center lg:object-left" priority />
          <div className="absolute inset-0 bg-[#0b2239]/85 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b2239] via-[#0b2239]/40 to-[#0b2239]/10 lg:block" />
        </div>
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="tech-label text-[#b7d7bd]">About Maven Solutions</p>
              <h1 className="mt-4 text-5xl font-bold tracking-[-.065em] sm:text-6xl lg:text-7xl">Practical chemistry, shaped around the people who use it.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Maven brings together expertise from multiple industries to create innovative, cost-effective and user-friendly technical solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Our perspective</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-.06em] text-slate-950">Solutions work best when they work with the process.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>With more than 25 years of experience cited in its company profile and the mentorship of experienced technical associates, Maven focuses on simplified solutions that make a material difference in the field.</p>
              <p>Our approach is dedicated and transparent: understand the conditions, test thoughtfully and work alongside the customer to propose the combination best suited to the system.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f8fc] py-20 sm:py-28">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 shadow-sm md:grid-cols-3">
            <div className="bg-white p-8 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#f8fbfd]">
              <Compass className="text-[#16943e]" />
              <h2 className="mt-10 text-2xl font-bold tracking-[-.04em]">Vision</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">Provide cost-effective, user-friendly and innovative solutions that are favourable for the environment.</p>
            </div>
            <div className="bg-white p-8 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#f8fbfd]">
              <Users className="text-[#16943e]" />
              <h2 className="mt-10 text-2xl font-bold tracking-[-.04em]">Mission</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">Provide result-oriented, user-friendly technical programmes that are evaluated against achieved results and benefits.</p>
            </div>
            <div className="bg-white p-8 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#f8fbfd]">
              <Leaf className="text-[#16943e]" />
              <h2 className="mt-10 text-2xl font-bold tracking-[-.04em]">Commitment</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">Build long-term, mutually beneficial working relationships while staying ready for tomorrow’s process needs.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <p className="eyebrow">What guides our work</p>
          <div className="mt-7 grid gap-x-5 gap-y-5 md:grid-cols-2">
            {values.map((value) => (
              <p key={value} className="flex items-start gap-3 rounded-md border border-slate-200 bg-white p-5 text-lg font-semibold text-slate-800 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#287d78]/40 hover:shadow-md">
                <Check className="mt-0.5 shrink-0 text-[#16943e]" size={20} />
                {value}
              </p>
            ))}
          </div>
          <div className="mt-16 rounded-lg border-l-4 border-[#16943e] bg-[#061a37] p-8 text-white shadow-sm sm:p-10">
            <p className="text-2xl font-bold tracking-[-.04em]">Chemistry Simplified.</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">A direct, process-aware partnership for pulp and paper production.</p>
            <Button href="/contact" variant="light" className="mt-7">Contact Maven</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

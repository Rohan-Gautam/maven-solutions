import { Metadata } from "next";
import Image from "next/image";
import { Handshake, TrendingUp, FlaskConical, ShieldCheck, Mail, Phone, MapPin, Check } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Become an Authorized Reseller",
  "Partner with Maven Solutions as an authorized reseller of specialty pulp and paper chemicals.",
  "/become-a-reseller"
);

const requirements = [
  "Established network in the pulp and paper industry",
  "Technical sales capabilities",
  "Commitment to sustainable chemistry solutions",
  "Financial stability and growth mindset"
];

export default function BecomeAReseller() {
  return (
    <>
      <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#0b2239] py-12 text-white sm:py-16 lg:min-h-[480px] lg:py-20">
        <div className="grid-fade absolute inset-0 opacity-35" />
        <div className="absolute inset-0 w-full overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[60%] z-0">
          <Image src="/images/brand/reseller.png" alt="Reseller Partnership" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-center lg:object-left" priority />
          <div className="absolute inset-0 bg-[#0b2239]/85 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b2239] via-[#0b2239]/40 to-[#0b2239]/10 lg:block" />
        </div>
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="tech-label text-[#b7d7bd]">Partnership Opportunity</p>
              <h1 className="mt-4 text-5xl font-bold tracking-[-.065em] sm:text-6xl lg:text-7xl">Grow with Maven Solutions.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Join our network of authorized resellers and bring cutting-edge, practical specialty chemistry to pulp and paper manufacturers worldwide.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f8fc] py-20 sm:py-28">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 shadow-sm md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-8 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#f8fbfd]">
              <FlaskConical className="text-[#16943e]" />
              <h2 className="mt-10 text-xl font-bold tracking-[-.04em]">Specialized Portfolio</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">Access our exclusive range of performance-focused paper chemicals, including sizing agents, retention aids, and drainage programs.</p>
            </div>
            <div className="bg-white p-8 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#f8fbfd]">
              <Handshake className="text-[#16943e]" />
              <h2 className="mt-10 text-xl font-bold tracking-[-.04em]">Dedicated Support</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">Benefit from our extensive technical expertise, mentorship, and transparent approach to problem-solving in the field.</p>
            </div>
            <div className="bg-white p-8 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#f8fbfd]">
              <ShieldCheck className="text-[#16943e]" />
              <h2 className="mt-10 text-xl font-bold tracking-[-.04em]">Reliable Supply</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">Count on our consistent manufacturing quality and robust supply chain to meet your customers&apos; critical process demands.</p>
            </div>
            <div className="bg-white p-8 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#f8fbfd]">
              <TrendingUp className="text-[#16943e]" />
              <h2 className="mt-10 text-xl font-bold tracking-[-.04em]">Growth Potential</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">Build a mutually beneficial, long-term working relationship with a recognized leader in the Indian specialty chemicals sector.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Eligibility</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-.06em] text-slate-950">What we look for in a partner.</h2>
              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
                <p>We are seeking motivated and well-connected partners who understand the technical complexities of pulp and paper manufacturing.</p>
                <div className="mt-7 grid gap-y-4">
                  {requirements.map((req) => (
                    <p key={req} className="flex items-start gap-3 rounded-md border border-slate-200 bg-white p-4 text-base font-semibold text-slate-800 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#287d78]/40 hover:shadow-md">
                      <Check className="mt-0.5 shrink-0 text-[#16943e]" size={20} />
                      {req}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <h3 className="text-2xl font-bold tracking-[-.04em] text-slate-900">Application Pathway</h3>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4 border-t border-slate-300/80 pt-5 text-base leading-7 text-slate-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#061a37] text-xs font-black text-[#aeecc0]">01</span>
                  <div>
                    <p className="font-bold text-slate-900">Initial Inquiry</p>
                    <p className="mt-1 text-sm">Submit your details using the partnership form below outlining your current operations.</p>
                  </div>
                </li>
                <li className="flex gap-4 border-t border-slate-300/80 pt-5 text-base leading-7 text-slate-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#061a37] text-xs font-black text-[#aeecc0]">02</span>
                  <div>
                    <p className="font-bold text-slate-900">Evaluation</p>
                    <p className="mt-1 text-sm">Our technical and business team will review your profile to ensure strategic alignment.</p>
                  </div>
                </li>
                <li className="flex gap-4 border-t border-slate-300/80 pt-5 text-base leading-7 text-slate-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#061a37] text-xs font-black text-[#aeecc0]">03</span>
                  <div>
                    <p className="font-bold text-slate-900">Onboarding</p>
                    <p className="mt-1 text-sm">Sign the reseller agreement and begin technical and product training with our specialists.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
            <aside>
              <p className="eyebrow">Apply now</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-.05em] text-slate-950">Start the conversation</h2>
              <div className="mt-9 space-y-7 text-sm leading-6 text-slate-600">
                <div className="flex gap-3">
                  <Mail className="shrink-0 text-[#16943e]" size={19} />
                  <div>
                    <p className="font-bold text-slate-900">Partnership Inquiries</p>
                    <a className="hover:text-[#0753b5]" href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="shrink-0 text-[#16943e]" size={19} />
                  <div>
                    <p className="font-bold text-slate-900">Telephone</p>
                    {company.phones.map(phone => (
                      <a key={phone} className="block hover:text-[#0753b5]" href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="shrink-0 text-[#16943e]" size={19} />
                  <div>
                    <p className="font-bold text-slate-900">Head Office</p>
                    <p>{company.headOffice}</p>
                  </div>
                </div>
              </div>
            </aside>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

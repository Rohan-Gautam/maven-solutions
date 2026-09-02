import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Careers at Maven Solutions",
  "Join Maven Solutions and become part of a dynamic team driven by innovation and excellence in the specialty chemicals industry.",
  "/careers"
);

export default function Careers() {
  return (
    <>
      <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-[#0b2239] py-12 text-white sm:py-16 lg:min-h-[480px] lg:py-20">
        <div className="grid-fade absolute inset-0 opacity-35" />
        <div className="absolute inset-0 w-full overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[60%] z-0">
          <Image src="/images/brand/career.png" alt="Careers at Maven Solutions" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-center lg:object-left" priority />
          <div className="absolute inset-0 bg-[#0b2239]/85 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b2239] via-[#0b2239]/40 to-[#0b2239]/10 lg:block" />
        </div>
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="tech-label text-[#b7d7bd]">Careers</p>
              <h1 className="mt-4 text-5xl font-bold tracking-[-.065em] sm:text-6xl lg:text-7xl">Join Maven Solutions</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Be a part of a dynamic team that is committed to delivering proven chemistry and timely results to our customers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-[-.05em] text-slate-950">Why Join Maven Solutions?</h2>
              <p className="mt-6 text-base leading-7 text-slate-600">
                At Maven Solutions, we believe that our greatest asset is our people. As a leading specialty chemicals manufacturer, we are driven by innovation, excellence, and a shared vision of shaping the future of industrial solutions. Joining Maven means becoming part of a dynamic team that is committed to delivering <strong className="text-slate-900">proven chemistry and timely results</strong> to our customers.
              </p>
            </div>
            
            <div className="rounded-2xl border border-[#0753b5]/10 bg-[#f8fbfd] p-8 sm:p-10">
              <h2 className="text-2xl font-bold tracking-[-.05em] text-slate-950">Here’s Why You Should Be Part of Maven</h2>
              <ul className="mt-8 space-y-6">
                <li>
                  <h3 className="font-bold text-slate-900">Opportunities for Growth</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">We encourage professional development and provide avenues for learning through hands-on experience, mentoring, and industry-leading resources.</p>
                </li>
                <li>
                  <h3 className="font-bold text-slate-900">Innovative Environment</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Be part of a company that values creativity and empowers you to contribute to groundbreaking solutions in the chemical industry.</p>
                </li>
                <li>
                  <h3 className="font-bold text-slate-900">Collaborative Culture</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Work alongside talented professionals in a supportive and inclusive workplace that fosters teamwork and respect.</p>
                </li>
                <li>
                  <h3 className="font-bold text-slate-900">Commitment to Sustainability</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Join us in making a difference by developing eco-friendly solutions that benefit industries and the environment.</p>
                </li>
                <li>
                  <h3 className="font-bold text-slate-900">Recognition and Rewards</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">We value hard work and celebrate achievements with competitive compensation and performance-driven incentives.</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f8fc] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-[-.05em] text-slate-950">Current Job Openings</h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Whether you&#39;re a seasoned professional or just starting your career, Maven Solutions offers an environment where you can grow, thrive, and make a meaningful impact.
            </p>
            
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
              <h3 className="text-xl font-bold text-slate-900">Apply Now</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                If you are interested to apply and join our organisation, feel free to send your resume/cv to:
              </p>
              <a href={`mailto:${company.email}`} className="mt-6 inline-flex items-center justify-center rounded-md bg-[#1769aa] px-6 py-3 text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#102a43] hover:shadow-md">
                {company.email}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

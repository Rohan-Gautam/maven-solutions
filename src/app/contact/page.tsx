import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contact Maven Solutions India",
  "Contact Maven Solutions for a technical enquiry about pulp and paper process chemicals, retention, drainage, recovery and sizing.",
  "/contact"
);

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#F4F6F9] py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:items-start">

          {/* Left — contact info */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[0.7rem] font-bold tracking-[0.15em] text-slate-500 uppercase mb-5">
              We're Here to Help You
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#01172F] sm:text-[2.75rem]">
              <span className="font-extrabold">Discuss</span> Your Chemical
              <br />Solution Needs
            </h1>
            <p className="mt-5 text-sm leading-7 text-slate-500 max-w-sm">
              Are you looking for top-quality chemical solutions tailored to your needs?{" "}
              Reach out to us.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0071E3]/10">
                  <Mail size={20} className="text-[#0071E3]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">E-mail</p>
                  <p className="text-base font-semibold text-[#0071E3] group-hover:underline">
                    {company.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0071E3]/10">
                  <Phone size={20} className="text-[#0071E3]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Phone number</p>
                  <p className="text-base font-semibold text-[#01172F] group-hover:text-[#0071E3] transition-colors">
                    {company.phones[0]}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0071E3]/10">
                  <MapPin size={20} className="text-[#0071E3]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Head Office</p>
                  <p className="text-sm text-[#01172F] leading-6">{company.headOffice}</p>
                  <p className="mt-3 text-xs text-slate-500 font-medium">Marketing Office</p>
                  <p className="text-sm text-[#01172F] leading-6">{company.marketingOffice}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { company } from "@/data/company";

export function ContactForm() {
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim(); const email = String(form.get("email") || "").trim();
    if (!name || !email || !email.includes("@")) { setError("Please enter your name and a valid work email."); return; }
    const lines = ["Technical Enquiry", "", `Name: ${name}`, `Company: ${form.get("company") || "Not provided"}`, `Work email: ${email}`, `Phone: ${form.get("phone") || "Not provided"}`, `Product / solution: ${form.get("interest") || "Not specified"}`, `Requirement: ${form.get("message") || "Not provided"}`];
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Technical enquiry from ${name}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }
  const fields = "mt-2 w-full rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1769aa] focus:ring-2 focus:ring-[#1769aa]/15";
  return <form noValidate onSubmit={submit} className="rounded-lg border border-slate-200 bg-[#f7faff] p-6 shadow-sm sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Name<input name="name" autoComplete="name" className={fields} required /></label><label className="form-label">Company<input name="company" autoComplete="organization" className={fields} /></label><label className="form-label">Work email<input type="email" name="email" autoComplete="email" className={fields} required /></label><label className="form-label">Phone<input name="phone" autoComplete="tel" className={fields} /></label></div><label className="form-label mt-5 block">Product or solution<select name="interest" className={fields}><option value="">Select an area</option><option>Retention & drainage</option><option>Filler retention</option><option>Process water / ETP</option><option>Surface sizing & starch</option><option>Other technical requirement</option></select></label><label className="form-label mt-5 block">Requirement<textarea name="message" rows={5} className={fields} /></label>{error && <p role="alert" className="mt-4 text-sm font-semibold text-red-700">{error}</p>}<button type="submit" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#1769aa] px-5 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-px hover:bg-[#102a43] hover:shadow-md active:translate-y-0 active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287d78]"><Send size={16} />Start technical enquiry</button><p className="mt-3 text-xs leading-5 text-slate-500">Submitting opens your email client with the enquiry prefilled.</p></form>;
}

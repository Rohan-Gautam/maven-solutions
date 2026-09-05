"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    const subject = `Contact Form Enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nIndustry: ${form.get("industry") || "Not specified"}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:Mavensolutions21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  }

  const inputClass =
    "mt-1.5 w-full rounded-lg border border-slate-200 bg-[#F4F6F9] px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0071E3] focus:bg-white focus:ring-2 focus:ring-[#0071E3]/15";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-10 shadow-lg text-center">
        <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
          <ArrowRight className="text-green-600" size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Email client opened!</h3>
        <p className="text-sm text-slate-500">Your message has been pre-filled. Just hit send in your email client.</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-lg sm:p-8">
      <div className="grid gap-5">
        <label className="block">
          <span className="text-sm font-medium text-slate-500">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Jane Smith"
            className={inputClass}
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-500">Email</span>
          <input
            type="email"
            name="email"
            placeholder="jane@company.com"
            className={inputClass}
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-500">Industry</span>
          <select name="industry" className={`${inputClass} cursor-pointer`}>
            <option value="">Select...</option>
            <option value="pulp-paper">Pulp &amp; Paper</option>
            <option value="packaging">Packaging</option>
            <option value="tissue">Tissue</option>
            <option value="board">Board &amp; Carton</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-500">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Type your message"
            className={`${inputClass} resize-none`}
            required
          />
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm font-semibold text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#039AE9] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0280CA] active:scale-[.98]"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
          <ArrowRight size={13} className="text-[#039AE9]" />
        </span>
        Get a Solution
      </button>
    </form>
  );
}

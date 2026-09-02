"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [error, setError] = useState("");
  
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    setError("");
    
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject") || "").trim();
    const description = String(form.get("description") || "").trim();
    
    if (!subject || !description) { 
      setError("Please enter both a Subject and a Description."); 
      return; 
    }
    
    const mailtoLink = `mailto:Mavensolutions21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(description)}`;
    window.location.href = mailtoLink;
  }
  
  const fields = "mt-2 w-full rounded-sm border border-slate-300 bg-white px-3 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1769aa] focus:ring-2 focus:ring-[#1769aa]/15";
  
  return (
    <form noValidate onSubmit={submit} className="rounded-lg border border-slate-200 bg-[#f7faff] p-6 shadow-sm sm:p-8">
      <div className="grid gap-5">
        <label className="form-label block font-semibold text-slate-900">
          Subject
          <input name="subject" className={fields} required placeholder="Enter the subject of your enquiry" />
        </label>
        
        <label className="form-label mt-2 block font-semibold text-slate-900">
          Description
          <textarea name="description" rows={6} className={fields} required placeholder="Please describe your technical requirement or question in detail..." />
        </label>
      </div>
      
      {error && <p role="alert" className="mt-4 text-sm font-semibold text-red-700">{error}</p>}
      
      <button type="submit" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#1769aa] px-5 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-px hover:bg-[#102a43] hover:shadow-md active:translate-y-0 active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287d78]">
        <Send size={16} />
        Start Technical Enquiry
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">Submitting opens your default email client with your message pre-filled.</p>
    </form>
  );
}

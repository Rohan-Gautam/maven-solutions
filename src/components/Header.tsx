"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/company";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !open;

  useEffect(() => {
    let animationFrame = 0;
    const update = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 64);
        animationFrame = 0;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isHome]);

  return (
    <header className={`site-header ${isHome ? "fixed" : "sticky"} top-0 z-50 w-full border-b ${isTransparent ? "border-transparent bg-transparent backdrop-blur-none" : `bg-white/90 backdrop-blur-md ${scrolled ? "is-scrolled" : "border-transparent"}`}`}>
      <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#061a37]/70 via-[#061a37]/35 to-transparent transition-opacity duration-200 ease-out ${isTransparent ? "opacity-100" : "opacity-0"}`} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <div className="relative mx-auto flex h-[76px] max-w-[82rem] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo light={isTransparent} />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 py-2 text-[.97rem] font-semibold transition-colors duration-200 ${active ? (isTransparent ? "border-[#8be1a5] text-white" : "border-[#1769aa] text-[#102a43]") : (isTransparent ? "border-transparent text-white/90 hover:border-white/70 hover:text-white" : "border-transparent text-[#53616e] hover:border-[#287d78]/50 hover:text-[#102a43]")}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className="hidden min-h-11 items-center rounded-md bg-[#1769aa] px-4 text-[.95rem] font-bold text-white shadow-sm transition duration-200 hover:-translate-y-px hover:bg-[#102a43] hover:shadow-md active:translate-y-0 active:scale-[.98] xl:inline-flex">
          Technical Enquiry
        </Link>
        <button type="button" className={`grid h-11 w-11 place-items-center rounded-md transition duration-200 active:scale-[.96] xl:hidden ${isTransparent ? "text-white hover:bg-white/10" : "text-[#17212b] hover:bg-[#eef3f5]"}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="relative border-t border-[#d8e0e5] bg-white/98 px-5 py-5 backdrop-blur xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-[76rem] gap-1">
            {navigation.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`min-h-11 rounded-sm px-2 py-3 text-base font-semibold transition ${active ? "bg-[#eef3f5] text-[#102a43]" : "text-[#17212b] hover:bg-[#f7f6f2]"}`} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-[#1769aa] px-4 font-bold text-white transition active:scale-[.98]" onClick={() => setOpen(false)}>
              Technical Enquiry
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

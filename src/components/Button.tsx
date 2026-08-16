import Link from "next/link";
import type { ReactNode } from "react";

const base = "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold shadow-sm transition duration-200 ease-out hover:-translate-y-px active:translate-y-0 active:scale-[.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287d78]";
export function Button({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string }) {
  const styles = variant === "primary" ? "bg-[#1769aa] text-white hover:bg-[#102a43] hover:shadow-md" : variant === "light" ? "bg-white text-[#1769aa] hover:bg-[#eef3f5] hover:shadow-md" : "border border-[#d8e0e5] text-[#17212b] hover:border-[#1769aa] hover:bg-white hover:text-[#1769aa]";
  return <Link href={href} className={`${base} ${styles} ${className}`}>{children}</Link>;
}

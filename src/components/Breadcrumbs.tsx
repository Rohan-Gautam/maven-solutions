import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) { return <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500">{items.map((item, index) => <span key={item.label} className="flex items-center gap-1.5">{index > 0 && <ChevronRight size={14} aria-hidden="true" />}{item.href ? <Link href={item.href} className="hover:text-[#0753b5]">{item.label}</Link> : <span className="text-slate-700">{item.label}</span>}</span>)}</nav>; }

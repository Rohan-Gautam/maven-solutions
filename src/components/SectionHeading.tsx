import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, copy, action }: { eyebrow?: string; title: ReactNode; copy?: string; action?: ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end"><div className="max-w-3xl">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="mt-3 text-3xl font-bold tracking-[-0.055em] text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{copy}</p>}</div>{action && <div className="md:pb-1">{action}</div>}</div>;
}

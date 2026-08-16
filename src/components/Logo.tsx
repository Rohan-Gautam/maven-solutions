import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Maven Solutions home">
    <span className={`flex h-9 w-9 items-center justify-center rounded-sm text-xl font-black tracking-tighter ${light ? "bg-white text-[#0753b5]" : "bg-[#0753b5] text-white"}`}>M<span className="ml-0.5 text-[#16943e]">.</span></span>
    <span className="leading-none"><span className={`block text-xl font-extrabold tracking-[-0.07em] ${light ? "text-white" : "text-[#0753b5]"}`}>Maven<span className="text-[#16943e]">.</span></span><span className={`mt-1 block text-[0.52rem] font-bold tracking-[0.36em] ${light ? "text-white/75" : "text-slate-500"}`}>SOLUTIONS</span></span>
  </Link>;
}

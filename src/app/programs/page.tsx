import { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProgramCard } from "@/components/ProgramCard";
import { programs } from "@/data/programs";
export const metadata: Metadata = { title: "Technical Programs" };
export default function Programs() { return <><section className="bg-[#061a37] py-20 text-white sm:py-28"><Container><p className="eyebrow text-[#8be1a5]">Technical programmes</p><h1 className="mt-3 max-w-4xl text-5xl font-bold tracking-[-.07em] sm:text-6xl">Engineered programmes for connected process challenges.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Maven’s flagship programmes combine chemistry, application guidance and technical evaluation into a practical operating approach.</p></Container></section><section className="py-20 sm:py-28"><Container><div className="grid gap-5 lg:grid-cols-2"><ProgramCard program={programs[0]} dark /><ProgramCard program={programs[1]} /></div></Container></section></>; }

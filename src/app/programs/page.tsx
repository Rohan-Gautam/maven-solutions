import { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProgramCard } from "@/components/ProgramCard";
import { programs } from "@/data/programs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Technical Programs",
  "Explore Maven Solutions' technical application programs for retention, drainage, and filler efficiency.",
  "/programs"
);

export default function ProgramsPage() {
  return (
    <section className="py-20 sm:py-10">
      <Container>
        <div className="mb-10 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Technical Programs</h1>
          <p className="mt-4 text-lg text-slate-600">Integrated solutions combining chemistry, application expertise, and monitoring to solve complex paper machine challenges.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}

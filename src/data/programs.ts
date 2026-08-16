import type { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "redramax", name: "REDRAMAX", label: "Advance Retention and Drainage Program", eyebrow: "Retention / Drainage / Formation",
    description: "A configurable retention and drainage program for paper makers seeking to balance wet-end retention, drainage and formation.",
    challenge: "Retention, drainage and formation have to be optimised together. Standard retention aids can compromise formation, while drainage aids may do little for retention.",
    approach: ["Disperse and manage fibre, colloidal and nano-particle matter in process water.", "Fix selected material within the fibre network and carry it forward with the paper web.", "Select the programme based on laboratory evaluation and system charge analysis."],
    benefits: ["Designed to support retention, drainage and formation together", "Broader operating window for kraft, writing-printing and specialty paper", "Document cites a minimum 10% better result than regular retention programs, with cost efficiency dependent on machine conditions", "Supports process-water quality and lower ETP load"],
    applications: ["Kraft paper", "Writing-printing paper", "Specialty paper"],
    components: [
      { name: "MS-NEROCOL C", point: "Post screen", dosage: "0.5-1 kg/ton" },
      { name: "MS-BENPRO", point: "Post screen", dosage: "1-3 kg/ton" },
      { name: "PAC / Alum", point: "Thin stock", dosage: "2-3 kg/ton, if needed" },
      { name: "Cationic or anionic polyacrylamide", point: "Post screen", dosage: "0.1-0.2 kg/ton" }
    ],
    resource: "/resources/redramax-program.pdf"
  },
  {
    slug: "fibramax", name: "FIBRAMAX", label: "Advance Filler Retention Program", eyebrow: "Filler retention / Wet-end performance",
    description: "A filler-retention program built around FIBRA, a grafted biopolymer engineered for controlled filler fixation within the fibre network.",
    challenge: "Higher filler loading can create filler loss, lower retention efficiency and unwanted disturbance to fibre-filler interaction.",
    approach: ["Interact with filler particles and the fibre network through a balanced grafted biopolymer structure.", "Form controlled fine agglomerates for incorporation into the fibre structure.", "Maintain the integrity of the fibre-bonding system while improving filler fixation."],
    benefits: ["Supports filler retention and utilisation efficiency", "Helps stabilise filler distribution within the fibre network", "Designed to maintain paper strength, sheet structure and physical characteristics"],
    applications: ["Paper-making wet end", "Near the filler-addition point"],
    properties: [{ label: "Viscosity", value: "Low" }, { label: "pH", value: "7 (+/- 1)" }, { label: "Ash", value: "Not more than 2%" }, { label: "Loss on drying", value: "Not more than 12%" }, { label: "Shelf life", value: "Minimum 12 months in good warehouse conditions" }],
    applicationMethod: ["Prepare a 2% lump-free solution of FIBRA.", "Heat to 45-65 C with suitable agitation.", "Ensure adequate water agitation before adding the product.", "Add prepared solution near the filler-addition point in the wet-end system."],
    resource: "/resources/fibramax-program.pdf"
  }
];

export function getProgram(slug: string) { return programs.find((program) => program.slug === slug); }

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
  },
  {
    slug: "filmax", name: "FILMAX", label: "Filler Technology Program", eyebrow: "Filler technology / 100% Retention",
    description: "FILMAX is a filler technology (cationic talc) designed to provide up to 100% retention of filler. It allows Kraft and Board manufacturers to incorporate up to 3-5% filler successfully without compromising board strength.",
    challenge: "Kraft and board industries are facing increased competitions for fibre sources which has resulted in higher raw material cost. However use of fillers has been limited due to negative impact on strength and poor retention.",
    approach: ["Utilize FILMAX, a cationic talc with hydrophobic and hydrophilic properties.", "Hydrophobic surface sticks to the system and reduces tackiness.", "Achieve up to 100% filler retention and higher ash content."],
    benefits: ["Up to 100% filler retention", "Improves machine run-ability by removing stickiness", "Increases final ash in paper", "Cost competitive mineral filler supplements raw material"],
    applications: ["Kraft and board industries", "Refining Chest / Mixing chest / Machine chest"],
    properties: [{label: "Appearance", value: "Yellowish to Brown Free Flow Powder"}, {label: "Ionic charge", value: "Cationic"}, {label: "pH", value: "Alkaline"}, {label: "Moisture", value: ">=8%"}, {label: "Shelf life", value: "12 Months"}],
    applicationMethod: ["Preparation tank of 3-5 m3 capacity with adequate agitator for preparing FILMAX Filler slurry", "Service tank of 3-5 m3 capacity with adequate agitator along with dosing pump having capacity of 1000 - 2000LPH"],
    resource: "/resources/filmax.pdf",
    videos: [
      { title: "Preparation", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?vq=hd1080" },
      { title: "Running Program", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?vq=hd1080" }
    ]
  },
  {
    slug: "filmax-plus", name: "FILMAX PLUS+", label: "Novel Filler Technology Program", eyebrow: "Filler technology / Up to 100% Retention",
    description: "FILMAX PLUS+ is a novel concept of filler technology that provides up to 100% filler retention while maintaining the strength properties of paper. It eliminates adverse effects of using standard paper fillers for Kraft and food grade packaging papers.",
    challenge: "Use of fillers in board and packaging grades has been limited due to negative impact on paper board strength and poor filler retention.",
    approach: ["Utilize FILMAX PLUS+, which has both hydrophobic and hydrophilic properties.", "Reduce tackiness from the system using the hydrophobic surface of FILMAX PLUS+.", "Use a specialized filler program containing FILMAX FILLER + MS-BINDMAX."],
    benefits: ["Maintain paper strength while incorporating up to 5% filler", "Improves machine run-ability by removing stickiness from process water stream", "Improved dewatering process of the paper", "Increase production if machine is limited by fiber or dryer end"],
    applications: ["Kraft and food grade packaging papers", "Refining Chest / Mixing chest / Machine chest"],
    components: [{name: "FILMAX FILLER", point: "Refining chest", dosage: "Desired quantity"}, {name: "MS-BINDMAX", point: "Refining chest", dosage: "2% of FILMAX FILLER"}],
    applicationMethod: ["Dissolve desired quantity of FILMAX PLUS+ (FILMAX FILLER + MS-BINDMAX [2% of FILMAX FILLER]) in fresh or Treated back water.", "Make a lump free solution in an agitated tank.", "Can be used on a dry basis before refining, ensuring proper mixing."],
    resource: "/resources/filmax-plus.pdf"
  }
];

export function getProgram(slug: string) { return programs.find((program) => program.slug === slug); }

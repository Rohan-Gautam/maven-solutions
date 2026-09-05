import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "ms-nerocol-c", code: "MS-NEROCOL C", name: "Nerocol C", category: "Process Water & Fines Control",
    shortDescription: "Polymeric process-water chemistry for fine and colloidal matter control.",
    description: "A novel polymeric formulation designed to control the accumulation of nano-sized and fine particulate matter within paper-making process water. It promotes fixation of these materials onto the fibre network so they can move forward with the paper web.",
    benefits: ["Supports progressive process-water cleaning", "Helps retain fine and colloidal material in the paper web", "Reduces recirculating particulate load"],
    applications: ["Paper-making process", "Mixing chest or machine chest (preferred)"],
    properties: [{ label: "Appearance", value: "White to off-white" }, { label: "Ionic charge", value: "Highly cationic" }, { label: "pH", value: "Acidic" }, { label: "Viscosity", value: "Medium to high" }, { label: "Shelf life", value: "9 months" }],
    handling: ["Store away from direct sunlight.", "Available in 50 kg and 200 kg plastic drums."], relatedProducts: ["ms-rb211", "ms-cra04", "ms-cra-plus"], source: "Maven Solutions - Technical Data Sheets.pdf"
  },
  {
    slug: "ms-nerotreat", code: "MS-NEROTREAT", name: "Nerotreat", category: "Fibre Recovery & ETP",
    shortDescription: "ETP fibre-recovery chemistry for pulp and paper mill wastewater.",
    description: "An ETP fibre-recovery solution designed to improve the recovery of fine fibres, fillers and micro-fibre complexes from pulp and paper mill wastewater. It conditions associated fibre-filler-fine complexes to improve downstream recovery accessibility.",
    benefits: ["Supports fine-fibre and filler recovery", "Helps improve hill-screen recovery", "Supports lower fibre loss and ETP efficiency"],
    applications: ["Pulp and paper mill ETP", "ETP collection tank (preferred)"],
    properties: [{ label: "Appearance", value: "White to off-white" }, { label: "Ionic charge", value: "Anionic" }, { label: "pH", value: "Acidic to 10 (+/- 1)" }, { label: "Viscosity", value: "Medium to high" }, { label: "Odour", value: "Mild pungent" }, { label: "Shelf life", value: "6 months" }],
    handling: ["Store away from direct sunlight.", "Available in 50 kg and 200 kg plastic drums."], relatedProducts: ["ms-cb304", "ms-nerocol-c"], source: "Maven Solutions - Technical Data Sheets.pdf"
  },
  {
    slug: "ms-rb211", code: "MS-RB211", name: "RB211", category: "Retention & Drainage",
    shortDescription: "Retention-enhancement chemistry for fines and filler retention.",
    description: "A high-performance retention-enhancement solution designed to improve First Pass Retention (FPR) by 5-8% and optimise retention of fine fibres and fillers within the paper-making process.",
    benefits: ["Documented 5-8% FPR improvement", "Helps reduce solids loss to white water", "Supports cleaner process water"],
    applications: ["Paper-making process", "Mixing chest or machine chest (preferred)"],
    properties: [{ label: "Appearance", value: "White to off-white" }, { label: "Ionic charge", value: "Cationic" }, { label: "pH", value: "Acidic" }, { label: "Viscosity", value: "Medium to high" }, { label: "Shelf life", value: "9 months" }],
    handling: ["Store away from direct sunlight.", "Available in 50 kg and 200 kg plastic drums."], relatedProducts: ["ms-cra04", "ms-cra-plus", "ms-ara08"], source: "Maven Solutions - Technical Data Sheets.pdf"
  },
  {
    slug: "ms-cb304", code: "MS-CB304", name: "CB304", category: "Process Water & Fines Control",
    shortDescription: "Advanced coagulant for mill process-water contaminants.",
    description: "An advanced coagulant engineered for pulp and paper mill applications, designed for efficient removal of suspended solids, colloidal matter, colour and other process contaminants from mill process water.",
    benefits: ["Promotes rapid particle destabilisation", "Supports stronger floc formation", "Helps improve process-water clarity"],
    applications: ["Pulp and paper mill process water", "Mixing chest or machine chest (preferred)"],
    properties: [{ label: "Appearance", value: "White to off-white" }, { label: "Ionic charge", value: "Cationic" }, { label: "pH", value: "Acidic" }, { label: "Viscosity", value: "Medium to high" }, { label: "Shelf life", value: "9 months" }],
    handling: ["Store away from direct sunlight.", "Available in 50 kg and 200 kg plastic drums."], relatedProducts: ["ms-nerotreat", "ms-nerocol-c"], source: "Maven Solutions - Technical Data Sheets.pdf"
  },
  {
    slug: "ms-ssp06", code: "MS-SSP06", name: "SSP06", category: "Surface Sizing & Starch",
    shortDescription: "Surface-sizing chemistry to support strength, sizing and starch efficiency.",
    description: "An advanced surface-sizing chemical engineered to enhance surface strength, sizing performance and starch utilisation. It is designed to work alongside an existing surface-sizing system and can replace a portion of starch on a 1:1 basis, up to 25%.",
    benefits: ["Supports surface strength and sizing performance", "Can reduce conventional starch consumption", "Works alongside the existing surface-sizing system"],
    applications: ["Size press", "Cooking tank at 50-60 C"],
    properties: [{ label: "Appearance", value: "Pale to light green" }, { label: "Ionic charge", value: "Cationic" }, { label: "pH", value: "Acidic" }, { label: "Shelf life", value: "9 months" }],
    handling: ["Store away from direct sunlight and moisture.", "Available in 50 kg bags."], relatedProducts: ["ms-bfmaster09"], source: "Maven Solutions - Technical Data Sheets.pdf"
  },
  {
    slug: "ms-bfmaster09", code: "MS-BFMASTER09", name: "BFMASTER09", category: "Surface Sizing & Starch",
    shortDescription: "Starch-cooking additive for paper strength and starch optimisation.",
    description: "An advanced starch-cooking additive designed to enhance the strength contribution of cooked starch to the paper sheet while optimising conventional starch consumption.",
    benefits: ["Documented potential 1-1.5 BF point improvement when optimised", "Supports the strength contribution of cooked starch", "Can help optimise starch consumption based on process conditions"],
    applications: ["Size press", "Added with starch to the cooking tank before cooking"],
    properties: [{ label: "Appearance", value: "Off-white to white powder" }, { label: "Ionic charge", value: "Anionic" }, { label: "pH", value: "Acidic" }, { label: "Shelf life", value: "9 months" }],
    handling: ["Store away from direct sunlight and moisture.", "Available in 10 kg imported paper bags."], relatedProducts: ["ms-ssp06"], source: "Maven Solutions - Technical Data Sheets.pdf"
  },
  {
    slug: "ms-cra04", code: "MS-CRA04", name: "CRA04", category: "Retention & Drainage",
    shortDescription: "Cationic retention aid for modern paper-making systems.",
    description: "A high-performance cationic retention aid designed to improve retention of fibres, fines and fillers during sheet formation while supporting improved First Pass Retention and cleaner process-water systems.",
    benefits: ["Supports controlled flocculation", "Helps retain fibre and filler", "Supports cleaner process-water systems"],
    applications: ["Paper-making process", "Mixing chest or machine chest (preferred)"],
    properties: [{ label: "Appearance", value: "Free-flowing white powder" }, { label: "Ionic charge", value: "Cationic" }, { label: "pH", value: "Acidic" }, { label: "Shelf life", value: "9 months" }],
    handling: ["Store away from direct sunlight and moisture.", "Available in 25 kg imported paper bags."], relatedProducts: ["ms-cra-plus", "ms-ara08", "ms-rb211"], source: "Maven Solutions - Technical Data Sheets.pdf"
  },
  {
    slug: "ms-cra-plus", code: "MS-CRA PLUS+", name: "CRA PLUS+", category: "Retention & Drainage",
    shortDescription: "High-molecular-weight cationic retention aid for demanding applications.",
    description: "A high-performance cationic retention aid with a high-molecular-weight structure and enhanced activity for demanding paper-making applications. It promotes particle bridging and controlled flocculation for improved retention and First Pass Retention.",
    benefits: ["Enhanced particle-bridging capability", "Supports controlled flocculation", "Designed for higher retention performance at optimised dosage levels"],
    applications: ["Paper-making process", "Mixing chest or machine chest (preferred)"],
    properties: [{ label: "Appearance", value: "Free-flowing white powder" }, { label: "Ionic charge", value: "Highly cationic" }, { label: "pH", value: "Acidic" }, { label: "Shelf life", value: "9 months" }],
    handling: ["Store away from direct sunlight and moisture.", "Available in 25 kg imported paper bags."], relatedProducts: ["ms-cra04", "ms-rb211", "ms-ara08"], source: "Maven Solutions - Technical Data Sheets.pdf"
  },
  {
    slug: "ms-ara08", code: "MS-ARA08", name: "ARA08", category: "Retention & Drainage",
    shortDescription: "Anionic retention aid for retention, drainage and wet-end efficiency.",
    description: "An advanced anionic retention aid developed to improve retention of fine fibres, fillers and colloidal particles while supporting controlled flocculation, drainage and overall wet-end efficiency.",
    benefits: ["Supports fibre, filler and colloidal-particle retention", "Supports controlled flocculation and drainage", "Designed to avoid unnecessarily compromising formation"],
    applications: ["Paper-making process", "Mixing chest or machine chest (preferred)"],
    properties: [{ label: "Appearance", value: "Free-flowing white powder" }, { label: "Ionic charge", value: "Anionic" }, { label: "pH", value: "Acidic" }, { label: "Shelf life", value: "9 months" }],
    handling: ["Store away from direct sunlight and moisture.", "Available in 25 kg imported paper bags."], relatedProducts: ["ms-cra04", "ms-cra-plus", "ms-rb211"], source: "Maven Solutions - Technical Data Sheets.pdf"
  },
  {
    slug: "ms-bentonite", code: "MS-BENTONITE", name: "Bentonite Powder", category: "Retention & Drainage",
    shortDescription: "Instant hydrating extended sodium alumino silicate for sticky and deposit control.",
    description: "It is characterised by high ion-exchange-capacity and extremely high active surface area in aqueous dispersions as a carrier of both negative and positive charge. MS-BENTONITE POWDER has properties for dispersion and absorption of filler/fiber complexes and colloidal particles, contributing to better drainage and acting as an effective additive for sticky and deposit control.",
    benefits: ["Prevents CaCO3 and Mg(OH)2 precipitation by binding free Ca2+ and Mg2+", "Works as a coagulant aid in combination with PAC, alum, or cationic polymers", "Effectively adsorbs stickies, pitch, resins, and anionic trash", "Improves water drainage, leading to higher dewatering efficiency and faster machine speeds"],
    applications: ["Paper making process", "Wet-end system"],
    properties: [{ label: "Appearance", value: "Yellowish to Brown Free Flow Powder" }, { label: "Mesh Passing", value: "150 - 200" }, { label: "Moisture", value: "<= 12%" }, { label: "pH", value: "Alkaline" }],
    handling: ["Store away from moisture and direct sunlight.", "Packed in 25KG bags."], relatedProducts: ["ms-rb211", "ms-cra04", "ms-ara08"], source: "Product Profile for MS - Bentonite Powder.pdf"
  }
];

export const productCategories = [...new Set(products.map((product) => product.category))];

export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }

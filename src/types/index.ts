export type TechnicalProperty = { label: string; value: string };

export type Product = {
  slug: string;
  code: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  applications: string[];
  properties: TechnicalProperty[];
  handling?: string[];
  relatedProducts: string[];
  source: string;
};

export type Program = {
  slug: string;
  name: string;
  label: string;
  eyebrow: string;
  description: string;
  challenge: string;
  approach: string[];
  benefits: string[];
  applications: string[];
  components?: { name: string; point: string; dosage: string }[];
  properties?: TechnicalProperty[];
  applicationMethod?: string[];
  resource: string;
  videos?: { title: string; src: string }[];
};

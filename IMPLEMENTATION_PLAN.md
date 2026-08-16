# Maven Solutions Website Implementation Plan

## Architecture

Next.js App Router with TypeScript and Tailwind CSS. Pages are statically rendered by default; dynamic product and programme pages use `generateStaticParams`. Catalogue data lives in `src/data` and is designed to be moved to a CMS later.

## Page Structure

- **Home:** premium brand hero, solution pathways, programme highlights, approach, featured products and enquiry CTA.
- **About:** company overview, values, industry coverage and commitment.
- **Solutions:** process problem-led routes to the relevant product families.
- **Products:** searchable, client-side filterable catalogue.
- **Product detail:** source-supported overview, benefits, applications, properties and relevant handling information.
- **Programs:** REDRAMAX and FIBRAMAX index and editorial detail pages.
- **Technical resources:** curated links to the supplied public-facing product/program/company documents.
- **Contact:** validated frontend form that opens a prefilled mail client request.

## Reusable Components

`Header`, `Footer`, `Logo`, `Container`, `SectionHeading`, `Button`, `ProductCard`, `ProductCatalog`, `ProgramCard`, `Breadcrumbs`, `CTASection`, `FeatureList`, and `ContactForm`.

## Data Structure

`src/types/index.ts` defines strong `Product`, `Program` and company-information types. `src/data/products.ts`, `programs.ts` and `company.ts` contain content only, allowing a later CMS/DB adapter to target the same shape.

## Responsive Strategy

Mobile-first Tailwind breakpoints with intentional 1-column phone layouts, a 2-column tablet layout, and broader asymmetric grids on desktop. Navigation switches to an accessible menu below the desktop breakpoint. Product filtering works without a server request.

## SEO Strategy

Next Metadata API provides page metadata and dynamic product/program titles. Static `robots.ts` and `sitemap.ts` are included. Semantic regions, logical heading hierarchy, descriptive links and product-route metadata support search visibility.

## Visual System

- Brand blue: Maven-derived deep blue with a green chemistry/leaf accent.
- Supporting colours: navy, slate, off-white, mist grey and light aqua.
- Type: system-first modern sans stack to avoid a runtime font fetch at build; strong display hierarchy and compact technical labels.
- Visual language: paper-fibre linework, controlled particle fields, technical grids and deliberate rectangular surfaces rather than generic rounded-card UI.
- Motion: CSS-only 200-300 ms transitions and hover states, disabled for `prefers-reduced-motion`.

## Implementation Stages

1. Extract and document source facts.
2. Establish content/data types and core layout.
3. Build all static and dynamic routes.
4. Add responsive interaction, metadata, accessibility and resources.
5. Run production build and route checks, then make a visual quality pass.

# Maven Solutions Website

A static-first Next.js catalogue website for Maven Solutions, built from the supplied company, programme and technical-data PDFs.

## Requirements

- Node.js 20+
- npm (or pnpm)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Vercel deployment

Import the `website` directory as the Vercel project root. Vercel will detect Next.js automatically; no server, database, Docker configuration or environment variables are required for this V1.

## Content model

- `src/data/company.ts`: company details and navigation.
- `src/data/products.ts`: documented catalogue products and their technical details.
- `src/data/programs.ts`: flagship technical programmes.
- `src/types/index.ts`: shared data types.

To add a product, add a `Product` record in `src/data/products.ts`. The product route is statically created automatically. Add only source-supported product claims and specifications.

## Images and downloadable resources

Public PDFs live under `public/resources/`. Replace or remove these files if they are not approved for public distribution. This V1 intentionally uses code-native technical graphics rather than unrelated stock photography.

## Remaining TODOs

- Confirm the production domain and update the `base` constant in `src/app/sitemap.ts`.
- Confirm public-distribution approval for every PDF in `public/resources/`.
- Connect the enquiry form to a CRM/form service if email-client handoff is not suitable.
- Add approved case studies, certifications, customer logos and official standalone logo assets when available.

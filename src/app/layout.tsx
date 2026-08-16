import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/data/company";
import { ogImage, siteUrl } from "@/lib/seo";

export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: "Maven Solutions | Pulp & Paper Chemicals India", template: "%s | Maven Solutions" }, description: "Specialty chemical solutions and technical programmes for pulp and paper manufacturing in India.", alternates: { canonical: "/" }, robots: { index: true, follow: true }, openGraph: { title: "Maven Solutions | Pulp & Paper Chemicals India", description: "Specialty chemical solutions and technical programmes for pulp and paper manufacturing in India.", url: "/", siteName: "Maven Solutions", type: "website", images: [{ url: ogImage, width: 1200, height: 630, alt: "Maven Solutions specialty chemical solutions" }] }, twitter: { card: "summary_large_image", title: "Maven Solutions | Pulp & Paper Chemicals India", description: "Specialty chemical solutions and technical programmes for pulp and paper manufacturing in India.", images: [ogImage] } };
export const viewport = { themeColor: "#102a43", colorScheme: "light" };

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: company.name, url: siteUrl, logo: `${siteUrl}${ogImage}`, email: company.email, telephone: company.phones[0], contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: company.email, telephone: company.phones[0], areaServed: "IN", availableLanguage: "en" }] },
    { "@type": "Corporation", "@id": `${siteUrl}/#corporation`, name: company.name, url: siteUrl, email: company.email, telephone: company.phones[0], address: { "@type": "PostalAddress", streetAddress: "UGF, B-304, Chhattarpur, Chhattarpur Extension", addressLocality: "New Delhi", addressRegion: "Delhi", postalCode: "110074", addressCountry: "IN" }, areaServed: "IN" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /><Header /><main id="main">{children}</main><Footer /></body></html>; }

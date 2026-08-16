import type { Metadata } from "next";

export const siteUrl = "https://www.mavensolutions.in";
export const ogImage = "/opengraph-image";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const socialTitle = `${title} | Maven Solutions`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: { title: socialTitle, description, url: path, siteName: "Maven Solutions", type: "website", images: [{ url: ogImage, width: 1200, height: 630, alt: "Maven Solutions specialty chemical solutions" }] },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [ogImage] },
  };
}

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: { default: "Maven Solutions | Chemistry Simplified.", template: "%s | Maven Solutions" }, description: "Specialty chemistry and technical programs for pulp and paper manufacturing.", openGraph: { title: "Maven Solutions | Chemistry Simplified.", description: "Specialty pulp and paper solutions.", type: "website" }, twitter: { card: "summary_large_image" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header /><main id="main">{children}</main><Footer /></body></html>; }

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNICEF | Technical Proposal — Paradigm",
  description: "A technical event proposal for UNICEF at Fairmont Nile City, 9 November 2026.",
  applicationName: "Paradigm Events Management & Consultancy",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

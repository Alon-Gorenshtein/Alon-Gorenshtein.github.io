import type { Metadata } from "next";
import { SITE_URL } from "./lib/identity";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Alon Gorenshtein, MD — Physician-Scientist & AI Engineer",
  description: "Alon Gorenshtein, MD, is a physician-scientist and AI researcher at BIDMC. Explore INSPIRE, LITERAS, clinical AI, neurology and research publications.",
  alternates: { canonical: `${SITE_URL}/` },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Alon Gorenshtein, MD — Physician-Scientist & AI Engineer",
    description: "Clinical AI safety, neurology, and neurotechnology research at BIDMC and Harvard Medical School.",
    type: "website", url: `${SITE_URL}/`, siteName: "Alon Gorenshtein, MD",
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: "Alon Gorenshtein, MD — Physician-scientist and AI engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Alon Gorenshtein, MD — Physician-Scientist & AI Engineer", description: "Clinical AI safety, neurology, and neurotechnology research.", images: [`${SITE_URL}/og.png`] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

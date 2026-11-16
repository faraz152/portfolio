import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { site, profile } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const garamond = EB_Garamond({ subsets: ["latin"], variable: "--font-garamond", display: "swap" });
const apfel = localFont({
  variable: "--font-apfel",
  display: "swap",
  src: [
    { path: "../node_modules/@fontsource/apfel-grotezk/files/apfel-grotezk-latin-400-normal.woff2", weight: "400" },
    { path: "../node_modules/@fontsource/apfel-grotezk/files/apfel-grotezk-latin-700-normal.woff2", weight: "700" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: profile.name, url: site.url }],
  keywords: ["Faraz Ahmed", "Android developer", "Kotlin", "Jetpack Compose", "Next.js", "Full-stack engineer", "Karachi", "Portfolio"],
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
};

// Applies saved theme before first paint so there is no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('fa-theme')||'dark';var p=localStorage.getItem('fa-preset')||'';var c=document.documentElement.classList;if(t==='light')c.remove('dark-mode');else c.add('dark-mode');if(p)document.documentElement.dataset.preset=p;}catch(e){document.documentElement.classList.add('dark-mode')}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.headline,
  url: site.url,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Android", "Kotlin", "Jetpack Compose", "Next.js", "NestJS", "gRPC", "AWS", "MCP"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${garamond.variable} ${apfel.variable} dark-mode`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

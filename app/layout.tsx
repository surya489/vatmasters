import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vatmasters.com"),
  title: "VAT Masters",
  description: "VAT Masters — VAT and tax consulting in the UAE",
  openGraph: {
    title: "VAT Masters",
    description: "VAT Masters — VAT and tax consulting in the UAE",
    url: "https://vatmasters.com",
    siteName: "VAT Masters",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Brygada+1918:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link rel="stylesheet" href="/vatmasters.css" />
        <link rel="stylesheet" href="/site-section-fixes.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

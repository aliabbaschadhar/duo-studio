import type { Metadata, Viewport } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Duo Studio | Digitally Crafted Brand Experiences",
  description:
    "Award-winning creative agency specializing in brand strategy, visual identity, and digital experiences. Born in the DC area — now serving clients worldwide.",
  keywords: [
    "web design",
    "brand strategy",
    "digital agency",
    "creative studio",
    "visual identity",
    "brand experiences",
    "Washington DC",
  ],
  metadataBase: new URL("https://duo.aliabbaschadar.online"),
  openGraph: {
    title: "Duo Studio | Digitally Crafted Brand Experiences",
    description:
      "Award-winning creative agency specializing in brand strategy, visual identity, and digital experiences.",
    siteName: "Duo Studio",
    type: "website",
    url: "https://duo.aliabbaschadar.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duo Studio | Digitally Crafted Brand Experiences",
    description:
      "Award-winning creative agency specializing in brand strategy, visual identity, and digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}

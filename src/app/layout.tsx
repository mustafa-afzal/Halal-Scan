import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HalalCheck — Check ingredients with confidence",
  description:
    "Upload a food label and get a clear halal, haram, or doubtful result with transparent ingredient explanations. Built for Muslims shopping in everyday stores.",
  openGraph: {
    title: "HalalCheck — Check ingredients with confidence",
    description:
      "Upload a food label and get a clear halal, haram, or doubtful result with transparent ingredient explanations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

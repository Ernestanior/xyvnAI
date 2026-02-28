import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/layout/MouseGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: "XYVN - Building the Future with AI",
  description: "AI-powered products crafted with cutting-edge technology. SocialAI, Vita AI, and more innovative solutions.",
  keywords: ["AI", "SaaS", "Machine Learning", "Software Development", "SocialAI", "Vita AI"],
  authors: [{ name: "XYVN" }],
  openGraph: {
    title: "XYVN - Building the Future with AI",
    description: "AI-powered products crafted with cutting-edge technology",
    url: "https://xyvnai.com",
    siteName: "XYVN",
    locale: "en_US",
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
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <MouseGlow />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
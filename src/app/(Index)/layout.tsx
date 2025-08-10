import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import Header2 from "@/components/header-2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josh Kartadiwirja",
  description: "Software Developer based in Paramaribo, Suriname.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon-fav.png" sizes="any" />
      <body className={inter.className}>
        <Header2 />
        {children}
        <Footer />
        <Toaster richColors position="top-right" />
        <Analytics />
      </body>
    </html>
  );
}

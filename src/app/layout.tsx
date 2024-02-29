import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Maren Og Magnus Søker leilighet",
  description:
    "Hallo! Vi er et kjærestepar som ser etter en leilighet i Trondheim vi kan leie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-NNQZJ6MRRG" />
    </html>
  );
}

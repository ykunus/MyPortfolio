import type { Metadata } from "next";
import { Oswald, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const oswald = Oswald({
  subsets: ["latin"], weight: ["400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yunus Kocaman's Portfolio",
  description: "Best portfolio ever :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        className={`${oswald.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

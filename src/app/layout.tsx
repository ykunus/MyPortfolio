import type { Metadata } from "next";
import { Sixtyfour, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const sixtyfour = Sixtyfour({
  subsets: ["latin"], weight: ["400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sixtyfour.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

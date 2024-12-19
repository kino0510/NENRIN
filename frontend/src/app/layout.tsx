import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "../../components/layouts/Footer";
import Heeder from "../../components/layouts/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N E N R I N", //TODO:favicon change
  description: "A platform that connects individuals and organizations, fostering community and purpose after retirement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Heeder />
        <div className="min-h-screen bg-mint">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

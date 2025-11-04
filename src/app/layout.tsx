import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nahead Jokhio | Full Stack & AI Developer",
  description:
    "Portfolio of Nahead Jokhio — Full Stack Developer specializing in Next.js, Node.js, and OpenAI Agents SDK. Building modern, AI-powered web applications using Python, FastAPI, and TypeScript.",
  keywords: [
    "Nahead Jokhio",
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "Node.js",
    "Python",
    "FastAPI",
    "OpenAI",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Pakistan Developer Portfolio",
  ],
  authors: [{ name: "Nahead Jokhio" }],
  openGraph: {
    title: "Nahead Jokhio | Full Stack & AI Developer",
    description:
      "Explore Nahead Jokhio’s portfolio — Full Stack Developer crafting intelligent web applications with Next.js, Node.js, and AI integrations.",
    url: "https://my-personal-porfolio-navy.vercel.app/",
    siteName: "Nahead Jokhio Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nahead Jokhio Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://my-personal-porfolio-navy.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#101820] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

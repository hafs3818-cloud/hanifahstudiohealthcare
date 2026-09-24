import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cedar Health Clinic | Family Doctors in Cedar Grove",
  description:
    "Cedar Health Clinic has cared for families in Cedar Grove for over forty years. Family medicine, pediatrics, cardiology, women's health, mental health, and on site lab services all under one roof.",
  keywords: [
    "family doctor",
    "pediatrician",
    "cardiology",
    "women's health",
    "mental health",
    "walk in clinic",
    "Cedar Grove medical center",
    "primary care",
  ],
  authors: [{ name: "Cedar Health Clinic" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Cedar Health Clinic",
    description:
      "Compassionate family medicine in Cedar Grove. Same week appointments, on site lab, and doctors who know your name.",
    siteName: "Cedar Health Clinic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cedar Health Clinic",
    description:
      "Compassionate family medicine in Cedar Grove. Same week appointments and doctors who know your name.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

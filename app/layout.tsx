import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

import clientPromise from "@/lib/mongodb";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = await clientPromise;
    const db = client.db("doha_popular");
    const settings = await db.collection("settings").findOne({});

    return {
      title: settings?.siteName || "Doha Popular",
      description: settings?.metaDescription || "Doha Popular - Premium Integrated Facility Management, Cleaning, and Manpower Services in Qatar.",
    };
  } catch (error) {
    return {
      title: "Doha Popular",
      description: "Doha Popular - Premium Integrated Facility Management, Cleaning, and Manpower Services in Qatar.",
    };
  }
}

import { SettingsProvider } from "@/components/providers/SettingsProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          jakarta.variable
        )}
      >
        <SettingsProvider>
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
}

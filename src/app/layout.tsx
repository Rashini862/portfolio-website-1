import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rashini Lakshika - UI/UX Designer & Data Analyst",
  description: "Portfolio of Rashini Lakshika - UI/UX Designer and Data Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </ClientBody>
    </html>
  );
}
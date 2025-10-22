import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giugno Distribuciones",
  description: "Distribucion en el gran mendoza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${oswald.variable} antialiased`}
        style={{
          backgroundColor:"var(--background)",
          color:"var(--foreground)"
        }}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

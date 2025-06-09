import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-bungee-outline",
});

export const metadata: Metadata = {
  title: "Refurba",
  description: "Refurbished Electronics Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-outline min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 
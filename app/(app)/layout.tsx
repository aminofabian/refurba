import type { Metadata } from "next";
import { Josefin_Sans, Space_Mono } from 'next/font/google'
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";

const josefin_sans = Josefin_Sans({
  subsets: ['latin'], display: 'swap', weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-josefin-sans'
})

const space_mono = Space_Mono({
  subsets: ['latin'], display: 'swap', weight: ['400', '700'],
  variable: '--font-space-mono'
})

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
      <body className={`${josefin_sans.variable} ${space_mono.variable} min-h-screen`}>
        <TRPCReactProvider>
        {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
} 
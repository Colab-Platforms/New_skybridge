import type { Metadata } from "next";
import { Oswald, TASA_Orbiter, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tasaOrbiter = TASA_Orbiter({
  variable: "--font-tasa-orbiter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Sky Bridge Solutions",
  description: "Connecting Ambition with Innovation - Sky Bridge website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body
        className={`
          ${oswald.variable}
          ${ibmPlexMono.variable}
          ${playfair.variable}
          ${tasaOrbiter.variable}
          min-h-screen
          flex
          flex-col
        `}
      >

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}
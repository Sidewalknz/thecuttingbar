import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "@/component/Footer";
import { Damion, Anaheim } from "next/font/google";

const damion = Damion({
  weight: "400", // Damion only has one style
  subsets: ["latin"],
  display: "swap",
  variable: "--font-damion",
});

const anaheim = Anaheim({
  weight: [
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anaheim",
});

export const metadata: Metadata = {
  title: "The Cutting Bar",
  description:
    "The Cutting Bar — a modern, welcoming salon in Nelson offering expert hairdressing and barbering services for everyone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${anaheim.variable} ${damion.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

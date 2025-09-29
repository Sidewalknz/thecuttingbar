import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../component/Navbar";
import Footer from "@/component/Footer";
import { Sofia, Anaheim } from "next/font/google";

const sub = Sofia({
  weight: "400", 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sub",
});

const title = Anaheim({
  weight: [
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "The Cutting Bar",
  description:
    "The Cutting Bar — a modern, welcoming salon in Nelson offering expert hairdressing and barbering services for everyone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${title.variable} ${sub.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

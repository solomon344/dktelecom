import type { Metadata } from "next";
import { fontHeading, fontDisplay, fontMono, fontSans } from "@/config/fonts";
// import { HeroUIProvider } from "@heroui/react";
import "./globals.css";
import CustomProvider from "./provider";



export const metadata: Metadata = {
  title: "DK Telecom — Your Number One Internet Service Provider",
  description:
    "DK Telecom delivers fast, reliable internet connectivity across Gambia. Starter, Premium, and Superior plans for homes and businesses.",
  icons:{
    icon: "/dk-logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontDisplay.variable} ${fontMono.variable} ${fontSans.variable}`}>
      <body className="antialiased bg-white font-heading text-navy">
       
        <CustomProvider>{children}</CustomProvider>
      
      </body>
    </html>
  );
}

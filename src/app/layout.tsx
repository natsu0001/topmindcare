
import "./globals.css";
import type { Metadata } from "next";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "TopmindCare",
  description: "Your trusted partner in mental wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {children}

       
      </body>
    </html>
  );
}

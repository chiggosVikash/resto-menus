
import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "../globals.css";
import Navbar from "../Component/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Resto-Menus",
  description: "Resto-Menus - Menus for Restaurants",
};

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${philosopher.className} `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

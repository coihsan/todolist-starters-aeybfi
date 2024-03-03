import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todolist App",
  description: "Generated by create Todolist App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex bg-white text-onyx-900 dark:bg-onyx-900 dark:text-onyx-50`}
      >
        <Navbar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        className={`${inter.className} bg-white text-onyx-900 dark:bg-onyx-900 dark:text-onyx-50`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}

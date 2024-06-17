import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Page from "../app/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exam Rush",
  description: "Computer Science Exams preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Page />
      </body>
    </html>
  );
}

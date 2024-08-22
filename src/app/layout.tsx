import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Provider from "@/providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mo Amir - Full Stack Web Developer",
  description:
    "A full stack web developer and Discord bot developer with hands-on experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} no-scrollbar flex flex-col w-full h-screen bg-tertiary-color mx-auto`}
      >
        <Provider>{children}</Provider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

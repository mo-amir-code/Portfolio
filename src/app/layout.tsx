import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MainLayout from "@/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mo Amir - Full Stack Web Developer",
  description: "A full stack web developer and Discord bot developer with hands-on experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} no-scrollbar flex flex-col w-full h-screen bg-black mx-auto`}>
        <Header/>
        <main className='flex-grow h-full w-full' >
          <MainLayout>
            {children}
          </MainLayout>
        </main>
        <Footer/>
      </body>
    </html>
  );
}

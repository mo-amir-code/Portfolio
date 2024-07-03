import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MainLayout from "@/layouts/MainLayout";

export const metadata: Metadata = {
  title: "Mo Amir - Full Stack Web Developer",
  description:
    "A full stack web developer and blockchain DApp developer with hands-on experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-grow w-full">
        <MainLayout>{children}</MainLayout>
      </main>
      <Footer />
    </>
  );
}

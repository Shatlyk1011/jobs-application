import type { Metadata } from "next";

//components
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto box-border max-w-5xl px-12 max-lg:px-8 max-md:px-3">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

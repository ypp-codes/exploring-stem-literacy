import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex flex-col min-h-[100vh]">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}

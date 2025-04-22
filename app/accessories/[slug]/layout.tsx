import NewToolbar from "@/Pages/NewToolbar";
import Footer from "@/Pages/Footer";
import React from "react";

export default function AccessoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NewToolbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

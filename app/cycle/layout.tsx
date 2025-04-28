import Footer from "@/Pages/Footer";
import WebNavbar from "@/Pages/WebNavbar";
import React from "react";

const CycleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WebNavbar />
      {children}
      <Footer />
    </>
  );
};

export default CycleLayout;

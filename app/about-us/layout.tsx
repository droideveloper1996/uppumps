import Footer from "@/Pages/Footer";
import WebNavbar from "@/Pages/WebNavbar";
import React from "react";

const AboutUsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WebNavbar />
      {children}
      <Footer />
    </>
  );
};

export default AboutUsLayout;

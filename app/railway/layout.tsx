// This file should be placed at: app/handpumps/[slug]/layout.tsx

import Footer from "@/Pages/Footer";
import WebNavbar from "@/Pages/WebNavbar";
import React from "react";

const RailwayLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#ebebeb]">
      {/* Optional layout wrappers like header, sidebar can go here */}
      <WebNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default RailwayLayout;

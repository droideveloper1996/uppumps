// This file should be placed at: app/handpumps/[slug]/layout.tsx

import Footer from "@/Pages/Footer";
import WebNavbar from "@/Pages/WebNavbar";
import React from "react";

const HandpumpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen ">
      <WebNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default HandpumpLayout;

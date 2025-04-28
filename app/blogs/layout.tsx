import Footer from "@/Pages/Footer";
import WebNavbar from "@/Pages/WebNavbar";
import React from "react";

const BlogsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WebNavbar />
      {children}
      <Footer />
    </>
  );
};

export default BlogsLayout;

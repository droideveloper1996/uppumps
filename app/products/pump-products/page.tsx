"use client";

import React from "react";
import Toolbar from "@/Pages/ToolBar";
import Footer from "@/Pages/Footer";
import ImageTextLayout from "../ImageTextLayout";
import ProductTables from "../ProductTables";

function PumpProducts() {
  return (
    <section className="w-full bg-white min-h-screen">
      <Toolbar />

      <div className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8">
        <ImageTextLayout />
        <ProductTables />
      </div>

      <Footer />
    </section>
  );
}

export default PumpProducts;

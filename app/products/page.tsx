"use client";

import Footer from "@/Pages/Footer";
import Toolbar from "@/Pages/ToolBar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageTextLayout from "./ImageTextLayout";
import ProductTables from "./ProductTables";
import ProductCategoryCards from "./ProductCategoryCards";

export default function ProductCatalogue() {
  const router = useRouter();

  return (
    <section className="w-full bg-gradient-to-b from-sky-100 via-blue-50 to-white min-h-screen">
      <Toolbar />
      <div className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
            Product Catalogue - U. P. Pumps Pvt. Ltd.
          </h2>
          <p className="text-blue-700 max-w-3xl mx-auto text-sm sm:text-base">
            Explore our high-performance, ISI-marked deepwell hand pumps
            engineered for demanding environments and built to last.
          </p>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        <ProductCategoryCards />
        {/* <ImageCarousel /> */}
        
      </div>
      <Footer />
    </section>
  );
}

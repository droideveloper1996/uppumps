"use client";

import React from "react";
import { motion } from "framer-motion";
import { Raleway, Poppins } from "next/font/google";

// Font imports
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

export default function RailwayOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto text-center my-16 px-4"
    >
      <h3
        className={`text-2xl sm:text-3xl font-bold mb-6 ${raleway.className}`}
        style={{ color: "#2a6e9e" }}
      >
        Railway Product Expertise
      </h3>

      <div
        className={`space-y-4 text-gray-700 text-base sm:text-lg ${poppins.className}`}
      >
        <p>
          At <strong>U. P. Pumps (P) Ltd</strong>, we specialize in the
          manufacturing, trading, and consulting of premium railway products.
          Our expertise spans a diverse range of components, including rail
          wheels, complete shell assemblies, and fully integrated coach systems.
        </p>

        <p>
          Backed by decades of industry experience and a forward-thinking
          approach, we are committed to delivering reliable, high-performance
          solutions to our partners in the railway sector.
        </p>
      </div>
    </motion.div>
  );
}

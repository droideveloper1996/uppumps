"use client";

import React from "react";
import { motion } from "framer-motion";
import { Raleway, Poppins } from "next/font/google";

// Font imports
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

export default function RailwayClients() {
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
        Our Trusted Partners
      </h3>

      <div
        className={`space-y-5 text-gray-700 text-base sm:text-lg ${poppins.className}`}
      >
        <p>We proudly work with India’s leading railway manufacturing units:</p>

        <ul className="list-disc list-inside space-y-2 text-left inline-block">
          <li>Chittaranjan Locomotive Works (CLW)</li>
          <li>Banaras Locomotive Works (BLW)</li>
          <li>Patiala Locomotive Works (PLW)</li>
          <li>Rail Coach Factory (RCF), Kapurthala</li>
          <li>Modern Coach Factory (MCF), Raebareli</li>
          <li>Integral Coach Factory (ICF), Chennai</li>
        </ul>

        <p>
          These collaborations reflect our reputation for quality and
          reliability in the railway sector.
        </p>
      </div>
    </motion.div>
  );
}

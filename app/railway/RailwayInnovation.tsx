"use client";

import React from "react";
import { motion } from "framer-motion";
import { Raleway, Poppins } from "next/font/google";

// Font imports
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

export default function RailwayInnovation() {
  return (
    <>
      {/* Innovation in Motion Section */}
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
          Innovation in Motion
        </h3>

        <p
          className={`text-gray-700 text-base sm:text-lg leading-relaxed ${poppins.className}`}
        >
          We offer robotic platforms and remote/battery-operated equipment
          designed to enhance safety, efficiency, and precision in modern
          railway operations—bringing smart technology to the heart of rail
          infrastructure.
        </p>
      </motion.div>
    </>
  );
}

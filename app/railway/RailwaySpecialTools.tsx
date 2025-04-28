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

      {/* Coach & Locomotive Structures Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl mx-auto text-center my-16 px-4"
      >
        <h3
          className={`text-2xl sm:text-3xl font-bold mb-6 ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          Coach & Locomotive Structures
        </h3>

        <div
          className={`space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed ${poppins.className}`}
        >
          <p>
            We manufacture and consult on structural components for coaches and
            locomotives including roofs, sidewalls, and underframes.
          </p>
          <p>
            These components are built for durability and compliance with high
            safety standards, ensuring long-term performance across all rail
            systems.
          </p>
        </div>
      </motion.div>

      {/* Specialized Coach Components & Locomotive Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-5xl mx-auto text-center my-16 px-4"
      >
        <h3
          className={`text-2xl sm:text-3xl font-bold mb-6 ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          Specialized Coach Components & Locomotive Tools
        </h3>

        <div
          className={`space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed ${poppins.className}`}
        >
          <p>
            We supply high-quality heating elements and wheels for LHB coaches,
            as well as grinders for WAG9 locomotives.
          </p>
          <p>
            Our products are engineered to meet the precise demands of the
            railway industry, ensuring comfort and operational efficiency.
          </p>
        </div>
      </motion.div>
    </>
  );
}

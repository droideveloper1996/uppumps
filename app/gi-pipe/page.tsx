"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Raleway, Poppins } from "next/font/google";

// Fonts
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// Sample Image (Replace with your real image path)
const giPipeImage = "/assets/placeholder_Image.avif";

export default function GiPipesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl sm:text-5xl font-bold text-center mb-4 ${raleway.className}`}
        style={{ color: "#2a6e9e" }}
      >
        GI Pipes
      </motion.h1>

      {/* New Description Below Heading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`text-gray-700 text-center text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12 ${poppins.className}`}
      >
        Our Galvanized Iron (GI) Pipes are manufactured to high tensile strength
        and corrosion-resistance standards, suitable for both domestic and
        industrial use in water and structural applications.
      </motion.p>

      {/* Card with Image + Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row items-center gap-8 p-6 md:p-10"
      >
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden">
          <Image
            src={giPipeImage}
            alt="GI Pipes"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-6 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Why Our Products Stand Out
          </h2>

          <ul
            className={`list-disc list-inside space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed ${poppins.className}`}
          >
            <li>
              All parts manufactured in-house – zero outsourcing means better
              quality control
            </li>
            <li>ISI Certified and ISO 9001:2008 Accredited</li>
            <li>Used extensively in Government and NGO supply chains</li>
            <li>Export-grade quality for international markets</li>
            <li>Custom fabrication available for specialized project needs</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Raleway, Poppins } from "next/font/google";

// Font imports
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// Data
const offers = [
  "1HP (horsepower) Submersible Pumps",
  "5HP (horsepower) Submersible Pumps",
  "Custom Submersible Solutions",
];

const highlights = [
  "Precision-Crafted Components",
  "Energy-Efficient Motor Technology",
  "In-house Testing & Quality Assurance",
  "Bulk Supply for Government & Infrastructure Projects",
];

// Pump Images
const pumpImages = [
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
];

export default function SubmersiblePumpsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`text-4xl sm:text-5xl font-bold text-center ${raleway.className}`}
        style={{ color: "#2a6e9e" }}
      >
        Submersible Pumps / MS Mildsteel
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`text-gray-700 text-center text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ${poppins.className}`}
      >
        At U P Pumps Pvt. Ltd., we proudly manufacture high-performance
        submersible pumps designed for domestic, agricultural, and industrial
        applications, built for durability and efficiency.
      </motion.p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* We Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8"
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            We Offer
          </h2>
          <ul
            className={`list-disc list-inside text-gray-700 ${poppins.className} space-y-2`}
          >
            {offers.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Highlights Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8"
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Highlights
          </h2>
          <ul
            className={`list-disc list-inside text-gray-700 ${poppins.className} space-y-2`}
          >
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {pumpImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={img}
                alt={`Submersible Pump ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

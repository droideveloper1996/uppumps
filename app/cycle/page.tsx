"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Raleway, Poppins } from "next/font/google";

// Fonts
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// Images Array (Replace with your real images)
const cycleImages = [
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
];

export default function CycleManufacturingSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl sm:text-5xl font-bold text-center mb-10 ${raleway.className}`}
        style={{ color: "#2a6e9e" }}
      >
        Cycle Manufacturing
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-gray-700 text-center text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-16 ${poppins.className}`}
      >
        At U P Pumps Pvt. Ltd., we are proud to expand our manufacturing
        capabilities into the production of high-quality bicycles. Backed by
        decades of experience in precision engineering and quality control, our
        bicycles are built with the same durability, reliability, and innovation
        that define our legacy.
      </motion.p>

      {/* Cards for Offerings and Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* We Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-8 text-center border border-gray-200"
        >
          <h2
            className={`text-2xl font-semibold mb-6 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            We Offer
          </h2>
          <ul
            className={`list-disc list-inside text-gray-700 text-left space-y-3 ${poppins.className}`}
          >
            <li>Standard Road Bicycles</li>
            <li>Rural Utility Bicycles</li>
            <li>Heavy-Duty Delivery Cycles</li>
            <li>Cycle Components & Accessories</li>
          </ul>
        </motion.div>

        {/* Highlights Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-8 text-center border border-gray-200"
        >
          <h2
            className={`text-2xl font-semibold mb-6 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Highlights
          </h2>
          <ul
            className={`list-disc list-inside text-gray-700 text-left space-y-3 ${poppins.className}`}
          >
            <li>In-house Fabrication & Assembly</li>
            <li>Custom Design Options Available</li>
            <li>Bulk Supply for Government & NGO Programs</li>
          </ul>
        </motion.div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cycleImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={img}
                alt={`Cycle Image ${i + 1}`}
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

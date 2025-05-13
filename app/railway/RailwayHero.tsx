"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import web_logo from "@/public/assets/logo/U-2.png";
import { Raleway, Poppins } from "next/font/google";

// Fonts
const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

const railwayProducts = [
  {
    name: "Rail Wheel",
    image: "/assets/IndianPagesImage/railway/Rollingstock_axle.jpg",
  },
  {
    name: "Complete Shell Assembly",
    image: "/assets/IndianPagesImage/railway/1product-locomotive-big.jpg",
  },
  {
    name: "Complete Coach",
    image: "/assets/IndianPagesImage/railway/book-well-in-advance.webp",
  },
  {
    name: "Small Track Equipment for Railway",
    image: "/assets/IndianPagesImage/railway/download (1).jpeg",
  },
  {
    name: "Heavy Rail-track Manufacturing and Consulting",
    image: "/assets/IndianPagesImage/railway/download (2).jpeg",
  },
  {
    name: "All Other Small and Heavy Railway Equipment and Vehicles",
    image: "/assets/IndianPagesImage/railway/images (4).jpeg",
  },
  {
    name: "Robotic Platform with Remote and Battery Operated Equipments",
    image: "/assets/IndianPagesImage/railway/u5-1200x800.jpg",
  },
  {
    name: "Roof, Sidewall, Underframe for Coach and Locomotive",
    image: "/assets/IndianPagesImage/railway/336244_1_En_6_Fig15_HTML.png",
  },
  {
    name: "Biomass for All Types of STP Plant",
    image: "/assets/IndianPagesImage/railway/sewage-system-24.jpg",
  },
];

export default function RailwayFullPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-24">
      {/* Hero Section */}
      <div className="text-center">
        <Image
          src={web_logo}
          alt="logo"
          height={100}
          width={100}
          className="mx-auto mb-4 rounded"
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-4xl sm:text-5xl font-bold mb-2 ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          U. P. Pumps Private Limited
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-gray-700 italic text-base sm:text-lg ${poppins.className}`}
        >
          Built to Last. Made to Adapt
        </motion.p>
      </div>

      {/* Overview, Clients, Innovation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3
            className={`text-2xl font-bold mb-4 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Railway Product Expertise
          </h3>
          <p
            className={`text-gray-700 text-base leading-relaxed ${poppins.className}`}
          >
            We specialize in premium railway products including rail wheels,
            coach assemblies, and complete integrated systems.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3
            className={`text-2xl font-bold mb-4 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Our Trusted Partners
          </h3>
          <ul
            className={`text-gray-700 list-disc list-inside space-y-2 text-left ${poppins.className}`}
          >
            <li>CLW</li>
            <li>BLW</li>
            <li>PLW</li>
            <li>RCF, MCF, ICF</li>
          </ul>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3
            className={`text-2xl font-bold mb-4 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Innovation & Excellence
          </h3>
          <p
            className={`text-gray-700 text-base leading-relaxed ${poppins.className}`}
          >
            Robotics, battery-operated tools, coach structures, and specialized
            components drive our rail industry leadership.
          </p>
        </motion.div>
      </div>

      {/* Product Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {railwayProducts.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition group"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h4
                className={`text-lg font-bold mb-2 ${raleway.className}`}
                style={{ color: "#2a6e9e" }}
              >
                {item.name}
              </h4>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

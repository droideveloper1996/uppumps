"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Toolbar from "@/Pages/ToolBar";
import Footer from "@/Pages/Footer";

const offerings = [
  { title: "Rail Wheel", image: "/assets/railway/rail-wheel.png" },
  {
    title: "Complete Shell Assembly",
    image: "/assets/railway/shell-assembly.jpg",
  },
  { title: "Complete Coach", image: "/assets/railway/coach.png" },
  { title: "Small Track Equipment", image: "/assets/railway/small-track.jpg" },
  {
    title: "Rail-track Consulting",
    image: "/assets/railway/track-consulting.jpg",
  },
  {
    title: "Heavy Equipment & Vehicles",
    image: "/assets/railway/heavy-equip.jpg",
  },
  { title: "Robotic Platform", image: "/assets/railway/robotic-platform.jpg" },
  {
    title: "Coach Structure (Roof, Sidewall, Underframe)",
    image: "/assets/railway/coach-structure.jpg",
  },
  { title: "Biomass for STP Plants", image: "/assets/railway/biomass.jpg" },
];

const clients = [
  "Chitranjan Locomotive Works",
  "BLW",
  "PLW",
  "RCF",
  "Modern Coach Factory",
  "Integral Coach Factory",
];

export default function RailwayProducts() {
  return (
    <section className="w-full bg-gradient-to-br from-sky-100 to-blue-50 min-h-screen">
      <Toolbar />

      <div className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12 text-center"
        >
          Railway Products & Capabilities
        </motion.h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition"
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Government Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto text-center border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Government Clients & Affiliations
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-base sm:text-lg mt-4">
            {clients.map((client, i) => (
              <li key={i} className="hover:text-blue-600 transition">
                • {client}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
}

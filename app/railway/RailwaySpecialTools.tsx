"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RailwaySpecialTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto text-left my-16"
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Specialized Coach Components & Locomotive Tools
      </h3>
      <div className="space-y-3 text-slate-700">
        <p>
          We supply high-quality heating elements and wheels for LHB coaches, as
          well as grinders for WAG9 locomotives.
        </p>
        <p>
          Our products are engineered to meet the precise demands of the railway
          industry, ensuring comfort and operational efficiency.
        </p>
      </div>
    </motion.div>
  );
}

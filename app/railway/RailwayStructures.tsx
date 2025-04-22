"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RailwayStructures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto text-left my-16"
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Coach & Locomotive Structures
      </h3>
      <div className="space-y-3 text-slate-700">
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
  );
}

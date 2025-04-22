"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RailwayInnovation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto text-left my-16"
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Innovation in Motion
      </h3>
      <p className="text-slate-700">
        We offer robotic platforms and remote/battery-operated equipment
        designed to enhance safety, efficiency, and precision in modern railway
        operations—bringing smart technology to the heart of rail
        infrastructure.
      </p>
    </motion.div>
  );
}

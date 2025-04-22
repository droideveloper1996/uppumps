"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RailwayClients() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto text-left my-16"
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Our Trusted Partners
      </h3>
      <div className="space-y-3 text-slate-700">
        <p>We proudly work with India’s leading railway manufacturing units:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Chittaranjan Locomotive Works (CLW)</li>
          <li>Banaras Locomotive Works (BLW)</li>
          <li>Patiala Locomotive Works (PLW)</li>
          <li>Rail Coach Factory (RCF), Kapurthala</li>
          <li>Modern Coach Factory (MCF), Raebareli</li>
          <li>Integral Coach Factory (ICF), Chennai</li>
        </ul>
        <p>
          These collaborations reflect our reputation for quality and
          reliability in the railway sector.
        </p>
      </div>
    </motion.div>
  );
}

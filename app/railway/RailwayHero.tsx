"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import web_logo from "@/public/assets/logo/up_pump_logo Background Removed.png";

export default function RailwayHero() {
  return (
    <section className="text-center max-w-7xl mx-auto py-12">
      <div className="flex justify-center mb-4">
        <Image src={web_logo} alt="logo" height={100} width={100} />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-900 mb-2"
      >
        U. P. Pumps Private Limited
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl italic text-slate-700"
      >
        Reliable Hand Pump & Railway Solutions Since 1991
      </motion.h2>
    </section>
  );
}

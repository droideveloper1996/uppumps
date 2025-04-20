"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  { label: "HOME", href: "#" },
  {
    label: "HANDPUMPS",
    dropdown: ["India Mark II", "India Mark III", "Afridev"],
  },
  {
    label: "ACCESSORIES",
    dropdown: ["Connecting Rods", "PVC Tanks", "Valves"],
  },
  {
    label: "SERVICES",
    dropdown: ["Manufacturing", "Consulting", "Repair"],
  },
  { label: "HANDPUMP BLOG", href: "#" },
  { label: "CONTACT US", dropdown: ["Email", "Phone", "Location"] },
];

export default function NewToolbar() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] bg-blac">
        <Image
          src="/assets/handpump-shikrawa-3.jpeg"
          alt="Background"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col pt-20 h-full text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase "
          >
            U. P. Pumps Private Limited
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-medium mt-2 italic"
          >
            Reliable Hand Pump Solutions Since 1991
          </motion.h2>
        </div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <NavBar />
      </div>
    </>
  );
}

// 🔽 Reusable NavBar Component with Arrow Dropdowns
function NavBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <ul className="flex flex-wrap gap-6 justify-center text-sm sm:text-base font-semibold text-gray-80">
        {navItems.map((item, i) =>
          item.dropdown ? (
            <li
              key={i}
              className="relative group cursor-pointer hover:text-blue-600"
            >
              <div className="flex items-center gap-1">
                {item.label}
                <span className="text-xs">▼</span>
              </div>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-2 rounded z-50 min-w-[180px] transition-all">
                <ul className="py-2 px-4 text-sm text-gray-700">
                  {item.dropdown.map((option, idx) => (
                    <li
                      key={idx}
                      className="hover:text-blue-600 py-1 transition"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li
              key={i}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {item.label}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

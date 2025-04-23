"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const navItems = [
  { label: "HOME", href: "/" },
  {
    label: "HANDPUMPS",
    href: "/handpumps",
  },
  {
    label: "RAILWAY",
    href: "/railway",
  },
  {
    label: "ACCESSORIES",
    href: "/accessories",
  },
  {
    label: "SERVICES",
    href: "/services",
  },
  { label: "Achievement", href: "/achievement" },
  {
    label: "CONTACT US",
    href: "/contact",
  },
];

export default function NewToolbar() {
  return (
    <>
      <section className="relative w-full h-[85vh] bg-black">
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
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase"
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

      <div className="sticky top-0 z-50 bg-white shadow">
        <NavBar />
      </div>
    </>
  );
}

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex items-center justify-center">
        <div className="sm:hidden">
          <button onClick={toggleMobile}>
            <MdKeyboardDoubleArrowDown
              className={`${
                mobileOpen ? "rotate-180" : ""
              } duration-200 text-3xl`}
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex flex-wrap gap-6 justify-center text-sm sm:text-base font-semibold text-gray-800">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden mt-4 bg-white rounded-md shadow-md p-4 text-sm font-semibold text-gray-800 space-y-4"
          >
            {navItems.map((item, i) => (
              <li key={i} className="hover:text-blue-600">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

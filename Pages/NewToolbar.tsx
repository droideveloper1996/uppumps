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
    baseHref: "/handpumps",
    dropdown: [
      "India Mark II",
      "India Mark III (VLOM)",
      "India Mark II & III with Force Lift Attachments",
      "Afridev Pumps",
      "Tara Hand Pumps",
    ],
  },
  {
    label: "RAILWAY",
    baseHref: "/railway",
    dropdown: [
      "Rail Wheel",
      "Complete Shell Assembly",
      "Complete Coach",
      "Small Track equipment for Railway",
      "Heavy Rail-track manufacturing and consulting",
      "All other Small and heavy Railway Equipment and vehicles",
      "Dealing in Robotic Platform with remote and battery operated equipments",
      "Roof, sidewall, underframe, for coach and locomotive",
      "Biomass for all types of STP Plant",
    ],
  },
  {
    label: "ACCESSORIES",
    baseHref: "/accessories",
    dropdown: [
      "Connecting Rods",
      "Valves",
      "Riser Pipes",
      "Plungers",
      "Cylinders",
      "Foot Valves",
      "Head Assemblies",
      "Chain & Handle Sets",
      "PVC Water Tanks (optional inclusion if applicable)",
    ],
  },
  {
    label: "SERVICES",
    baseHref: "/services",
    dropdown: ["Manufacturing", "Consulting", "Repair"],
  },
  { label: "HANDPUMP BLOG", href: "/blog" },
  {
    label: "CONTACT US",
    baseHref: "/contact",
    dropdown: ["Email", "Phone", "Location"],
  },
];

export default function NewToolbar() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Sticky Nav */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <NavBar />
      </div>
    </>
  );
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[\(\)]+/g, "")
    .replace(/&/g, "and")
    .replace(/[^\w\-]+/g, "");
}

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex items-center justify-center">
        {/* Mobile Toggle */}
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
          {navItems.map((item, i) =>
            item.dropdown ? (
              <li
                key={i}
                className="relative group cursor-pointer hover:text-blue-600"
              >
                <div className="flex items-center gap-1">
                  {item.label} <FaChevronDown className="text-xs mt-1" />
                </div>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded z-50 min-w-[200px]">
                  <ul className="py-3 px-2 text-sm text-gray-700">
                    {item.dropdown.map((option, idx) => (
                      <li
                        key={idx}
                        className="hover:text-blue-600 py-2 px-2 transition hover:bg-sky-100/60"
                      >
                        <Link
                          href={`${item.baseHref || ""}/${slugify(option)}`}
                          className="block w-full"
                        >
                          {option}
                        </Link>
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
                <Link href={item.href}>{item.label}</Link>
              </li>
            )
          )}
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
            {navItems.map((item, i) =>
              item.dropdown ? (
                <li key={i}>
                  <details>
                    <summary className="cursor-pointer hover:text-blue-600 flex justify-between items-center">
                      {item.label} <FaChevronDown className="text-xs" />
                    </summary>
                    <ul className="ml-4 mt-2 space-y-1 text-gray-600">
                      {item.dropdown.map((option, idx) => (
                        <li key={idx} className="hover:text-blue-600">
                          <Link
                            href={`${item.baseHref || ""}/${slugify(option)}`}
                          >
                            {option}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={i} className="hover:text-blue-600">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

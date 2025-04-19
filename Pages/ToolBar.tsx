"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomBtn from "./CustomBtn";

const navItems = ["Home", "About", "Features", "Services", "Contact"];

export default function ILandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-4 px-6 md:px-10 flex justify-center bg-transparent fixed top-0 z-50"
    >
      <div className="max-w-7xl w-full relative">
        <div className="w-full bg-white/70 backdrop-blur-md rounded-full shadow-md px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-semibold text-gray-800">Up Pump</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-900">
            {navItems.map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === href;

              return (
                <li key={item} className="relative group">
                  <Link
                    href={href}
                    className={`transition-colors ${
                      isActive
                        ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CustomBtn text="Get Started" href="/get-started" />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800">
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white rounded-xl shadow-md mt-3 px-6 py-4 w-full"
          >
            {navItems.map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === href;

              return (
                <li key={item} className="py-2 border-b last:border-none">
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-medium transition ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}

            <div className="mt-4">
              <CustomBtn text="Get Started" href="/get-started" />
            </div>
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Raleway, Poppins } from "next/font/google";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo_image from "../public/assets/logo/U-2.png";

// Fonts
const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

// Menu Config
const menuItems = [
  { label: "Home", href: "/" },
  { label: "Handpumps", href: "/handpumps" },
  { label: "Railway", href: "/railway" },
  { label: "Submersible Pumps", href: "/submersible-pumps" },
  { label: "GI Pipe", href: "/gi-pipe" },
  { label: "Cycle", href: "/cycle" },
  { label: "Achievement", href: "/achievement" },
  { label: "About Us", href: "/about-us" },
  { label: "Quality Management", href: "/quality-management" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function WebNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="w-full shadow bg-[#EBEBEB] sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div
            onClick={() => navigateTo("/")}
            className={`flex items-center space-x-3 cursor-pointer ${raleway.className}`}
          >
            <Image
              src={logo_image}
              alt="logo"
              className="w-[3rem] h-[3rem] rounded-sm object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-[#2a6e9e]">
              U. P. Pumps Pvt. Ltd.
            </span>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(true)}>
              <HiOutlineMenuAlt3 size={28} className="text-[#2a6e9e]" />
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:block border-t border-gray-300">
          <div
            className={`flex gap-6 justify-center py-3 max-w-7xl mx-auto text-sm sm:text-base font-medium ${poppins.className}`}
          >
            {menuItems.map(({ label, href }, i) => (
              <span
                key={i}
                onClick={() => navigateTo(href)}
                className={`relative cursor-pointer transition group ${
                  pathname === href ? "text-[#2a6e9e]" : "text-gray-600"
                }`}
              >
                {label}
                <span
                  className={`block h-0.5 mt-1 rounded-full transition-transform duration-300 origin-left ${
                    pathname === href
                      ? "bg-[#2a6e9e] scale-x-100"
                      : "bg-[#2a6e9e] scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 p-6 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-6">
                <span
                  className={`text-lg font-bold text-[#2a6e9e] ${raleway.className}`}
                >
                  Menu
                </span>
                <button onClick={() => setIsOpen(false)}>
                  <HiOutlineX size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Drawer Items */}
              <div className={`flex flex-col space-y-4 ${poppins.className}`}>
                {menuItems.map(({ label, href }, i) => (
                  <span
                    key={i}
                    onClick={() => navigateTo(href)}
                    className={`cursor-pointer text-base transition ${
                      pathname === href ? "text-[#2a6e9e]" : "text-gray-800"
                    } hover:text-[#2a6e9e]`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

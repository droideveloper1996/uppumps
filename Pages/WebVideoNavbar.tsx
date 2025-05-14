"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Raleway, Poppins } from "next/font/google";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo_image from "../public/assets/logo/U-2.png";

// Fonts
const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

// Menu Items
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
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

// Carousel messages (multi-line)
const carouselMessages = [
  {
    title: "Delivering Quality Since 1995",
    subtitle: "Trusted by Indian Railways and millions of customers.",
  },
  {
    title: "Built to Last. Made to Adapt.",
    subtitle: "Handpumps, Submersibles, and more with unmatched durability.",
  },
  {
    title: "Serving Across India with Pride",
    subtitle: "Infrastructure that empowers rural and urban communities.",
  },
  {
    title: "U. P. Pumps Private Limited",
    subtitle: "Crafting solutions with performance and precision.",
  },
];

export default function WebVideoNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/video/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* 🧭 Navigation */}
      <nav className="w-full sticky top-0 z-30">
        <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
          <div
            onClick={() => navigateTo("/")}
            className={`flex items-center space-x-3 cursor-pointer ${raleway.className}`}
          >
            <Image
              src={logo_image}
              alt="logo"
              className="w-[3rem] h-[3rem] rounded-sm object-contain"
            />
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl sm:text-2xl font-extrabold text-white">
                U. P. Pumps Pvt. Ltd.
              </span>
              <span className="text-sm font-semibold text-white -translate-y-1">
                Built to Last. Made to Adapt
              </span>
            </div>
          </div>
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(true)}>
              <HiOutlineMenuAlt3 size={28} className="text-white" />
            </button>
          </div>
        </div>

        <div className="hidden sm:block border-y border-gray-300 bg-white/10 backdrop-blur-md">
          <div
            className={`flex gap-6 justify-center py-3 max-w-7xl mx-auto text-sm font-medium ${poppins.className}`}
          >
            {menuItems.map(({ label, href }, i) => (
              <span
                key={i}
                onClick={() => navigateTo(href)}
                className={`relative cursor-pointer transition group ${
                  pathname === href ? "text-white" : "text-gray-300"
                }`}
              >
                {label}
                <span
                  className={`block h-0.5 mt-1 rounded-full transition-transform duration-300 origin-left ${
                    pathname === href
                      ? "bg-white scale-x-100"
                      : "bg-white scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* 🌟 Center Carousel */}
      <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-2xl md:text-5xl font-extrabold text-white ${raleway.className}`}
            >
              {carouselMessages[currentIndex].title}
            </h2>
            <p
              className={`mt-4 text-base md:text-xl text-gray-200 ${poppins.className}`}
            >
              {carouselMessages[currentIndex].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* 🔘 Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {carouselMessages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === currentIndex ? "bg-white scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 📱 Mobile Drawer */}
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
    </div>
  );
}

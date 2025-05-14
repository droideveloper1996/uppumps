"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomBtn from "./CustomBtn";
import { IoIosCloseCircle } from "react-icons/io";

const navItems = [
  "Home",
  "About",
  "Products",
  "Features",
  "Services",
  "Contact",
];

export default function VideoToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const heroRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock scroll when menu is open
  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "";
  //   return () => (document.body.style.overflow = "");
  // }, [isOpen]);

  // Scroll animations
  const { scrollY } = useScroll({ target: heroRef });
  const yVideo = useTransform(scrollY, [0, 300], [0, 50]);
  const yOverlay = useTransform(scrollY, [0, 300], [0, 30]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.6]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textColor = useTransform(scrollY, [0, 900], ["#ffffff", "#0a0a0a"]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        style={{ y: yVideo }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/video/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* 💎 Overlay */}
      <motion.div
        style={{ y: yOverlay }}
        className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"
      />

      {/* 🧭 Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full px-6 md:px-10 flex justify-center fixed top-0 z-50 py-5"
      >
        <div className="max-w-7xl w-full relative">
          <div className="w-full bg-white/20 backdrop-blur-lg rounded-full shadow-md px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              style={{ color: textColor }}
              className="text-2xl font-bold !text-sky-500"
            >
              UP PUMP
            </motion.div>

            {/* Desktop Nav */}
            <motion.ul
              style={{ color: textColor }}
              className="hidden md:flex items-center gap-8 font-medium"
            >
              {navItems.map((item) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive = pathname === href;

                return (
                  <li key={item} className="relative group">
                    <Link
                      href={href}
                      className={`transition-colors ${
                        isActive
                          ? "border-b-2 border-teal-300 pb-1"
                          : "hover:text-teal-400"
                      }`}
                      style={{
                        color: isActive ? "var(--tw-text-opacity)" : "inherit",
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>

            {/* CTA Button */}
            <div className="hidden md:block">
              <CustomBtn text="Get Started" href="/get-started" />
            </div>

            {/* Mobile Toggle */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden"
              style={{ color: textColor }}
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* 📱 Fullscreen Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-[100] flex flex-col justify-center items-center space-y-6 text-center px-6"
        >
          <IoIosCloseCircle
            className=" absolute top-5 right-5 size-10 text-gray-500 "
            onClick={() => setIsOpen(false)}
          />
          <ul className="text-xl font-semibold text-slate-800 w-full">
            {navItems.map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === href;

              return (
                <li key={item} className="py-4 border-b border-slate-200">
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block transition ${
                      isActive ? "text-blue-600" : "hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          <CustomBtn text="Get Started" href="/get-started" />
        </motion.div>
      )}

      {/* 🎯 Hero Heading */}
      {!isOpen && (
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-20"
        >
          <motion.h1
            style={{ scale, opacity, color: textColor }}
            className="text-2xl md:text-5xl font-bold mb-4 flex flex-col"
          >
            Welcome to{" "}
            <motion.span
              style={{ color: textColor }}
              className="inline-block origin-center !text-sky-300 text-5xl md:!text-[7rem] font-extrabold mt-3"
            >
              UP PUMPS
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ color: textColor }}
            className="text-lg md:text-xl max-w-xl mx-auto"
          >
            {/* Optional description */}
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../public/assets/Slider/images (1).jpeg";
import img2 from "../public/assets/Slider/images (2).jpeg";
import img3 from "../public/assets/Slider/images (3).jpeg";
import Image from "next/image";

const slides = [
  {
    image: img1,
    title: "Precision Engineering",
    subtitle: "Crafted for Performance and Durability",
  },
  {
    image: img2,
    title: "Innovative Design",
    subtitle: "Modern Solutions for Complex Challenges",
  },
  {
    image: img3,
    title: "Trusted by Industry",
    subtitle: "Built to Withstand Real-World Demands",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  const evenAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  const oddAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  const currentAnimation = current % 2 === 0 ? evenAnimation : oddAnimation;

  return (
    <div className="w-full  relative overflow-hidden  shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={1}
          {...currentAnimation}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold drop-shadow-md"
            >
              {slides[current].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg mt-2 drop-shadow-sm"
            >
              {slides[current].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <div
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer bg-white/60 p-2 rounded-full hover:bg-white/90"
        onClick={prevSlide}
      >
        <FaChevronLeft size={20} />
      </div>
      <div
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer bg-white/60 p-2 rounded-full hover:bg-white/90"
        onClick={nextSlide}
      >
        <FaChevronRight size={20} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

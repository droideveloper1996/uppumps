"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

// ✅ Import local images correctly
import img1 from "../../public/assets/ProductImage/image.png";
import img2 from "../../public/assets/ProductImage/image.png"; // you can change to other image later

const slides = [
  {
    url: img1,
    caption: "Engineered for Durability",
  },
  {
    url: img2,
    caption: "Trusted Across Rural India",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].caption}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full"
        >
          {/* ✅ Use actual imported image instead of raw string */}
          <Image
            src={slides[current].url}
            alt={slides[current].caption}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-2xl sm:text-4xl font-bold mb-4"
            >
              {slides[current].caption}
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/product-catalogue")}
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-blue-50 transition"
            >
              Know More
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
      >
        ▶
      </button>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Raleway, Poppins } from "next/font/google";

// Fonts
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// Images Array
const galleryImages = [
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.53.46 (1).jpeg",
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.53.46 (2).jpeg",
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.53.46 (3).jpeg",
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.53.46 (4).jpeg",
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.53.46 (5).jpeg",
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.53.46.jpeg",
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.54.28 (1).jpeg",
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.54.28 (2).jpeg",
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.54.28.jpeg",
  "/assets/gallery/WhatsApp Image 2025-04-29 at 15.54.28 (3).jpeg",
];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl sm:text-5xl font-bold text-center mb-5 ${raleway.className}`}
        style={{ color: "#2a6e9e" }}
      >
        Our Gallery
      </motion.h1>

      <motion.div
        className="w-24 h-1 bg-[#2a6e9e] mx-auto rounded-full mb-20"
        animate={{ scaleX: [1, 1.5, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ originX: 0.5 }}
      />

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ rotate: -10, opacity: 0, scale: 0.8 }}
            whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-64 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition group cursor-pointer"
            onClick={() => setSelectedImg(img)}
          >
            <Image
              src={img}
              alt={`Gallery ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Popup */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] "
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative w-[90%] md:w-[70%] h-[80%]">
              <Image
                src={selectedImg}
                alt="Selected"
                fill
                className="object-contain rounded-xl"
              />
              <button
                className="absolute -top-5 -right-5 bg-white text-black rounded-full px-2 text-xl font-bold"
                onClick={() => setSelectedImg(null)}
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

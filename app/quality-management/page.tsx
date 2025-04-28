"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Raleway, Poppins } from "next/font/google";
import { useEffect, useState } from "react";

// Fonts
const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// Images Array (✅ Add your actual images here)
const qualityImages = [
  "/assets/quality/image1.jpg",
  "/assets/quality/image2.jpg",
  "/assets/quality/image3.jpg",
  "/assets/quality/image4.jpg",
];

const certificates = [
  {
    title: "Environmental Certifications",
    description:
      "Certified for air, water, and fire pollution control, ensuring environmental compliance at every stage.",
    image: "/assets/Certificates/Screenshot 2025-04-26 at 09.42.33.png",
  },
  {
    title: "ISO 9000 Certified",
    description:
      "ISO 9000 certified for quality management systems, guaranteeing consistency and customer satisfaction.",
    image: "/assets/Certificates/Screenshot 2025-04-26 at 09.37.46.png",
  },
];

export default function QualityManagementSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* ===== Title ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl sm:text-5xl font-bold text-center mb-20 ${raleway.className}`}
        style={{ color: "#2a6e9e" }}
      >
        Quality Management
      </motion.h1>

      {/* ===== Main Flex Content ===== */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
        {/* Left Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <p
            className={`text-gray-700 text-base  leading-relaxed ${poppins.className}`}
          >
            At <b className="text-[#2a6e9e]">U. P. Pumps Pvt. Ltd.</b>, quality
            is not just a process—it's a legacy. From our earliest days, our
            founder Mr. Rewachand instilled an unwavering commitment to
            excellence. A “Rule of Quality” notice penned by him still hangs on
            our factory walls— a timeless reminder to every member of our team
            to uphold the highest standards and to always give their best. This
            enduring principle continues to guide our operations, shaping our
            products and our reputation.
          </p>

          <ul
            className={`list-disc list-inside text-gray-700 text-base sm:text-lg leading-relaxed space-y-3 ${poppins.className}`}
          >
            <li>
              Regular third-party quality inspections by Government authorities
            </li>
            <li>Strict Adherence to ISI and ISO quality standards</li>
            <li>
              Internal audits conducted quarterly to ensure zero-defect delivery
            </li>
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative h-96 rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/assets/placeholder_Image.avif"
            alt="Quality Commitment"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* ===== Certificates Section ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl sm:text-5xl font-bold text-center my-20 ${raleway.className}`}
        style={{ color: "#2a6e9e" }}
      >
        Certifications
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-10">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition w-[350px] flex flex-col "
          >
            {/* Image Top */}
            <div className="relative w-full h-96">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-fit"
              />
            </div>

            {/* Content Bottom */}
            <div className="p-6 flex-1 flex flex-col">
              <h3
                className={`text-xl font-bold mb-3 ${raleway.className}`}
                style={{ color: "#2a6e9e" }}
              >
                {cert.title}
              </h3>
              <p
                className={`text-gray-700 text-sm leading-relaxed ${poppins.className}`}
              >
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

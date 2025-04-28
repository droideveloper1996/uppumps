"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";

const achievements = [
  { image: "/assets/Achievement/WhatsApp Image 2025-04-24 at 18.05.06.jpeg" },
  { image: "/assets/Achievement/WhatsApp Image 2025-04-24 at 18.05.25.jpeg" },
  { image: "/assets/Achievement/WhatsApp Image 2025-04-24 at 18.05.47.jpeg" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 08.06.17.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 08.06.48.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 08.07.24.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.36.34.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.36.53.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.37.24.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.37.46.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.38.06.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.38.29.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.38.49.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.39.15.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.39.59.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.40.22.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.40.42.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.41.02.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.41.25.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.41.42.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.42.01.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.42.33.png" },
];

export default function AchievementsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold  text-center"
          style={{ color: "#2a6e9e" }}
        >
          OUR ACHIEVEMENTS & REWARDS
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-[#2a6e9e] mx-auto my-5 rounded-full"
          animate={{ scaleX: [1, 2.5, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5 }}
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed"
        >
          <p>
            At U P Pumps Pvt. Ltd., every milestone is a reflection of our
            commitment to quality, innovation, and service. Over three decades,
            we’ve grown from a local supplier to a trusted name in hand pump
            manufacturing—serving government bodies, NGOs, and private clients
            across India and beyond.
          </p>

          <h2 className="text-2xl font-bold" style={{ color: "#2a6e9e" }}>
            Over 20,00,000 Hand Pumps Supplied
          </h2>
          <p>
            Since 1991, U P Pumps Pvt. Ltd. has manufactured and delivered over
            twenty lakh hand pumps across India—contributing to reliable water
            access in rural and urban regions alike.
          </p>

          <h2 className="text-2xl font-bold" style={{ color: "#2a6e9e" }}>
            🏅 Achievements & Recognition
          </h2>
          <p>
            Over the decades, U P Pumps Pvt. Ltd. has been recognized for its
            outstanding contribution to industry, innovation, and community
            upliftment. These awards and accolades reflect our unwavering
            commitment to quality, sustainability, and excellence in
            manufacturing.
          </p>

          {/* Awards */}
          <h3 className="text-xl font-semibold text-blue-800">
            National & Government Recognitions
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Rajya Sabha Udyog Puruskar – Honoring industrial excellence.
            </li>
            <li>
              Bhartiya Nirman Gaurav Awards – Celebrating contributions to
              India's development.
            </li>
            <li>
              National Awards to Small Scale Entrepreneurs – Ministry of Small
              Scale Industries.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800">
            State & Sectoral Awards
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Prashasti Patra Pratham Puruskar by Udyog Vibhaag - Uttar Pradesh.
            </li>
            <li>
              Excellence Certificate by The Institute of Economic Studies.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800">
            Certifications & Industry Accreditations
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>ZED Bronze Certificate – MSME Sustainable (ZED) Scheme.</li>
            <li>ISO 9001:2008 Certification – Quality Management Standards.</li>
            <li>ISI Mark Certification – Across multiple hand pump models.</li>
            <li>BIS Licensed Manufacturer for all our products.</li>
          </ul>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="relative cursor-pointer group overflow-hidden rounded-xl shadow hover:shadow-lg bg-white"
              onClick={() => handleImageClick(item.image)}
            >
              <div className="w-full aspect-[4/5] relative">
                <Image
                  src={item.image}
                  alt={`Achievement ${index + 1}`}
                  fill
                  className="object-fit group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Full Image */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Background */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            {/* Image Popup */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div
                className="relative bg-transparent rounded-lg overflow-hidden max-h-[90vh] max-w-6xl w-full flex justify-center items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <IoIosCloseCircle
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white text-4xl cursor-pointer transition-transform hover:rotate-180 hover:scale-110"
                />
                <Image
                  src={selectedImage}
                  alt="Full Achievement"
                  width={1200}
                  height={800}
                  className="object-fit h-[90vh] w-[60%] rounded"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

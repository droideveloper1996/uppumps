"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCog, FaPlay } from "react-icons/fa";
import Image from "next/image";
import { Raleway, Poppins } from "next/font/google";

// Fonts
const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      className={`bg-[#EBEBEB] py-10 overflow-hidden ${poppins.className}`}
    >
      {/* Top Hero Block */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-blue-100 text-[#2a6e9e] px-4 py-2 rounded-full font-medium text-sm mb-4"
          >
            <FaCog className="mr-2" />
            Built to Last. Made to Adapt
          </motion.div>

          <h1
            className={`text-4xl sm:text-5xl font-bold text-[#2a6e9e] leading-tight ${raleway.className}`}
          >
            U. P. Pumps Private Limited
          </h1>

          <p className="text-slate-600 mt-6 text-base leading-relaxed">
            Supplying over <strong>50,000+ hand pumps annually</strong> across
            India and growing globally.
            <br />
            <br />
            <strong className="text-[#2a6e9e]">
              GeM Authorised Manufacturer:
            </strong>
            <br />
            U.P. Pumps is proudly registered and verified as an authorized
            manufacturer on the Government e-Marketplace (GeM), enabling
            seamless procurement by government bodies and public sector
            organizations across India.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative"
        >
          <div className="relative w-fit overflow-hidden rounded-xl">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-white/60 via-transparent to-white/60 blur-3xl" />
            <Image
              src="/assets/HeroSection/georg-eiermann-BW4Fp1_sorw-unsplash copy.jpg"
              alt="Hero Illustration"
              width={600}
              height={400}
              className="object-contain relative z-0 rounded-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] px-4 sm:px-6"
          >
            <div className="relative w-full max-w-5xl">
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="fixed top-5 right-5 bg-white rounded-full px-2 text-gray-800 text-3xl font-bold z-50 cursor-pointer"
              >
                ×
              </button>

              {/* Responsive Video */}
              <div className="aspect-w-16 aspect-h-9 w-full">
                <video
                  src="/assets/video/bg_video.mp4"
                  controls
                  autoPlay
                  className="rounded-xl w-full h-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

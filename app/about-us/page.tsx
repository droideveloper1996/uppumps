"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Raleway, Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Fonts
const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// Images
const aboutImages = [
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
];

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); // ✅ Initialize router

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000); // every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f9ff] pt-28 overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 mb-20">
        {/* Left - Carousel */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg"
        >
          {aboutImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`About Image ${i}`}
              fill
              className={`object-cover transition-all duration-700 ${
                currentIndex === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </motion.div>

        {/* Right - Text Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2
            className={`text-4xl font-bold mb-6 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            About U. P. Pumps Pvt. Ltd.
          </h2>
          <p
            className={`text-slate-600 mb-4 text-base sm:text-sm leading-relaxed ${poppins.className}`}
          >
            Founded in 1991 by Mr. Rewachand Moorjani in Kanpur, U P Pumps Pvt.
            Ltd. started as a small firm with a big mission: to provide
            reliable, high-quality Hand Pumps to communities across India.
          </p>
          <p
            className={`text-slate-600 mb-4 text-base sm:text-sm leading-relaxed ${poppins.className}`}
          >
            Under the leadership of Mr. Harendra Moorjani since 1995, the
            company expanded pan-India with products like India Mark II,
            Afridev, and customized Hand Pumps known for their durability and
            performance. His customer-first vision made U P Pumps a trusted
            national brand.
          </p>
          <p
            className={`text-slate-600 mb-4 text-base sm:text-sm leading-relaxed ${poppins.className}`}
          >
            Today, the company is proudly managed by the second and third
            generations: Mr. Harendra Moorjani, his son Mr. Rajat Moorjani, and
            daughter-in-law Mrs. Vagessha Moorjani — expanding operations into
            B2B manufacturing, international markets, and allied products.
          </p>
          <p
            className={`text-slate-600 text-base sm:text-sm leading-relaxed ${poppins.className}`}
          >
            From one city to many, and one generation to the next, U P Pumps
            Pvt. Ltd. continues to stand for innovation, integrity, and impact.
          </p>
        </motion.div>
      </div>

      {/* Mission / Vision / Values Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {[
          {
            title: "Our Vision",
            content:
              "To drive sustainable growth through quality products and responsible innovation, making a positive impact across global communities.",
          },
          {
            title: "Our Mission",
            content:
              "To manufacture superior hand pumps, GI pipes, bicycles, and railway products that empower everyday life and critical infrastructure.",
          },
          {
            title: "Our Values",
            content:
              "Integrity, Excellence, Innovation, and Customer Centricity guide everything we build and deliver.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3
              className={`text-xl font-bold mb-3 ${raleway.className}`}
              style={{ color: "#2a6e9e" }}
            >
              {item.title}
            </h3>
            <p
              className={`text-slate-600 text-sm leading-relaxed ${poppins.className}`}
            >
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Continuous Sliding Image Gallery */}
      <div className="mt-16 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex gap-6"
        >
          {[...aboutImages, ...aboutImages].map((img, i) => (
            <div
              key={i}
              className="relative min-w-[250px] h-40 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={img}
                alt={`Slide Image ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-20 bg-[#2a6e9e]/70 text-white py-12 px-6 rounded-2xl max-w-5xl mx-auto text-center"
      >
        <h4 className={`text-2xl font-semibold mb-4 ${raleway.className}`}>
          Ready to grow your business with us?
        </h4>
        <p className={`mb-6 ${poppins.className}`}>
          Let’s create something amazing together. Contact our team to get
          started today.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/contact")} //
          className={`bg-white text-[#2a6e9e] font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition ${poppins.className}`}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  );
}

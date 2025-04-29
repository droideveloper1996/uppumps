"use client";

import { motion } from "framer-motion";
import { Raleway, Poppins } from "next/font/google";

// Fonts
const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const certificationContent = [
  {
    title: "🌿 Air, Water & Fire Pollution Certifications",
    description:
      "We operate in strict compliance with environmental standards, maintaining certifications that cover air pollution control, water pollution management, and fire safety protocols. These certifications ensure that our manufacturing processes minimize ecological impact, protect natural resources, and maintain workplace safety for all stakeholders involved.",
  },
  {
    title: "🏆 ISO 9000 Certified – Quality Management Systems",
    description:
      "U. P. Pumps Pvt. Ltd. is proud to be an ISO 9000 Certified company — an internationally recognized standard that guarantees the highest levels of quality management. This certification underlines our structured approach to continuous improvement, customer satisfaction, product consistency, and operational excellence across all projects and product lines.",
  },
  {
    title: "🛡️ 99.99% Zinc Galvanization – SHG (Special High Grade)",
    description:
      "We exclusively use 99.99% pure Special High Grade (SHG) zinc for our galvanization processes. This ensures superior corrosion resistance, maximum durability in extreme conditions, and longer product life cycles. Our SHG-based galvanization meets stringent international benchmarks, offering our clients reliable and maintenance-free solutions for years to come.",
  },
];

export default function QualityManagementSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading with Animated Line */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-4xl sm:text-5xl font-bold ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          Quality Management
        </motion.h1>

        <motion.div
          className="w-24 h-1 bg-[#2a6e9e] mx-auto mt-5 rounded-full"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5 }}
        />
      </div>

      {/* About Quality Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 text-center max-w-4xl mx-auto"
      >
        <p
          className={`text-gray-700 text-base sm:text-lg leading-relaxed ${poppins.className}`}
        >
          🌎 At <b className="text-[#2a6e9e]">U. P. Pumps Pvt. Ltd.</b>, we
          believe that excellence extends beyond manufacturing — it encompasses
          environmental responsibility, quality assurance, and material
          superiority. Our certifications are a testament to our ongoing
          commitment toward safety, sustainability, and world-class
          manufacturing standards.
        </p>
      </motion.div>

      {/* Sexy Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {certificationContent.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-[#2a6e9e]/50 hover:scale-105 transition-transform duration-300 w-[340px] p-8 flex flex-col items-center text-center border border-[#2a6e9e]/30"
          >
            <h3
              className={`text-xl font-bold mb-4 ${raleway.className}`}
              style={{ color: "#2a6e9e" }}
            >
              {item.title}
            </h3>
            <p
              className={`text-gray-600 text-sm leading-relaxed text-justify ${poppins.className}`}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

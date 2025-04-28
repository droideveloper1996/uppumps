"use client";

import { motion } from "framer-motion";
import {
  FaLeaf,
  FaBullseye,
  FaHandsHelping,
  FaCheckCircle,
  FaBriefcase,
  FaShieldAlt,
  FaGlobeAsia,
  FaUsersCog,
  FaWrench,
  FaCertificate,
} from "react-icons/fa";

export default function VisionMissionValues() {
  return (
    <section className=" py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#2a6e9e] mb-4">
          Our Vision & Mission
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          What drives us forward and keeps us rooted in purpose.
        </p>

        {/* Animated underline using Framer Motion */}
        <motion.div
          className="w-24 h-1 bg-[#2a6e9e] mx-auto mt-4 rounded-full"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5 }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-6 shadow-md"
        >
          <FaBullseye size={28} className="text-[#2a6e9e] mb-4" />
          <h3 className="text-2xl font-semibold text-[#2a6e9e] mb-2">
            Our Vision
          </h3>
          <p className=" text-sm text-gray-600">
            To be a globally recognized name in sustainable water solutions and
            precision-engineered metal products—built on a foundation of family,
            integrity, and innovation.
          </p>
        </motion.div>
        

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-6 shadow-md"
        >
          <FaHandsHelping size={28} className="text-[#2a6e9e] mb-4" />
          <h3 className="text-2xl font-semibold text-[#2a6e9e] mb-2">
            Our Mission
          </h3>
          <p className=" text-sm text-gray-600">
            To manufacture and deliver products that meet the highest quality
            standards, empower communities, and support infrastructure needs in
            both urban and rural landscapes—domestically and internationally.
          </p>
        </motion.div>
      
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-3xl font-bold text-center text-[#2a6e9e] mb-6">
          Core Values
        </h3>
        <motion.div
          className="w-24 h-1 bg-[#2a6e9e] mx-auto mb-10 rounded-full"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5 }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              label: "Integrity",
              desc: "We do what we say, and we say what we mean. Trust is the heart of every relationship.",
            },
            {
              label: "Quality",
              desc: "Every product meets the highest industry standards with zero compromise.",
            },
            {
              label: "Innovation",
              desc: "We embrace technology and ideas that push us forward with purpose.",
            },
            {
              label: "Responsibility",
              desc: "We serve our customers, communities, and the environment with intention.",
            },
            {
              label: "Legacy",
              desc: "We honor our heritage while paving a visionary path for future generations.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 group-hover:bg-[#2a6e9e] group-hover:text-white transition">
                <FaCheckCircle
                  className="text-[#2a6e9e] group-hover:text-white"
                  size={22}
                />
              </div>
              <h4 className="text-xl font-semibold text-[#2a6e9e] mb-2">
                {item.label}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 bg-[#2a6e9e]/10 rounded-2xl p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <FaLeaf size={28} className="text-green-700" />
          <h3 className="text-2xl font-bold text-[#2a6e9e]">Sustainability</h3>
          
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Water is life—and so is sustainability. We take pride in manufacturing
          solutions that support access to clean water in underserved areas. Our
          Hand Pumps are designed for long-term durability with minimal
          environmental impact. As we expand into new product lines, we remain
          committed to reducing waste, optimizing resources, and implementing
          eco-conscious practices across every stage of production.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold text-[#2a6e9e] mb-6 text-center">
          Why Choose Us
        </h3>
        <motion.div
          className="w-24 h-1 bg-[#2a6e9e] mx-auto mt-2 mb-10 rounded-full"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5 }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaBriefcase size={28} />,
              title: "Decades of Experience",
              desc: "Established in 1991, we bring over 30 years of industry expertise.",
            },
            {
              icon: <FaCertificate size={28} />,
              title: "Unmatched Quality",
              desc: "From ISI-marked supplies to export-grade products, we never cut corners.",
            },
            {
              icon: <FaGlobeAsia size={28} />,
              title: "Made in India, Trusted Globally",
              desc: "Our products serve clients across India and international markets.",
            },
            {
              icon: <FaUsersCog size={28} />,
              title: "Family-Driven, Customer-Focused",
              desc: "Three generations of leadership ensure a personal and innovative approach.",
            },
            {
              icon: <FaWrench size={28} />,
              title: "Custom Solutions",
              desc: "We collaborate with clients to craft solutions that fit their specific needs.",
            },
            {
              icon: <FaShieldAlt size={28} />,
              title: "GeM Authorized Manufacturer",
              desc: "Officially registered for government procurement on India's GeM platform.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="text-[#2a6e9e] mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-[#2a6e9e] mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

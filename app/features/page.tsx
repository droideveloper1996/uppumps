"use client";

import { motion } from "framer-motion";
import {
  FiMonitor,
  FiSettings,
  FiUsers,
  FiCloud,
  FiShield,
  FiZap,
  FiCpu,
  FiActivity,
  FiTrendingUp,
} from "react-icons/fi";
import Toolbar from "@/Pages/ToolBar";
import Footer from "@/Pages/Footer";

const features = [
  {
    title: "Fully Responsive",
    desc: "Optimized for all screen sizes with seamless performance across devices.",
    icon: <FiMonitor size={24} />,
  },
  {
    title: "Customizable",
    desc: "Easily adapt to your brand needs with modular and flexible components.",
    icon: <FiSettings size={24} />,
  },
  {
    title: "User Friendly",
    desc: "Clean UX for better engagement, retention and user satisfaction.",
    icon: <FiUsers size={24} />,
  },
  {
    title: "Cloud Based",
    desc: "Always accessible, scalable infrastructure with 99.9% uptime.",
    icon: <FiCloud size={24} />,
  },
  {
    title: "Secure by Design",
    desc: "Built with security best practices, encryption, and role-based access.",
    icon: <FiShield size={24} />,
  },
  {
    title: "Blazing Fast",
    desc: "Performance-first architecture with optimized loading speed.",
    icon: <FiZap size={24} />,
  },
  {
    title: "AI Powered",
    desc: "Smart recommendations, automation, and real-time learning capabilities.",
    icon: <FiCpu size={24} />,
  },
  {
    title: "Analytics Built-In",
    desc: "Track growth, behavior, and performance with integrated dashboards.",
    icon: <FiTrendingUp size={24} />,
  },
  {
    title: "Real-Time Monitoring",
    desc: "Live status updates, usage metrics, and health tracking 24/7.",
    icon: <FiActivity size={24} />,
  },
];

export default function Features() {
  return (
    <section className="bg-[#f5f9ff] pt-28">
      <Toolbar />

      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-800"
        >
          Our <span className="text-blue-600">Key Features</span>
        </motion.h2>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-600 mt-4 text-lg"
        >
          Designed to empower your business with flexibility, speed, and
          intelligence.
        </motion.p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white hover:bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100"
          >
            <div className="mb-4 text-blue-600 bg-blue-100 p-3 rounded-full w-fit shadow">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-slate-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-6">
        {[
          { stat: "95%", label: "Customer Satisfaction" },
          { stat: "300+", label: "Projects Delivered" },
          { stat: "24/7", label: "Real-Time Support" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * i, duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-3xl font-bold text-blue-600">{item.stat}</h4>
            <p className="text-slate-700 mt-2 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <Footer />
    </section>
  );
}

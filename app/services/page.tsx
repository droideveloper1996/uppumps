"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiPenTool,
  FiSmartphone,
  FiTrendingUp,
  FiDatabase,
  FiGlobe,
} from "react-icons/fi";
import Toolbar from "@/Pages/ToolBar";
import Footer from "@/Pages/Footer";

const services = [
  {
    title: "Web Development",
    desc: "Custom web solutions built with performance, SEO, and scalability in mind.",
    icon: <FiCode size={24} />,
  },
  {
    title: "UI/UX Design",
    desc: "Clean, modern interfaces that improve user engagement and retention.",
    icon: <FiPenTool size={24} />,
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps for iOS and Android with native performance.",
    icon: <FiSmartphone size={24} />,
  },
  {
    title: "Digital Marketing",
    desc: "SEO, PPC, email campaigns, and more to grow your brand online.",
    icon: <FiTrendingUp size={24} />,
  },
  {
    title: "Cloud & DevOps",
    desc: "Reliable infrastructure, CI/CD pipelines, and cloud-native architectures.",
    icon: <FiDatabase size={24} />,
  },
  {
    title: "E-Commerce",
    desc: "Sell smarter with custom storefronts and secure payment integrations.",
    icon: <FiGlobe size={24} />,
  },
];

export default function Services() {
  return (
    <section className="bg-[#f5f9ff] pt-28 pb-20">
      <Toolbar />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-800"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-slate-600"
        >
          We offer a comprehensive suite of digital services tailored to your
          business needs.
        </motion.p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-transparent hover:border-blue-100"
          >
            <div className="mb-4 text-blue-600 bg-blue-100 p-3 rounded-full w-fit shadow">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              {service.title}
            </h3>
            <p className="text-slate-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-20 bg-blue-600 text-white py-10 px-6 rounded-xl max-w-5xl mx-auto text-center"
      >
        <h4 className="text-2xl font-semibold mb-2">
          Ready to transform your business?
        </h4>
        <p className="mb-4">
          Let’s collaborate and build something incredible together.
        </p>
        <button className="bg-white text-blue-600 font-medium px-6 py-2 rounded-full hover:bg-blue-100 transition">
          Get a Quote
        </button>
      </motion.div>

      <Footer />
    </section>
  );
}

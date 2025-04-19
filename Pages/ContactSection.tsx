"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const slideInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Contact Us
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            <strong>U. P. Pumps Private Limited</strong> — Reliable Hand Pump
            Solutions Since 1991
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Our Offices</h3>
            <div className="space-y-6 text-blue-100 text-sm sm:text-base leading-relaxed">
              <div>
                <p className="font-semibold">
                  📍 Delhi Office (Registered Office)
                </p>
                <p>
                  4866/1,24 Second floor,
                  <br />
                  Harbans Singh street, Ansari road, Darya ganj,
                  <br />
                  New Delhi - 110002
                </p>
              </div>
              <div>
                <p className="font-semibold">📍 Kanpur Office</p>
                <p>1-B, Dadanagar, Kanpur, 208022</p>
              </div>
              <div>
                <p className="font-semibold">📍 Bilaspur Office</p>
                <p>
                  Village Basiya, Silphari Road, Ph. No. 42, Kh. No. 369/2,
                  <br />
                  Block Bilha, Bilaspur, Chhattisgarh - 495004
                </p>
              </div>
              <div>
                <p className="font-semibold">📍 Gwalior Office</p>
                <p>
                  26B, Plot Industrial Area, Maharajpura, Morar,
                  <br />
                  Gwalior, Madhya Pradesh - 474020
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <FaEnvelope />
                <a
                  href="mailto:uppumpsknp1@gmail.com"
                  className="hover:underline"
                >
                  uppumpsknp1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <p>+91 9415127047 | +91 9455598050</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

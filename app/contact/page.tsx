"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Toolbar from "@/Pages/ToolBar";
import Footer from "@/Pages/Footer";
import NewToolbar from "@/Pages/NewToolbar";
import WebNavbar from "@/Pages/WebNavbar";
import { Raleway, Poppins } from "next/font/google";

// Fonts
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// Contact Data
const contactItems = [
  {
    icon: <FaPhoneAlt size={40} />,
    title: "Speak to Us",
    description: (
      <>
        For queries, support & complaints, <br />
        contact <strong>+91 9415127047 / +91 9455598050</strong>
      </>
    ),
    button: { text: "Call", link: "tel:+919415127047" },
  },
  {
    icon: <FaWhatsapp size={40} />,
    title: "Chat with Us",
    description: (
      <>
        Drop us a message for quick <br /> Whatsapp assistance
      </>
    ),
    button: { text: "WhatsApp", link: "https://wa.me/919415127047" },
  },
  {
    icon: <FaEnvelope size={40} />,
    title: "Write to Us",
    description: (
      <>
        For inquiries, quotes or export details, <br />
        email us at: <strong>uppumpsknp1@gmail.com</strong>
      </>
    ),
    button: {
      text: "Email",
      link: "mailto:uppumpsknp1@gmail.com",
    },
  },
];

export default function ContactUs() {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8 mt-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-4xl font-bold mb-5 ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          Get in touch with us.
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-[#2a6e9e] mx-auto mb-12 rounded-full"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ originX: 0.5 }}
        />

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center w-[320px]"
            >
              <div className="text-[#2a6e9e] mb-4">{item.icon}</div>
              <h3
                className={`text-lg font-bold mb-2 ${raleway.className}`}
                style={{ color: "#2a6e9e" }}
              >
                {item.title}
              </h3>
              <p className={`text-gray-700 text-sm mb-6 ${poppins.className}`}>
                {item.description}
              </p>
              <a
                href={item.button.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2a6e9e] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#1e5b82] transition-all"
              >
                {item.button.text}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Offices + Form */}
        <div className="flex flex-col lg:flex-row gap-10 mt-20">
          {/* Offices Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-md flex-1"
          >
            <div className="flex items-center gap-3 mb-4 text-[#2a6e9e] text-xl font-semibold">
              <FaMapMarkerAlt size={24} />
              Our Offices
            </div>
            <div
              className={`text-slate-700 text-sm leading-relaxed space-y-5 text-left ${poppins.className}`}
            >
              <div>
                <strong>Delhi Office (Registered Office):</strong>
                <p>
                  4866/1, 24 Second Floor, Harbans Singh Street, Ansari Road,
                  Darya Ganj, New Delhi - 110002
                </p>
              </div>
              <div>
                <strong>Kanpur Office:</strong>
                <p>1-B, Dadanagar, Kanpur, 208022</p>
              </div>
              <div>
                <strong>Bilaspur Office:</strong>
                <p>
                  Village Basiya, Silphari Road, Ph. No. 42, Kh. No. 369/2,
                  Block Bilha, Dist. Bilaspur, Chhattisgarh - 495004
                </p>
              </div>
              <div>
                <strong>Gwalior Office:</strong>
                <p>
                  26B, Plot Industrial Area, Maharajpura, Morar, Gwalior, Madhya
                  Pradesh - 474020
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-md flex-1"
          >
            <h3
              className={`text-2xl font-bold mb-4 text-center ${raleway.className}`}
              style={{ color: "#2a6e9e" }}
            >
              Get In Touch
            </h3>
            <p
              className={`text-center text-slate-600 mb-6 ${poppins.className}`}
            >
              Have a specific request or inquiry? Send us a message.
            </p>
            <form className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="flex-1 border border-gray-300 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2a6e9e]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="flex-1 border border-gray-300 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2a6e9e]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2a6e9e]"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2a6e9e]"
              />
              <button
                type="submit"
                className="bg-[#2a6e9e] hover:bg-[#1e5b82] text-white font-semibold px-8 py-3 rounded-full transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

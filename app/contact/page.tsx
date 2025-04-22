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
    <section className="w-full bg-gray-100 ">
      <NewToolbar />

      <div className="max-w-7xl mx-auto text-center px-4 md:px-8 mt-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-5 text-blue-800/90"
        >
          Get in touch with us.
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ originX: 0.5 }}
        />

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center"
            >
              <div className="text-blue-800 mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm mb-6">{item.description}</p>
              <a
                href={item.button.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-800 to-teal-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:opacity-90 transition-all"
              >
                {item.button.text}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Our Offices + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-700 text-xl font-semibold">
              <FaMapMarkerAlt size={24} />
              Our Offices
            </div>
            <div className="text-slate-700 text-sm leading-relaxed space-y-5 text-left">
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

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
              Get In Touch
            </h3>
            <p className="text-center text-slate-600 mb-6">
              Have a specific request or inquiry? Send us a message.
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

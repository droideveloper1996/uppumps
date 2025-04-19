"use client";

import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white pt-16 mt-10 border-t"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-sm text-slate-700"
      >
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            U. P. Pumps Pvt. Ltd.
          </h2>
          <p className="leading-relaxed text-sm">
            4866/1,24 Second Floor, <br />
            Harbans Singh Street, Ansari Road, Darya Ganj,
            <br />
            New Delhi - 110002
          </p>
          <p className="mt-4">
            <strong>Phone:</strong> +91 9415127047 <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:uppumpsknp1@gmail.com"
              className="text-blue-600 hover:underline"
            >
              uppumpsknp1@gmail.com
            </a>
          </p>
          <div className="flex gap-3 mt-4">
            {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border rounded-full text-gray-700 hover:text-blue-600 hover:border-blue-600 transition"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </motion.div>

        {/* Railway Offerings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-semibold text-slate-800 mb-4">
            Railway Solutions
          </h3>
          <ul className="space-y-2">
            <li>Rail Wheel & Complete Shell Assembly</li>
            <li>Coach Parts & Assembly</li>
            <li>Heavy & Small Rail Track Equipment</li>
            <li>Robotic & Battery Operated Vehicles</li>
            <li>Roof / Sidewall / Underframe Units</li>
            <li>Biomass STP Plant Components</li>
          </ul>
        </motion.div>

        {/* Government Affiliations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-semibold text-slate-800 mb-4">
            Government Clients
          </h3>
          <ul className="space-y-2">
            <li>Railway Board</li>
            <li>Chitranjan Locomotive Works</li>
            <li>BLW, PLW</li>
            <li>RCF & Modern Coach Factory</li>
            <li>Integral Coach Factory</li>
          </ul>
        </motion.div>

        {/* Other Manufacturing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-semibold text-slate-800 mb-4">
            Cycle & GI Pipe Manufacturing
          </h3>
          <ul className="space-y-2">
            <li>Road & Utility Bicycles</li>
            <li>Delivery Cycles & Accessories</li>
            <li>Custom Designs for NGOs & Govt</li>
            <li>In-house Fabrication & Assembly</li>
            <li>Galvanized Iron (GI) Pipes</li>
            <li>Water & Structural Use</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-t mt-12 pt-6 pb-8 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()}{" "}
        <strong className="text-slate-800">U. P. Pumps Pvt. Ltd.</strong>. All
        Rights Reserved
        <br />
        Designed by{" "}
        <a
          href="https://phynlabz.com"
          className="text-blue-600 hover:underline"
        >
          Phynlabz Tech Pvt. Ltd.
        </a>
      </motion.div>
    </motion.footer>
  );
}

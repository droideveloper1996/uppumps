"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactTable from "@/IndianPages/ContactTable";
import WebNavbar from "@/Pages/WebNavbar";
import Footer from "@/Pages/Footer";
import { Raleway, Poppins } from "next/font/google";
import RailwayHero from "./RailwayHero";


// Fonts
const raleway = Raleway({ weight: ["600", "700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

export default function RailwayPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Contact Form:", formData);
    alert("Thank you for your enquiry!");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <>
      <WebNavbar />

      <section
        className={`${poppins.className} w-full bg-white py-16 px-4 sm:px-8 md:px-12`}
      >
        <RailwayHero />

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-5xl mx-auto text-left"
        >
          <h3
            className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Contact Information
          </h3>

          <ContactTable />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-10 border border-gray-200 rounded-xl">
            <div className="sm:col-span-2 mb-6 text-center">
              <p
                className={`text-2xl font-bold ${raleway.className}`}
                style={{ color: "#2a6e9e" }}
              >
                Connect With Us
              </p>
              <p className="mt-3 text-sm text-gray-500">
                * Fields are mandatory
              </p>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Your Name <sup className="text-base text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[#2a6e9e]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Email Address <sup className="text-base text-red-500">*</sup>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[#2a6e9e]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Mobile Number (with Country Code){" "}
                <sup className="text-base text-red-500">*</sup>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[#2a6e9e]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Message <sup className="text-base text-red-500">*</sup>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[#2a6e9e]"
              />
            </div>

            <div className="sm:col-span-2 flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-[#2a6e9e] hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

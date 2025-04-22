"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactTable from "@/IndianPages/ContactTable";
import NewToolbar from "@/Pages/NewToolbar";
import Footer from "@/Pages/Footer";
import web_logo from "@/public/assets/logo/up_pump_logo Background Removed.png";
import workers_img from "@/public/assets/IndianPagesImage/spare-parts-manufacturing-2-mp4.webp";
import RailwayHero from "./RailwayHero";
import RailwayOverview from "./RailwayOverview";
import RailwayClients from "./RailwayClients";
import RailwayInnovation from "./RailwayInnovation";
import RailwayStructures from "./RailwayStructures";
import RailwaySpecialTools from "./RailwaySpecialTools";
import RailwayProductTable from "./RailwayProductTable";

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
      <NewToolbar />

      <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-12">
        <RailwayHero />
        <RailwayOverview />
        <RailwayClients />
        <RailwayInnovation />
        <RailwayStructures />
        <RailwaySpecialTools />
        <RailwayProductTable />

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-5xl mx-auto text-left"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Contact Information
          </h3>

          <ContactTable />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 shadow-md rounded-xl">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded border border-gray-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded border border-gray-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Mobile Number (with Country Code)
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile no"
                className="w-full px-4 py-2 rounded border border-gray-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="w-full px-4 py-2 rounded border border-gray-300"
              />
            </div>

            <div className="sm:col-span-2 flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
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

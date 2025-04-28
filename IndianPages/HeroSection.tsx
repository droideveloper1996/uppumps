"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactTable from "./ContactTable";
import Image from "next/image";
import web_logo from "../public/assets/logo/U-2.png";
import workers_img from "../public/assets/IndianPagesImage/spare-parts-manufacturing-2-mp4.webp";
import { Poppins, Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section className="w-full  py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Section */}
        <div className="flex justify-center mb-4">
          <Image
            src={web_logo}
            alt="logo"
            height={100}
            width={100}
            className="rounded-sm"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${roboto.className} text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4`}
        >
          U. P. Pumps Private Limited
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-700 italic mb-4"
        >
          Built to Last. Made to Adapt
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto mb-6"
        >
          Supplying over <strong>50,000 hand pumps annually</strong> across
          India and expanding globally with trusted engineering and proven
          durability.
        </motion.p>

        {/* GeM License Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-md border border-blue-100 max-w-3xl mx-auto text-left"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            GeM Authorised Manufacturer
          </h3>
          <p className="text-slate-700 text-sm sm:text-base mb-2">
            <strong>U. P. Pumps Pvt. Ltd.</strong> is proudly registered and
            verified as an authorized manufacturer on the{" "}
            <span className="font-semibold text-blue-700">
              Government e-Marketplace (GeM)
            </span>
            , enabling seamless procurement by government bodies and public
            sector organizations across India.
          </p>
          <h4 className="font-semibold text-blue-800 mt-4 mb-1">
            Licenses & Certifications
          </h4>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>BIS License</li>
            <li>ISO 15500 Certified</li>
          </ul>
        </motion.div>
      </div>

      <div className="flex justify-center my-4">
        <Image src={workers_img} alt="logo" height={600} width={600} />
      </div>

      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 max-w-5xl mx-auto text-left"
      >
        <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          About Us
        </h3>
        <div className="text-slate-700 text-sm sm:text-base space-y-4">
          <p>
            Founded in 1991 by the visionary{" "}
            <strong>Mr. Rewachand Moorjani</strong> in Kanpur, U. P. Pumps Pvt.
            Ltd. began as a small firm with a big mission: to provide reliable,
            high-quality Hand Pumps to communities across India.
          </p>
          <p>
            Under the leadership of <strong>Mr. Harendra Moorjani</strong>, the
            company expanded pan-India, introducing durable models like India
            Mark II and Afridev. His leadership made U. P. Pumps a trusted name
            in the industry.
          </p>
          <p>
            Today, the company is run by <strong>Mr. Harendra Moorjani</strong>,
            his son <strong>Mr. Rajat Moorjani</strong> (Germany engineering
            graduate), and <strong>Mrs. Vagessha Moorjani</strong> (University
            of Texas at Austin), expanding into international and B2B markets.
          </p>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 max-w-5xl mx-auto text-left"
      >
        <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          Contact Information
        </h3>
        <ContactTable />
      </motion.div>
    </section>
  );
}

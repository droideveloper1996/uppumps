"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import web_logo from "@/public/assets/logo/U-2.png";
import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

const railwayProducts = [
  {
    name: "Rail Wheel",
    image: "/assets/IndianPagesImage/railway/Rollingstock_axle.jpg",
  },
  {
    name: "Complete Shell Assembly",
    image: "/assets/IndianPagesImage/railway/wag9 coach.jpeg",
  },
  {
    name: "Complete Coach",
    image: "/assets/IndianPagesImage/railway/complete coach 2.jpg",
  },
  {
    name: "Small Track Equipment for Railway",
    image: "/assets/IndianPagesImage/railway/hydraulic relaying device.jpg",
  },
  {
    name: "Heavy Rail-track Manufacturing and Consulting",
    image: "/assets/IndianPagesImage/railway/relaying device.jpg",
  },
  // {
  //   name: "All Other Small and Heavy Railway Equipment and Vehicles",
  //   image: "/assets/IndianPagesImage/railway/images (4).jpeg",
  // },
  {
    name: "Robotic Platform with Remote and Battery Operated Equipments",
    image: "/assets/IndianPagesImage/railway/u5-1200x800.jpg",
  },
  {
    name: "Roof, Sidewall, Underframe for Coach and Locomotive",
    image: "/assets/IndianPagesImage/railway/336244_1_En_6_Fig15_HTML.png",
  },
  {
    name: "Biomass for All Types of STP Plant",
    image: "/assets/IndianPagesImage/railway/sewage-system-24.jpg",
  },
];

export default function RailwayFullPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-24">
      {/* Hero Section */}
      <div className="text-center">
        <Image
          src={web_logo}
          alt="logo"
          height={100}
          width={100}
          className="mx-auto mb-4 rounded"
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-4xl sm:text-5xl font-bold mb-2 ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          U. P. Pumps Private Limited
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-gray-700 italic text-base sm:text-lg ${poppins.className}`}
        >
          Built to Last. Made to Adapt
        </motion.p>
      </div>

      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-gray-700 text-lg leading-relaxed ${poppins.className}`}
      >
        <p className="mb-6">
          At U P Pumps (P) Ltd, we specialize in the manufacturing, trading, and
          consulting of premium railway products. Our expertise spans a diverse
          range of components, including rail wheels, complete shell assemblies,
          and fully integrated coach systems—engineered to meet the rigorous
          demands of modern rail infrastructure. Backed by decades of industry
          experience and a forward-thinking approach, we are committed to
          delivering reliable, high-performance solutions to our partners in the
          railway sector.
        </p>
        <p className="mb-6">
          In addition to rolling stock solutions, U P Pumps (P) Ltd also
          specializes in the manufacturing and consulting of railway track
          equipment. Our portfolio includes both small track components and
          heavy rail track machinery, designed to ensure the durability, safety,
          and efficiency of railway infrastructure. From fastening systems and
          fish plates to rail cutting and welding machines, we provide
          end-to-end solutions that support seamless operations on the ground.
        </p>
        <p className="mb-6">
          Our expertise extends across a comprehensive range of track-related
          products—small track equipment essential for daily maintenance, as
          well as heavy-duty rail tools and machinery for large-scale
          infrastructure projects. With a focus on precision engineering and
          long-term performance, we work closely with clients to provide
          customized solutions that meet the technical and operational demands
          of the railway sector.
        </p>
      </motion.div>

      {/* Partners & Innovation Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <h3
            className={`text-2xl font-bold mb-4 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Our Trusted Partners
          </h3>
          <ul
            className={`list-disc list-inside text-gray-700 space-y-2 ${poppins.className}`}
          >
            <li>Chittaranjan Locomotive Works (CLW)</li>
            <li>Banaras Locomotive Works (BLW)</li>
            <li>Patiala Locomotive Works (PLW)</li>
            <li>Rail Coach Factory (RCF), Kapurthala</li>
            <li>Modern Coach Factory (MCF), Raebareli</li>
            <li>Integral Coach Factory (ICF), Chennai</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <h3
            className={`text-2xl font-bold mb-4 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Innovation in Motion
          </h3>
          <p
            className={`text-gray-700 text-base leading-relaxed ${poppins.className}`}
          >
            We offer robotic platforms and remote/battery-operated equipment
            designed to enhance safety, efficiency, and precision in modern
            railway operations—bringing smart technology to the heart of rail
            infrastructure.
            <br />
            <br />
            We also manufacture and consult on key structural components for
            coaches and locomotives, including roofs, side walls, and
            underframes. Designed for durability and safety, our parts meet the
            highest standards, ensuring strong, reliable performance in every
            rail system.
            <br />
            <br />U P Pumps (P) Ltd also supplies high-quality heating elements
            and wheels specifically designed for LHB (Linke Hofmann Busch)
            coaches, ensuring optimal performance and safety. Additionally, we
            specialize in providing grinders for WAG9 locomotives, a vital
            component for maintaining and enhancing the operational efficiency
            of these powerful engines.
          </p>
        </motion.div>
      </div>

      {/* Product Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {railwayProducts.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition group"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-fill group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h4
                className={`text-lg font-bold mb-2 ${raleway.className}`}
                style={{ color: "#2a6e9e" }}
              >
                {item.name}
              </h4>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

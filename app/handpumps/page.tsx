"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const handpumpData = [
  {
    title: "India Mark II Hand Pump",
    image: "/assets/ProductImage/mark-ii.png",
    overview:
      "India Mark II is one of the most widely used hand pumps across the world for accessing safe drinking water from deep borewells.",
    features: [
      "Designed for deepwell applications (up to 50 meters)",
      "ISI-marked, conforms to IS:15500 (Part 2)",
      "Easy to install and maintain",
      "Galvanized steel riser pipes and bright bar connecting rods",
    ],
    applications: [
      "Ideal for rural and remote areas",
      "Government and NGO water supply schemes",
    ],
  },
  {
    title: "India Mark III (VLOM) Hand Pump",
    image: "/assets/ProductImage/mark-iii.png",
    overview:
      "India Mark III is a Village Level Operation & Maintenance (VLOM) variant of Mark II, allowing villagers to easily maintain and repair the pump with minimal tools.",
    features: [
      "VLOM design for easy servicing at the village level",
      "Stainless steel or galvanized connecting rods available",
      "Low cost of maintenance and long operational life",
      "Deepwell capabilities similar to Mark II",
    ],
    applications: [
      "Perfect for community-driven water systems",
      "Widely adopted in UNICEF and government projects",
    ],
  },
  {
    title: "India Mark II & III with Force Lift Attachments",
    image: "/assets/ProductImage/force-lift.png",
    overview:
      "Specialized version of India Mark II/III pumps with Force Lift Attachments for delivering water uphill or into overhead tanks.",
    features: [
      "Adds vertical lifting capability (force lift)",
      "Used to transport water from borewell to elevated storage",
      "Compatible with Mark II and III bodies",
      "Preserves manual operation efficiency",
    ],
    applications: [
      "Hilly terrain and multi-storey installations",
      "Water storage for irrigation and school/community use",
    ],
  },
  {
    title: "Afridev Hand Pump",
    image: "/assets/ProductImage/afridev.png",
    overview:
      "The Afridev pump is a medium-depth hand pump developed by UNICEF and widely used across Africa and Asia. Known for its modular design and ease of use.",
    features: [
      "Modular VLOM design",
      "Easy installation and repair without specialized tools",
      "Suitable for depths up to 45 meters",
      "HDPE or galvanized riser pipes",
    ],
    applications: [
      "Ideal for both rural and semi-urban areas",
      "Preferred in community-driven water systems",
    ],
  },
  {
    title: "Tara Hand Pump",
    image: "/assets/ProductImage/tara-pump.png",
    overview:
      "Tara Hand Pump is a shallow well option ideal for water tables closer to the surface. It's a low-cost and lightweight solution, perfect for schools, homes, and villages.",
    features: [
      "Designed for shallow wells (up to 15 meters)",
      "Lightweight and easy to operate",
      "Plastic or cast iron components",
      "Minimum maintenance required",
    ],
    applications: ["Domestic water use", "School campuses and institutions"],
  },
];

export default function Handpumps() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
        Our Hand Pump Models
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {handpumpData.map((pump, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative w-full h-64">
              <Image
                src={pump.image}
                alt={pump.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-blue-800">{pump.title}</h3>
              <p className="text-slate-700 text-sm">{pump.overview}</p>
              <div>
                <h4 className="font-semibold text-blue-700">Features:</h4>
                <ul className="list-disc pl-5 text-sm text-slate-700">
                  {pump.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700">Applications:</h4>
                <ul className="list-disc pl-5 text-sm text-slate-700">
                  {pump.applications.map((app, idx) => (
                    <li key={idx}>{app}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

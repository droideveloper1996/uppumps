"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Raleway, Poppins } from "next/font/google";

// Fonts
const raleway = Raleway({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
});
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

const handpumpData = [
  {
    title: "India Mark II Hand Pump",
    image: "/assets/IndianPagesImage/handpumps/india_mark_2.png",
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
    image: "/assets/IndianPagesImage/handpumps/India_mark_3.webp",
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
    title: "Extra Deepwell Hand Pump",
    image: "/assets/placeholder_Image.jpeg",
    overview:
      "At U. P. Pumps Pvt. Ltd., our Extra Deepwell Hand Pumps are specially engineered for extreme depths up to 120 meters, ensuring reliable access to groundwater in the most challenging conditions. Built for durability, easy maintenance, and heavy-duty usage, they serve rural communities, disaster relief, and agricultural sectors effectively.",
    features: [
      "Designed for extreme depths — up to 120 meters and beyond",
      "ISI-marked and compliant with IS:15500 standards",
      "Corrosion-resistant materials for long life",
      "Smooth operation with minimal effort",
      "Low maintenance and easy parts replacement",
    ],
    applications: [
      "Rural drinking water supply",
      "Remote and tribal area water access",
    ],
  },
  {
    title: "Afridev Hand Pump",
    image: "/assets/IndianPagesImage/handpumps/afridev_hand_pumps.webp",
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
    image: "/assets/IndianPagesImage/handpumps/tara_hand_pumps.jpg",
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
  {
    title: "Shallow Well Hand Pump",
    image: "/assets/placeholder_Image.jpeg",
    overview:
      "Our Shallow Well Hand Pumps are designed for water tables close to the surface. They offer reliable water access with minimal effort, making them ideal for schools, homes, and rural areas with high water tables.",
    features: [
      "Suitable for depths up to 15 meters",
      "Lightweight construction for easy handling",
      "Low maintenance with simple parts replacement",
      "Available in cast iron and reinforced plastic options",
      "Designed for minimal operational effort",
    ],
    applications: [
      "Domestic water use in villages and towns",
      "School and institutional installations",
      "Community parks and playgrounds",
      "Emergency water access in flood-prone areas",
    ],
  },
  {
    title: "PVC Riser Pipe",
    image: "/assets/placeholder_Image.jpeg",
    overview:
      "Our high-grade PVC Riser Pipes are engineered to provide a lightweight, corrosion-resistant alternative to traditional galvanized pipes, ensuring smooth water flow and long service life.",
    features: [
      "Lightweight yet strong for easy installation",
      "Non-corrosive material ensures long life",
      "ISI-marked and compliant with hand pump standards",
      "Available in multiple diameters and lengths",
      "Cost-effective and ideal for deepwell installations",
    ],
    applications: [
      "Hand pump installations in all terrains",
      "Deep and shallow borewells",
      "Government water projects",
      "Rural water supply schemes",
    ],
  },
  {
    title: "Hand Pump Spare Parts",
    image: "/assets/placeholder_Image.jpeg",
    overview:
      "We offer a comprehensive range of high-quality spare parts for hand pumps, ensuring smooth operation, easy repairs, and long service life of pumps even in the most challenging conditions.",
    features: [
      "ISI-certified rods, plungers, seals, and cylinders",
      "High-quality rubber seals for optimal water retention",
      "Bright bar connecting rods and stainless steel rods available",
      "Compatibility with India Mark II, Mark III, Afridev, and other models",
      "Precision machining for perfect fit and durability",
    ],
    applications: [
      "Maintenance of installed hand pumps",
      "Upgradation of existing hand pump systems",
      "Spare kits for emergency response teams",
      "Supply for government and NGO maintenance programs",
    ],
  },
  {
    title: "Hand Pump Tool Kit",
    image: "/assets/placeholder_Image.jpeg",
    overview:
      "Our Hand Pump Tool Kits are specially curated for easy installation, servicing, and maintenance of various hand pump models. Rugged, portable, and designed for field conditions.",
    features: [
      "Complete kit with wrenches, clamps, lifting devices",
      "Compatible with India Mark II, III, and Afridev models",
      "Made with high-strength materials for durability",
      "Includes instructional guide for local technicians",
      "Portable design with heavy-duty carrying case",
    ],
    applications: [
      "Village Level Operation and Maintenance (VLOM) programs",
      "NGO and Government water supply maintenance teams",
      "Emergency response repair kits",
      "Training and skill development programs for rural technicians",
    ],
  },
];

export default function Handpumps() {
  const router = useRouter();

  return (
    <section className={poppins.className}>
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl font-bold mb-6 ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          Deepwell Hand Pumps
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-500 text-base leading-relaxed max-w-3xl mx-auto"
        >
          We specialize in the manufacturing of a wide range of ISI-marked deep
          well Hand Pumps designed to perform in demanding field conditions.
          These pumps are built with precision and are field-tested for
          long-term durability and ease of maintenance. Our ISI-marked Hand
          Pumps are designed to withstand heavy usage in rural and remote
          conditions. Below is a comprehensive list of standard and extra
          deepwell Hand Pumps we manufacture.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {handpumpData.map((pump, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-xl shadow hover:shadow-lg transition overflow-hidden p-6 flex flex-col"
          >
            <div className="relative w-full h-56 mb-4">
              <Image
                src={pump.image}
                alt={pump.title}
                fill
                className="object-contain"
              />
            </div>

            <h3
              className={`text-xl font-bold mb-2 ${raleway.className}`}
              style={{ color: "#2a6e9e" }}
            >
              {pump.title}
            </h3>

            <p className="text-gray-500 text-sm mb-4">{pump.overview}</p>

            <div className="mb-4">
              <h4
                className={`font-semibold text-base mb-2 ${raleway.className}`}
                style={{ color: "#2a6e9e" }}
              >
                Features:
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
                {pump.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className={`font-semibold text-base mb-2 ${raleway.className}`}
                style={{ color: "#2a6e9e" }}
              >
                Applications:
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
                {pump.applications.map((application, index) => (
                  <li key={index}>{application}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Contact Section */}
      <div className="bg-[#2a6e9e]/10 border-l-4 border-[#2a6e9e] max-w-5xl mx-auto p-8 rounded-xl text-center mt-10 space-y-6">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          📢 <strong>Need more information?</strong> <br />
          For detailed specifications, spare parts, and complete catalogues,
          please contact us via phone at
          <br />
          <strong> +91 9455598050</strong> or email us at{" "}
          <strong>uppumpslimited@gmail.com</strong>.
        </p>

        <button
          onClick={() => router.push("/contact")}
          className="bg-[#2a6e9e] hover:bg-[#476e8a] text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}

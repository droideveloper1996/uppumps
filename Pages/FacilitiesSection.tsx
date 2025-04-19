"use client";

import { motion } from "framer-motion";

export default function FacilitiesSection() {
  const facilities = [
    {
      name: "Free Wi-Fi",
      description: "Enjoy high-speed internet access throughout the campus.",
    },
    {
      name: "24/7 Library Access",
      description:
        "Our library is open all day, every day, for your convenience.",
    },
    {
      name: "Gymnasium",
      description:
        "State-of-the-art gym with all the necessary equipment for your fitness goals.",
    },
    {
      name: "Cafeteria",
      description:
        "Healthy and affordable meal options served throughout the day.",
    },
    {
      name: "Swimming Pool",
      description:
        "A full-sized pool for recreational and professional training purposes.",
    },
    {
      name: "Conference Hall",
      description:
        "Spacious hall equipped with modern technology for events and conferences.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-blue-500 tracking-wide uppercase text-xl">
            Facilities
          </h5>
          <h2 className="text-4xl font-bold text-blue-900 mt-2">
            OUR AMAZING FACILITIES
          </h2>
        </motion.div>

        {/* Facilities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl p-6 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-check-circle text-xl"></i>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-blue-800 mb-3">
                {facility.name}
              </h4>
              <p className="text-blue-600 text-base">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

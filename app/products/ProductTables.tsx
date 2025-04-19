"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ProductTables = () => {
  const router = useRouter();

  const scheduleTable = [
    {
      schedule: "Schedule 1",
      assembly: "Normal Stand",
      rod: "Bright Bar (BBCR)",
      casing: "100/125mm",
      stand: "Normal",
      spec: "IS:15500 (Part 2)/2004",
    },
    {
      schedule: "Schedule 2",
      assembly: "Telescopic Stand",
      rod: "Bright Bar (BBCR)",
      casing: "150mm",
      stand: "Telescopic",
      spec: "IS:15500 (Part 2)/2004",
    },
    {
      schedule: "Schedule 3",
      assembly: "Normal Stand",
      rod: "Stainless Steel (SSCR)",
      casing: "100/125mm",
      stand: "Normal",
      spec: "IS:15500 (Part 2)/2004",
    },
    {
      schedule: "Schedule 4",
      assembly: "Telescopic Stand",
      rod: "Stainless Steel (SSCR)",
      casing: "100/125mm",
      stand: "Telescopic",
      spec: "IS:15500 (Part 2)/2004",
    },
  ];

  const extraDeepwellTable = [
    {
      schedule: "Schedule 5",
      assembly: "Normal Stand",
      rod: "Bright Bar (BBCR)",
      quantity: "20 rods",
      stand: "Normal",
      spec: "IS:15500 (Part 2)/2004",
    },
    {
      schedule: "Schedule 6",
      assembly: "Telescopic Stand",
      rod: "Bright Bar (BBCR)",
      quantity: "20 rods",
      stand: "Telescopic",
      spec: "IS:15500 (Part 2)/2004",
    },
  ];

  const pumpModels = [
    ["India Mark II", "Most widely used deepwell pump"],
    ["India Mark III (VLOM)", "Village Level Operation and Maintenance compatible"],
    ["India Mark II & III (Force Lift)", "Includes force lift attachment for uphill water delivery"],
    ["Afridev Pump", "Designed for easy maintenance, used widely in Africa"],
    ["Tara Hand Pump", "Shallow well, cost-effective solution"],
  ];

  const featuredParts = [
    "Connecting Rods",
    "Riser Pipes",
    "Plungers",
    "Cylinders",
    "Foot Valves",
    "Head Assemblies",
    "Chain & Handle Sets",
    "PVC Water Tanks (optional inclusion if applicable)",
  ];

  return (
    <>
      {/* Schedule Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="overflow-x-auto rounded-xl shadow-lg ring-1 ring-slate-200 bg-white">
          <motion.table
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="min-w-full border-separate border-spacing-0 text-sm text-left text-slate-700"
          >
            <thead className="bg-gradient-to-r from-blue-600 to-sky-500 text-white">
              <tr>
                {["Schedule", "Assembly Type", "Rod Material", "Casing Pipe Diameter", "Stand Type", "ISI Specification"].map((title, i) => (
                  <th key={i} className="px-6 py-4 text-sm font-semibold border-b border-slate-200">
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleTable.map((item, i) => (
                <motion.tr
                  key={i}
                  whileHover={{ scale: 1.01, backgroundColor: "rgba(191, 219, 254, 0.3)" }}
                  className="transition-all duration-300"
                >
                  <td className="px-6 py-4 border-b border-slate-200">{item.schedule}</td>
                  <td className="px-6 py-4 border-b border-slate-200">{item.assembly}</td>
                  <td className="px-6 py-4 border-b border-slate-200 text-blue-700 font-semibold">{item.rod}</td>
                  <td className="px-6 py-4 border-b border-slate-200">{item.casing}</td>
                  <td className="px-6 py-4 border-b border-slate-200">{item.stand}</td>
                  <td className="px-6 py-4 border-b border-slate-200">{item.spec}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </motion.div>

      {/* Extra Deepwell Table */}
      <motion.div className="mb-20">
        <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
          Extra Deepwell Hand Pumps (ISI Marked)
        </h4>
        <div className="overflow-x-auto rounded-xl shadow-lg ring-1 ring-slate-200 bg-white">
          <table className="min-w-full text-sm text-left text-slate-700">
            <thead className="bg-gradient-to-r from-blue-600 to-sky-500 text-white">
              <tr>
                {["Schedule", "Assembly Type", "Rod Material", "Rod Quantity", "Stand Type", "ISI Specification"].map((title, i) => (
                  <th key={i} className="px-6 py-4 font-semibold border-b border-slate-200">
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {extraDeepwellTable.map((item, i) => (
                <tr key={i} className="hover:bg-sky-50 transition">
                  <td className="px-6 py-4 border-b border-slate-200">{item.schedule}</td>
                  <td className="px-6 py-4 border-b border-slate-200">{item.assembly}</td>
                  <td className="px-6 py-4 border-b border-slate-200 font-semibold text-blue-700">{item.rod}</td>
                  <td className="px-6 py-4 border-b border-slate-200">{item.quantity}</td>
                  <td className="px-6 py-4 border-b border-slate-200">{item.stand}</td>
                  <td className="px-6 py-4 border-b border-slate-200">{item.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Pump Models Table */}
      <motion.div className="mb-20">
        <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
          Pump Models Manufactured
        </h4>
        <div className="overflow-x-auto rounded-xl shadow ring-1 ring-slate-200 bg-white">
          <table className="min-w-full text-sm text-left text-slate-700">
            <thead className="bg-gradient-to-r from-blue-600 to-sky-500 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold border-b border-slate-200">Model Name</th>
                <th className="px-6 py-4 font-semibold border-b border-slate-200">Features / Notes</th>
              </tr>
            </thead>
            <tbody>
              {pumpModels.map(([model, note], i) => (
                <tr key={i} className="hover:bg-sky-50">
                  <td className="px-6 py-4 border-b border-slate-200">{model}</td>
                  <td className="px-6 py-4 border-b border-slate-200">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Spare Parts Summary */}
      <motion.div className="mb-24">
        <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
          Spare Parts and Accessories
        </h4>
        <p className="text-slate-700 text-sm sm:text-base mb-6 max-w-3xl">
          Our spare parts are <strong>manufactured in-house</strong> to ensure unmatched compatibility and durability across all Hand Pump models.
        </p>
        <p className="mb-8 text-gray-600">
          View all spare parts and accessories –{' '}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => router.push("/spare-parts")}
          >
            Click here
          </span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredParts.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="w-5 h-5 mt-1 bg-blue-600 rounded-full"></div>
              <p className="text-slate-700 text-sm sm:text-base font-medium">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProductTables;

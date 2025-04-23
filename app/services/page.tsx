"use client";

import { motion } from "framer-motion";
import Toolbar from "@/Pages/ToolBar";
import Footer from "@/Pages/Footer";
import NewToolbar from "@/Pages/NewToolbar";

const pumpModels = [
  {
    model: "India Mark II",
    note: "Most widely used deepwell pump",
  },
  {
    model: "India Mark III (VLOM)",
    note: "Village Level Operation and Maintenance compatible",
  },
  {
    model: "India Mark II & III (Force Lift)",
    note: "Includes force lift attachment for uphill water delivery",
  },
  {
    model: "Afridev Pump",
    note: "Designed for easy maintenance, used widely in Africa",
  },
  {
    model: "Tara Hand Pump",
    note: "Shallow well, cost-effective solution",
  },
];

export default function PumpModels() {
  return (
    <section>
      <NewToolbar />

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto px-6 mt-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-800"
        >
          Pump Models <span className="text-blue-600">Manufactured</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-slate-600"
        >
          We produce several globally recognized hand pump models, ideal for
          rural and remote community-level water supply systems.
        </motion.p>
        <ul className="list-disc text-left mt-4 px-6 text-slate-700 text-base font-medium space-y-1">
          <li>India Mark II</li>
          <li>India Mark III (VLOM)</li>
          <li>India Mark II & III with Force Lift Attachments</li>
          <li>Afridev Pumps</li>
          <li>Tara Hand Pumps</li>
        </ul>
      </div>

      {/* Table Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white p-6 mt-16 rounded-2xl shadow-lg ring-1 ring-slate-200"
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Pump Model Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-slate-700">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-sky-500 text-white text-left">
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider rounded-l-xl">
                  Model Name
                </th>
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider rounded-r-xl">
                  Features / Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {pumpModels.map((item, i) => (
                <tr
                  key={i}
                  className="hover:bg-blue-50 transition duration-200 ease-in-out"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {item.model}
                  </td>
                  <td className="px-6 py-4">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <Footer />
    </section>
  );
}

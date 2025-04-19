"use client";

import React from "react";
import { motion } from "framer-motion";
import Toolbar from "@/Pages/ToolBar";
import Footer from "@/Pages/Footer";

const SpareParts = () => {
  const partsList = [
    "Head Assembly",
    "Head Assembly EDWP",
    "Cylinder Assembly",
    "Cylinder Assembly EDWP",
    "Upper Valve Assembly",
    "Plunger Valve Assembly EDWP",
    "Lower Valve Assembly",
    "Head Box",
    "Head Box EDWP",
    "Handle Standard (Hot Dip Galvanised)",
    "Handle Standard EDWP",
    "Stand Telescopic",
    "Stand Telescopic EDWP",
    "Stand Normal",
    "Stand Normal EDWP",
    "Water Tank",
    "Plunger Rod",
    "Plunger Rod EDWP",
    "Axle",
    "Third Plate",
    "Connecting Rod",
    "Socket",
    "Bearing",
    "Coupler",
    "Hex Bolt M12x40",
    "Hex Bolt M12x20",
    "Hex Nut M12x1.75",
    "HT Bolt M10x40",
    "Nylock Nut M10",
    "Chain with Coupling",
    "Chain with Coupling (Roller Chain)",
    "Washer",
    "Reducer Cap",
    "Cylinder Body with Brass Liner",
    "Cylinder Body with Brass Liner EDWP",
    "Brass Liner",
    "Plunger Yoke Body",
    "Plunger Upper Valve",
    "Bucket Spacer",
    "Lower Spacer EDWP",
    "Follower",
    "Follower EDWP",
    "Check Valve Guide",
    "Check Valve Seat",
    "Rubber Sheet Retainer",
    "Rubber Bucket",
    "Sealing Ring",
    "Rubber Seating Upper Valve",
    "Rubber Seating Lower Valve",
    "T-Bar EDWP",
    "Counter Weight EDWP",
    "Upper Valve Guide with Rubber Seating",
    "Set of Tools for Installation of SDWP & EDWP complete",
    "Set of Tools for Installation/or Major Repair of Hand Pump",
  ];

  return (
    <section className="w-full bg-white min-h-screen">
      <Toolbar />
      <div className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
            Spare Parts and Accessories
          </h4>
          <p className="text-slate-700 text-sm sm:text-base mb-6 max-w-3xl">
            Our spare parts are <strong>manufactured in-house</strong> to ensure
            unmatched compatibility and durability across all Hand Pump models.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {partsList.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
              >
                <div className="w-5 h-5 mt-1 bg-blue-600 rounded-full" />
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="text-slate-600 text-sm sm:text-base space-y-2">
            <p>
              <strong>Note:</strong> As per list provided — the entire catalogue
              will not be provided online.
            </p>
            <p>
              For more information, please reach out to us via phone or email.
            </p>
            <p>
              <em>
                Entire catalogue for repair and hand pump spares available —
                please contact us for more information.
              </em>
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default SpareParts;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Toolbar from "@/Pages/ToolBar";
import Footer from "@/Pages/Footer";
import Image from "next/image";

const partDetails = [
  {
    name: "Head Assembly",
    specification: "Standard & EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Cylinder Assembly",
    specification: "Standard & EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Upper Valve Assembly",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Plunger Valve Assembly",
    specification: "EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Lower Valve Assembly",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Head Box",
    specification: "Standard & EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Handle Standard",
    specification: "Hot Dip Galvanised, EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Stand",
    specification: "Telescopic, Normal, EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Water Tank",
    specification: "Optional",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Plunger Rod",
    specification: "Standard & EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Axle",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Third Plate",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Connecting Rod",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Socket",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Bearing",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Coupler",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Hex Bolt",
    specification: "M12x40, M12x20",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Hex Nut",
    specification: "M12x1.75",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "HT Bolt",
    specification: "M10x40",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Nylock Nut",
    specification: "M10",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Chain with Coupling",
    specification: "Regular & Roller Chain",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Washer",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Reducer Cap",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Cylinder Body with Brass Liner",
    specification: "Standard & EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Brass Liner",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Plunger Yoke Body",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Plunger Upper Valve",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Bucket Spacer",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Lower Spacer",
    specification: "EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Follower",
    specification: "Standard & EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Check Valve Guide",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Check Valve Seat",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Rubber Sheet Retainer",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Rubber Bucket",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Sealing Ring",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Rubber Seating Upper Valve",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Rubber Seating Lower Valve",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "T-Bar",
    specification: "EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Counter Weight",
    specification: "EDWP",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Upper Valve Guide with Rubber Seating",
    specification: null,
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
  {
    name: "Tool Set",
    specification: "For Installation & Major Repair",
    image: "/assets/ProductImage/istockphoto-1400187987-612x612.jpg",
  },
];

const SpareParts = () => {
  return (
    <section className="w-full bg-slate-50 min-h-screen">
      <Toolbar />
      <div className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center">
            Spare Parts & Accessories
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-center mb-12 text-sm sm:text-base">
            Explore our precision-engineered spare parts designed for durability
            and seamless compatibility with our hand pump models.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partDetails.map((part, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="h-48 relative">
                  <Image
                    src={part.image}
                    alt={part.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between grow">
                  <h5 className="text-lg font-semibold text-slate-800 mb-2">
                    {part.name}
                  </h5>
                  <p className="text-slate-600 text-sm mb-4">
                    <strong>Specification:</strong>{" "}
                    {part.specification || "Standard compatible component"}
                  </p>
                  <div className="mt-auto">
                    <button className="text-blue-600 text-sm font-medium hover:underline">
                      View more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-slate-600 text-sm sm:text-base space-y-2">
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

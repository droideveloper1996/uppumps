"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ImageTextLayout() {
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12">
      {/* Image + Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/assets/ProductImage/rajasthan-india-march-9-2019-260nw-1914854317.png"
            alt="Deepwell Hand Pump"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Deepwell Hand Pumps
          </h3>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
            We specialize in manufacturing a wide range of ISI-marked deep well
            Hand Pumps designed for performance in challenging environments.
            Built with precision and tested in the field for long-term
            durability and ease of maintenance, they are ideal for rural and
            remote areas.
          </p>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
            At <strong>U P Pumps Pvt. Ltd.</strong>, we are proud to offer{" "}
            <strong>ISI-marked Deep Well Hand Pumps</strong> crafted for tough
            field conditions. With decades of engineering behind every model,
            they’re rigorously tested for both urban infrastructure and rural
            deployment needs.
          </p>
        </motion.div>
      </div>

      {/* Schedule Description */}
      <div className="mb-10">
        <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
          Standard Deepwell Hand Pumps (ISI Marked)
        </h4>
        <ul className="list-disc pl-6 text-sm text-slate-700 space-y-4">
          {[
            {
              title: "Schedule 1",
              details:
                "Standard Hand Pump with normal stand assembly (BBCR). ISI marked Deep Well Hand Pump MK-II (Standard) conforming to IS:15500(part 2)/2004 with amendments. Includes 10 electro-galvanized bright bar rods with couplers and stand assembly. For 100/125mm casing pipes.",
            },
            {
              title: "Schedule 2",
              details:
                "Standard Hand Pump with telescopic stand assembly (BBCR). ISI marked MK-II (Standard) conforming to IS:15500(part 2)/2004 with amendments. Includes 10 electro-galvanized bright bar rods and telescopic stand. For 150mm casing pipes.",
            },
            {
              title: "Schedule 3",
              details:
                "Standard Hand Pump with normal stand assembly (SSCR). MK-II conforming to IS:15500(part2)/2004. Includes 10 stainless steel rods (04 Cr-1.8 Ni-10 per II:6603/2001) with coupler and stand. For 100/125mm casing pipes.",
            },
            {
              title: "Schedule 4",
              details:
                "Standard Hand Pump with telescopic stand assembly (SSCR). MK-II conforming to IS:15500(part2)/2004 with amendments. Includes 10 stainless steel rods and telescopic stand. For 100/125mm casing pipes.",
            },
          ].map((item, i) => (
            <li key={i}>
              <strong>{item.title}:</strong>{" "}
              <span className="block mt-1">{item.details}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageTextLayout;

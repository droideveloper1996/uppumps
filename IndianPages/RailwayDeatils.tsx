"use client";

import React from "react";
import Image from "next/image";

const railwayContent: Record<
  string,
  {
    title: string;
    description: string[];
    images?: string[];
  }
> = {
  "rail-wheel": {
    title: "Rail Wheel",
    description: [
      "Forged and cast rail wheels designed for coaches, wagons, and EMUs. Tested for dynamic load, fatigue resistance, and long-term usage.",
      "Manufactured with optimized grain structure and heat treatment for enhanced durability and performance.",
    ],
    images: ["/assets/railway/rail-wheel.jpg"],
  },
  "complete-shell-assembly": {
    title: "Complete Shell Assembly",
    description: [
      "Shell body assemblies fabricated using high-strength steel for coach manufacturing. Includes end wall, roof, and underframe integration.",
      "Engineered for ICF and LHB designs, compliant with Railway Board specifications.",
    ],
    images: ["/assets/railway/shell-assembly.jpg"],
  },
  "complete-coach": {
    title: "Complete Coach",
    description: [
      "Turnkey solution for coach manufacturing including frame, flooring, ducting, and electricals.",
      "We provide full interior and exterior fittings customized per railway specifications.",
    ],
    images: ["/assets/railway/coach.jpg"],
  },
  "small-track-equipment-for-railway": {
    title: "Small Track Equipment",
    description: [
      "Precision-made tools for inspection, maintenance, and alignment such as fish plates, fasteners, and rail gauges.",
      "Built with corrosion-resistant material for long field life.",
    ],
    images: ["/assets/railway/small-track.jpg"],
  },
  "heavy-rail-track-manufacturing-and-consulting": {
    title: "Heavy Rail-track Manufacturing and Consulting",
    description: [
      "Support for sleeper production, ballastless track, and layout design with welding and jig consulting services.",
    ],
    images: ["/assets/railway/track-consulting.jpg"],
  },
  "all-other-small-and-heavy-railway-equipment-and-vehicles": {
    title: "Railway Equipment and Vehicles",
    description: [
      "Carts, trolleys, and bogie testers for rail maintenance and logistics.",
      "Available for both manual and automated systems.",
    ],
    images: ["/assets/railway/heavy-equip.jpg"],
  },
  "dealing-in-robotic-platform-with-remote-and-battery-operated-equipments": {
    title: "Robotic Platform",
    description: [
      "Battery-operated, GPS-enabled robotic systems for inspection and delivery.",
      "Designed for remote access, sensor tracking, and AI-integrated operations.",
    ],
    images: ["/assets/railway/robotic-platform.jpg"],
  },
  "roof-sidewall-underframe-for-coach-and-locomotive": {
    title: "Coach Structure Components",
    description: [
      "Fabrication of roofs, underframes, and sidewalls for coaches and locomotives.",
      "Includes vibration and weather-resistance testing.",
    ],
    images: ["/assets/railway/coach-structure.jpg"],
  },
  "biomass-for-all-types-of-stp-plant": {
    title: "Biomass for STP Plants",
    description: [
      "Eco-friendly biomass solutions for sewage treatment plants in railway colonies.",
      "Organic filtration media and low-maintenance bio-reactors.",
    ],
    images: ["/assets/railway/biomass.jpg"],
  },
};

export default function RailwayDetails({ slug }: { slug: any }) {
  const data = railwayContent[slug];

  if (!data) {
    return (
      <p className="text-center py-10 text-gray-600">
        Railway product not found.
      </p>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">{data.title}</h1>

      {data.images && (
        <div className="grid grid-flow-col auto-cols-fr gap-4 overflow-x-auto sm:overflow-visible mb-6">
          {data.images.map((src, i) => (
            <div
              key={i}
              className="relative min-h-[300px] w-full rounded overflow-hidden shadow"
            >
              <Image
                src={src}
                alt={`${data.title} image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="space-y-4 text-gray-700 text-lg">
        {data.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="mt-12  rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Enquire About: {data.title}
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Product Name (Autofilled) */}
          <div className="col-span-1 sm:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={data.title}
              readOnly
              className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded border border-gray-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded border border-gray-300"
            />
          </div>

          {/* Mobile Number with Country Code */}
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Mobile Number (with Country Code)
            </label>
            <input
              type="tel"
              placeholder="Enter Your Mobile No."
              required
              className="w-full px-4 py-2 rounded border border-gray-300"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Message
            </label>
            <textarea
              placeholder="Type your message or request here..."
              rows={4}
              className="w-full px-4 py-2 rounded border border-gray-300"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

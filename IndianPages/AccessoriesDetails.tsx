"use client";

import React from "react";
import Image from "next/image";

const contentMap: Record<
  string,
  {
    title: string;
    description: string[];
    images?: string[];
  }
> = {
  "connecting-rods": {
    title: "Connecting Rods",
    description: [
      "Connecting rods are essential components in the hand pump assembly, responsible for transmitting mechanical motion from the handle to the pump piston inside the cylinder. U. P. Pumps manufactures connecting rods using high-tensile galvanized iron and stainless steel for maximum durability and corrosion resistance.",
      "Each rod is precision-threaded and coupled with durable fasteners, ensuring a tight seal and minimal wear over time. Our rods are engineered to maintain alignment during pumping, reducing internal friction and improving water delivery efficiency.",
      "Standard lengths are available to match India Mark II and Mark III specifications, while custom sizes can be produced based on project requirements. These rods are rigorously tested for tensile strength and zinc coating consistency to conform to IS:15500 standards.",
    ],
    images: ["/assets/indianPagesImage/accessories/connecting_rods.jpg"],
  },
  valves: {
    title: "Valves",
    description: [
      "Valves are critical to regulating water flow and maintaining the pressure within hand pumps. We manufacture foot valves and check valves using high-quality stainless steel, bronze, and reinforced rubber to ensure leak-proof operation.",
      "Our valves are designed for low maintenance and easy replacement, compatible with all major hand pump models including India Mark II, III, and Afridev. These components play a key role in sustaining consistent water output even under heavy usage.",
      "Each valve undergoes hydraulic testing for backflow resistance and wear protection, and conforms to the Indian BIS and ISO 15500 certifications.",
    ],
    images: ["/assets/indianPagesImage/accessories/valves.jpg"],
  },
  "riser-pipes": {
    title: "Riser Pipes",
    description: [
      "Riser pipes form the vertical water column in hand pumps and play a major role in water delivery efficiency. U. P. Pumps supplies riser pipes fabricated from galvanized iron, stainless steel, and uPVC based on project-specific needs.",
      "Our GI riser pipes are threaded with precision couplers to ensure secure joints that prevent leakage or pipe drop. Stainless steel variants are available for corrosive environments such as coastal and saline areas.",
      "Each riser pipe is tested for pressure endurance and bore alignment, ensuring smooth installation with India Mark II/III or Afridev pumps.",
    ],
    images: ["/assets/indianPagesImage/accessories/riser_pipes.jpg"],
  },
  plungers: {
    title: "Plungers",
    description: [
      "The plunger is the heart of the pumping mechanism, moving within the cylinder to draw water upward. Our plungers are built with nitrile rubber seals and stainless steel stems to offer long-lasting, smooth operation.",
      "Designed for compatibility with Mark II and Mark III hand pumps, our plungers are made for easy installation and minimal field maintenance. The rubber components are oil-resistant and food-grade, ensuring safe potable water extraction.",
      "Field-tested for over 5 lakh cycles, our plungers provide high efficiency in both shallow and deepwell installations.",
    ],
    images: ["/assets/indianPagesImage/accessories/plungers.jpg"],
  },
  cylinders: {
    title: "Cylinders",
    description: [
      "Pump cylinders house the piston and plunger and are the core of any hand pump. U. P. Pumps offers brass-lined cast iron and stainless steel cylinders for India Mark II, III, and Afridev models.",
      "Our cylinders are engineered for precision sealing, high abrasion resistance, and easy disassembly for repairs. Each unit undergoes pressure testing at 200 PSI and is compliant with BIS and UNICEF procurement standards.",
      "We also provide spare O-rings, piston seals, and cylinder covers as part of our maintenance kits to ensure your system remains operational for decades.",
    ],
    images: ["/assets/indianPagesImage/accessories/cylinders.jpg"],
  },
  "foot-valves": {
    title: "Foot Valves",
    description: [
      "Foot valves prevent water from flowing back into the borewell and ensure the pump remains primed. We manufacture both brass and polymer foot valves equipped with rubber washers for a secure seal.",
      "These valves are designed for deepwell applications and function effectively even with high sediment load. The self-closing mechanism ensures minimal backflow, protecting the riser assembly and enhancing pump performance.",
      "Foot valves from U. P. Pumps are suitable for all ISI-marked hand pumps and are certified under ISO 15500.",
    ],
    images: ["/assets/indianPagesImage/accessories/foot_valves.jpg"],
  },
  "head-assemblies": {
    title: "Head Assemblies",
    description: [
      "Our head assemblies are cast from ductile iron or stainless steel for maximum strength and durability. These components house the handle and pivot point and are powder-coated for weather resistance.",
      "Available in configurations for India Mark II, III, and custom variants, our head assemblies feature replaceable bearings, greased joints, and vibration-dampening hardware.",
      "We also provide optional locking systems to prevent misuse in community installations.",
    ],
    images: ["/assets/indianPagesImage/accessories/head_assembly.jpg"],
  },
  "chain-and-handle-sets": {
    title: "Chain & Handle Sets",
    description: [
      "Our chain and handle sets are fabricated using forged steel and designed to resist bending under continuous use. These sets are ergonomically shaped for user comfort and are compatible with all U. P. Pumps hand pumps.",
      "The chains are galvanized or stainless steel as per client requirement, and all pivot joints are lubricated and rust-protected. We also supply bushings and spares for long-term usability.",
      "These components are easy to assemble and can be ordered as standalone sets or as part of full hand pump kits.",
    ],
    images: ["/assets/indianPagesImage/accessories/chain_handle.jpg"],
  },
  "pvc-water-tanks-optional-inclusion-if-applicable": {
    title: "PVC Water Tanks",
    description: [
      "As an optional component in integrated water systems, our PVC tanks are made from food-grade virgin polymer with UV stabilization for outdoor durability.",
      "Available in capacities ranging from 200L to 2000L, our tanks are fitted with ISI-marked inlet/outlet valves, air vents, and overflow mechanisms.",
      "These tanks are compatible with rooftop installations and village-level water storage setups for hand pump-supported communities.",
    ],
    images: ["/assets/indianPagesImage/accessories/pvc_water_tank.jpg"],
  },
  more: {
    title: "More Accessories",
    description: [
      "U. P. Pumps also supplies couplers, sealing kits, gland packs, rubber rings, base plates, and anti-corrosive coatings for maintenance and field repairs.",
      "Custom accessories can be fabricated as per order with batch-level testing and certifications. We support NGOs and water boards with turnkey accessory kits.",
    ],
    images: ["/assets/indianPagesImage/accessories/more_parts.jpg"],
  },
};

export default function AccessoriesDetails({ slug }: { slug: any }) {
  const data = contentMap[slug];

  if (!data) {
    return (
      <p className="text-center py-10 text-gray-600">Accessories not found.</p>
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
              className="relative  min-h-100  w-1/2 rounded overflow-hidden shadow"
            >
              <Image
                src={src}
                alt={`${data.title} image ${i + 1}`}
                fill
                className="object-coer"
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

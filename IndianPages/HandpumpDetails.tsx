// components/HandpumpDetails.tsx
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
  "india-mark-ii": {
    title: "India Mark II",
    description: [
      "The India Mark II hand pump is one of the most widely used deepwell pumps across the globe. Originally designed by UNICEF and the Government of India, it’s renowned for its ruggedness and longevity in rural and semi-urban regions. It can access water from depths of up to 50 meters and is known for its reliability in high-usage settings.",
      "Crafted with galvanized iron riser pipes and stainless steel pump rods, the Mark II ensures corrosion resistance and minimum downtime. Its head assembly, cylinder, and plunger are engineered to withstand frequent usage, making it suitable for high-demand community installations.",
      "Our India Mark II pumps comply with IS:15500 standards and come with customizable handle lengths and installation kits tailored to site-specific conditions.",
    ],
    images: ["/assets/indianPagesImage/handpumps/india_mark_2.png"],
  },
  "india-mark-iii-vlom": {
    title: "India Mark III (VLOM)",
    description: [
      "The India Mark III is a Village Level Operation and Maintenance (VLOM) variant of the traditional hand pump design. Its modular and user-serviceable build allows communities to repair and maintain the pump without specialized tools, making it a preferred choice for NGO and government projects.",
      "This pump is ideal for deeper water tables and features a bottom-supporting cylinder assembly. All components are built with longevity in mind, using high-grade materials like bronze and stainless steel. The simplified design promotes faster servicing, ensuring continuous access to safe drinking water.",
      "It adheres to IS:15500 VLOM specifications and is extensively used in rural water supply schemes funded by international aid agencies.",
    ],
    images: ["/assets/indianPagesImage/handpumps/India_mark_3.webp"],
  },
  "india-mark-ii-and-iii-with-force-lift-attachments": {
    title: "India Mark II & III with Force Lift Attachments",
    description: [
      "Designed to serve regions with unique topographical challenges, this variant incorporates a force-lift mechanism that enables water delivery to higher elevations or storage tanks. Ideal for mountainous and undulating terrains, the Force Lift attachment extends the utility of standard hand pumps.",
      "The design includes additional piping and piston adjustments that enable lifting water up to 8 meters above the pump level. This feature is especially useful in gravity-deficient regions or where tanks are located at a height.",
      "Built using rugged materials to endure pressure fluctuations, this upgrade maintains all the benefits of ISI-marked Mark II and III pumps, while extending their functional range to new verticals.",
    ],
    images: [
      "/assets/indianPagesImage/handpumps/india_mark_2_and_3_with_force_lift_attachments.jpg",
    ],
  },
  "afridev-pumps": {
    title: "Afridev Pumps",
    description: [
      "The Afridev hand pump is designed for long-term sustainability in remote, off-grid communities. It offers high efficiency and ease of repair at the village level, with fewer tools and no complex machinery required. The pump supports water tables up to 45 meters and has a low maintenance cost.",
      "The Afridev features a distinctive head assembly with a protective cover and ergonomic handle. Its unique plunger and valve design ensures a smooth, high-yield performance, and all parts are interchangeable for easy servicing.",
      "This pump is a preferred model under UNICEF, World Bank, and WHO rural water programs due to its low life-cycle cost and excellent field performance.",
    ],
    images: ["/assets/indianPagesImage/handpumps/afridev_hand_pumps.webp"],
  },
  "tara-hand-pumps": {
    title: "Tara Hand Pumps",
    description: [
      "The Tara pump is a light-duty hand pump designed for shallow water wells with a static depth of up to 15 meters. It's widely installed in schools, clinics, and rural households where moderate usage is expected.",
      "Its construction is simple, cost-effective, and user-friendly. The Tara pump's cylinder is installed above ground, which allows for quick inspection and repair, while also reducing contamination risks.",
      "This model is highly recommended for pilot water projects and educational infrastructure requiring clean water access with low investment and minimal maintenance.",
    ],
    images: ["/assets/indianPagesImage/handpumps/tara_hand_pumps.jpg"],
  },
};

export default function HandpumpDetails({ slug }: { slug: string }) {
  const data = contentMap[slug];

  if (!data) {
    return (
      <p className="text-center py-10 text-gray-600">Handpump not found.</p>
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

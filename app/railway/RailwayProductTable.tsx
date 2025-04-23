"use client";

import React from "react";
import Image from "next/image";

const railwayProducts = [
  {
    name: "Rail Wheel",
    image: "/assets/indianPagesImage/railway/Rollingstock_axle.jpg",
  },
  {
    name: "Complete Shell Assembly",
    image: "/assets/indianPagesImage/railway/1product-locomotive-big.jpg",
  },
  {
    name: "Complete Coach",
    image: "/assets/indianPagesImage/railway/book-well-in-advance.webp",
  },
  {
    name: "Small Track Equipment for Railway",
    image: "/assets/indianPagesImage/railway/download (1).jpeg",
  },
  {
    name: "Heavy Rail-track Manufacturing and Consulting",
    image: "/assets/indianPagesImage/railway/download (2).jpeg",
  },
  {
    name: "All Other Small and Heavy Railway Equipment and Vehicles",
    image: "/assets/indianPagesImage/railway/images (4).jpeg",
  },
  {
    name: "Robotic Platform with Remote and Battery Operated Equipments",
    image: "/assets/indianPagesImage/railway/u5-1200x800.jpg",
  },
  {
    name: "Roof, Sidewall, Underframe for Coach and Locomotive",
    image: "/assets/indianPagesImage/railway/336244_1_En_6_Fig15_HTML.png",
  },
  {
    name: "Biomass for All Types of STP Plant",
    image: "/assets/indianPagesImage/railway/sewage-system-24.jpg",
  },
];

export default function RailwayProductTable() {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full bg-white border border-gray-200 shadow rounded-xl overflow-hidden">
        <thead className="bg-blue-600 text-white text-left">
          <tr>
            <th className="px-6 py-3">Sr. No.</th>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Image</th>
          </tr>
        </thead>
        <tbody>
          {railwayProducts.map((item, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-200 hover:bg-gray-50 transition duration-200"
            >
              <td className="px-6 py-4 font-medium text-gray-800">{idx + 1}</td>{" "}
              <td className="px-6 py-4 font-medium text-gray-800">
                {item.name}
              </td>
              <td className="px-6 py-4">
                <div className="relative h-24 w-32 rounded shadow overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

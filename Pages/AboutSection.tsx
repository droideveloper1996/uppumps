"use client";

import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Raleway, Poppins } from "next/font/google";
import second from "../public/assets/worker_image/WhatsApp Image 2025-05-12 at 16.08.17 (1).jpeg";

// Fonts
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const checklist = [
  "High-quality hand pumps and spare parts",
  "Expert team with years of industry experience",
  "Reliable after-sales support",
  "Affordable pricing",
  "Timely delivery and service",
  "Customer Satisfaction Focused",
];

export default function AboutUsSection() {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${poppins.className}`}
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Image Block */}
        <div className="relative flex justify-center items-start min-h-[400px] w-full md:w-1/2 ">
          <Image
            src="/assets/worker_image/WhatsApp Image 2025-05-12 at 16.08.18 (1).jpeg"
            alt="Background office"
            fill
            className="rounded-xl object-cover brightness-75"
          />
        </div>

        {/* Right Content */}
        <div className="text-start w-full md:w-1/2">
          <h4
            className={`text-[#2a6e9e] font-semibold uppercase mb-2 tracking-wider ${poppins.className}`}
          >
            More About Us
          </h4>

          <h2
            className={`text-3xl md:text-4xl font-bold text-[#2a6e9e] mb-4 ${raleway.className}`}
          >
            U. P. PUMPS Pvt. Ltd.
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            Founded in 1991 by the visionary Mr. Rewachand Moorjani in Kanpur,
            U. P. Pumps Pvt. Ltd. began as a small firm with a big mission: to
            provide reliable, high-quality Hand Pumps to communities across
            India.
            <br />
            <br />
            Under the leadership of Mr. Harendra Moorjani, the company expanded
            pan-India, building a product line including India Mark II, Afridev,
            and other customized models known for durability and performance.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {checklist.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-800"
              >
                <FaCheckCircle className="text-[#2a6e9e] w-4 h-4 shrink-0" />
                <span className="text-sm sm:text-base leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link href="/about-us">
            <button className="bg-[#2a6e9e] hover:bg-[#1e5175] text-white px-6 py-2 rounded-full transition-all text-sm sm:text-base shadow">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

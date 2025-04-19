"use client";

import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h4 className="text-blue-600 font-semibold uppercase mb-2">
          More About Us
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          UP PUMPS
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
          Founded in 1991 by the visionary Mr. Rewachand Moorjani in Kanpur, U P
          Pumps Pvt. Ltd. began as a small firm with a big mission: to provide
          reliable, high-quality Hand Pumps to communities across India.
          <br />
          <br />
          Under the leadership of Mr. Harendra Moorjani, who took over the reins
          in 1995, the company expanded its operations pan-India, building a
          comprehensive product line including India Mark II, Afridev, and other
          customized Hand Pumps known for their durability and performance. His
          commitment to quality and customer satisfaction positioned U. P. Pumps
          as a trusted name in the industry.
        </p>

        {/* Checklist */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {checklist.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-800">
              <FaCheckCircle className="text-blue-600 w-4 h-4 shrink-0" />
              <span className="text-sm sm:text-base leading-tight">{item}</span>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <Link href="/about">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all text-sm sm:text-base">
            See More
          </button>
        </Link>
      </div>

      {/* Right Images */}
      <div className="relative w-full flex justify-center items-start min-h-[400px]">
        {/* Background Image - Larger */}
        <div className="absolute top-0 left-0 md:top-8 md:left-8 w-72 md:w-96 rounded-xl overflow-hidden shadow-md z-0">
          <Image
            src="/assets/AboutImage/about-5.webp"
            alt="Background office"
            width={600}
            height={300}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        {/* Foreground Image - Smaller */}
        <div className="relative z-10 w-56 md:w-72 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/assets/AboutImage/about-2.webp"
            alt="Person working"
            width={320}
            height={240}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

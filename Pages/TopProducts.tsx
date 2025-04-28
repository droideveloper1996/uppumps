"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Raleway, Poppins } from "next/font/google";

// Font Imports
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const categories = [
  {
    name: "Deepwell Hand Pumps",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Railway",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Submersible Pumps",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Gi Pipe",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Cycle",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Connecting Rods",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Riser Pipes",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Plungers",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Cylinders",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Foot Valves",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Head Assemblies",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "Chain & Handle Sets",
    image: "/assets/placeholder_image.avif",
  },
  {
    name: "PVC Water Tanks",
    image: "/assets/placeholder_image.avif",
  },
];

export default function TopCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollByAmount = 250;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={`max-w-7xl mx-auto px-4 py-16 ${poppins.className}`}>
      <div className="flex justify-between items-center mb-8">
        <h2
          className={`text-3xl font-bold ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          Top Products
        </h2>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-[#2a6e9e] hover:text-white transition"
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable List */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4 px-2 sm:px-8"
        >
          {categories.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 sm:w-48 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-40 sm:h-44">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="px-3 py-3  font-medium text-gray-700 text-sm sm:text-sm">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-[#2a6e9e] hover:text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

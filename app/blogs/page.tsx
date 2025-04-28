"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Raleway, Poppins } from "next/font/google";

// Font imports
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// 15 Blog Entries Array
const blogs = [
  {
    title: "Choosing the Perfect Stormwater Pumps: A Guide for Flood Control",
    image: "/assets/placeholder_image.avif",
    tag: "General Guidance",
    date: "13-06-2024",
  },
  {
    title: "Maximizing Pump Efficiency: A Simple Optimization Guide",
    image: "/assets/placeholder_image.avif",
    tag: "General Guidance",
    date: "10-06-2024",
  },
  {
    title: "Sweet Success: Harnessing Advanced Pumping in Sugar Industry",
    image: "/assets/placeholder_image.avif",
    tag: "Case Study",
    date: "03-06-2024",
  },
  {
    title: "Industrial Pumps: Maintenance Tips for Long Life",
    image: "/assets/placeholder_image.avif",
    tag: "Maintenance",
    date: "01-06-2024",
  },
  {
    title: "Domestic Water Pumps: Selection & Installation Guide",
    image: "/assets/placeholder_image.avif",
    tag: "Installation",
    date: "28-05-2024",
  },
  {
    title: "How to Increase Pump Life Span with Regular Servicing",
    image: "/assets/placeholder_image.avif",
    tag: "General Guidance",
    date: "25-05-2024",
  },
  {
    title: "Borewell Pumps Explained: Depth, Pressure & Selection",
    image: "/assets/placeholder_image.avif",
    tag: "Product Insight",
    date: "22-05-2024",
  },
  {
    title: "Agricultural Pump Systems: Efficiency Boost Strategies",
    image: "/assets/placeholder_image.avif",
    tag: "Agriculture",
    date: "20-05-2024",
  },
  {
    title: "Water Pumps for Emergency Flood Relief Operations",
    image: "/assets/placeholder_image.avif",
    tag: "Emergency",
    date: "17-05-2024",
  },
  {
    title: "Top Factors to Consider When Buying a Pump",
    image: "/assets/placeholder_image.avif",
    tag: "Buying Guide",
    date: "14-05-2024",
  },
  {
    title: "Submersible vs Surface Pumps: What You Should Know",
    image: "/assets/placeholder_image.avif",
    tag: "Comparison",
    date: "12-05-2024",
  },
  {
    title: "Why Regular Pump Inspections are Crucial for Safety",
    image: "/assets/placeholder_image.avif",
    tag: "Safety",
    date: "10-05-2024",
  },
  {
    title: "Government Tenders for Pumps: Tips to Win",
    image: "/assets/placeholder_image.avif",
    tag: "Business",
    date: "07-05-2024",
  },
  {
    title: "Railway Applications of Specialized Pumps",
    image: "/assets/placeholder_image.avif",
    tag: "Railway",
    date: "05-05-2024",
  },
  {
    title: "Pump Testing Standards: ISI, ISO Explained Simply",
    image: "/assets/placeholder_image.avif",
    tag: "Certifications",
    date: "03-05-2024",
  },
];

export default function BlogCardSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl sm:text-5xl font-bold text-center mb-12 ${raleway.className}`}
        style={{ color: "#2a6e9e" }}
      >
        Our Blogs
      </motion.h1>

      {/* Cards Flex */}
      <div className="flex flex-wrap justify-center gap-8">
        {blogs.map((blog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white w-[320px] rounded-xl shadow-md hover:shadow-lg flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-between flex-grow p-5">
              <h2
                className={`text-lg font-bold text-[#2a6e9e] leading-snug mb-4 ${raleway.className}`}
              >
                {blog.title}
              </h2>

              <div
                className={`flex justify-between items-center text-sm text-slate-600 mt-4 ${poppins.className}`}
              >
                <span className="text-[#2a6e9e] font-semibold">{blog.tag}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

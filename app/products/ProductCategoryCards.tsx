"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  {
    title: "Deepwell Hand Pumps",
    slug: "pump-products",
    image: "/assets/ProductImage/image.png",
    description:
      "ISI-marked Deepwell Hand Pumps built for durability and field-tested in rural and remote regions.",
  },
  {
    title: "Railway",
    slug: "railway-products",
    image: "/assets/ProductImage/railway_parts.png",
    description:
      "High-precision, robust components specially engineered for Indian Railways and industrial requirements.",
  },
];

export default function ProductCategoryCards() {
  const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden border border-slate-200 w-full max-w-[420px] mx-auto transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full h-[250px] overflow-hidden group">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out"
                />
              </motion.div>
            </div>

            {/* Text Section */}
            <div className="p-5 h-[180px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/products/${item.slug}`)}
                className="self-start bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
              >
                Know More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Raleway, Poppins } from "next/font/google";

// Fonts
const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// Images
const images = [
  "/assets/IndianPagesImage/AccessoryParts/water_tank.jpg",
  "/assets/IndianPagesImage/AccessoryParts/water_tank.jpg",
  "/assets/IndianPagesImage/AccessoryParts/water_tank.jpg",
  "/assets/IndianPagesImage/AccessoryParts/water_tank.jpg",
];

// Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const imageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function CatalogueSection() {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${poppins.className}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* 📄 Left Content */}
        <motion.div
          className="w-full md:w-1/2 text-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h4
            className="text-[#2a6e9e] font-semibold uppercase mb-2 tracking-wider"
            variants={fadeInUp}
            custom={0}
          >
            Our Catalogue
          </motion.h4>

          <motion.h2
            className={`text-3xl md:text-4xl font-bold text-[#2a6e9e] mb-4 ${raleway.className}`}
            variants={fadeInUp}
            custom={1}
          >
            Explore a Range of Durable and Reliable Products
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed"
            variants={fadeInUp}
            custom={2}
          >
            At <strong>U. P. Pumps Pvt. Ltd.</strong>, we offer a wide variety
            of handpumps, submersibles, GI pipes, and other industrial solutions
            tailored to your needs. Our catalogue is a showcase of quality
            craftsmanship, durability, and our legacy of trust across India.
            Whether you're a rural community or a government institution, our
            reliable products are built to perform and made to last.
          </motion.p>

          <motion.div variants={fadeInUp} custom={3}>
            <Link href="/catalogue">
              <button className="bg-[#2a6e9e] hover:bg-[#1e5175] text-white px-6 py-2 rounded-full transition-all text-sm sm:text-base shadow">
                See More
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* 🖼️ Right Image Collage */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative w-full h-40 overflow-hidden rounded-xl shadow-md group"
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <div className="relative w-full h-full overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={src}
                    alt={`Catalogue image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

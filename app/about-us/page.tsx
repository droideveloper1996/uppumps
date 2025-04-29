"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Raleway, Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Fonts
const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

// Images
const aboutImages = [
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
  "/assets/placeholder_Image.avif",
];

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" pt-16 overflow-hidden">
      {/* Top Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-4xl sm:text-5xl font-bold ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          About Us
        </motion.h1>

        <motion.div
          className="w-24 h-1 bg-[#2a6e9e] mx-auto mt-7 rounded-full"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5 }}
        />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 mb-20">
        {/* Left - Carousel */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg"
        >
          {aboutImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`About Image ${i}`}
              fill
              className={`object-cover transition-all duration-700 ${
                currentIndex === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </motion.div>

        {/* Right - Text Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {/* <h2
            className={`text-4xl font-bold mb-6 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            U. P. Pumps Pvt. Ltd.
          </h2> */}
          <div className="flex flex-col items-cent space-y-2 mb-6">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#2a6e9e]">
              U. P. Pumps Pvt. Ltd.
            </span>
            <span className="text-lg font-semibold text-[#2a6e9e]">
              Built to Last. Made to Adapt
            </span>
          </div>
          <p
            className={`text-slate-600 mb-4 text-base sm:text-sm leading-relaxed ${poppins.className}`}
          >
            Founded in 1991 by Mr. Rewachand Moorjani in Kanpur, U P Pumps Pvt.
            Ltd. started with a mission: providing reliable, high-quality Hand
            Pumps across India.
          </p>
          <p
            className={`text-slate-600 mb-4 text-base sm:text-sm leading-relaxed ${poppins.className}`}
          >
            Under Mr. Harendra Moorjani’s leadership since 1995, the company
            expanded nationwide with models like India Mark II and Afridev,
            becoming a trusted brand.
          </p>
          <p
            className={`text-slate-600 mb-4 text-base sm:text-sm leading-relaxed ${poppins.className}`}
          >
            Today, the second and third generations – Mr. Harendra Moorjani, Mr.
            Rajat Moorjani, and Mrs. Vagessha Moorjani – continue to innovate,
            expanding into B2B manufacturing and international markets.
          </p>
          <p
            className={`text-slate-600 text-base sm:text-sm leading-relaxed ${poppins.className}`}
          >
            U P Pumps Pvt. Ltd. proudly stands for innovation, integrity, and
            impact—across generations.
          </p>
        </motion.div>
      </div>

      {/* Board of Directors Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`text-4xl sm:text-5xl font-bold ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Board of Directors
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-[#2a6e9e] mx-auto mt-7 rounded-full"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ originX: 0.5 }}
          />
        </div>

        {/* Profile Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "Mr. Harendra Moorjani",
              role: "Managing Director",
              image: "/assets/placeholder_Image.avif",
            },
            {
              name: "Mrs. Neelam Moorjani",
              role: "Director",
              image: "/assets/placeholder_Image.avif",
            },
            {
              name: "Mr. Rajat Moorjani",
              role: "Executive Director",
              image: "/assets/placeholder_Image.avif",
            },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg p-6 w-full sm:w-64 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-[#2a6e9e]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3
                className={`text-lg font-bold mb-1 ${raleway.className}`}
                style={{ color: "#2a6e9e" }}
              >
                {member.name}
              </h3>

              {/* Role */}
              <p className={`text-gray-500 text-sm ${poppins.className}`}>
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mentor Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto bg-[#2a6e9e]/10 border border-[#2a6e9e]/30 rounded-xl p-6"
        >
          <h4
            className={`text-3xl font-semibold mb-3 ${raleway.className}`}
            style={{ color: "#2a6e9e" }}
          >
            Mentor
          </h4>
          <p
            className={`text-slate-600 text-sm sm:text-base leading-relaxed ${poppins.className}`}
          >
            In every decision we make and every value we uphold, we carry
            forward the wisdom of <br /> Late{" "}
            <b className="text-[#2a6e9e]">Shri Lalit Kumar Khanna</b> —our
            mentor, guide, and eternal inspiration.
          </p>
        </motion.div>
      </div>

      {/* Mission / Vision / Values Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-16">
        {[
          {
            title: "Our Vision",
            content:
              "To drive sustainable growth through quality products and responsible innovation, impacting communities globally.",
          },
          {
            title: "Our Mission",
            content:
              "To manufacture superior hand pumps, GI pipes, bicycles, and railway products that empower daily life and infrastructure.",
          },
          {
            title: "Our Values",
            content:
              "Integrity, Excellence, Innovation, and Customer Centricity define our work culture and commitments.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3
              className={`text-xl font-bold mb-3 ${raleway.className}`}
              style={{ color: "#2a6e9e" }}
            >
              {item.title}
            </h3>
            <p
              className={`text-slate-600 text-sm leading-relaxed ${poppins.className}`}
            >
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Continuous Sliding Gallery */}
      <div className="overflow-hidden mb-20">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex gap-6"
        >
          {[...aboutImages, ...aboutImages].map((img, i) => (
            <div
              key={i}
              className="relative min-w-[250px] h-40 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={img}
                alt={`Slide Image ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-20 bg-[#2a6e9e]/80 text-white py-12 px-6 rounded-2xl max-w-5xl mx-auto text-center"
      >
        <h4 className={`text-2xl font-semibold mb-4 ${raleway.className}`}>
          Ready to grow your business with us?
        </h4>
        <p className={`mb-6 ${poppins.className}`}>
          Let’s create something amazing together. Contact our team to get
          started today.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/contact")}
          className={`bg-white text-[#2a6e9e] font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition ${poppins.className}`}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  );
}

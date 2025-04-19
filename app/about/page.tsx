"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Toolbar from "@/Pages/ToolBar";
import Footer from "@/Pages/Footer";

export default function AboutUs() {
  return (
    <section className="bg-[#f5f9ff] pt-28 ">
      <Toolbar />

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 mb-20">
        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/assets/AboutImage/about-5.webp"
            alt="About us"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            About <span className="text-blue-600">Our Company</span>
          </h2>
          <p className="text-slate-600 mb-6 text-lg leading-relaxed">
            We are a team of passionate individuals committed to delivering the
            best digital experiences. With years of expertise in web
            development, design, and marketing, we help businesses grow and
            thrive. Our mission is to build impactful digital products that
            create measurable value for our clients.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Professional and reliable team</li>
            <li>Tailored solutions for every business</li>
            <li>Customer-first mindset</li>
            <li>Proven track record of success</li>
            <li>Ethical and transparent communication</li>
          </ul>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Mission / Vision / Values Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {[
          {
            title: "Our Vision",
            content:
              "To be a global leader in digital transformation by empowering businesses with cutting-edge technology and innovation.",
          },
          {
            title: "Our Mission",
            content:
              "To craft intelligent, user-centric solutions that drive growth, efficiency, and user satisfaction across all industries.",
          },
          {
            title: "Our Values",
            content:
              "Integrity, Innovation, Teamwork, and a relentless pursuit of excellence define how we work and serve our clients.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-20 bg-blue-600 text-white py-10 px-6 rounded-xl max-w-5xl mx-auto text-center"
      >
        <h4 className="text-2xl font-semibold mb-2">
          Ready to grow your business with us?
        </h4>
        <p className="mb-4">
          Let’s create something amazing together. Contact our team to get
          started today.
        </p>
        <button className="bg-white text-blue-600 font-medium px-6 py-2 rounded-full hover:bg-blue-100 transition">
          Contact Us
        </button>
      </motion.div>
      <Footer />
    </section>
  );
}

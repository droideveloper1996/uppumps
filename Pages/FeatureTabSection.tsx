"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMonitor, FiPenTool, FiEye } from "react-icons/fi";
import { MdCode, MdPhoneIphone } from "react-icons/md";
import { FaChrome } from "react-icons/fa";

const tabs = [
  {
    name: "Modisit",
    title: "Voluptatem dignissimos provident",
    points: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trident storacalap.",
    ],
    img: "/assets/Features/features-illustration-1.webp",
  },
  {
    name: "Praesenti",
    title: "Neque exercitationem debitis",
    points: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Provident mollitia neque rerum asperiores dolores quos.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Trideta storacalap.",
    ],
    img: "/assets/Features/features-illustration-2.webp",
  },
  {
    name: "Explica",
    title: "Excepteur sint occaecat",
    points: [
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Excepteur sint occaecat cupidatat non proident.",
    ],
    img: "/assets/Features/features-illustration-3.webp",
  },
];

const features = [
  {
    title: "Use On Any Device",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetur lacinia.",
    icon: <FiMonitor size={24} />,
  },
  {
    title: "Feather Icons",
    desc: "Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat.",
    icon: <FiPenTool size={24} />,
  },
  {
    title: "Retina Ready",
    desc: "Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.",
    icon: <FiEye size={24} />,
  },
  {
    title: "W3c Valid Code",
    desc: "Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.",
    icon: <MdCode size={24} />,
  },
  {
    title: "Fully Responsive",
    desc: "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.",
    icon: <MdPhoneIphone size={24} />,
  },
  {
    title: "Browser Compatibility",
    desc: "Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.",
    icon: <FaChrome size={24} />,
  },
];

export default function FeatureTabSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Tab Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-800">Features</h2>
          <p className="text-slate-600 mt-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
          <div className="inline-flex gap-4 mt-6 bg-slate-100 rounded-full p-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2 rounded-full transition-all text-sm font-medium ${
                  activeTab === index
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-4"
        >
          {/* Left Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              {tabs[activeTab].title}
            </h3>
            <p className="italic text-slate-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="space-y-3 text-slate-700">
              {tabs[activeTab].points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔️</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[1]">
              <Image
                src={tabs[activeTab].img}
                alt="Feature illustration"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Icon Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group flex items-start gap-4 p-4 bg-white rounded-2xl shadow transition hover:bg-blue-600 hover:shadow-2xl"
          >
            <div className="bg-blue-100 p-3 rounded-full text-blue-600 transition group-hover:bg-white group-hover:text-blue-600">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-800 transition group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 transition group-hover:text-blue-100">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}

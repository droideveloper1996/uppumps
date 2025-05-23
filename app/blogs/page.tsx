"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({ weight: ["700", "800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

interface BlogEntry {
  title: string;
  image: string;
  tag: string;
  date: string;
  content: string[];
}

const blogs: BlogEntry[] = [
  {
    title: "Handpumps: A Timeless Solution for Modern Water Challenges",
    image: "/assets/placeholder_Image.jpeg",
    tag: "Handpumps",
    date: "13-06-2024",
    content: [
      "In a world increasingly dependent on electric and digital infrastructure, the handpump stands out as a simple yet powerful reminder of self-reliance and sustainable utility. Far from being obsolete, handpumps are a critical necessity—especially in regions where access to reliable electricity or piped water remains limited or inconsistent.",
      "Hand Pumps operate without electricity, making them ideal for rural and remote areas across both developing and developed countries. From villages in sub-Saharan Africa to underserved pockets of urban sprawl in South Asia, handpumps continue to provide a lifeline—offering clean, safe drinking water with just the effort of a hand.",
      "There are several types of handpumps in use today, each designed for different terrains and water tables. For instance:",
      "The Tara Handpump, known for its ease of use and maintenance, is ideal for shallow wells.",
      "The Afridev Handpump, a community-level solution developed for deeper aquifers, is favored by international development organizations.",
      "Other variants like the India Mark II and III remain among the most widely used globally, with proven durability in some of the most demanding conditions.",
      "At U P Pumps Private Limited, handpump manufacturing has been at the heart of our mission since 1991. Our products are made with the highest-grade materials—including 99% zinc galvanization—to ensure corrosion resistance and long-term performance. In fact, many of the pumps installed during our early years are still in full operation today, having required little to no maintenance over the decades.",
      "With over three decades of trusted government and institutional supply, our commitment to quality, reliability, and accessibility remains unwavering. Our production facility is backed by stringent quality checks, engineering precision, and a deep understanding of water access challenges.",
      "As water insecurity becomes an increasingly global issue, handpumps are no longer just a rural tool—they are a strategic solution for emergency preparedness, sustainable development, and decentralized water access. U P Pumps stands as a trusted name for those seeking high-performance, long-lasting, and eco-friendly water solutions.",
    ],
  },
  {
    title: "G I Pipes: The Backbone of Sustainable Infrastructure",
    image: "/assets/placeholder_Image.jpeg",
    tag: "GI Pipe",
    date: "17-06-2024",
    content: [
      "Galvanized Iron (G I) Pipes may not always be in the spotlight, but they are silently powering some of the most essential industries—construction, water distribution, agriculture, and beyond. In today’s world, where both durability and environmental responsibility are paramount, G I pipes offer a uniquely balanced solution.",
      "These pipes are zinc-coated to prevent corrosion, ensuring strength, safety, and long-term resilience. They are widely used in water supply systems, fire protection, plumbing, and structural applications—especially where strength and longevity cannot be compromised.",
      "While alternatives such as plastic pipes may seem convenient or inexpensive, they come with hidden costs. Plastics degrade over time, leaching microplastics into water systems and ultimately into our bodies and ecosystems. On the other end of the spectrum, copper piping, though durable and more environmentally friendly, is prohibitively expensive for most large-scale projects.",
      "That’s where G I pipes strike the ideal balance—affordable, eco-conscious, and dependable. At U P Pumps Private Limited, our G I pipes are manufactured to exacting standards, ensuring uniformity in coating, pressure resistance, and long-term performance across all applications.",
      "We believe infrastructure should not just serve people—it should also protect the planet. By choosing high-quality G I pipes over cheaper plastic variants, you’re not only investing in longevity and cost-efficiency, but also in a more sustainable and healthier future.",
    ],
  },
  {
    title: "Railway Components: Powering India’s Next Leap in Mobility",
    image: "/assets/placeholder_Image.jpeg",
    tag: "Railway",
    date: "22-06-2024",
    content: [
      "India’s railway system is more than just a means of transport—it is a lifeline that connects the heart of the country. As one of the largest rail networks in the world, Indian Railways supports the movement of millions of people and vast quantities of goods daily. It is critical not just for travel and commerce but also for social and economic mobility.",
      "With increasing urbanization, job migration, and a booming tourism sector, India’s demand for enhanced rail connectivity is at an all-time high. While highway and road construction has seen impressive growth, rail transport remains unmatched in terms of energy efficiency, mass capacity, and geographic reach.",
      "As India envisions smarter, faster, and more inclusive infrastructure, expanding and modernizing the railway system is essential. From daily intercity commuters to logistics providers and travelers, everyone benefits when rail transport is made safer, faster, and more efficient.",
      "At U P Pumps Private Limited, we are proud to play a role in this transformation. As one of the country’s leading metal fabricators, we are now extending our expertise into custom railway parts and components. Our team is equipped to develop tailored metal solutions to support railway expansion—from small fittings to high-volume structural components.",
      "We understand that when it comes to national infrastructure, precision, reliability, and durability are non-negotiable. That’s why our railway products are engineered to meet the highest standards of strength and consistency—built to endure heavy usage and weather the test of time.",
      "With innovation at our core and decades of industrial experience, U P Pumps is ready to contribute meaningfully to India’s journey toward a more connected and economically vibrant future.",
    ],
  },
];

// Inside the component

export default function BlogCardSection() {
  const [activeBlog, setActiveBlog] = useState<BlogEntry | null>(null);

  useEffect(() => {
    if (activeBlog) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // reset on unmount
    };
  }, [activeBlog]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 relative">
      <div className="text-center mb-16">
        <h1
          className={`text-4xl sm:text-5xl font-bold ${raleway.className}`}
          style={{ color: "#2a6e9e" }}
        >
          Our Blogs
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white w-80 rounded-xl shadow-md hover:shadow-lg flex flex-col overflow-hidden"
          >
            <div className="relative w-full h-52">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col grow">
              <h2
                className={`text-lg font-bold text-[#2a6e9e] mb-2 ${raleway.className}`}
              >
                {blog.title}
              </h2>
              <div
                className={`text-sm text-slate-600 mb-3 ${poppins.className}`}
              >
                {blog.tag} • {blog.date}
              </div>
              <button
                onClick={() => setActiveBlog(blog)}
                className="bg-[#2a6e9e] hover:bg-[#1e5175] text-white text-sm py-2 px-4 rounded-full mt-auto"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeBlog && (
          <motion.div
            //   initial={{ x: "100%" }}
            //   animate={{ x: 0 }}
            //   exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full bg-gray-700/40 shadow-xl z-50   flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 p-6 overflow-y-auto shadow-xl border-l border-gray-200"
            >
              <IoIosCloseCircle
                onClick={() => setActiveBlog(null)}
                className="text-gray-800 hover:text-gray-600 mb-4 float-right text-2xl cursor-pointer hover:scale-110 duration-200 hover:rotate-180"
              />
              <h2
                className={`text-2xl font-bold text-[#2a6e9e] mt-6 mb-4 ${raleway.className}`}
              >
                {activeBlog.title}
              </h2>
              <div className="relative w-full h-52 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={activeBlog.image}
                  alt={activeBlog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className={`text-sm text-gray-500 mb-4 ${poppins.className}`}>
                <strong>{activeBlog.tag}</strong> • {activeBlog.date}
              </p>
              <div
                className={`text-sm text-gray-700 space-y-3 ${poppins.className}`}
              >
                {activeBlog.content.map((text, i) =>
                  text.startsWith("•") ? (
                    <li key={i} className="ml-5 list-disc">
                      {text.replace("• ", "")}
                    </li>
                  ) : (
                    <p key={i}>{text}</p>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

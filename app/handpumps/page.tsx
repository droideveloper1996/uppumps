"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NewToolbar from "@/Pages/NewToolbar";
import Footer from "@/Pages/Footer";
import { IoMdCloseCircle } from "react-icons/io";

const handpumpData = [
  {
    title: "India Mark II Hand Pump",
    image: "/assets/indianPagesImage/handpumps/india_mark_2.png",
    overview:
      "India Mark II is one of the most widely used hand pumps across the world for accessing safe drinking water from deep borewells.",
    features: [
      "Designed for deepwell applications (up to 50 meters)",
      "ISI-marked, conforms to IS:15500 (Part 2)",
      "Easy to install and maintain",
      "Galvanized steel riser pipes and bright bar connecting rods",
    ],
    applications: [
      "Ideal for rural and remote areas",
      "Government and NGO water supply schemes",
    ],
  },
  {
    title: "India Mark III (VLOM) Hand Pump",
    image: "/assets/indianPagesImage/handpumps/India_mark_3.webp",
    overview:
      "India Mark III is a Village Level Operation & Maintenance (VLOM) variant of Mark II, allowing villagers to easily maintain and repair the pump with minimal tools.",
    features: [
      "VLOM design for easy servicing at the village level",
      "Stainless steel or galvanized connecting rods available",
      "Low cost of maintenance and long operational life",
      "Deepwell capabilities similar to Mark II",
    ],
    applications: [
      "Perfect for community-driven water systems",
      "Widely adopted in UNICEF and government projects",
    ],
  },
  {
    title: "India Mark II & III with Force Lift Attachments",
    image:
      "/assets/indianPagesImage/handpumps/india_mark_2_and_3_with_force_lift_attachments.jpg",
    overview:
      "Specialized version of India Mark II/III pumps with Force Lift Attachments for delivering water uphill or into overhead tanks.",
    features: [
      "Adds vertical lifting capability (force lift)",
      "Used to transport water from borewell to elevated storage",
      "Compatible with Mark II and III bodies",
      "Preserves manual operation efficiency",
    ],
    applications: [
      "Hilly terrain and multi-storey installations",
      "Water storage for irrigation and school/community use",
    ],
  },
  {
    title: "Afridev Hand Pump",
    image: "/assets/indianPagesImage/handpumps/afridev_hand_pumps.webp",
    overview:
      "The Afridev pump is a medium-depth hand pump developed by UNICEF and widely used across Africa and Asia. Known for its modular design and ease of use.",
    features: [
      "Modular VLOM design",
      "Easy installation and repair without specialized tools",
      "Suitable for depths up to 45 meters",
      "HDPE or galvanized riser pipes",
    ],
    applications: [
      "Ideal for both rural and semi-urban areas",
      "Preferred in community-driven water systems",
    ],
  },
  {
    title: "Tara Hand Pump",
    image: "/assets/indianPagesImage/handpumps/tara_hand_pumps.jpg",
    overview:
      "Tara Hand Pump is a shallow well option ideal for water tables closer to the surface. It's a low-cost and lightweight solution, perfect for schools, homes, and villages.",
    features: [
      "Designed for shallow wells (up to 15 meters)",
      "Lightweight and easy to operate",
      "Plastic or cast iron components",
      "Minimum maintenance required",
    ],
    applications: ["Domestic water use", "School campuses and institutions"],
  },
];

export default function Handpumps() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPump, setSelectedPump] = useState<any>(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleKnowMore = (pump: any) => {
    setSelectedPump(pump);
    setShowModal(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Enquiry:", {
      product: selectedPump.title,
      ...formData,
    });
    alert("Thank you for your enquiry!");
    setShowModal(false);
    setShowFormModal(false);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <section>
      <NewToolbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {handpumpData.map((pump, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative w-full h-64">
              <Image
                src={pump.image}
                alt={pump.title}
                fill
                className="object-contain py-5"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-blue-800">{pump.title}</h3>
              <p className="text-slate-700 text-sm">{pump.overview}</p>
              <button
                onClick={() => handleKnowMore(pump)}
                className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md"
              >
                Know More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Info Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div className="bg-white max-w-4xl w-full mx-4 my-12 h-[90vh] rounded-xl shadow-lg relative flex flex-col ">
              <IoMdCloseCircle
                onClick={() => setShowModal(false)}
                className="text-4xl absolute top-3 right-3 hover:rotate-180 duration-200 hover:scale-110 text-gray-600 hover:text-gray-500"
              />
              <div className="overflow-y-auto p-8 flex-1">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  {selectedPump.title} Details
                </h3>
                <div className="relative w-full h-64 mb-6 ">
                  <Image
                    src={selectedPump.image}
                    alt={selectedPump.title}
                    fill
                    className="object-contain rounded py-10"
                  />
                </div>
                <p className="mb-4 text-gray-700">{selectedPump.overview}</p>

                <h4 className="font-semibold text-blue-700 mb-2">Features:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
                  {selectedPump.features?.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <h4 className="font-semibold text-blue-700 mb-2">
                  Applications:
                </h4>
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  {selectedPump.applications?.map((a: string, i: number) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>

                <div className="mt-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded relative">
                  <strong>Note:</strong> Full catalogue not available online.
                  <br />
                  📧 <strong>uppumpsknp1@gmail.com</strong>
                  <br />
                  📞 <strong>+91 9415127047 / +91 9455598050</strong>
                  <br />
                  🏢 1-B, Dadanagar, Kanpur, UP, 208022
                  <button
                    onClick={() => setShowFormModal(true)}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded absolute right-3 bottom-3"
                  >
                    Product Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Slide-in Form */}
            <AnimatePresence>
              {showFormModal && (
                <div className=" fixed top-0 left-0 h-screen w-screen bg-gray-800/40">
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg z-[999] overflow-y-auto"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">
                        Product Enquiry Form
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 block mb-1">
                            Product Name
                          </label>
                          <input
                            type="text"
                            value={selectedPump.title}
                            readOnly
                            className="w-full px-4 py-2 rounded border bg-gray-100 cursor-not-allowed"
                          />
                        </div>

                        <input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded border"
                        />

                        <input
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded border"
                        />

                        <input
                          name="mobile"
                          placeholder="Mobile (with country code)"
                          value={formData.mobile}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded border"
                        />

                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded border"
                        />

                        <div className="flex justify-between pt-4">
                          <button
                            onClick={() => setShowFormModal(false)}
                            className="bg-red-400 text-white px-6 py-2 rounded hover:bg-red-500"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSubmit}
                            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </section>
  );
}

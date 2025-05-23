"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";

interface PartDetail {
  name: string;
  specification?: string | null;
  image: string;
  Productdescription: string[];
}

const partDetails: PartDetail[] = [
  {
    name: "Head Assembly",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/head_assembly.jpg",
    Productdescription: [
      "The Head Assembly is a critical component of a hand pump system.",
      "Specification: Standard & EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Cylinder Assembly",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/cylinder_assembly_1.jpg",
    Productdescription: [
      "The Cylinder Assembly is a critical component of a hand pump system.",
      "Specification: Standard & EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Upper Valve Assembly",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/upper_valve_guide_1.jpg",
    Productdescription: [
      "The Upper Valve Assembly is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Plunger Valve Assembly",
    specification: "EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/plungers.jpg",
    Productdescription: [
      "The Plunger Valve Assembly is a critical component of a hand pump system.",
      "Specification: EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Lower Valve Assembly",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/lower_valve_assembly.jpg",
    Productdescription: [
      "The Lower Valve Assembly is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Head Box",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/head_box.jpg",
    Productdescription: [
      "The Head Box is a critical component of a hand pump system.",
      "Specification: Standard & EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Handle Standard",
    specification: "Hot Dip Galvanised, EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/handle_standard_1.jpg",
    Productdescription: [
      "The Handle Standard is a critical component of a hand pump system.",
      "Specification: Hot Dip Galvanised, EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Stand",
    specification: "Telescopic, Normal, EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/stand_normal.jpeg",
    Productdescription: [
      "The Stand is a critical component of a hand pump system.",
      "Specification: Telescopic, Normal, EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Water Tank",
    specification: "Optional",
    image: "/assets/IndianPagesImage/AccessoryParts/water_tank.jpg",
    Productdescription: [
      "The Water Tank is a critical component of a hand pump system.",
      "Specification: Optional",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Plunger Rod",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/plungers.jpg",
    Productdescription: [
      "The Plunger Rod is a critical component of a hand pump system.",
      "Specification: Standard & EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Axle",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/axle_1.jpg",
    Productdescription: [
      "The Axle is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Third Plate",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/third_plate_1.jpeg",
    Productdescription: [
      "The Third Plate is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Connecting Rod",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/CR1.png",
    Productdescription: [
      "The Connecting Rod is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Socket",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/socket_1.jpg",
    Productdescription: [
      "The Socket is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Bearing",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/bearing_1.jpg",
    Productdescription: [
      "The Bearing is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Coupler",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/coupler_1.jpeg",
    Productdescription: [
      "The Coupler is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Hex Bolt",
    specification: "M12x40, M12x20",
    image: "/assets/IndianPagesImage/AccessoryParts/hex_bolt_1.jpg",
    Productdescription: [
      "The Hex Bolt is a critical component of a hand pump system.",
      "Specification: M12x40, M12x20",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Hex Nut",
    specification: "M12x1.75",
    image: "/assets/IndianPagesImage/AccessoryParts/hex_nut_1.jpg",
    Productdescription: [
      "The Hex Nut is a critical component of a hand pump system.",
      "Specification: M12x1.75",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "HT Bolt",
    specification: "M10x40",
    image: "/assets/IndianPagesImage/AccessoryParts/ht_bolt_m10x40_1.jpeg",
    Productdescription: [
      "The HT Bolt is a critical component of a hand pump system.",
      "Specification: M10x40",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Nylock Nut",
    specification: "M10",
    image: "/assets/IndianPagesImage/AccessoryParts/nylock_nut_m10_1.png",
    Productdescription: [
      "The Nylock Nut is a critical component of a hand pump system.",
      "Specification: M10",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const CataloguePage = () => {
  const [activePart, setActivePart] = useState<PartDetail | null>(null);

  // Lock scroll when popup is open
  useEffect(() => {
    if (activePart) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [activePart]);

  return (
    <section className="w-full min-h-screen font-poppins ">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-[#2a6e9e] mb-2 text-center font-raleway">
            Product Catalogue – U P Pumps Pvt. Ltd.
          </h2>
          <p className="text-[#49566b] max-w-3xl mx-auto text-center mb-12 text-sm sm:text-base">
            Explore our precision-engineered spare parts designed for durability
            and seamless compatibility with our hand pump models.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partDetails.map((part, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="h-[200px] relative rounded-t-2xl overflow-hidden">
                <Image
                  src={part.image}
                  alt={part.name}
                  fill
                  className="object-fill transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <h5 className="text-lg font-semibold text-[#1a2e45] mb-2 font-raleway">
                  {part.name}
                </h5>
                <p className="text-sm text-[#4b5c6b] mb-4">
                  <strong>Specification:</strong>{" "}
                  {part.specification || "Standard compatible component"}
                </p>
                <button
                  onClick={() => setActivePart(part)}
                  className="bg-[#2a6e9e] hover:bg-[#1e5175] text-white text-sm px-4 py-2 rounded-lg mt-auto font-semibold transition"
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activePart && (
            <motion.div
              //   initial={{ x: "100%" }}
              //   animate={{ x: 0 }}
              //   exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-full bg-gray-700/40 shadow-xl z-50   flex justify-end"
            >
              <motion.div
                // initial={{ opacity: 0, y: 30 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: 30 }}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-full sm:w-[500px] bg-white p-6 overflow-y-auto rounded-l-2xl border-l border-gray-200 "
              >
                <IoIosCloseCircle
                  onClick={() => setActivePart(null)}
                  className="text-gray-800 hover:text-gray-600 mb-4 float-right text-2xl cursor-pointer hover:scale-110 duration-200 hover:rotate-180"
                />
                <h3 className="text-2xl font-bold text-[#2a6e9e] mb-4 font-raleway">
                  {activePart.name}
                </h3>
                <div className="relative w-full h-60 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={activePart.image}
                    alt={activePart.name}
                    fill
                    className="object-fill"
                  />
                </div>
                <p className="text-sm text-[#4b5c6b] mb-4">
                  <strong>Specification:</strong>{" "}
                  {activePart.specification || "Standard compatible component"}
                </p>
                <ul className="list-disc ml-5 text-sm text-[#3b4757] space-y-2">
                  {activePart.Productdescription.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CataloguePage;

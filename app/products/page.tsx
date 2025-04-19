"use client";

import Footer from "@/Pages/Footer";
import Toolbar from "@/Pages/ToolBar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCatalogue() {
  const router = useRouter();
  return (
    <section className="w-full bg-white">
      <Toolbar />
      <div className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Product Catalogue - U. P. Pumps Pvt. Ltd.
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base">
            Explore our high-performance, ISI-marked deepwell hand pumps
            engineered for demanding environments and built to last.
          </p>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Image + Text Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/assets/ProductImage/rajasthan-india-march-9-2019-260nw-1914854317.png"
              alt="Deepwell Hand Pump"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Deepwell Hand Pumps
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              We specialize in the manufacturing of a wide range of ISI-marked
              deep well Hand Pumps designed to perform in demanding field
              conditions. These pumps are built with precision and are
              field-tested for long-term durability and ease of maintenance. Our
              ISI-marked Hand Pumps are designed to withstand heavy usage in
              rural and remote conditions.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              At <strong>U P Pumps Pvt. Ltd.</strong>, we take immense pride in
              our specialized manufacturing of{" "}
              <strong>ISI-marked Deep Well Hand Pumps</strong>, developed
              specifically for use in <em>demanding field environments</em>.
              With decades of experience and engineering precision behind every
              product, our hand pumps are <strong>tested rigorously</strong> to
              meet both urban infrastructure needs and the challenges of remote
              and rural installations.
            </p>
          </motion.div>
        </div>

        {/* Detailed Schedule Descriptions */}
        <div className="mb-10">
          <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
            Standard Deepwell Hand Pumps (ISI Marked)
          </h4>
          <ul className="list-disc pl-6 text-sm text-slate-700 space-y-4">
            <li>
              <strong>Schedule 1:</strong> Standard Hand Pump with normal stand
              assembly (<strong>BBCR</strong>)<br />
              <span className="block mt-1">
                ISI marked Deep WEll Hand Pump MK-II (Standard) conforming to{" "}
                <strong>IS:15500(part 2)/2004</strong> with up-to-date
                amendment, complete with accessories and with 10nos. of
                connecting rod made of bright bar electro galvanized, fitted
                with coupler and with stand assembly. Recommended for use in
                bore wells having 100/125mm nominal bore casing pipe.
              </span>
            </li>
            <li>
              <strong>Schedule 2:</strong> Standard Hand Pump with telescopic
              stand assembly (<strong>BBCR</strong>)<br />
              <span className="block mt-1">
                ISI Marked Deep Well Hand Pump MK-II (Standard) conforming to{" "}
                <strong>IS:15500(part 2)/2004</strong> with up-to-date
                amendment, complete with accessories and with 10nos. of
                connecting rod made of bright bar electro galvanized, fitted
                with coupler and with Telescopic stand assembly. Recommended for
                use in borewells having 150mm nominal bore casing pipe.
              </span>
            </li>
            <li>
              <strong>Schedule 3:</strong> Standard Hand Pump with normal stand
              assembly (<strong>SSCR</strong>)<br />
              <span className="block mt-1">
                ISI marked Deep Well Hand Pump MK-II (Standard) conforming to{" "}
                <strong>IS:15500(part2)/2004</strong> with up-to-date amendment,
                complete with accessories and with 10nos. of connecting rod made
                of stainless steel (grade: 04, Cr-1.8 Ni-10 conforming to
                II:6603/2001 with up-to-date amendment) and fitted with coupler
                and stand assembly. Recommended for use in bore wells having
                100/125mm nominal bore casing pipe.
              </span>
            </li>
            <li>
              <strong>Schedule 4:</strong> Standard Hand Pump with telescopic
              stand assembly (<strong>SSCR</strong>)<br />
              <span className="block mt-1">
                ISI Marked Deep Well Hand Pump MK-II (Standard) conforming to{" "}
                <strong>IS:15500(part2)/2004</strong> with up-to-date amendment,
                complete with accessories with 10 nos. of connecting rod made of
                stainless steel (grade:04, Cr-1.8 Ni-10 conforming to
                II:6603/2001 with up-to-date amendment) and fitted with coupler
                and telescopic assembly recommended for use in borewells having
                100/125 mm nominal bore casing pipe.
              </span>
            </li>
          </ul>
        </div>

        {/* Table Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="overflow-x-auto rounded-xl shadow-lg ring-1 ring-slate-200 bg-white">
            <motion.table
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="min-w-full border-separate border-spacing-0 text-sm text-left text-slate-700"
            >
              <thead className="bg-gradient-to-r from-blue-600 to-sky-500 text-white">
                <tr>
                  {[
                    "Schedule",
                    "Assembly Type",
                    "Rod Material",
                    "Casing Pipe Diameter",
                    "Stand Type",
                    "ISI Specification",
                  ].map((title, i) => (
                    <th
                      key={i}
                      className="px-6 py-4 text-sm font-semibold tracking-wide border-b border-slate-200 whitespace-nowrap"
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    schedule: "Schedule 1",
                    assembly: "Normal Stand",
                    rod: "Bright Bar (BBCR)",
                    casing: "100/125mm",
                    stand: "Normal",
                    spec: "IS:15500 (Part 2)/2004",
                  },
                  {
                    schedule: "Schedule 2",
                    assembly: "Telescopic Stand",
                    rod: "Bright Bar (BBCR)",
                    casing: "150mm",
                    stand: "Telescopic",
                    spec: "IS:15500 (Part 2)/2004",
                  },
                  {
                    schedule: "Schedule 3",
                    assembly: "Normal Stand",
                    rod: "Stainless Steel (SSCR)",
                    casing: "100/125mm",
                    stand: "Normal",
                    spec: "IS:15500 (Part 2)/2004",
                  },
                  {
                    schedule: "Schedule 4",
                    assembly: "Telescopic Stand",
                    rod: "Stainless Steel (SSCR)",
                    casing: "100/125mm",
                    stand: "Telescopic",
                    spec: "IS:15500 (Part 2)/2004",
                  },
                ].map((item, i) => (
                  <motion.tr
                    key={i}
                    whileHover={{
                      scale: 1.01,
                      backgroundColor: "rgba(191, 219, 254, 0.3)",
                      transition: { duration: 0.3 },
                    }}
                    className="transition-all duration-300"
                  >
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.schedule}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.assembly}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 font-semibold text-blue-700">
                      {item.rod}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.casing}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.stand}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.spec}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </motion.div>

        {/* New Section: Extra Deepwell Hand Pumps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
            Extra Deepwell Hand Pumps (ISI Marked)
          </h4>

          <ul className="list-disc pl-5 text-slate-700 text-sm sm:text-base space-y-3 mb-6">
            <li>
              <strong>Schedule 5:</strong> Extra deep Hand Pump with normal
              stand assembly (BBCR) specification: ISI Mark Hot Dip Galvanised
              as per <strong>IS-15500(part2)/2004</strong> with up-to-date
              amendment, complete with accessories and with 20nos. of connecting
              rod made of bright bar electro galvanised, fitted with coupler and
              with Normal Stand assembly.
            </li>
            <li>
              <strong>Schedule 6:</strong> Extra deep Hand Pump with telescopic
              stand assembly (BBCR) specification: ISI Mark Hot Dip Galvanised
              as per <strong>IS-15500(part2)/2004</strong> with up-to-date
              amendment, complete with accessories and with 20nos. of connecting
              rod made with bright bar electro galvanised, fitted with coupler
              and with Telescopic stand assembly.
            </li>
          </ul>

          <div className="overflow-x-auto rounded-xl shadow-lg ring-1 ring-slate-200 bg-white">
            <table className="min-w-full border-separate border-spacing-0 text-sm text-left text-slate-700">
              <thead className="bg-gradient-to-r from-blue-600 to-sky-500 text-white">
                <tr>
                  {[
                    "Schedule",
                    "Assembly Type",
                    "Rod Material",
                    "Rod Quantity",
                    "Stand Type",
                    "ISI Specification",
                  ].map((title, i) => (
                    <th
                      key={i}
                      className="px-6 py-4 text-sm font-semibold tracking-wide border-b border-slate-200 whitespace-nowrap"
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    schedule: "Schedule 5",
                    assembly: "Normal Stand",
                    rod: "Bright Bar (BBCR)",
                    quantity: "20 rods",
                    stand: "Normal",
                    spec: "IS:15500 (Part 2)/2004",
                  },
                  {
                    schedule: "Schedule 6",
                    assembly: "Telescopic Stand",
                    rod: "Bright Bar (BBCR)",
                    quantity: "20 rods",
                    stand: "Telescopic",
                    spec: "IS:15500 (Part 2)/2004",
                  },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-sky-50 transition">
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.schedule}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.assembly}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200 font-semibold text-blue-700">
                      {item.rod}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.stand}
                    </td>
                    <td className="px-6 py-4 border-b border-slate-200">
                      {item.spec}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
            Pump Models Manufactured
          </h4>
          <p className="text-slate-700 text-sm sm:text-base mb-4">
            We produce several globally recognized Hand Pump models, including:
          </p>
          <ul className="list-disc pl-6 text-slate-700 text-sm sm:text-base mb-6 space-y-2">
            <li>
              <strong>India Mark II</strong>
            </li>
            <li>
              <strong>India Mark III (VLOM)</strong>
            </li>
            <li>
              <strong>India Mark II & III with Force Lift Attachments</strong>
            </li>
            <li>
              <strong>Afridev Pumps</strong>
            </li>
            <li>
              <strong>Tara Hand Pumps</strong>
            </li>
          </ul>
          <p className="text-slate-700 text-sm sm:text-base mb-6">
            These pumps are ideal for use in rural and remote regions,
            especially for community-level water supply solutions.
          </p>

          <div className="overflow-x-auto rounded-xl shadow ring-1 ring-slate-200 bg-white">
            <table className="min-w-full border-separate border-spacing-0 text-sm text-left text-slate-700">
              <thead className="bg-gradient-to-r from-blue-600 to-sky-500 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold border-b border-slate-200">
                    Model Name
                  </th>
                  <th className="px-6 py-4 font-semibold border-b border-slate-200">
                    Features / Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-sky-50">
                  <td className="px-6 py-4 border-b border-slate-200">
                    India Mark II
                  </td>
                  <td className="px-6 py-4 border-b border-slate-200">
                    Most widely used deepwell pump
                  </td>
                </tr>
                <tr className="hover:bg-sky-50">
                  <td className="px-6 py-4 border-b border-slate-200">
                    India Mark III (VLOM)
                  </td>
                  <td className="px-6 py-4 border-b border-slate-200">
                    Village Level Operation and Maintenance compatible
                  </td>
                </tr>
                <tr className="hover:bg-sky-50">
                  <td className="px-6 py-4 border-b border-slate-200">
                    India Mark II & III (Force Lift)
                  </td>
                  <td className="px-6 py-4 border-b border-slate-200">
                    Includes force lift attachment for uphill water delivery
                  </td>
                </tr>
                <tr className="hover:bg-sky-50">
                  <td className="px-6 py-4 border-b border-slate-200">
                    Afridev Pump
                  </td>
                  <td className="px-6 py-4 border-b border-slate-200">
                    Designed for easy maintenance, used widely in Africa
                  </td>
                </tr>
                <tr className="hover:bg-sky-50">
                  <td className="px-6 py-4 border-b border-slate-200">
                    Tara Hand Pump
                  </td>
                  <td className="px-6 py-4 border-b border-slate-200">
                    Shallow well, cost-effective solution
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
            Spare Parts and Accessories
          </h4>
          <p className="text-slate-700 text-sm sm:text-base mb-6 max-w-3xl">
            Our spare parts are <strong>manufactured in-house</strong> to ensure
            unmatched compatibility and durability across all Hand Pump models.
          </p>

          <p className=" mb-8 text-gray-600">
            View all spare parts and accessories –{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => router.push("/spare-parts")}
            >
              Click here
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Connecting Rods",
              "Riser Pipes",
              "Plungers",
              "Cylinders",
              "Foot Valves",
              "Head Assemblies",
              "Chain & Handle Sets",
              "PVC Water Tanks (optional inclusion if applicable)",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
              >
                <div className="w-5 h-5 mt-1 bg-blue-600 rounded-full"></div>
                <p className="text-slate-700 text-sm sm:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
}

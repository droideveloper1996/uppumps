"use client";

import { motion } from "framer-motion";
import { FiActivity, FiShare2, FiBarChart2, FiMonitor } from "react-icons/fi";

const services = [
  {
    icon: <FiActivity size={24} />,
    title: "Nesciunt Mete",
    desc: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    icon: <FiShare2 size={24} />,
    title: "Eosle Commodi",
    desc: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    icon: <FiMonitor size={24} />,
    title: "Ledo Markt",
    desc: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    icon: <FiBarChart2 size={24} />,
    title: "Asperiores Commodit",
    desc: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800">Services</h2>
        <p className="text-slate-600 mt-2">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 ease-in-out hover:bg-blue-100"
          >
            <div className="bg-blue-100 text-blue-600 rounded-xl p-3">
              {s.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-blue-800 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm mb-3">{s.desc}</p>
              <a
                href="#"
                className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline transition"
              >
                Read More <span className="ml-1">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

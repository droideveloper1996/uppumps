"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Saul Goodman",
    role: "Ceo & Founder",
    image: "/assets/testimonials/saul.jpg",
    text: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.`,
  },
  {
    name: "Sara Wilsson",
    role: "Designer",
    image: "/assets/testimonials/sara.jpg",
    text: `Export tempor illum tamen malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.`,
  },
  {
    name: "Jena Karlis",
    role: "Store Owner",
    image: "/assets/testimonials/jena.jpg",
    text: `Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.`,
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    image: "/assets/testimonials/matt.jpg",
    text: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.`,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800">Testimonials</h2>
        <p className="text-slate-600 mt-2">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: i * 0.2,
            }}
            className="group bg-white p-6 rounded-xl shadow-sm transition-all duration-500 ease-in-out hover:scale-[1.03] hover:bg-blue-100 hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.image}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-slate-800 group-hover:text-blue-800">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-blue-600">
                  {t.role}
                </p>
                <div className="flex text-yellow-400 mt-1">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                </div>
              </div>
            </div>
            <p className="text-slate-700 group-hover:text-blue-800 text-sm italic relative pl-6 pr-4 leading-relaxed">
              <FaQuoteLeft className="absolute left-0 top-1 text-blue-500" />
              {t.text}
              <FaQuoteRight className="inline-block text-blue-500 ml-1" />
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

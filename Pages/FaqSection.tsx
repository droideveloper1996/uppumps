"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-start">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Have a question? Check out the FAQ
          </h2>
          <p className="text-slate-600 mb-6">
            Maecenas tempus tellus eget condimentum rhoncus sem quam semper
            libero sit amet adipiscing sem neque sed ipsum.
          </p>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 shadow-sm transition-all ${
                active === index ? "bg-white" : "hover:bg-blue-100"
              }`}
            >
              <button
                onClick={() => setActive(index === active ? -1 : index)}
                className="flex justify-between w-full items-center text-left"
              >
                <span
                  className={`text-base font-medium ${
                    active === index ? "text-blue-600" : "text-slate-800"
                  }`}
                >
                  {faq.question}
                </span>
                {active === index ? (
                  <FiChevronDown className="text-blue-500" />
                ) : (
                  <FiChevronRight className="text-gray-400" />
                )}
              </button>

              {active === index && faq.answer && (
                <div className="mt-3 text-sm text-gray-700 transition-opacity duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

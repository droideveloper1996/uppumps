"use client";

import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactTable() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Email & Phone */}
        <div className="mb-8">
          <p className="text-slate-800 text-base sm:text-lg font-semibold flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            Email:
            <a
              href="mailto:uppumpsknp1@gmail.com"
              className="text-blue-600 underline font-medium"
            >
              uppumpsknp1@gmail.com
            </a>
          </p>
          <p className="text-slate-800 text-base sm:text-lg font-semibold flex items-center gap-2 mt-2">
            <FaPhone className="text-blue-600" />
            Phone:{" "}
            <span className="font-normal text-slate-700">
              +91 9415127047 | +91 9455598050
            </span>
          </p>
        </div>

        {/* Office Addresses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base text-slate-800">
          <div>
            <h4 className="font-bold text-blue-700 mb-1">
              Delhi Office (Registered Office):
            </h4>
            <p>
              4866/1,24 Second floor, Harbans Singh street, Ansari road, Darya
              Ganj, New Delhi, Delhi, India - 110002
            </p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 mb-1">Kanpur Office:</h4>
            <p>1-B, Dadanagar, Kanpur, 208022</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 mb-1">Bilaspur Office:</h4>
            <p>
              Village Basiya, Silphari Road, Ph. No. 42, Kh. No. 369/2, Block
              Bilha, Dist. Bilaspur, Bilaspur, Chhattisgarh, 495004
            </p>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 mb-1">Gwalior Office:</h4>
            <p>
              26B, Plot Industrial Area, Maharajpura, Morar, Gwalior, Madhya
              Pradesh, 474020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Raleway, Poppins } from "next/font/google";
import logo from "@/public/assets/logo/logo_with_name.png"; // Update your logo path

// Fonts
const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`${poppins.className}  pt-10 mt-10 border-t border-gray-300`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-sm text-slate-700 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col items- md:items-start ">
          <Image
            src={logo}
            alt="U. P. Pumps Pvt. Ltd. Logo"
            width={250}
            height={80}
            className="rounded-lg mb-4"
          />

          <p className="text-sm leading-relaxed max-w-xs">
            Established in 1991, U. P. Pumps Pvt. Ltd. has proudly evolved into
            one of India’s most trusted and renowned manufacturers of Hand
            Pumps, Galvanized Iron (GI) Pipes, and Railway Components. With a
            legacy rooted in innovation, craftsmanship, and an unwavering
            commitment to quality, we have consistently delivered engineering
            excellence across critical infrastructure sectors.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a6e9e] hover:bg-[#547a94] text-white transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a6e9e] hover:bg-[#547a94] text-white transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a6e9e] hover:bg-[#547a94] text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a6e9e] hover:bg-[#547a94] text-white transition"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a6e9e] hover:bg-[#547a94] text-white transition"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Government Affiliations */}
        <div className="flex flex-col gap-3 ">
          <h3
            className={`text-xl font-bold text-[#2a6e9e] mb-2 ${raleway.className}`}
          >
            Government Clients
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Railway Board</li>
            <li>Chittaranjan Locomotive Works (CLW)</li>
            <li>Banaras Locomotive Works (BLW)</li>
            <li>Patiala Locomotive Works (PLW)</li>
            <li>Rail Coach Factory (RCF)</li>
            <li>Modern Coach Factory (MCF)</li>
            <li>Integral Coach Factory (ICF)</li>
          </ul>
        </div>

        {/* Office Addresses */}
        <div className="flex flex-col gap-5 ">
          <h3
            className={`text-xl font-bold text-[#2a6e9e] mb-2 ${raleway.className}`}
          >
            Our Office & Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First row: Delhi and Kanpur */}
            <div className="text-sm">
              <strong>Delhi Office (Registered Office):</strong>
              <p>
                4866/1, 24 Second Floor, Harbans Singh Street, Ansari Road,
                Darya Ganj, New Delhi - 110002
              </p>
            </div>
            <div className="text-sm">
              <strong>Kanpur Office:</strong>
              <p>1-B, Dadanagar, Kanpur, 208022</p>
            </div>

            {/* Second row: Bilaspur and Gwalior */}
            <div className="text-sm">
              <strong>Bilaspur Office:</strong>
              <p>
                Village Basiya, Silphari Road, Ph. No. 42, Kh. No. 369/2, Block
                Bilha, Dist. Bilaspur, Chhattisgarh - 495004
              </p>
            </div>
            <div className="text-sm">
              <strong>Gwalior Office:</strong>
              <p>
                26B, Plot Industrial Area, Maharajpura, Morar, Gwalior, Madhya
                Pradesh - 474020
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4  text-sm border-t border-gray-300 pt-5">
            <div className="space-y-2">
              <p>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:uppumpslimited@gmail.com"
                  className="text-[#2a6e9e] hover:underline"
                >
                  uppumpslimited@gmail.com
                </a>
              </p>

              <p>
                📞 <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919455598050"
                  className="text-[#2a6e9e] hover:underline"
                >
                  +91 9455598050
                </a>
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-4">
            <Link href="/contact">
              <button className="bg-[#2a6e9e] hover:bg-[#547a94] text-white px-6 py-2 rounded-md transition-all text-sm shadow">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-t border-gray-300 mt-12 pt-6 pb-8 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()}{" "}
        <strong className="text-[#2a6e9e]">U. P. Pumps Pvt. Ltd.</strong>. All
        Rights Reserved
        <br />
        Designed by{" "}
        <a
          href="https://phynlabz.com"
          target="_blank"
          className="text-[#2a6e9e] hover:underline"
        >
          Phynlabz Tech Pvt. Ltd.
        </a>
      </motion.div>
    </motion.footer>
  );
}

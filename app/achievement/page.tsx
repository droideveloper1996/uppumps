"use client";

import React from "react";
import { motion } from "framer-motion";
import NewToolbar from "@/Pages/NewToolbar";
import Footer from "@/Pages/Footer";

export default function AchievementsPage() {
  return (
    <section className="">
      <NewToolbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 text-center "
        >
          Achievements & Recognition
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 space-y-6 text-base sm:text-lg"
        >
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Over 20,00,000 Hand Pumps Supplied
            </h2>
            <p>
              Since 1991, U P Pumps Pvt. Ltd. has manufactured and delivered
              over twenty lakh hand pumps across India—contributing to reliable
              water access in rural and urban regions alike.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              🏅 Awards & Recognition
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Rajya Sabha Udyog Puraskar</strong> – Honoring
                industrial excellence.
              </li>
              <li>
                <strong>Bhartiya Nirman Gaurav Awards</strong> – Celebrating
                contribution to infrastructure.
              </li>
              <li>
                <strong>Special Recognition Award</strong> – Ministry of Small
                Scale Industries.
              </li>
              <li>
                <strong>Prashasti Patra Pratham Puruskar</strong> – Udyog
                Vibhaag Uttar Pradesh.
              </li>
              <li>
                <strong>Excellence Certificate</strong> – Institute of Economic
                Studies.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              📜 Certifications & Accreditations
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>ZED Bronze Certificate – MSME Sustainable (ZED) Scheme</li>
              <li>ISO 9001:2008 – Quality Management Standards</li>
              <li>ISI Mark Certification – Across hand pump models</li>
              <li>
                <strong>BIS Licensed Manufacturer</strong> – All products
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              💼 Financial Recognition
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Silver Category Taxpayer Certificate – Ministry of Finance (Mr.
                Harendra Moorjani)
              </li>
              <li>
                Bronze Category Taxpayer Certificate – Ministry of Finance (Mrs.
                Neelam Moorjani)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              🌐 Global Expansion
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Outreach to Africa, Southeast Asia and USA</li>
              <li>Bulk exports of Afridev & India Mark II in progress</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              🏭 Government & Institutional Clients
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Chittaranjan Locomotive Works (CLW)</li>
              <li>Banaras Locomotive Works (BLW)</li>
              <li>Patiala Locomotive Works (PLW)</li>
              <li>Rail Coach Factory (RCF)</li>
              <li>Modern Coach Factory (MCF)</li>
              <li>Integral Coach Factory (ICF)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              🛠️ Manufacturing Strengths
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>100% in-house production – casting to galvanizing</li>
              <li>20,00,000+ hand pumps produced and deployed</li>
              <li>Support for bulk and custom projects</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              🌟 What Sets Us Apart
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                30+ years of experience with{" "}
                <strong>zero compromise on quality</strong>
              </li>
              <li>Multi-generational leadership and innovation</li>
              <li>Standardized and certified production practices</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              👨‍👩‍👧 Three Generations of Family Leadership
            </h2>
            <p>
              A proudly family-run business, led by the second and third
              generations of the Moorjani family. Our legacy continues through
              tradition, innovation, and values-driven management.
            </p>
          </div>

          <div className="border-t pt-6 mt-10 text-center">
            <p className="text-sm text-slate-500">
              For full catalog access, pricing, or specification sheets—please
              contact us via phone or email.
            </p>
            <p className="text-sm text-slate-500 italic">
              The full repair and handpump spare catalogue is available upon
              direct request.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
}

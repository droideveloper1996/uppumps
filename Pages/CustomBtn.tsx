"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CustomBtnProps {
  text: string;
  href: string;
  className?: string;
}

export default function CustomBtn({
  text,
  href,
  className = "",
}: CustomBtnProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <a
        href={href}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded-full shadow transition-all"
      >
        {text}
      </a>
    </motion.div>
  );
}

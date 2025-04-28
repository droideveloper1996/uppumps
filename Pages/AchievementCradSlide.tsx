"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const achievements = [
  { image: "/assets/Achievement/WhatsApp Image 2025-04-24 at 18.05.06.jpeg" },
  { image: "/assets/Achievement/WhatsApp Image 2025-04-24 at 18.05.25.jpeg" },
  { image: "/assets/Achievement/WhatsApp Image 2025-04-24 at 18.05.47.jpeg" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 08.06.17.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 08.06.48.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 08.07.24.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.36.34.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.36.53.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.37.24.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.37.46.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.38.06.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.38.29.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.38.49.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.39.15.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.39.59.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.40.22.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.40.42.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.41.02.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.41.25.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.41.42.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.42.01.png" },
  { image: "/assets/Achievement/Screenshot 2025-04-26 at 09.42.33.png" },
];

export default function AchievementCardSlide() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  // Infinite scroll logic
  useAnimationFrame((_, delta) => {
    if (isHovered) return;
    const speed = 0.05;
    x.current -= delta * speed;

    const container = containerRef.current;
    if (container) {
      const loopWidth = container.scrollWidth / 2;
      if (-x.current >= loopWidth) x.current = 0;
      container.style.transform = `translateX(${x.current}px)`;
    }
  });

  const handleClick = () => {
    router.push("/achievement");
  };

  const scrollBy = (amount: number) => {
    const container = containerRef.current;
    if (container) {
      const currentX = x.current;
      x.current += amount;
      container.style.transform = `translateX(${x.current}px)`;
    }
  };

  return (
    <section className="w-full overflow-hidden py-12  relative">
      <h2 className="text-2xl font-bold text-center text-[#2a6e9e] mb-6">
        Our Achievement & Rewards
      </h2>

      <motion.div
        className="w-24 h-1 bg-[#2a6e9e] mx-auto mb-10 rounded-full"
        animate={{ scaleX: [1, 1.5, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ originX: 0.5 }}
      />

      {/* Left Arrow */}
      <button
        onClick={() => scrollBy(200)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-blue-600 hover:text-white text-gray-700 p-2 rounded-full transition hidden sm:flex"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scrollBy(-200)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-blue-600 hover:text-white text-gray-700 p-2 rounded-full transition hidden sm:flex"
      >
        <FaChevronRight />
      </button>

      {/* Scrollable Gallery */}
      <motion.div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-6 px-4"
        style={{ willChange: "transform", cursor: "pointer" }}
      >
        {[...achievements, ...achievements].map((item, i) => (
          <div
            key={i}
            onClick={handleClick}
            className="flex-shrink-0 w-40 sm:w-52 h-40 sm:h-52 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <Image
              src={item.image}
              alt={`Achievement ${i + 1}`}
              width={200}
              height={200}
              className="w-full h-full object-fit rounded-xl"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

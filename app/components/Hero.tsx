"use client";

// import old_computer from "@/public/old_computer.png";
import old_computer from "@/public/forest.jpg";

// 1. Updated imports for framer-motion
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import { Ubuntu_Mono } from "next/font/google";
import { Sixtyfour_Convergence } from "next/font/google";
// 4. Removed unused imports (useActionState, useEffect) and kept useState
import { useState } from "react";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});
const novaFonte = Sixtyfour_Convergence({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  // 2. Add motion values to track and smooth the mouse's X position
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, {
    stiffness: 300,
    damping: 25,
  });

  // 3. Handler to update the mouseX motion value
  const handleMouseMove = (e: any) => {
    mouseX.set(e.clientX - 310);
  };

  return (
    <motion.section
      id="hero"
      className={`${ubuntuMonoFont.className} mx-auto  relative px-4  h-screen overflow-hidden flex flex-col justify-center items-center text-left`}
    >
      <div className="w-full h-full absolute -z-1">
        <Image
          alt="Computer Picture"
          className="nodrag w-full h-full opacity-35 object-cover"
          width={900}
          src={old_computer}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="border-3 w-fit mx-auto rounded-2xl border-primary-accent px-4 py-2 text-primary-accent text-lg">
          Desenvolvedor Fullstack
        </div>
        <h1
          id="title"
          // onMouseEnter={() => setShowImage(true)}
          // onMouseLeave={() => setShowImage(false)}
          // onMouseMove={handleMouseMove} // 4. Add mouse move handler
          className={`text-5xl sm:text-7xl font-bold text-primary-accent mt-4 `}
        >
          Witor Tenã
        </h1>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-xl sm:text-5xl w-50 text-terciary-bg text-shadow-lg mt-4 sm:w-150 text-center relative z-10"
      >
        Estudante de Ciência da Computação
      </motion.h2>
      {/* Arrow down icon */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute sm:block bottom-20 sm:pr-8 animate-bounce"
      >
        <SlArrowDown
          size={30}
          strokeWidth={25}
          color="2bc133"
          className="translate-y-8"
        />
        <SlArrowDown
          size={30}
          strokeWidth={25}
          color="2bc133"
          className="translate-y-4"
        />
        <SlArrowDown size={30} strokeWidth={25} color="2bc133" />
      </motion.div>
    </motion.section>
  );
}

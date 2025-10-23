"use client";

import old_computer from "@/public/old_computer.png";
import fun from "@/public/fun.gif";
// 1. Updated imports for framer-motion
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import { Ubuntu_Mono } from "next/font/google";
// 4. Removed unused imports (useActionState, useEffect) and kept useState
import { useState } from "react";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const [showImage, setShowImage] = useState(false);

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
      className={`${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative min-h-screen overflow-hidden flex flex-col justify-center sm:items-center items-start sm:text-left`}
    >
      <div className="translate-y-14 absolute saturate-100 opacity-25 -z-10">
        <Image alt="Computer Picture" width={900} src={old_computer} />
      </div>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="border-3 w-fit sm:mx-auto rounded-2xl border-primary-accent px-4 py-2 text-primary-accent sm:text-2xl">
          Desenvolvedor Fullstack
        </div>
        <h1
          // onMouseEnter={() => setShowImage(true)}
          // onMouseLeave={() => setShowImage(false)}
          // onMouseMove={handleMouseMove} // 4. Add mouse move handler
          className={`text-6xl sm:text-8xl font-bold text-primary-accent mt-4 `}
        >
          Witor Tenã
        </h1>
        {showImage && (
          // 5. Convert to motion.div and apply style
          <motion.div
            className="-translate-y-60 absolute"
            style={{
              left: smoothMouseX, // Use the smoothed X value
              transform: "translateX(-50%)", // Center the image on the cursor
            }}
          >
            <Image alt="Funny Picture" width={60} src={fun} />
          </motion.div>
        )}
      </motion.div>
      <motion.h2
        initial={{ y: +100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="text-2xl sm:text-6xl text-left text-terciary-bg mt-4 sm:w-150 sm:text-center"
      >
        Estudante de Ciência da Computação
      </motion.h2>
      {/* Arrow down icon */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        className="absolute right-0 bottom-20 pr-8 animate-bounce"
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

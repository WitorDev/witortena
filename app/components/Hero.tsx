"use client";

import { useEffect, useState } from "react";
import bg_photo from "@/public/forest.jpg";
import Image from "next/image";
import { Quantico, Ubuntu_Mono } from "next/font/google";
import { HiLocationMarker } from "react-icons/hi";
import { SiNextdotjs, SiPostgresql, SiSpringboot } from "react-icons/si";
import { motion } from "motion/react";
import Link from "next/link";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

const novaFonte = Quantico({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const [isAtTop, setIsAtTop] = useState(true);

  // useEffect(() => {
  //   const onScroll = () => {
  //     setIsAtTop(window.scrollY < 10);
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <section
      id="hero"
      className={`${ubuntuMonoFont.className} mx-auto relative sm:px-4 pt-34 sm:pt-62 pb-12 sm:pb-42 overflow-hidden flex flex-col justify-center items-center text-left`}
    >
      {/* {isAtTop && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="sm:absolute hidden sm:block sm:top-30 w-full max-w-screen-xl mx-auto"
        ></motion.div>
      )} */}

      <div className="text-nowrap flex flex-row gap-3 items-center border-terciary-bg">
        <HiLocationMarker size={14} />
        <p>Brasil - Paraná, Londrina</p>
      </div>

      <div className="w-full h-full absolute -z-1">
        <Image
          alt="Forest background"
          className="nodrag w-full h-full scale-140 sm:scale-114 opacity-35 object-cover"
          width={1800}
          src={bg_photo}
        />
      </div>

      <div className="flex flex-col gap-2 w-full h-full max-w-screen-xl px-4 justify-center">
        <div className="mx-auto text-center">
          <h1
            id="title"
            className={`${novaFonte.className} w-full text-8xl mt-4 font-bold text-primary-accent`}
          >
            Witor Tenã
          </h1>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col-reverse sm:gap-4">
        <h2 className="text-terciary-bg sm:mx-0 mx-auto  sm:text-xl text-shadow-lg relative z-10">
          <b>Ciência da Computação - UniFil</b>
        </h2>

        <div className="flex sm:mx-0 mx-auto gap-4 sm:items-center sm:flex-row flex-col mt-4">
          <div className="w-fit rounded-xl sm:text-md flex flex-row gap-2 items-center text-primary-accent border border-primary-accent px-2 py-1">
            <p>Desenvolvedor Backend</p>
          </div>

          <div className="flex gap-4 items-center sm:justify-center sm:mx-0 mx-auto">
            <SiNextdotjs className="w-8 h-8 text-primary-accent" />
            <SiSpringboot className="w-8 h-8 text-primary-accent" />
            <SiPostgresql className="w-8 h-8 text-primary-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}

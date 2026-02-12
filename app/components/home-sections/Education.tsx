"use client";

import unifil_logo from "@/public/normal_unifil_logo.png";
import Image from "next/image";

import { motion } from "motion/react";
import { Ubuntu_Mono } from "next/font/google";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});
const ubuntuSansMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  return (
    <section
      id="education"
      className={`sm:${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative sm:pb-10 pb-4 flex-col flex gap-8 sm:justify-between`}
    >
      <motion.h1 className="text-3xl font-bold w-full text-center md:text-left max-w-screen-xl pt-20 mx-auto">
        Graduação
      </motion.h1>
      <div className="sm:mt-4 grid md:grid-cols-5 grid-cols-1 sm:grid-rows-1 grid-rows-5 w-fit">
        <motion.div className="md:col-span-1 row-span-2 w-full h-full flex items-center justify-center md:items-start md:justify-start">
          <Image src={unifil_logo} className="max-w-30" alt="Logo da UniFil" />
        </motion.div>
        <div className="md:col-span-4 row-span-3">
          <motion.h1 className="text-lg text-center font-bold mb-2 w-full md:text-left">
            Ciência da Computação
          </motion.h1>
          <motion.p className="mb-3 text-center md:text-left">
            Centro Universitário Filadélfia -
            <span className="font-bold"> UniFil</span>
          </motion.p>
          <motion.p className="text-terciary-bg border mx-auto md:mx-0 h-fit text-center sm:text-left w-fit border-terciary-bg rounded-2xl px-4">
            Fevereiro de 2025 até 2029
          </motion.p>
          <motion.p className="mt-8 text-center md:text-left">
            Graduando em Ciência da Computação (Bacharelado), com foco em
            desenvolvimento de software
          </motion.p>
        </div>
      </div>
    </section>
  );
}

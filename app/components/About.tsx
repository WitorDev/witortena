"use client";

import old_computer_2 from "@/public/old_computer_2.png";
import photo from "@/public/photo.jpg";
import { motion } from "motion/react";
import Image from "next/image";
import { Ubuntu_Mono } from "next/font/google";
import { FaGithubSquare } from "react-icons/fa";

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
    <div id="about" className="bg-secondary-bg">
      <motion.section
        className={`sm:${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative pb-20 md:flex-row-reverse flex-col-reverse flex gap-8 sm:justify-between`}
      >
        <motion.div className="z-10 mt-20 left-0 sm:mx-0 mx-auto">
          <Image
            alt="Witor Tenã"
            className="rounded-lg"
            width={500}
            src={photo}
          />
        </motion.div>
        <motion.div className="mx-auto sm:mx-0 flex flex-col justify-between items-left">
          <div className="">
            <h1 className="text-3xl font-bold w-full sm:text-left max-w-screen-xl pt-20 mx-auto">
              Sobre Mim
            </h1>

            <motion.h1
              id="name"
              className={`${ubuntuSansMonoFont.className} mt-4 mb-4 text-terciary-bg text-lg sm:text-4xl text-left`}
            >
              Witor Tenã
            </motion.h1>
            <p
              id="paragraph"
              className={`${ubuntuSansMonoFont.className} sm:max-w-140 md:text-justify leading-loose mb-4 lg:mb-0`}
            >
              Sou um curioso sobre tecnologia que teve o primeiro contato com a
              programação ainda pequeno. Tudo começou com Python, e até hoje me
              lembro da animação dos meus primeiros passos no meio da
              programação. Desde então, nunca mais parei. O que era apenas
              curiosidade se transformou em um hábito, e agora é minha missão:
              programar, evoluir constantemente e absorver o máximo de
              conhecimento possível nesse universo em constante expansão que é o
              mundo da tecnologia.
            </p>
          </div>
          <motion.div className="flex gap-4 items-center w-fit">
            <a
              id="github"
              href="https://github.com/WitorDev/"
              target="_blank"
              className="text-primary-accent border-2 border-primary-accent hover:bg-primary-accent rounded-md py-1 px-2 hover:cursor-pointer hover:text-secondary-bg font-bold"
            >
              Github
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

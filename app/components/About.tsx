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
        className={`sm:${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative min-h-screen py-8 sm:py-0 sm:flex-row-reverse flex-col-reverse flex gap-8 sm:gap-0 sm:justify-between items-center`}
      >
        <motion.div
          initial={{ opacity: 0.2 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1 }}
          className="z-10 left-0"
        >
          <Image
            alt="Witor Tenã"
            className="rounded-2xl"
            width={500}
            src={photo}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.2 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1 }}
          className="flex gap-8 flex-col justify-start items-left"
        >
          <motion.h1
            id="name"
            className={`${ubuntuSansMonoFont.className} text-xl sm:text-4xl text-left`}
          >
            Witor Tenã
          </motion.h1>
          <motion.p
            id="paragraph"
            className={`${ubuntuSansMonoFont.className} sm:max-w-140 md:text-justify leading-loose text-lg`}
          >
            Sou um curioso sobre tecnologia que teve o primeiro contato com a
            programação ainda pequeno. Tudo começou com Python, e até hoje me
            lembro da animação dos meus primeiros passos no meio da programação.
            Desde então, nunca mais parei. O que era apenas curiosidade se
            transformou em um hábito, e agora é minha missão: programar, evoluir
            constantemente e absorver o máximo de conhecimento possível nesse
            universo em constante expansão que é o mundo da tecnologia.
          </motion.p>
          <motion.div className="flex gap-4 items-center">
            <FaGithubSquare size={35} />
            <a
              id="github"
              href="https://github.com/WitorDev/"
              target="_blank"
              className="text-primary-accent text-lg hover:cursor-pointer hover:text-secondary-accent"
            >
              Github - Witor Tenã
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

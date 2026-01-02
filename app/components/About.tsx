"use client";

import old_computer_2 from "@/public/old_computer_2.png";
import photo from "@/public/photo.jpg";
// import photo from "@/public/mug_shot.jpg";
import { motion } from "motion/react";
import Image from "next/image";
import { Ubuntu_Mono } from "next/font/google";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { HiDocument, HiDocumentDownload } from "react-icons/hi";

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
    <div
      id="about"
      className="sm:bg-gradient-to-br bg-gradient-to-b sm:to-primary-accent/10 to-primary-accent/15 from-secondary-bg border-b-2 border-b-secondary-bg border-t-2 border-primary-bg"
    >
      <section
        className={`sm:${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative pb-20 md:flex-row-reverse flex-col-reverse flex gap-8 sm:justify-between`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="z-10 mt-20 left-0 sm:mx-0 md:mx-0 md:w-fit mx-auto w-full"
        >
          <Image
            alt="Witor Tenã"
            className="rounded-lg nodrag mx-auto"
            width={500}
            src={photo}
          />
        </motion.div>
        <div className="mx-auto sm:mx-0 flex flex-col justify-between items-left">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-3xl font-bold w-full text-center md:text-left max-w-screen-xl pt-20 mx-auto"
            >
              Sobre Mim
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              id="name"
              className={`${ubuntuSansMonoFont.className} mt-4 mb-4 text-terciary-bg w-full mx-auto text-lg  sm:text-4xl text-center md:text-left`}
            >
              Witor Tenã
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              id="paragraph"
              className={`${ubuntuSansMonoFont.className} md:max-w-140 sm:leading-loose leading-7 mb-4 lg:mb-0 w-full mx-auto`}
            >
              Sou um curioso sobre tecnologia que teve o primeiro contato com a
              programação ainda pequeno. Tudo começou com Python, e até hoje me
              lembro da animação dos meus primeiros passos no meio da
              programação. Desde então, nunca mais parei. O que era apenas
              curiosidade se transformou em um hábito, e agora é minha missão:
              programar, evoluir constantemente e absorver o máximo de
              conhecimento possível nesse universo em constante expansão que é o
              mundo da tecnologia.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-4 p-0 m-0 w-full md:mx-0 md:justify-normal flex-row mx-auto sm:translate-0 items-center sm:flex-row md:w-fit"
          >
            <a
              id="github"
              href="https://github.com/WitorDev/"
              target="_blank"
              className="text-primary-accent flex items-center justify-between hover:cursor-pointer hover:text-secondary-accent font-bold"
            >
              <div className="flex justify-center align-middle">
                <FaGithub size={30} className="" />
              </div>
              <p className="py-1 px-2">Github</p>
            </a>
            <a
              id="curriculum_vitae"
              target="_blank"
              rel="noopener noreferrer"
              href="/curriculum.pdf"
              download={"Curriculum_Witor_Tenã"}
              className="text-primary-accent flex ml-4 sm:ml-0 items-center justify-between hover:cursor-pointer hover:text-secondary-accent font-bold"
            >
              <div className="flex justify-center align-middle">
                <HiDocumentDownload size={36} className="" />
              </div>
              <p className="py-1 px-2">Currículo</p>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

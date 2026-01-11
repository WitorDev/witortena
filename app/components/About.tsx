"use client";

import old_computer_2 from "@/public/old_computer_2.png";
import photo from "@/public/photo.jpg";
// import photo from "@/public/mug_shot.jpg";
import { getValueTransition, motion } from "motion/react";
import Image from "next/image";
import { Ubuntu_Mono } from "next/font/google";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { HiDocument, HiDocumentDownload } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";
import Link from "next/link";

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
      className="sm:bg-gradient-to-br bg-gradient-to-b sm:to-primary-accent/10 to-primary-accent/15 from-secondary-bg border-b-2 border-b-primary-bg border-t-2 border-primary-bg"
    >
      <section
        className={`sm:${ubuntuMonoFont.className} max-w-screen-xl justify-between gap-8 px-4 mx-auto relative pb-20 md:flex-row-reverse flex-col-reverse flex sm:justify-between`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="z-10 rounded-lg border border-terciary-accent h-fit md:mt-20 md:min-w-[300px] lg:min-w-[500px] left-0 md:mx-0 md:w-fit mx-auto max-w-[450px]"
        >
          <Image
            alt="Witor Tenã"
            className="rounded-t-lg w-full nodrag mx-auto"
            width={500}
            src={photo}
          />
          <Link href="/#contact" className="">
            <div className="border-t border-t-terciary-accent"></div>
            <div className="text-nowrap bg-primary-bg rounded-lg h-10 sm:h-12 justify-center flex flex-row gap-3 items-center border-b-terciary-accent px-4 py-1 sm:py-2">
              <div className="animate-pulse bg-primary-accent max-w-3 max-h-3 min-w-3 min-h-3 rounded-full"></div>
              <p className="text-sm sm:text-md">Aberto a oportunidades</p>
            </div>
          </Link>
        </motion.div>

        <motion.div className="border bg-primary-bg border-terciary-accent rounded-lg mt-20 md:flex-row-reverse flex-col-reverse flex sm:justify-between">
          <div className="mx-auto sm:mx-0 flex flex-col justify-between items-left">
            <div className="">
              <div className="text-3xl flex align-middle bg-terciary-accent justify-between p-4 border-b-2 rounded-t-md border-terciary-accent font-bold w-full text-center md:text-left max-w-screen-xl mx-auto">
                <h1>Sobre Mim</h1>
                <h2 className="pr-1 pt-1">
                  <BiWorld />
                </h2>
              </div>
              <h1
                id="name"
                className={`${ubuntuSansMonoFont.className} bg-primary-bg pt-6 p-4 text-terciary-bg w-full mx-auto text-lg  sm:text-4xl text-left`}
              >
                Witor Tenã
              </h1>

              <div className="flex flex-col bg-primary-bg">
                <p
                  id="paragraph"
                  className={`${ubuntuSansMonoFont.className} px-4 text-lg w-full mx-auto`}
                >
                  Sou um curioso sobre tecnologia que teve o primeiro contato
                  com a programação ainda pequeno. Tudo começou com Python, e
                  até hoje me lembro da animação dos meus primeiros passos no
                  meio da programação. Desde então, nunca mais parei.
                </p>
                <p
                  id="paragraph"
                  className={`${ubuntuSansMonoFont.className} p-4 text-lg mb-4 lg:mb-0 w-full mx-auto`}
                >
                  O que era apenas curiosidade se transformou em um hábito, e
                  agora é minha missão: programar, evoluir constantemente e
                  absorver o máximo de conhecimento possível nesse universo em
                  constante expansão que é o mundo da tecnologia.
                </p>
              </div>
            </div>
            <div className="flex p-4 pb-8 gap-4 m-0 w-full md:mx-0 md:justify-normal flex-row mx-auto sm:translate-0 items-center sm:flex-row md:w-fit">
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
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

"use client";

import old_computer_2 from "@/public/old_computer_2.png";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { Ubuntu_Mono } from "next/font/google";
import { FaGithubSquare } from "react-icons/fa";
import typeWriter from "@/util/typeAnimation";
import { useEffect, useRef, useState } from "react";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});
const ubuntuSansMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  const typeRef = useRef(null);
  const isInView = useInView(typeRef, { once: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      typeWriter(
        `
        > Witor Tenã`,
        "name",
        10
      );
      setTimeout(() => {
        typeWriter(
          `
          Sou um curioso sobre tecnologia que teve o primeiro contato com a
          programação ainda pequeno. Tudo começou com Python, e até hoje me
          lembro da animação dos meus primeiros passos no meio da programação.
          Desde então, nunca mais parei. O que era apenas curiosidade se
          transformou em um hábito, e agora é minha missão: programar, evoluir
          constantemente e absorver o máximo de conhecimento possível nesse
          universo em constante expansão que é o mundo da tecnologia.`,
          "paragraph",
          5
        );
        setTimeout(() => {
          setIsVisible(true);
          typeWriter(`Github - Witor Tenã`, "github", 5);
        }, 3000);
      }, 500);
    }
  }, [isInView]);

  return (
    <div id="about" className="bg-secondary-bg">
      <motion.section
        className={`sm:${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative min-h-screen flex flex-col justify-center items-center`}
      >
        <div className="flex gap-8 lg:pl-150 flex-col justify-start items-left w-full">
          <motion.h1
            id="name"
            className={`${ubuntuSansMonoFont.className} text-3xl sm:text-4xl text-left`}
          ></motion.h1>
          <motion.p
            id="paragraph"
            ref={typeRef}
            className={`${ubuntuSansMonoFont.className} z-100 md:text-justify min-h-[500px] leading-loose text-lg sm:text-2xl`}
          ></motion.p>
          <motion.div className="flex gap-4 items-center">
            {isVisible && <FaGithubSquare size={35} />}
            <a
              id="github"
              href="https://github.com/WitorDev/"
              target="_blank"
              className="text-primary-accent text-lg sm:text-xl hover:cursor-pointer hover:text-secondary-accent"
            ></a>
          </motion.div>
        </div>
        <div className="-saturate-200 z-10 scale-x-[-1] -translate-x-20 absolute opacity-15 sm:opacity-25 left-0">
          <Image alt="Computer Picture" width={600} src={old_computer_2} />
        </div>
      </motion.section>
    </div>
  );
}

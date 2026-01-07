"use client";

import bg_photo from "@/public/forest.jpg";

import Image from "next/image";
import { Quantico, Ubuntu_Mono } from "next/font/google";
import { HiLocationMarker } from "react-icons/hi";
import { SiNestjs, SiNextdotjs, SiPostgresql } from "react-icons/si";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});
const novaFonte = Quantico({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section
      id="hero"
      className={`${ubuntuMonoFont.className} mx-auto relative sm:px-4 pt-42 sm:pt-62 pb-22 sm:pb-42 overflow-hidden flex flex-col justify-center items-center text-left`}
    >
      <div className="w-full h-full absolute -z-1">
        <Image
          alt="Forest background"
          className="nodrag w-full h-full scale-120 opacity-35 object-cover"
          width={900}
          src={bg_photo}
        />
      </div>
      <div className="flex flex-col gap-2 w-full h-full max-w-screen-xl px-4 justify-center">
        <div className="mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <div className="border bg-primary-bg w-fit rounded-xl flex flex-row gap-3 items-center border-terciary-bg px-4 py-2">
              <div className="animate-pulse bg-primary-accent max-w-3 max-h-3 min-w-3 min-h-3 rounded-full"></div>
              <p>Aberto a oportunidades</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <HiLocationMarker />
              <p>Brasil - Paraná, Londrina</p>
            </div>
          </div>
          <h1
            id="title"
            className={`${novaFonte.className} w-full mx-auto text-6xl mt-4 sm:text-9xl font-bold text-primary-accent`}
          >
            Witor Tenã
          </h1>
        </div>
        <h2 className="text-terciary-bg text-center mx-auto text-lg sm:text-xl text-shadow-lg relative z-10">
          Graduando em Ciência da Computação - UniFil
        </h2>

        <div className="flex mx-auto gap-4 sm:items-center sm:flex-row flex-col mt-4">
          <div className="w-fit rounded-xl flex flex-row gap-2 items-center text-primary-accent border border-primary-accent px-2 py-1">
            <p>Desenvolvedor Backend</p>
          </div>

          {/* Tech icons */}
          <div className="flex gap-4 items-center sm:justify-center mx-auto">
            <SiNextdotjs size={32} className="text-primary-accent" />
            <SiNestjs size={32} className="text-primary-accent" />
            <SiPostgresql size={32} className="text-primary-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}

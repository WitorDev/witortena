"use client";
import { Ubuntu_Mono } from "next/font/google";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import hero_image from "@/public/disk.png";
import secondary_hero_image from "@/public/laptop.png";
import tertiary_hero_image from "@/public/post.png";
import { motion } from "motion/react";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});
const ubuntuFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

type ReportHeroSectionProps = {
  title: string | boolean;
};

export default function ReportHeroSection({ title }: ReportHeroSectionProps) {
  return (
    <section
      id="hero"
      className={`${ubuntuMonoFont.className} border-b-2 border-primary-bg bg-background w-full mx-auto sm:bg-none px-4 relative h-screen overflow-hidden flex flex-col justify-center items-center text-left`}
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="hidden sm:block translate-y-8 absolute saturate-100 opacity-25 z-0"
      >
        {(() => {
          const imageSource =
            (title === "NPI" && hero_image) ||
            (title === "Pensamento Computacional" && secondary_hero_image) ||
            (title === "Blog" && tertiary_hero_image) ||
            hero_image;
          return <Image alt="Computer Picture" width={900} src={imageSource} />;
        })()}
      </motion.div>

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          id="title"
          className={`text-5xl max-w-screen-xl text-center sm:text-7xl font-bold text-primary-accent mt-4`}
        >
          {title}
        </motion.h1>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-xl sm:text-5xl w-50 text-terciary-bg mt-4 sm:w-150 text-center relative z-10"
      >
        {(title == "Pensamento Computacional" && "Monitoria de alunos") ||
          (title == "NPI" && "Pesquisas e estudos em grupo") ||
          (title == "Blog" && "Postagens e artigos")}
      </motion.h2>
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
    </section>
  );
}

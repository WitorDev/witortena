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
      className={`${ubuntuMonoFont.className} border-b-2 border-primary-bg bg-background w-full sm:pt-36 sm:pb-20 pt-32 pb-8`}
    >
      <div className="px-4 max-w-screen-xl mx-auto flex-col md:flex-row flex align-middle">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {(() => {
            const imageSource =
              (title === "NPI" && hero_image) ||
              (title === "Pensamento Computacional" && secondary_hero_image) ||
              (title === "Blog" && tertiary_hero_image) ||
              hero_image;
            return (
              <Image
                alt="Computer Picture"
                className="sm:w-[200px] w-[140px] border-2 mx-auto"
                src={imageSource}
              />
            );
          })()}
        </motion.div>

        <div className="">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            id="title"
            className={`text-4xl w-full max-w-screen-xl sm:text-5xl font-bold text-primary-accent mt-4`}
          >
            {title}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-2xl w-full sm:text-5xl text-terciary-bg mt-4 sm:w-150 z-10"
          >
            {(title == "Pensamento Computacional" && "Monitoria de alunos") ||
              (title == "Núcleo de Práticas de Informática" &&
                "Pesquisas e estudos em grupo") ||
              (title == "Blog" && "Postagens e artigos")}
          </motion.h2>
        </div>
      </div>
    </section>
  );
}

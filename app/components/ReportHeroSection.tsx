"use client";
import { Ubuntu_Mono } from "next/font/google";
import { motion } from "motion/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DescriptionSection from "@/app/components/DescriptionSection";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="hero"
      className={`${ubuntuMonoFont.className} border-b-2 border-primary-bg bg-background w-full`}
    >
      <div className="w-full flex items-center justify-center pt-33"></div>
      <div className="max-w-screen-xl px-4 w-full mx-auto text-left">
        <h1
          id="title"
          className={`text-4xl w-full max-w-screen-xl font-bold text-primary-accent mt-4`}
        >
          {title}
        </h1>
        <h2 className="text-2xl w-full mt-4 sm:w-150 z-10">
          {(title == "Pensamento Computacional" &&
            "Monitoria de alunos - UniFil") ||
            (title == "Núcleo de Práticas de Informática" &&
              "Pesquisas e estudos em grupo - UniFil") ||
            (title == "Blog" && "Postagens e artigos")}
        </h2>
      </div>
      <div className="mt-6 border-t-2 border-primary-bg py-2">
        <div className="px-4 mx-auto max-w-screen-xl">
          <button
            type="button"
            className="flex items-center gap-2 focus:outline-none cursor-pointer text-left"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
          >
            <span> O que é o {title}?</span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              <FaChevronDown size={14} />
            </motion.span>
          </button>
          {isOpen && (
            <div className="mt-4 mb-4 p-4 rounded">
              <DescriptionSection category={title} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

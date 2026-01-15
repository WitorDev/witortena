"use client";
import { Ubuntu_Mono } from "next/font/google";
import { motion } from "motion/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DescriptionSection from "@/app/components/DescriptionSection";
import Link from "next/link";
import { BsHouse } from "react-icons/bs";
import { BiHome, BiHomeAlt, BiSolidHome } from "react-icons/bi";

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
  category?: string | undefined;
};

export default function ReportHeroSection({
  title,
  category,
}: ReportHeroSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero"
      className={`${ubuntuMonoFont.className} border-b-2 border-primary-bg bg-background w-full`}
    >
      <div className="w-full flex items-center justify-center pt-32"></div>
      <div className="px-4 max-w-screen-xl mx-auto">
        <div className="mb-4 pb-2 flex gap-2  whitespace-nowrap overflow-x-auto">
          <Link
            href="/#contributions"
            className="group flex items-center gap-1 w-fit hover:text-secondary-accent transition-colors"
          >
            <div className="flex rounded-lg bg-terciary-accent/30 p-2 items-center justify-center gap-2">
              <BiSolidHome size={20} />
            </div>
          </Link>
          <Link
            href="/reports"
            className="group flex items-center gap-1 w-fit transition-colors"
          >
            <div className="flex items-center justify-center gap-2">
              <span>/</span>
              <span className="group-hover:text-secondary-accent">
                Relatórios
              </span>
            </div>
          </Link>
          <div className="flex items-center justify-center gap-2">
            <span>/</span>
            <span className="text-terciary-bg cursor-default">{category}</span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl px-4 w-full mx-auto text-left">
        <h1
          id="title"
          className="text-3xl w-full max-w-screen-xl font-bold text-primary-accent"
        >
          {title}
        </h1>

        <h2 className="text-xl w-full mt-4 sm:w-150 z-10">
          {(title == "Pensamento Computacional" &&
            "Monitoria de alunos - UniFil") ||
            (title == "Núcleo de Práticas de Informática" &&
              "Pesquisas e estudos em grupo - UniFil") ||
            (title == "Blog" && "Postagens e artigos")}
        </h2>
      </div>

      <div className="mt-6 max-w-screen-xl mx-auto">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="px-4 cursor-pointer mx-4 border-2 py-2 rounded-lg w-fit border-primary-bg"
        >
          <p
            className="flex items-center gap-2 focus:outline-none text-left"
            aria-expanded={isOpen}
          >
            <span>O que é o {title}?</span>

            <motion.span
              className={`inline-block transition-transform duration-200
						 ${isOpen ? "rotate-180" : "rotate-0"}`}
            >
              <FaChevronDown size={14} />
            </motion.span>
          </p>

          {isOpen && (
            <div className="overflow-hidden mt-4 mb-4 p-4 rounded">
              <DescriptionSection category={title} />
            </div>
          )}
        </div>
      </div>

      <div className="h-8 w-full"></div>
    </section>
  );
}

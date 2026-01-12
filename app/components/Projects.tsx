"use client";
import { Ubuntu_Mono } from "next/font/google";
import ProjectCard from "@/app/components/ProjectCard";
import { useRef } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { motion } from "motion/react";
import { projectsData } from "@/app/data/projectsData";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiBlock } from "react-icons/bi";
import { LuBlocks } from "react-icons/lu";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const mobileProjects = projectsData.slice(0, 5);

  const handleScroll = (scrollAmount: number) => {
    trackRef.current?.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const getScrollAmount = () => {
    if (trackRef.current) {
      return trackRef.current.clientWidth * 0.8;
    }
    return 300;
  };

  return (
    <section
      id="projects"
      className={`${ubuntuMonoFont.className} sm:mb-0 relative w-full`}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 md:pt-24">
        <div className="flex justify-between items-center">
          <motion.h1 className="text-3xl font-bold w-full text-center md:text-left">
            Projetos
          </motion.h1>

          <motion.div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleScroll(-getScrollAmount())}
              aria-label="Scroll left"
              className="p-2 rounded-full cursor-pointer border border-terciary-bg hover:bg-primary-accent transition-colors"
            >
              <HiArrowLeft size={25} strokeWidth={1} />
            </button>

            <button
              onClick={() => handleScroll(getScrollAmount())}
              aria-label="Scroll right"
              className="p-2 rounded-full cursor-pointer border border-terciary-bg hover:bg-primary-accent transition-colors"
            >
              <HiArrowRight size={25} strokeWidth={1} />
            </button>
          </motion.div>
        </div>

        {/* Desktop carousel */}
        <motion.div
          ref={trackRef}
          className="hidden md:flex overflow-hidden flex-row items-center gap-8 mt-10 overflow-x-auto snap-always scroll-smooth scrollbar-hide"
        >
          {projectsData.map((project, index) => (
            <div key={index} className="w-96 max-w-full md:flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>

        {/* Mobile list */}
        <motion.div className="flex flex-col items-center gap-8 mt-10 md:hidden">
          {mobileProjects.map((project, index) => (
            <motion.div key={index} className="w-96 max-w-full">
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <Link
          href="/projects"
          className="group mt-8 sm:mx-0 mx-auto text-primary-accent flex items-center gap-1 w-fit text-sm text-muted-foreground hover:text-secondary-accent transition-colors"
        >
          <LuBlocks
            size={22}
            className="mr-1 group-hover:-translate-y-1 transition-transform"
          />
          <span>Ver projetos</span>
        </Link>
      </div>
    </section>
  );
}

"use client";
import { Ubuntu_Mono } from "next/font/google";
import ProjectCard from "@/app/components/ProjectCard";
import project1 from "@/public/project1.png";
import portfoliounifil from "@/public/projectImg/portfolio-unifil.png";
import barrel from "@/public/projectImg/barrel.png";
import notetaker from "@/public/projectImg/notetaker.png";
import bleedout from "@/public/projectImg/bleedout.png";
import symbion from "@/public/projectImg/symbion.png";
import { useRef, useState, useEffect, useCallback } from "react"; // Added useCallback
import {
  HiArrowUpRight,
  HiArrowLeft,
  HiArrowRight,
  HiXMark,
} from "react-icons/hi2";
import { SiThreedotjs } from "react-icons/si";
import { motion } from "motion/react";

export const projectsData = [
  {
    imageSrc: barrel,
    tech: ["Javascript", "Html5", "Css3", "Tailwind", "React", "Framer"],
    description:
      "Uma instalação de ensino de defesa pessoal focada no ensino de sobrevivência urbana e outras habilidades.",
    tag: "Frontend",
    link: "https://barrelorganization.netlify.app/home",
  },
  {
    imageSrc: symbion,
    tech: ["Javascript", "Html5", "Css3", "Tailwind", "React", "Threedotjs"],
    description:
      "Uma empresa B2B especializada em desenvolvimento de software, consultoria de TI e transformação digital.",
    tag: "Frontend",
    link: "https://symbion.netlify.app/",
  },
  {
    imageSrc: notetaker,
    tech: ["Javascript", "Html5", "Css3"],
    description:
      "Um gerenciador de tarefas simples e eficiente construído com Vanilla WEB (JS, HTML e CSS).",
    tag: "Frontend",
    link: "https://witordev.github.io/Note-Taker/",
  },
  {
    imageSrc: portfoliounifil,
    tech: ["Javascript", "Html5", "Css3", "Express", "Nodedotjs", "Ejs"],
    description:
      "O meu antigo portfolio da UniFil, com relatórios de estudo e informações sobre mim e o curso de Ciência da Computação.",
    tag: "Frontend | Backend",
    link: "https://portfolio-unifil.onrender.com/",
  },
  {
    imageSrc: bleedout,
    tech: ["Godotengine"],
    description:
      "Um jogo de tiro 2D top-down onde você deve avançar até o topo do mapa. Desenvolvido usando GDScript na Godot Engine.",
    tag: "Game Dev",
    link: "https://witordev.github.io/BleedOUT/",
  },
];

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // --- ADDED: Escape key handler ---
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOverlayOpen(false);
      }
    },
    [setIsOverlayOpen] // Dependency is stable but good practice
  );

  // --- MODIFIED: Effect to lock body scroll AND listen for Esc key ---
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscapeKey);
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore scroll and remove listener
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOverlayOpen, handleEscapeKey]); // Added handleEscapeKey to dependency array
  // ------------------------------------------------------------------

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
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-3xl font-bold w-full text-center md:text-left"
          >
            Projetos
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="hidden md:flex items-center gap-2"
          >
            <button
              onClick={() => handleScroll(-getScrollAmount())}
              aria-label="Scroll left"
              className="p-2 rounded-full cursor-pointer border border-terciary-bg hover:bg-terciary-accent transition-colors"
            >
              <HiArrowLeft size={25} />
            </button>
            <button
              onClick={() => handleScroll(getScrollAmount())}
              aria-label="Scroll right"
              className="p-2 rounded-full cursor-pointer border border-terciary-bg hover:bg-terciary-accent transition-colors"
            >
              <HiArrowRight size={25} />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          ref={trackRef}
          className="hidden md:flex overflow-hidden flex-row items-center gap-8 mt-10 overflow-x-auto snap-always scroll-smooth scrollbar-hide"
        >
          {projectsData.map((project, index) => (
            <div key={index} className="w-96 max-w-full md:flex-shrink-0">
              <ProjectCard
                imageSrc={project.imageSrc}
                tech={project.tech}
                description={project.description}
                tag={project.tag}
                link={project.link}
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 mt-10 md:hidden"
        >
          {mobileProjects.map((project, index) => (
            <div key={index} className="w-96 max-w-full">
              <ProjectCard
                imageSrc={project.imageSrc}
                tech={project.tech}
                description={project.description}
                tag={project.tag}
                link={project.link}
              />
            </div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          onClick={() => setIsOverlayOpen(true)}
          className="flex md:hidden gap-2 mt-8 text-primary-accent hover:text-secondary-accent hover:cursor-pointer mx-auto"
        >
          <p className="">Ver mais</p>
          <div className="translate-y-1.5">
            <HiArrowUpRight strokeWidth={1} size={15} />
          </div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          onClick={() => setIsOverlayOpen(true)}
          className="hidden md:flex gap-2 mt-8 text-primary-accent hover:text-secondary-accent hover:cursor-pointer"
        >
          <p>Ver mais</p>
          <div className="translate-y-1.5">
            <HiArrowUpRight strokeWidth={1} size={15} />
          </div>
        </motion.button>
      </div>

      {/* --- MODIFIED: Fullscreen Project Overlay --- */}
      {isOverlayOpen && (
        <div
          className="fixed inset-0 z-50 scrollbar-hide h-full w-full flex items-center justify-center sm:p-6 md:p-8 bg-black bg-opacity-90 backdrop-blur-sm" // Changed bg-transparent to bg-black
        >
          <div className="relative w-full scrollbar-hide h-full z-50 bg-background sm:rounded-lg shadow-xl flex flex-col">
            {/* Overlay Header */}
            <div className="flex justify-between scrollbar-hide items-center p-4 border-b border-primary-accent">
              <h2 className="text-2xl  font-bold">Todos os Projetos</h2>
              <button
                onClick={() => setIsOverlayOpen(false)}
                className="p-1 rounded-2xl cursor-pointer"
                aria-label="Close"
              >
                <HiXMark size={25} />
              </button>
            </div>

            {/* Overlay Grid (Scrollable) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              onClick={() => setIsOverlayOpen(true)}
              className="flex-1 scrollbar-hide overflow-y-auto p-4 sm:p-8 md:p-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    imageSrc={project.imageSrc}
                    tech={project.tech}
                    description={project.description}
                    tag={project.tag}
                    link={project.link}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}

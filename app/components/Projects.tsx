"use client";
import { Ubuntu_Mono } from "next/font/google";
import ProjectCard from "@/app/components/ProjectCard";
import project1 from "@/public/project1.png";
import { useRef, useState, useEffect, useCallback } from "react"; // Added useCallback
import {
  HiArrowUpRight,
  HiArrowLeft,
  HiArrowRight,
  HiXMark,
} from "react-icons/hi2";

export const projectsData = [
  {
    imageSrc: project1,
    tech: ["Javascript", "React"],
    description:
      "Website de uma organização ficticia com animações dinâmicas e interação do usuário.",
    tag: "Frontend",
    link: "https://google.com",
  },
  {
    imageSrc: project1,
    tech: ["Typescript", "Nextdotjs"],
    description:
      "Website de uma organização ficticia com animações dinâmicas e interação do usuário.",
    tag: "Frontend",
    link: "https://google.com",
  },
  {
    imageSrc: project1,
    tech: ["Python", "Django"],
    description:
      "Website de uma organização ficticia com animações dinâmicas e interação do usuário.",
    tag: "Frontend",
    link: "https://google.com",
  },
  {
    imageSrc: project1,
    tech: ["Javascript", "Springboot"],
    description:
      "Website de uma organização ficticia com animações dinâmicas e interação do usuário.",
    tag: "Frontend",
    link: "https://google.com",
  },
  {
    imageSrc: project1,
    tech: ["C", "Dotnet"],
    description:
      "Website de uma organização ficticia com animações dinâmicas e interação do usuário.",
    tag: "Frontend",
    link: "https://google.com",
  },
  {
    imageSrc: project1,
    tech: ["Php", "Laravel"],
    description:
      "Website de uma organização ficticia com animações dinâmicas e interação do usuário.",
    tag: "Frontend",
    link: "https://google.com",
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
      return trackRef.current.clientWidth * 0.6;
    }
    return 300;
  };

  return (
    <section
      id="projects"
      className={`${ubuntuMonoFont.className} relative w-full`}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 py-16 md:py-24">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Projetos</h1>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleScroll(-getScrollAmount())}
              aria-label="Scroll left"
              className="p-2 rounded-full border border-gray-600 hover:bg-gray-800 transition-colors"
            >
              <HiArrowLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll(getScrollAmount())}
              aria-label="Scroll right"
              className="p-2 rounded-full border border-gray-600 hover:bg-gray-800 transition-colors"
            >
              <HiArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="hidden md:flex flex-row items-center gap-8 mt-10 overflow-x-auto snap-always scroll-smooth scrollbar-hide"
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
        </div>

        <div className="flex flex-col items-center gap-8 mt-10 md:hidden">
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
        </div>

        <button
          onClick={() => setIsOverlayOpen(true)}
          className="flex md:hidden gap-2 mt-8 text-primary-accent hover:text-secondary-accent hover:cursor-pointer text-xl mx-auto"
        >
          <p>Ver mais</p>
          <div className="translate-y-1.5">
            <HiArrowUpRight strokeWidth={1} size={18} />
          </div>
        </button>

        <button
          onClick={() => setIsOverlayOpen(true)}
          className="hidden md:flex gap-2 mt-8 text-primary-accent hover:text-secondary-accent hover:cursor-pointer text-xl"
        >
          <p>Ver mais</p>
          <div className="translate-y-1.5">
            <HiArrowUpRight strokeWidth={1} size={18} />
          </div>
        </button>
      </div>

      {/* --- MODIFIED: Fullscreen Project Overlay --- */}
      {isOverlayOpen && (
        <div
          className="fixed inset-0 z-50 scrollbar-hide flex items-center justify-center sm:p-6 md:p-8 bg-black bg-opacity-90 backdrop-blur-sm" // Changed bg-transparent to bg-black
        >
          <div className="relative w-full scrollbar-hide max-w-6xl h-[90vh] translate-y-20 bg-background rounded-lg shadow-xl flex flex-col">
            {/* Overlay Header */}
            <div className="flex justify-between scrollbar-hide items-center p-6 border-b border-primary-accent">
              <h2 className="text-2xl  font-bold">Todos os Projetos</h2>
              <button
                onClick={() => setIsOverlayOpen(false)}
                className="p-1 rounded-2xl"
                aria-label="Close"
              >
                <HiXMark size={28} />
              </button>
            </div>

            {/* Overlay Grid (Scrollable) */}
            <div className="flex-1 scrollbar-hide overflow-y-auto p-4 sm:p-8 md:p-12">
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

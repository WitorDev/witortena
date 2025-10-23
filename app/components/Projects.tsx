"use client";
import { Ubuntu_Mono } from "next/font/google";
import ProjectCard from "@/app/components/ProjectCard";
import project1 from "@/public/project1.png";
import { useRef, useState, useLayoutEffect } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion, useScroll, useTransform } from "motion/react";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

const projectsData = [
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

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollDistance, setScrollDistance] = useState(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return;

    const distance: any = track.scrollWidth - sticky.clientWidth;
    setScrollDistance(distance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const scrollX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollDistance * 1.465]
  );

  return (
    <section
      id="projects"
      // Layout classes are removed from here...
      className={`${ubuntuMonoFont.className} relative`}
    >
      {/* === SCROLLY STRUCTURE START === */}
      {/* 1. The tall trigger section (300vh) */}
      <div ref={scrollRef} className="relative h-[300vh]">
        {/* 2. The sticky container (h-screen) */}
        <div
          ref={stickyRef}
          // Changed to flex items-center to vertically center the content block
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center"
        >
          {/* 3. Inner wrapper for all content (Title, Cards, Link) */}
          {/* ...and applied here, inside the sticky container */}
          <div className="flex flex-col w-full max-w-screen-xl mx-auto px-4">
            {/* Title (now inside sticky container) */}
            <div className="flex w-full">
              <h1 className="text-5xl font-bold">Projetos</h1>
            </div>

            {/* 3. The moving track */}
            <motion.div
              ref={trackRef}
              style={{ x: scrollX }}
              className="flex gap-16 mt-10" // Original margin-top
            >
              {projectsData.map((project, index) => (
                <div key={index} className="flex-shrink-0">
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

            {/* "Ver mais" Link (now inside sticky container) */}
            <div className="flex gap-2 mt-4 text-primary-accent hover:text-secondary-accent hover:cursor-pointer text-xl">
              <p>Ver mais</p>
              <div className="translate-y-1.5">
                <HiArrowUpRight strokeWidth={1} size={18} />
              </div>
            </div>
          </div>
          {/* End inner content wrapper */}
        </div>
        {/* End sticky container */}
      </div>
      {/* === SCROLLY STRUCTURE END === */}
    </section>
  );
}

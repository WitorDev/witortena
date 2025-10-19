"use client";
import { Ubuntu_Mono } from "next/font/google";
import ProjectCard from "@/app/components/ProjectCard";
import project1 from "@/public/project1.png";
import { useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Projects() {
  return (
    <section
      id="projects"
      className={`${ubuntuMonoFont.className} justify-center max-w-screen-xl mt-20 px-4 mx-auto relative min-h-screen flex flex-col `}
    >
      <div className="flex w-full">
        <h1 className="text-5xl font-bold">Projetos</h1>
      </div>
      <div className="flex w-full mt-10">
        <div className="no-scrollbar flex gap-16 w-full overflow-x-scroll scroll-smooth snap-proximity">
          <ProjectCard
            imageSrc={project1}
            tech={["Javascript", "React"]}
            description="Website de uma organização ficticia com animações dinâmicas e interação do usuário."
            tag="Frontend"
            link="https://google.com"
          />
          <ProjectCard
            imageSrc={project1}
            tech={["Typescript", "Nextdotjs"]}
            description="Website de uma organização ficticia com animações dinâmicas e interação do usuário."
            tag="Frontend"
            link="https://google.com"
          />
          <ProjectCard
            imageSrc={project1}
            tech={["Python", "Django"]}
            description="Website de uma organização ficticia com animações dinâmicas e interação do usuário."
            tag="Frontend"
            link="https://google.com"
          />
          <ProjectCard
            imageSrc={project1}
            tech={["Javascript", "Springboot"]}
            description="Website de uma organização ficticia com animações dinâmicas e interação do usuário."
            tag="Frontend"
            link="https://google.com"
          />
          <ProjectCard
            imageSrc={project1}
            tech={["C", "Dotnet"]}
            description="Website de uma organização ficticia com animações dinâmicas e interação do usuário."
            tag="Frontend"
            link="https://google.com"
          />
          <ProjectCard
            imageSrc={project1}
            tech={["Php", "Laravel"]}
            description="Website de uma organização ficticia com animações dinâmicas e interação do usuário."
            tag="Frontend"
            link="https://google.com"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-4 text-primary-accent hover:text-secondary-accent hover:cursor-pointer text-xl">
        <p>Ver mais</p>
        <div className="translate-y-1.5">
          <HiArrowUpRight strokeWidth={1} size={18} />
        </div>
      </div>
    </section>
  );
}

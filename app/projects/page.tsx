import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { Ubuntu_Mono } from "next/font/google";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <main
      className={`${ubuntuMonoFont.className} pt-32 max-w-screen-xl mx-auto px-4 mb-24`}
    >
      <div className="flex gap-2 flex-wrap">
        <Link
          href="/#projects"
          className="group flex items-center gap-1 w-fit hover:text-secondary-accent transition-colors"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="group-hover:text-secondary-accent">Início</span>
          </div>
        </Link>
        <div className="flex items-center justify-center gap-2">
          <span>/</span>
          <span className="text-terciary-bg cursor-default">Projetos</span>
        </div>
      </div>

      {/* Header */}
      <div className="mb-10 mt-4 flex justify-between flex-col sm:flex-row gap-2">
        <h1 className="text-3xl font-bold">Projetos</h1>
      </div>

      {/* Projects grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </main>
  );
}

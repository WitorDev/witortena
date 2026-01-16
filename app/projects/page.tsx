import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { Ubuntu_Mono } from "next/font/google";
import Link from "next/link";
import { BsArrowLeftShort, BsBack } from "react-icons/bs";
import { BiArrowBack, BiSolidHome } from "react-icons/bi";
import { FaBackward } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <main
      className={`${ubuntuMonoFont.className} pt-32 max-w-screen-xl mx-auto px-4 mb-24`}
    >
      <div className="pb-2 flex gap-2 flex-wrap">
        <Link
          href="/#projects"
          className="group flex items-center gap-1 w-fit hover:text-secondary-accent transition-colors"
        >
          <div className="flex items-center justify-center gap-2  whitespace-nowrap overflow-x-auto">
            <div className="flex rounded-lg bg-terciary-accent/50 p-2 items-center justify-center gap-2">
              <BiSolidHome className="hidden sm:block" size={20} />
              <BiArrowBack className="block sm:hidden" size={20} />
            </div>
          </div>
        </Link>
        <div className="sm:flex hidden items-center justify-center gap-2">
          <span>/</span>
          <span className="text-terciary-bg cursor-default">Projetos</span>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8 mt-4 flex flex-col justify-between gap-2">
        <h1 className="text-3xl font-bold">Projetos</h1>
        <p className="text-terciary-bg">Projetos pessoais e acadêmicos</p>
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

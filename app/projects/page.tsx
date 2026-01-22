import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { Ubuntu_Mono } from "next/font/google";
import Link from "next/link";
import { BsArrowLeftShort, BsBack } from "react-icons/bs";
import { BiArrowBack, BiSolidHome } from "react-icons/bi";
import { FaBackward } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import Breadcrumbs from "../components/Breadcrumbs";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <main className={`${ubuntuMonoFont.className} bg-secondary-bg pt-32`}>
      <section className="max-w-screen-xl mx-auto px-4">
        <div className="sm:-text-sm flex gap-2 whitespace-nowrap overflow-x-auto">
          <Breadcrumbs />
        </div>

        {/* Header */}
        <div className="mb-8 mt-4 flex flex-col justify-between gap-2">
          <h1 className="text-3xl font-bold">Projetos</h1>
          <p className="text-terciary-bg">Projetos pessoais e acadêmicos</p>
        </div>

        {/* Projects grid */}
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </article>
      </section>
    </main>
  );
}

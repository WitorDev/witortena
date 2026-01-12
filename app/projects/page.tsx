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
      {/* Header */}
      <div className="mb-10 flex justify-between flex-col sm:flex-row-reverse gap-2">
        <Link
          href="/#projects"
          className="group flex items-center gap-1 w-fit text-sm text-muted-foreground hover:text-secondary-accent transition-colors"
        >
          <BsArrowLeftShort
            size={22}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Voltar ao início</span>
        </Link>

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

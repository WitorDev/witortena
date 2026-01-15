import { projectsData } from "@/app/data/projectsData";
import Image, { StaticImageData } from "next/image";
import { Ubuntu_Mono } from "next/font/google";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import IconAndNameServer from "@/app/components/IconAndNameServer";
import {
  BsArrowLeft,
  BsArrowLeftCircle,
  BsArrowLeftShort,
} from "react-icons/bs";
import { DiGithub, DiGithubAlt, DiGithubBadge } from "react-icons/di";
import { BiSolidHome } from "react-icons/bi";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

type Project = {
  imageSrc: StaticImageData;
  tech: string[];
  description: string;
  report: string;
  tags: string[];
  title: string;
  link: string;
  githubLink: string;
  id: number;
};

export default async function Page({ params }: { params: { id: string } }) {
  const pageParams = await params;
  const id = Number(pageParams.id);
  const project: Project = projectsData[id - 1];

  if (!project) {
    return (
      <main
        className={`${ubuntuMonoFont.className} pt-32 max-w-screen-xl mx-auto px-4`}
      >
        <h1 className="text-3xl font-bold text-center">Project not found</h1>
      </main>
    );
  }

  return (
    <main
      className={`${ubuntuMonoFont.className} pt-32 max-w-screen-xl mx-auto px-4 mb-20`}
    >
      <div className="flex flex-col gap-10">
        <div className="items-start flex flex-col-reverse sm:flex-row gap-2 sm:gap-8 justify-between">
          <div className="flex flex-col gap-4">
            <div className="pb-2 flex gap-2  whitespace-nowrap overflow-x-auto">
              <Link
                href="/#projects"
                className="group flex items-center gap-1 w-fit hover:text-secondary-accent transition-colors"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="flex rounded-lg bg-terciary-accent/30 p-2 items-center justify-center gap-2">
                    <BiSolidHome size={20} />
                  </div>
                </div>
              </Link>
              <Link
                href="/projects"
                className="group flex items-center gap-1 w-fit  group transition-colors"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>/</span>
                  <span className="group-hover:text-secondary-accent">
                    Projetos
                  </span>
                </div>
              </Link>
              <div className="flex items-center justify-center gap-2">
                <span>/</span>
                <span className="text-terciary-bg cursor-default">
                  {project.title}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <p
                    key={tag}
                    className="text-terciary-bg border border-terciary-bg rounded-2xl w-max px-4"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-primary-bg rounded-lg w-full overflow-hidden">
            <Image
              src={project.imageSrc}
              alt="Project Picture"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>

          <div className="flex flex-col justify-between bg-primary-bg rounded-lg  p-6">
            <div className="">
              <div className="w-fit">
                <Link
                  href={project.link}
                  target="_blank"
                  className="hover:text-secondary-accent w-fit transition-all"
                >
                  <div className="flex w-fit gap-2 items-center hover:text-secondary-accent text-primary-accent mb-4">
                    <RiExternalLinkLine size={20} />
                    Ver projeto Live
                  </div>
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="hover:text-secondary-accent w-fit transition-all"
                >
                  <div className="flex w-fit gap-2 items-center hover:text-secondary-accent text-primary-accent mb-4">
                    <DiGithubBadge size={20} />
                    Ver repositório no GitHub
                  </div>
                </Link>
              </div>

              <p className="leading-relaxed">{project.description}</p>
            </div>
          </div>
          <article className="flex flex-col justify-between bg-primary-bg rounded-lg p-6">
            <div className="mb-6 flex gap-3 flex-wrap">
              {project.tech.map((name, index) => {
                return (
                  <div key={index}>
                    <IconAndNameServer
                      icon={name}
                      text={name
                        .replace("Godotengine", "GODOT Engine")
                        .replace("Html", "HTML")
                        .replace("Css", "CSS")
                        .replace("css", "CSS")
                        .replace("Ejs", "EJS")
                        .replace("dot", ".")}
                    />
                  </div>
                );
              })}
            </div>
            <hr className="text-terciary-bg mb-4" />
            <h3 className="font-bold text-lg mb-2">Dev Report</h3>
            <p>{project.report}</p>
          </article>
        </div>
      </div>
    </main>
  );
}

import Image, { StaticImageData } from "next/image";
import * as SiIcons from "react-icons/si";
import { RiExternalLinkLine } from "react-icons/ri";
import getColorForTech from "@/util/getColorForTech";

type ProjectCardProps = {
  imageSrc: StaticImageData;
  tech: string[];
  description: string;
  tag: string;
  link: string;
};

export default function ProjectCard({
  imageSrc,
  tech,
  description,
  tag,
  link,
}: ProjectCardProps) {
  return (
    <div className="flex relative w-[300px] sm:w-[500px] flex-col bg-primary-bg text-white">
      <a href={link} target="_blank" className="group">
        <div className="group-hover:opacity-50 transition-all">
          <Image alt="Project Picture" src={imageSrc} />
        </div>
        <div className="absolute right-4 top-4 hover:cursor-pointer group-hover:text-green-500 transition-colors">
          <RiExternalLinkLine size={35} />
        </div>

        <div className="p-4 py-4 sm:p-8">
          <div className="mt-2 flex gap-2 overflow-hidden">
            {tech.map((name, index) => {
              const IconComponent =
                SiIcons[`Si${name}` as keyof typeof SiIcons];
              return (
                <div key={index}>
                  {IconComponent ? (
                    <div style={{ color: getColorForTech(name) }}>
                      <IconComponent size={40} />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xl sm:text-2xl ">{description}</p>
          <p className="mt-8 text-xl text-terciary-bg border border-terciary-bg rounded-2xl w-max px-4">
            {tag}
          </p>
        </div>
      </a>
    </div>
  );
}

import Image, { StaticImageData } from "next/image";
import * as SiIcons from "react-icons/si";
import { RiExternalLinkLine } from "react-icons/ri";
import getColorForTech from "@/util/getColorForTech";
import { motion, useMotionValue, useSpring } from "framer-motion";

type ProjectCardProps = {
  imageSrc: StaticImageData;
  tech: string[];
  description: string;
  tag: string;
  link: string;
  delayValue?: number;
  title: string;
};

export default function ProjectCard({
  imageSrc,
  tech,
  description,
  tag,
  link,
  delayValue,
  title,
}: ProjectCardProps) {
  return (
    <div className="flex relative hover:border-secondary-accent w-full sm:w-fit hover:bg-secondary-bg border border-transparent rounded-lg transiiton-all flex-col sm:min-h-110 bg-primary-bg text-white">
      <a href={link} target="_blank" className="group">
        <div className="group-hover:opacity-50 transition-all">
          <Image
            alt="Project Picture"
            className="rounded-t-lg"
            src={imageSrc}
          />
        </div>
        <div className="absolute right-4 top-4 hover:cursor-pointer  group-hover:text-green-500 transition-colors">
          <RiExternalLinkLine size={25} />
        </div>

        <div className="p-4 h-min py-4 sm:p-4">
          <h1 className="text-lg font-bold pb-1">{title}</h1>
          <div className="mt-2 flex gap-2 overflow-hidden">
            {tech.map((name, index) => {
              const IconComponent =
                SiIcons[`Si${name}` as keyof typeof SiIcons];
              return (
                <div key={index}>
                  {IconComponent ? (
                    <div style={{ color: getColorForTech(name) }}>
                      <IconComponent size={30} />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-between">
            <p className="mt-4 ">{description}</p>
            <p className="mt-8 text-terciary-bg border border-terciary-bg rounded-2xl w-max px-4">
              {tag}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

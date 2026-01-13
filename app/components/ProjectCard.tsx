import Image, { StaticImageData } from "next/image";
import * as SiIcons from "react-icons/si";
import { RiExternalLinkLine } from "react-icons/ri";
import getColorForTech from "@/util/getColorForTech";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

type ProjectCardProps = {
  imageSrc: StaticImageData;
  tech: string[];
  description: string;
  tags: string[];
  title: string;
  link: string;
  id: number;
};

export default function ProjectCard({
  imageSrc,
  tech,
  description,
  tags,
  title,
  id,
}: ProjectCardProps) {
  return (
    <div className="flex relative transition-all hover:border-secondary-accent w-full sm:w-fit hover:bg-secondary-bg border border-transparent rounded-lg transiiton-all flex-col sm:min-h-110 bg-primary-bg text-white">
      <Link href={"/projects/" + id} className="group">
        <div className="group-hover:opacity-50 transition-all">
          <Image
            alt="Project Picture"
            className="rounded-t-lg"
            src={imageSrc}
          />
        </div>

        <div className="p-4 h-min py-4 sm:p-4">
          {/* <div className="pb-2 text-primary-accent group-hover:text-secondary-accent flex gap-2 hover:cursor-pointer transition-all">
            <p>Ver projeto...</p>
          </div> */}
          <h1 className="text-lg font-bold pb-1">{title}</h1>
          <div className="mt-2 flex gap-2 overflow-hidden">
            {tech.map((name, index) => {
              const IconComponent =
                SiIcons[`Si${name}` as keyof typeof SiIcons];

              if (!IconComponent) return null;

              return (
                <div
                  key={index}
                  className="transition-all"
                  style={{ color: getColorForTech(name) }}
                  title={name}
                >
                  <IconComponent size={30} />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col justify-between">
            <p className="mt-4 ">{description}</p>
            <div className="flex gap-2 overflow-clip max-w-78">
              {tags.map((tag) => (
                <p
                  key={tag}
                  className="mt-8 text-terciary-bg border border-terciary-bg rounded-2xl w-max px-4"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

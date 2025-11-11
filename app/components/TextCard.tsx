"use client";

import { RiExternalLinkLine } from "react-icons/ri";
import { motion } from "motion/react";

type TextCardProps = {
  title: string;
  status: string;
  description: string;
  info: string;
  link?: string;
};

export default function TextCard({
  title,
  status,
  description,
  info,
  link,
}: TextCardProps) {
  return (
    <motion.div
      initial={{ y: 100, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      className={`${
        link && "hover:border-secondary-accent hover:bg-secondary-bg"
      } shadow-black/20 shadow-md border relative transition-all border-primary-accent rounded-lg bg-primary-bg group`}
    >
      {link ? (
        <a href={link} target="_blank">
          <div
            className={`${
              link && "hover:cursor-pointer"
            } flex flex-col gap-6 p-8 pb-12 justify-between h-full`}
          >
            <div>
              <div className="flex gap-4 mb-6 flex-col">
                <h1 className="text-2xl">{title}</h1>
                <p className="text-lg text-terciary-bg">{status}</p>
              </div>
              <div className="flex gap-4 flex-col">
                <p className="text-lg">{description}</p>
              </div>
            </div>
            <div>
              <p className="text-xl text-terciary-bg border border-terciary-bg rounded-2xl w-max px-4">
                {info}
              </p>
            </div>
          </div>

          <div className="absolute top-8 right-8 text-white group-hover:text-green-500 transition-colors">
            <RiExternalLinkLine size={35} />
          </div>
        </a>
      ) : (
        <div
          className={`${
            link && "hover:cursor-pointer"
          } flex flex-col gap-6 p-8 pb-12 justify-between h-full`}
        >
          <div>
            <div className="flex gap-4 mb-6 flex-col">
              <h1 className="text-2xl">{title}</h1>
              <p className="text-lg text-terciary-bg">{status}</p>
            </div>
            <div className="flex gap-4 flex-col">
              <p className="text-lg">{description}</p>
            </div>
          </div>
          <div>
            <p className="text-lg sm:text-xl text-terciary-bg border border-terciary-bg rounded-2xl py-2 sm:py-0 sm:w-max px-4">
              {info}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

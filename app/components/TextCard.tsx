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
      whileHover={link ? { scale: 1.03 } : undefined}
      initial={{ y: 100, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      whileInView={{ y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="border relative border-primary-accent bg-primary-bg p-8 pb-12 group"
    >
      <div
        className={`${
          link && "hover:cursor-pointer"
        } flex flex-col gap-6 justify-between h-full`}
      >
        <div>
          <div className="flex gap-4 mb-6 flex-col">
            <h1 className="text-4xl">{title}</h1>
            <p className="text-2xl text-terciary-bg">{status}</p>
          </div>
          <div className="flex gap-4 flex-col">
            <p className="text-2xl">{description}</p>
          </div>
        </div>
        <div>
          <p className="text-xl text-terciary-bg border border-terciary-bg rounded-2xl w-max px-4">
            {info}
          </p>
        </div>
      </div>
      {link && (
        <div className="absolute top-8 right-8 text-white group-hover:text-green-500 transition-colors">
          <a href={link} target="_blank">
            <RiExternalLinkLine size={35} />
          </a>
        </div>
      )}
    </motion.div>
  );
}

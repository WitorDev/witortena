"use client";

import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import { motion } from "motion/react";

type TextCardProps = {
  title: string;
  status: string;
  description: string;
  info: string;
  link?: string;
  delayValue?: number;
};

export default function TextCard({
  title,
  status,
  description,
  info,
  link,
  delayValue,
}: TextCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delayValue || 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className={`${
        link && "hover:border-secondary-accent hover:bg-secondary-bg"
      } shadow-black/20 shadow-md border relative border-primary-accent rounded-lg bg-primary-bg group`}
    >
      {link ? (
        <Link href={link}>
          <div
            className={`${
              link && "hover:cursor-pointer"
            } flex flex-col gap-6 p-8 pb-12 justify-between h-full`}
          >
            <div>
              <div className="flex gap-4 mb-6 flex-col">
                <h1 className="text-lg pr-8">{title}</h1>
                <p className="text-terciary-bg">{status}</p>
              </div>
              <div className="flex gap-4 flex-col">
                <p className="text-lg">{description}</p>
              </div>
            </div>
            <div>
              <p className="text-terciary-bg border w-fit border-terciary-bg rounded-2xl px-4">
                {info}
              </p>
            </div>
          </div>

          <div className="absolute top-8 right-8 text-white group-hover:text-green-500">
            <RiExternalLinkLine size={25} />
          </div>
        </Link>
      ) : (
        <div
          className={`${
            link && "hover:cursor-pointer"
          } flex flex-col gap-6 p-8 pb-12 justify-between h-full`}
        >
          <div>
            <div className="flex gap-4 mb-6 flex-col">
              <h1 className="text-lg">{title}</h1>
              <p className="text-terciary-bg">{status}</p>
            </div>
            <div className="flex gap-4 flex-col">
              <p className="text-lg">{description}</p>
            </div>
          </div>
          <div>
            <p className="sm:text-md text-terciary-bg border w-fit border-terciary-bg rounded-2xl py-2 sm:py-0 sm:w-max px-4">
              {info}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

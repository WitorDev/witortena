"use client";

import Image from "next/image";
import Link from "next/link";
import { report } from "process";
import { RiExternalLinkLine } from "react-icons/ri";
import MarkdownSection from "@/app/components/MarkdownSection";
import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";

import { PiParagraphThin } from "react-icons/pi";

type ReportCardProps = {
  title: string;
  date: string;
  paragraph: string;
  image?: {
    name: string;
    url: string;
  };
  type: string;
};

export default function ReportCard({
  title,
  date,
  paragraph,
  image,
  type,
}: ReportCardProps) {
  const cartTitle = paragraph.split("`")[0].substring(0, 37);
  return (
    <div className="transition-all min-w-[300px] max-w-[400px] overflow-hidden flex flex-col h-[500px]">
      <Link href={type + "/" + date.trim().toLowerCase()}>
        <div
          className={`h-[200px] cursor-pointer border border-transparent hover:border-secondary-accent w-full bg-background flex items-center justify-center overflow-hidden`}
        >
          {image ? (
            <Image
              width={600}
              height={400}
              src={image.url}
              alt={image.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <p className="text-neutral-50 text-2xl">{date.split("_")[1]}</p>
          )}
        </div>
      </Link>
      <div className="px-4 py-6 flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <div className="flex justify-between w-full">
            {/* <Link
              href={type + "/" + date.trim().toLowerCase()}
              className="flex flex-row-reverse justify-between hover:text-secondary-accent w-full"
            >
            <RiExternalLinkLine className="transition-all z-10" size={25} />
            <div className="text-lg font-bold z-1">
            <MarkdownSection style={false} text={cartTitle} />
            </div>
            </Link> */}
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-terciary-bg mb-4">{date.split("_")[1]}</p>
          <Link
            href={type + "/" + date.trim().toLowerCase()}
            className="flex gap-2 hover:text-secondary-accent text-terciary-bg transition-all"
          >
            <p>Ver mais</p>
            <RiExternalLinkLine className="z-10" size={20} />
          </Link>
        </div>

        <div className="line-clamp-[6]">
          <ReactMarkdown>{paragraph}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

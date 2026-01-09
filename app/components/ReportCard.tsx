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
  return (
    <Link
      href={type + "/" + date.trim().toLowerCase()}
      className="min-w-[300px] max-w-[400px]"
    >
      <div className="bg-primary-bg rounded-lg transition-all overflow-hidden group cursor-pointer border-2 border-terciary-accent hover:border-secondary-accent flex flex-col h-[500px]">
        <div
          className={`h-[200px] w-full bg-background flex items-center justify-center overflow-hidden`}
        >
          {image ? (
            <Image
              width={600}
              height={400}
              src={image.url}
              alt={image.name}
              className="h-full w-full object-cover group-hover:opacity-50"
            />
          ) : (
            <p className="text-neutral-50 text-2xl">{date.split("_")[1]}</p>
          )}
        </div>

        <div className="px-4 py-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-3">
            <div className="flex justify-between w-full">
              <div className="text-lg leading-relaxed z-1">
                <MarkdownSection
                  style={false}
                  text={paragraph.split("`")[0].substring(0, 37)}
                />
              </div>
              <RiExternalLinkLine
                className="transition-all group-hover:text-green-500 z-10"
                size={25}
              />
            </div>
          </div>

          <p className="text-terciary-bg mb-3">{date.split("_")[1]}</p>

          <div className="text-sm leading-relaxed line-clamp-[6]">
            <ReactMarkdown>{paragraph}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Link>
  );
}

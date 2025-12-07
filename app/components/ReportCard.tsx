"use client";

import Image from "next/image";
import Link from "next/link";
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
  reportType: any; // be permissive: can be string or object
};

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_/]/g, "");
}

export default function ReportCard({
  title,
  date,
  paragraph,
  image,
  reportType,
}: ReportCardProps) {
  // normalize reportType (supports string or object with common keys)
  let typeStr = "";

  if (typeof reportType === "string") {
    typeStr = reportType;
  } else if (reportType && typeof reportType === "object") {
    // try common fields
    typeStr =
      (reportType.slug as string) ||
      (reportType.name as string) ||
      (reportType.type as string) ||
      JSON.stringify(reportType);
  } else {
    typeStr = "";
  }

  const dateStr = String(date ?? "");
  const typeSlug = slugify(typeStr || "unknown");
  const dateSlug = slugify(dateStr || "");

  // build href safely; use a fallback if something is missing
  const href =
    typeSlug && dateSlug
      ? `/reports/${encodeURIComponent(typeSlug)}/${encodeURIComponent(
          dateSlug
        )}`
      : `/reports/${encodeURIComponent(typeSlug || "unknown")}`;

  return (
    <Link href={href} className="min-w-[300px] max-w-[400px]">
      <motion.div
        initial={{ opacity: 0.5 }}
        transition={{ duration: 0.35 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        className="bg-primary-bg rounded-lg overflow-hidden group cursor-pointer border border-transparent hover:border-secondary-accent transition-all flex flex-col h-[500px]"
      >
        {/* fixed image container height so the layout stays aligned */}
        <div
          className={`h-[200px] w-full bg-background flex items-center justify-center overflow-hidden`}
        >
          {image ? (
            <Image
              width={600}
              height={400}
              src={image.url}
              alt={image.name}
              className="h-full w-full object-cover group-hover:opacity-50 transition-all"
            />
          ) : (
            <p className="text-neutral-50 text-2xl">{date.split("_")[1]}</p>
          )}
        </div>

        <div className="px-4 py-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-3">
            {/* pushes the button area to bottom to keep same size */}
            <div className="flex justify-between w-full">
              <div className="text-lg leading-relaxed z-1">
                <MarkdownSection
                  style={false}
                  text={paragraph.split("`")[0].substring(0, 37)}
                />
              </div>
              <RiExternalLinkLine
                className="group-hover:text-green-500 z-10 transition-all"
                size={25}
              />
            </div>
          </div>

          <p className="text-terciary-bg mb-3">{date.split("_")[1]}</p>

          {/* pushes the button area to bottom to keep same size */}
          <div className="text-sm leading-relaxed line-clamp-[6]">
            <ReactMarkdown>{paragraph}</ReactMarkdown>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

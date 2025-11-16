import Image from "next/image";
import Link from "next/link";
import { report } from "process";
import { RiExternalLinkLine } from "react-icons/ri";
import MarkdownSection from "@/app/components/MarkdownSection";
import ReactMarkdown from "react-markdown";

import { PiParagraphThin } from "react-icons/pi";

type ReportCardProps = {
  title: string;
  date: string;
  paragraph: string;
  image?: {
    name: string;
    url: string;
  };
  reportType: string;
};

export default function ReportCard({
  title,
  date,
  paragraph,
  image,
  reportType,
}: ReportCardProps) {
  return (
    <Link
      href={reportType + "/" + title.trim().toLowerCase()}
      className="min-w-[300px] max-w-[400px]"
    >
      <div className="bg-primary-bg rounded-lg overflow-hidden group cursor-pointer border border-transparent hover:border-secondary-accent transition-all flex flex-col h-[500px]">
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
            <p className="text-neutral-50 text-2xl">{title.split("_")[1]}</p>
          )}
        </div>

        <div className="px-4 py-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-3">
            <h1 className="text-lg">{title.split("_")[1]}</h1>
            <RiExternalLinkLine
              className="group-hover:text-green-500 transition-all"
              size={25}
            />
          </div>

          <p className="text-terciary-bg mb-3">{date.split("_")[1]}</p>

          {/* pushes the button area to bottom to keep same size */}
          <div className="text-sm leading-relaxed line-clamp-[6]">
            <ReactMarkdown>{paragraph}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Link>
  );
}

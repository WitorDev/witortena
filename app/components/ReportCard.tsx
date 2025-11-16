import Image from "next/image";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

type ReportCardProps = {
  title: String;
  date: String;
  paragraph: String;
  image?: {
    name: string;
    url: string;
  };
  reportType: String;
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
      className="max-w-[400px]"
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
          <p className="text-sm leading-relaxed line-clamp-[6]">{paragraph}</p>
        </div>
      </div>
    </Link>
  );
}

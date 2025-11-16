import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

type ReportCardProps = {
  title: String;
  date: String;
  paragraph: String;
  image?: StaticImageData;
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
    <>
      <Link href={reportType + "/" + title.trim().toLowerCase()}>
        <div className="bg-primary-bg w-100 rounded-lg group cursor-pointer border border-transparent hover:border-secondary-accent transition-all block">
          {image && (
            <Image
              src={image}
              className="rounded-t-lg group-hover:opacity-50 transition-all"
              alt="Foto do relatório"
            />
          )}
          <div className="px-4 py-8">
            <div className="flex justify-between">
              <h1 className="mb-4 text-lg">{title}</h1>
              <RiExternalLinkLine
                className="group-hover:text-green-500 transition-all"
                size={25}
              />
            </div>
            <p className="text-terciary-bg mb-4">{date}</p>
            <p className="">{paragraph}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

import Image, { StaticImageData } from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";

type ReportCardProps = {
  title: String;
  date: String;
  paragraph: String;
  image?: StaticImageData;
};

export default function ReportCard({
  title,
  date,
  paragraph,
  image,
}: ReportCardProps) {
  return (
    <>
      <div className="bg-primary-bg w-100 rounded-lg group cursor-pointer  border border-transparent hover:border-secondary-accent transition-all">
        {image && (
          <Image
            src={image}
            className="rounded-t-lg group-hover:opacity-50 transition-all"
            alt="Foto do relatório"
          />
        )}
        <div className="px-4 py-8">
          <div className="flex justify-between">
            <h1 className="mb-4 text-2xl">{title}</h1>
            <RiExternalLinkLine
              className="group-hover:text-green-500 transition-all"
              size={35}
            />
          </div>
          <p className="text-lg text-terciary-bg mb-4">{date}</p>
          <p className="text-lg">{paragraph}</p>
        </div>
      </div>
    </>
  );
}

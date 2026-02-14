"use client";

import { certificationsData } from "@/app/data/certificationsData";
import Image from "next/image";
import { Ubuntu_Mono } from "next/font/google";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import TableRow from "@/app/components/TableRow";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { useParams } from "next/navigation";
import ImageGallery from "@/app/components/ImageGallery";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function CertificatePage() {
  const params = useParams();
  const { certificate_id } = params;
  const certification_id = Number(certificate_id);

  const certification = certificationsData[certification_id - 1];

  if (!certification) {
    return (
      <main
        className={`${ubuntuMonoFont.className} pt-32 max-w-screen-xl mx-auto px-4`}
      >
        <h1 className="text-3xl my-54 font-bold text-center">
          Certification not found
        </h1>
      </main>
    );
  }

  interface ReportFile {
    name: string;
    url: string;
  }

  const images: ReportFile[] = [
    { name: certification.title, url: certification.imageSrc },
  ];

  return (
    <main className={`${ubuntuMonoFont.className} pt-32 bg-deep pb-20`}>
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-between">
        <section>
          {" "}
          <div className="flex mb-8 gap-2 whitespace-nowrap overflow-x-auto">
            <Breadcrumbs />
          </div>
          <article className="flex flex-col md:flex-row gap-8">
            <div className=" flex justify-start items-start">
              <div className="max-w-[400px]">
                <ImageGallery images={images} padding={true} />
              </div>
            </div>

            <article className="w-full flex flex-col">
              <div className="flex flex-col mb-4 gap-2">
                <h1 className="text-3xl font-bold">{certification.title}</h1>

                <p>
                  Certificado por{" "}
                  <span className="font-bold">
                    {certification.organization}
                  </span>{" "}
                  em {certification.year}
                </p>
              </div>
              {certification.link && (
                <Link
                  href={certification.link}
                  target="_blank"
                  className="flex gap-2 items-center w-fit text-primary-accent hover:text-secondary-accent transition-all"
                >
                  <RiExternalLinkLine size={20} />
                  Ver Certificado
                </Link>
              )}
            </article>
          </article>
          <article>
            <ul className="flex mt-4 flex-wrap gap-2">
              {certification.skills.map((skill, index) => (
                <li
                  key={index}
                  className="border-terciary-bg border px-4 py-2 text-center w-fit rounded-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}

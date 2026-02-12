"use client"; // only if you use client components

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
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex mb-8 gap-2 whitespace-nowrap overflow-x-auto">
          <Breadcrumbs />
        </div>

        <section className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 flex justify-center items-center">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px]">
              <ImageGallery images={images} />
            </div>
          </div>

          <article className="w-full md:w-1/3 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{certification.title}</h1>

            <div className="flex flex-col gap-2 mt-4 pb-8">
              <p>
                Certificado por{" "}
                <span className="font-bold">{certification.organization}</span>{" "}
                em {certification.year}
              </p>
              {certification.link && (
                <Link
                  href={certification.link}
                  target="_blank"
                  className="flex gap-2 items-center text-primary-accent hover:text-secondary-accent transition-all"
                >
                  <RiExternalLinkLine size={20} />
                  Ver Certificado
                </Link>
              )}
            </div>

            <ul className="flex flex-wrap gap-2">
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

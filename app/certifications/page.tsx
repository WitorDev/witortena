import { certificationsData } from "../data/certificationsData";
import { Ubuntu_Mono } from "next/font/google";
import Breadcrumbs from "../components/Breadcrumbs";
import Image from "next/image";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export type Certification = {
  id: number;
  title: string;
  organization: string;
  year: number;
  link: string;
  imageSrc: string;
  skills: string[];
  tags: string[];
};

export default function Certificates() {
  return (
    <main className={`${ubuntuMonoFont.className} bg-deep pt-32`}>
      <section className="max-w-screen-xl mx-auto px-4">
        <div className="sm:-text-sm flex gap-2 whitespace-nowrap overflow-x-auto">
          <Breadcrumbs />
        </div>

        {/* Header */}
        <div className="mb-8 mt-4 flex flex-col justify-between gap-2">
          <h1 className="text-3xl font-bold">Certificações</h1>
          <p className="text-terciary-bg">
            Certificados de cursos e projetos concluídos
          </p>
        </div>

        {/* Certifications grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {certificationsData.map((certification: Certification) => (
            <a
              key={certification.id}
              href={"/certifications/" + certification.id}
            >
              <article className="bg-primary-bg min-h-70 flex flex-col justify-between hover:border-secondary-accent border border-transparent hover:bg-secondary-bg group hover:cursor-pointer p-4 rounded-lg">
                <div className="flex justify-center items-center w-full min-h-[200px]">
                  <Image
                    src={certification.imageSrc}
                    height={180}
                    width={180}
                    draggable="false"
                    alt={certification.title + " certification logo"}
                    className="object-contain"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="group-hover:text-secondary-accent font-bold">
                    {certification.title}
                  </h3>
                  <p className="text-terciary-bg">
                    {certification.organization}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </section>
      </section>
    </main>
  );
}

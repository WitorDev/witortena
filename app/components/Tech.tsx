"use client";
import { Ubuntu_Mono } from "next/font/google";
import IconAndName from "@/app/components/IconAndName";
import Image from "next/image";
import image from "@/public/cable.png";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

type TechGroupProps = {
  title: string;
  children: React.ReactNode;
};

function TechGroup({ title, children }: TechGroupProps) {
  return (
    <div className="rounded-lg border border-terciary-bg lg:max-w-180 lg:mx-0 p-4">
      <h2 className="text-lg font-bold ">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {children}
      </div>
    </div>
  );
}

export default function Tech() {
  return (
    <section
      id="tech"
      className={`${ubuntuMonoFont.className} max-w-screen-xl mb-20 px-4 mx-auto pt-32 flex`}
    >
      <div className="flex items-start justify-between w-full">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-12 text-center md:text-left">
            Tecnologias
          </h1>

          <div className="space-y-10">
            <div className="rounded-lg border text-primary-accent border-terciary-bg lg:max-w-180 mb-6 lg:mx-0 p-4">
              <h2 className="text-lg font-bold">Core Tech Stack</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <IconAndName
                  style="text-green-500"
                  icon="Springboot"
                  text="Spring Boot"
                />
                <IconAndName
                  style="text-green-500"
                  icon="Postgresql"
                  text="PostgreSQL"
                />
                <IconAndName
                  style="text-green-500"
                  icon="Nextdotjs"
                  text="Next.js"
                />
              </div>
            </div>

            <div className="space-y-6">
              <TechGroup title="Web">
                <IconAndName icon="Html5" text="HTML" />
                <IconAndName icon="Css3" text="CSS" />
              </TechGroup>

              <TechGroup title="Frameworks & Bibliotecas">
                <IconAndName icon="React" text="React" />
                <IconAndName icon="Tailwindcss" text="TailwindCSS" />
                <IconAndName icon="Framer" text="Motion" />
                <IconAndName icon="Nodedotjs" text="Node.js" />
                <IconAndName icon="Express" text="Express" />
              </TechGroup>

              <TechGroup title="Bancos de Dados">
                <IconAndName icon="Mongodb" text="MongoDB" />
              </TechGroup>

              <TechGroup title="Linguages de Programação">
                <IconAndName icon="Java" text="Java" />
                <IconAndName icon="Javascript" text="JavaScript" />
                <IconAndName icon="Php" text="PHP" />
              </TechGroup>
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <Image
            src={image}
            alt="Cable illustration"
            width={600}
            className="object-contain "
          />
        </div>
      </div>
    </section>
  );
}

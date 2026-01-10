"use client";

import { Ubuntu_Mono } from "next/font/google";
import IconAndName from "@/app/components/IconAndName";

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
    <div className="flex gap-2 flex-col w-full max-w-3xl">
      <h2 className="font-bold bg-primary-bg translate-y-4 py-2 px-4 rounded-lg w-fit">
        {title}
      </h2>

      <div className="rounded-lg px-6 py-6 bg-primary-bg  border-terciary-bg w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Tech() {
  return (
    <section
      id="tech"
      className={`${ubuntuMonoFont.className} max-w-screen-xl mb-20 px-4 mx-auto pt-32`}
    >
      <h1 className="text-3xl font-bold mb-12 text-center md:text-left">
        Tecnologias
      </h1>

      <div className="flex flex-wrap gap-8">
        <div className="flex gap-2 flex-col w-full max-w-3xl">
          <h2 className="font-bold bg-primary-bg translate-y-4 py-2 px-4 rounded-lg w-fit text-secondary-accent">
            Core Tech Stack
          </h2>

          <div className="rounded-lg px-6 py-6 bg-primary-bg  border-primary-accent w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <IconAndName icon="Springboot" text="Spring Boot" />
              <IconAndName icon="Postgresql" text="PostgreSQL" />
              <IconAndName icon="Nextdotjs" text="Next.js" />
            </div>
          </div>
        </div>

        <TechGroup title="Web">
          <IconAndName icon="Html5" text="HTML" />
          <IconAndName icon="Css3" text="CSS" />
        </TechGroup>

        <TechGroup title="Outros Frameworks & Bibliotecas">
          <IconAndName icon="React" text="React" />
          <IconAndName icon="Tailwindcss" text="TailwindCSS" />
          <IconAndName icon="Framer" text="Motion" />
          <IconAndName icon="Nodedotjs" text="Node.js" />
          <IconAndName icon="Express" text="Express" />
        </TechGroup>

        <TechGroup title="Linguagens de Programação">
          <IconAndName icon="Java" text="Java" />
          <IconAndName icon="Javascript" text="JavaScript" />
          <IconAndName icon="Php" text="PHP" />
          <IconAndName icon="Database" text="SQL" />
        </TechGroup>

        <TechGroup title="Outros Bancos de Dados">
          <IconAndName icon="Mongodb" text="MongoDB" />
        </TechGroup>
      </div>
    </section>
  );
}

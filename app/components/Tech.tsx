"use client";
import { Ubuntu_Mono } from "next/font/google";
import IconAndName from "@/app/components/IconAndName";
import Image from "next/image";
import image from "@/public/cable.png";
import { SiSqlite } from "react-icons/si";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

type TechGroupProps = {
  title: string;
  children: React.ReactNode;
  style?: string;
};

function TechGroup({ title, children, style }: TechGroupProps) {
  return (
    <div className="flex gap-2 flex-col">
      <h2 className="text font-bold bg-primary-bg translate-y-4 py-2 w-fit px-4 rounded-lg">
        {title}
      </h2>
      <div
        className={` rounded-lg px-4 py-4 bg-primary-bg "border-terciary-bg"
          `}
      >
        <div className="flex flex-wrap gap-8 justify-center">{children}</div>
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

          <div className="">
            <div className="flex flex-wrap flex-row gap-4">
              <div className="flex gap-2 flex-col">
                <h2 className="text font-bold bg-primary-bg translate-y-4 py-2 w-fit px-4 rounded-lg text-secondary-accent">
                  Core Tech Stack
                </h2>
                <div
                  className={` rounded-lg px-4 py-4 bg-primary-bg border-primary-accent
                  }`}
                >
                  <div className="flex flex-wrap gap-8 ">
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

              <TechGroup title="Linguages de Programação">
                <IconAndName icon="Java" text="Java" />
                <IconAndName icon="Javascript" text="JavaScript" />
                <IconAndName icon="Php" text="PHP" />
                <IconAndName icon="Database" text="SQL" />
              </TechGroup>
              <TechGroup title="Outros Bancos de Dados">
                <IconAndName icon="Mongodb" text="MongoDB" />
              </TechGroup>
            </div>
          </div>
        </div>
        {/* <div className="hidden xl:block mt-14">
          <Image
            src={image}
            alt="Cable illustration"
            width={420}
            className="object-contain "
          />
        </div> */}
      </div>
    </section>
  );
}

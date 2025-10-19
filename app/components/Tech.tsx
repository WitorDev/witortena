"use client";
import { Ubuntu_Mono } from "next/font/google";
import IconAndName from "@/app/components/IconAndName";
import Image from "next/image";
import cableImage from "@/public/cable.png";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Tech() {
  return (
    <section
      id="tech"
      className={`${ubuntuMonoFont.className} justify-center max-w-screen-xl px-4 mx-auto relative min-h-screen flex flex-col `}
    >
      <div className="flex w-full">
        <h1 className="text-5xl font-bold">Tech Stack</h1>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="grid w-full grid-cols-1 grid-rows-2 py-20">
          <div className="">
            <h1 className="text-2xl font-bold mb-2">Frontend</h1>
            <div className="grid grid-cols-2 grid-rows-3">
              <IconAndName icon="Html5" text="HTML" />
              <IconAndName icon="React" text="React" />
              <IconAndName icon="Css3" text="CSS" />
              <IconAndName icon="Tailwindcss" text="TailwindCSS" />
              <IconAndName icon="Javascript" text="Javascript" />
              <IconAndName icon="Nextdotjs" text="Next.js" />
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold mt-8 mb-2">Backend</h1>
            <div className="grid grid-cols-2 grid-rows-3">
              <IconAndName icon="Nodedotjs" text="Node.js" />
              <IconAndName icon="Postgresql" text="PostgreSQL" />
              <IconAndName icon="Express" text="Express" />
              <IconAndName icon="Mongodb" text="MongoDB" />
            </div>
          </div>
        </div>
        <Image
          className="-z-10 hidden sm:block -translate-y-20 translate-x-16"
          src={cableImage}
          alt="Cable figure"
          width={900}
        />
      </div>
    </section>
  );
}

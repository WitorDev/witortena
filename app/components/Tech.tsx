"use client";
import { Ubuntu_Mono } from "next/font/google";
import IconAndName from "@/app/components/IconAndName";
import Image from "next/image";
import cableImage from "@/public/cable.png";
import { motion } from "framer-motion";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Tech() {
  return (
    <section
      id="tech"
      className={`${ubuntuMonoFont.className} justify-center max-w-screen-xl px-4 mx-auto relative pt-40 flex flex-col `}
    >
      <div className="flex w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl font-bold w-full text-center md:text-left"
        >
          Tecnologias
        </motion.h1>
      </div>
      <div className="flex flex-col sm:flex-row mb-20 sm:mb-0">
        <div className="grid w-full justify-items-center gap-10 sm:mb-20 lg:mb-0 sm:justify-items-normal sm:grid-cols-1 sm:grid-rows-2 grid-cols-1 grid-rows-1 pt-20">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-lg font-bold mb-2 text-center w-full md:text-left"
            >
              Frontend
            </motion.h1>
            <div className="justify-center align-middle flex flex-wrap gap-4 md:gap-0 md:grid md:grid-cols-2 md:grid-rows-3 sm:gap-0 sm:grid sm:grid-cols-4 sm:grid-rows-3 auto-cols-auto">
              <IconAndName style="text-red-400" icon="Html5" text="HTML" />
              <IconAndName style="text-blue-400" icon="React" text="React" />
              <IconAndName style="text-blue-400" icon="Css3" text="CSS" />
              <IconAndName
                style="text-blue-300"
                icon="Tailwindcss"
                text="TailwindCSS"
              />
              <IconAndName
                style="text-yellow-500"
                icon="Javascript"
                text="Javascript"
              />
              <IconAndName
                style="text-gray-300"
                icon="Nextdotjs"
                text="Next.js"
              />
            </div>
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-lg font-bold mt-8 sm:mt-0 mb-2 w-full text-center md:text-left"
            >
              Backend
            </motion.h1>
            <div className="justify-center align-middle flex flex-wrap gap-4 md:gap-0 md:grid md:grid-cols-2 md:grid-rows-3 sm:gap-0 sm:grid sm:grid-cols-4 sm:grid-rows-3 auto-cols-auto">
              <IconAndName
                style="text-green-500"
                icon="Nodedotjs"
                text="Node.js"
              />
              <IconAndName
                style="text-blue-500"
                icon="Postgresql"
                text="PostgreSQL"
              />
              <IconAndName style="text-white" icon="Express" text="Express" />
              <IconAndName
                style="text-green-400"
                icon="Mongodb"
                text="MongoDB"
              />
            </div>
          </div>
        </div>
        <Image
          className="-z-10 hidden md:block -translate-y-12 "
          src={cableImage}
          alt="Cable figure"
          width={900}
        />
      </div>
    </section>
  );
}

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
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-bold w-full text-center sm:text-left"
        >
          Tech Stack
        </motion.h1>
      </div>
      <div className="flex flex-col sm:flex-row mb-20 sm:mb-0">
        <div className="grid w-full justify-items-center gap-10 sm:mb-20 lg:mb-0 sm:justify-items-normal sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-1 lg:grid-rows-2 grid-cols-1 grid-rows-1 pt-20">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg font-bold mb-2 w-full text-center sm:text-left"
            >
              Frontend
            </motion.h1>
            <div className="justify-center align-middle flex flex-wrap gap-4 sm:gap-0 sm:grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 auto-cols-auto">
              <IconAndName icon="Html5" text="HTML" />
              <IconAndName icon="React" text="React" />
              <IconAndName icon="Css3" text="CSS" />
              <IconAndName icon="Tailwindcss" text="TailwindCSS" />
              <IconAndName icon="Javascript" text="Javascript" />
              <IconAndName icon="Nextdotjs" text="Next.js" />
            </div>
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg font-bold mt-8 sm:mt-0 mb-2 w-full text-center sm:text-left"
            >
              Backend
            </motion.h1>
            <div className="justify-center align-middle flex flex-wrap gap-4 sm:gap-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 auto-cols-auto">
              <IconAndName icon="Nodedotjs" text="Node.js" />
              <IconAndName icon="Postgresql" text="PostgreSQL" />
              <IconAndName icon="Express" text="Express" />
              <IconAndName icon="Mongodb" text="MongoDB" />
            </div>
          </div>
        </div>
        <Image
          className="-z-10 hidden lg:block -translate-y-12 "
          src={cableImage}
          alt="Cable figure"
          width={900}
        />
      </div>
    </section>
  );
}

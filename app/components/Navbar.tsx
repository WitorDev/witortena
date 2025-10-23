"use client";
import Dropdown from "@/app/components/Dropdown";
import { Ubuntu_Mono } from "next/font/google";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-200%", opacity: 0 },
  };

  return (
    <motion.header
      variants={variants}
      initial={{ opacity: 0 }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`${ubuntuMonoFont.className} my-8 z-10 fixed mx-auto px-4 w-full`}
    >
      <nav className="max-w-screen-xl mx-auto flex justify-between align-middle text-2xl px-4">
        <div className="w-full flex justify-between border rounded-full border-primary-accent backdrop-blur-3xl py-3 px-8">
          <div className="flex gap-8 items-center">
            <div className="text-4xl font-bold text-primary-accent">WT_</div>
            <ul className="gap-4 sm:flex hidden">
              {/* Sobre mim */}
              <Dropdown
                pageUrl="/"
                title="Home"
                options={[
                  "Início",
                  "Sobre Mim",
                  "Participações",
                  "Projetos",
                  "Tech Stack",
                  "Contato",
                ]}
                links={[
                  "hero",
                  "about",
                  "contributions",
                  "projects",
                  "tech",
                  "contact",
                ]}
              />
              <Dropdown
                pageUrl="/reports"
                title="Relatórios"
                options={["NPI", "Pensamento Computacional"]}
                links={["NPI", "pensamento-computacional"]}
                final={true}
              />
            </ul>
          </div>
          <div>
            <ScrollLink to="contact" smooth={true} duration={300}>
              <button className="font-bold hover:cursor-pointer translate-x-4 text-2xl py-2 px-8 border-4 rounded-full border-primary-accent hover:bg-primary-accent hover:text-black transition-all">
                Contato
              </button>
            </ScrollLink>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

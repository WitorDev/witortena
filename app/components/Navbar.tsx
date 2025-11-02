"use client";
import Dropdown from "@/app/components/Dropdown";
import MobileDropdown from "@/app/components/MobileDropdown";
import { Ubuntu_Mono } from "next/font/google";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { style } from "motion/react-client";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous) {
      setHidden(true);
      setMobileNavActive(false);
    } else {
      setHidden(false);
      setMobileNavActive(false);
    }
  });

  const variants = {
    visible: { y: 0 },
    hidden: { y: "-200%" },
    // visible: { opacity: 1 },
    // hidden: { opacity: 0 },
  };

  return (
    <div className="fixed max-h-20 w-full z-40">
      <motion.div
        onHoverStart={() => setHidden(false)}
        className={`${!hidden && "hidden"} h-16 mt-8`}
      ></motion.div>
      <motion.header
        variants={variants}
        onHoverStart={() => setHidden(false)}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`${ubuntuMonoFont.className} my-8 ${
          hidden && "-translate-y-24 "
        } z-40  mx-auto px-4 w-full`}
      >
        <nav className="max-w-screen-xl mx-auto flex justify-between align-middle text-lg sm:px-4">
          <div className="w-full flex justify-between border rounded-full border-primary-accent backdrop-blur-3xl py-3 px-8">
            <div className="flex gap-8 sm:justify-start justify-between w-full items-center">
              <div className="text-4xl font-bold text-primary-accent">WT_</div>

              {/* Mobile Nav */}
              <div
                onClick={() => setMobileNavActive(!mobileNavActive)}
                className="sm:hidden block font-bold hover:cursor-pointer translate-x-8 text-lg py-2 px-8"
              >
                {mobileNavActive ? <CgClose /> : <CiMenuBurger />}
              </div>

              {/* <nav className="flex flex-col">

            </nav> */}

              {/* End Mobile Nav */}

              {/* Desktop Nav */}
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
                <Link
                  href={"https://portfolio-unifil.onrender.com"}
                  className="transition-all relative inline-block"
                >
                  <div
                    className={`flex gap-2 text-xl hover:cursor-pointer hover:text-terciary-bg`}
                  >
                    <h1>Relatórios UniFil</h1>
                  </div>
                </Link>
                {/* <Dropdown
                pageUrl="/reports"
                title="Relatórios"
                options={["NPI", "Pensamento Computacional"]}
                links={["NPI", "pensamento-computacional"]}
                final={true}
              /> */}
              </ul>
              {/* End Desktop Nav */}
            </div>
            <div>
              <ScrollLink to="contact" smooth={true} duration={300}>
                <button className="hidden sm:block font-bold hover:cursor-pointer translate-x-4 text-xl py-2 px-8 border-4 rounded-full border-primary-accent hover:bg-primary-accent hover:text-black transition-all">
                  Contato
                </button>
              </ScrollLink>
            </div>
          </div>
        </nav>
        <nav
          className={` border border-primary-accent 2xl mt-8 max-w-screen-xl mx-auto flex-col justify-between align-middle text-lg sm:px-4 ${
            mobileNavActive ? "flex" : "hidden"
          }`}
        >
          <MobileDropdown
            setMobileNavbar={setMobileNavActive}
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
          <MobileDropdown
            setMobileNavbar={setMobileNavActive}
            pageUrl="/reports"
            title="Relatórios"
            options={["NPI", "Pensamento Computacional"]}
            links={["NPI", "pensamento-computacional"]}
            final={true}
          />
        </nav>
      </motion.header>
    </div>
  );
}

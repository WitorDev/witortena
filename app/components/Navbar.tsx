"use client";

import Dropdown from "@/app/components/Dropdown";
import MobileDropdown from "@/app/components/MobileDropdown";
import { Ubuntu_Mono } from "next/font/google";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { MdArrowCircleUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // ALWAYS show navbar near top
    if (latest < 30) {
      setHidden(false);
      return;
    }

    if (previous !== undefined && latest > previous) {
      setHidden(true);
      setMobileNavActive(false);
    } else {
      setHidden(false);
    }

    setShowScrollTop(latest > 300);
  });

  const navbarVariants = {
    visible: { y: 0 },
    hidden: { y: "-120%" },
  };

  return (
    <>
      {hidden && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onMouseEnter={() => setHidden(false)}
          className="fixed top-0 pt-4 w-full z-50 cursor-pointer"
        >
          <div
            className={`${ubuntuMonoFont.className} px-1.5 max-w-screen-xl mx-auto flex text-primary-accent`}
          >
            <div className="text-3xl mx-auto font-bold">
              <IoMdArrowDropdown size={40} />
            </div>
          </div>
        </motion.div>
      )}

      <motion.header
        variants={navbarVariants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`${ubuntuMonoFont.className} fixed top-0 w-full z-40`}
      >
        <div className="my-8 px-4 sm:px-0">
          <div className="max-w-screen-xl mx-auto flex justify-between align-middle sm:px-4">
            <div className="w-full flex justify-between border-2 transition rounded-full border-primary-accent backdrop-blur-3xl py-3 px-8">
              <nav className="flex gap-8 sm:justify-start justify-between w-full items-center">
                <div className="text-3xl font-bold text-primary-accent">
                  <Link href="/">WT_</Link>
                </div>

                <div
                  onClick={() => setMobileNavActive(!mobileNavActive)}
                  className="sm:hidden block font-bold hover:cursor-pointer translate-x-8 py-2 px-8"
                >
                  {mobileNavActive ? (
                    <CgClose size={25} className="text-primary-accent" />
                  ) : (
                    <CiMenuBurger
                      size={25}
                      strokeWidth={1.2}
                      className="text-primary-accent"
                    />
                  )}
                </div>

                <ul className="gap-4 sm:flex hidden">
                  <li>
                    <Dropdown
                      pageUrl="/"
                      title="Home"
                      options={[
                        "Início",
                        "Sobre Mim",
                        "Graduação",
                        "Participações",
                        "Projetos",
                        "Tech Stack",
                        "Contato",
                      ]}
                      links={[
                        "hero",
                        "about",
                        "education",
                        "contributions",
                        "projects",
                        "tech",
                        "contact",
                      ]}
                    />
                  </li>
                  <li>
                    <Dropdown
                      pageUrl="/reports"
                      title="Relatórios"
                      options={[
                        "NPI - Núcleo de Práticas de Informática",
                        "Pensamento Computacional",
                      ]}
                      links={["NPI", "pensamento-computacional"]}
                      final
                    />
                  </li>
                </ul>
              </nav>

              <div>
                <Link href="/#contact">
                  <button className="w-max button-fill hidden sm:block font-bold translate-x-4 text-lg py-1 px-5 border-2 rounded-full border-primary-accent">
                    Contato
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <nav
            className={`border-2 bg-primary-bg rounded-lg border-primary-accent mt-4 max-w-screen-xl mx-auto flex-col justify-between align-middle text-lg sm:px-4 ${
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
                "Graduação",
                "Participações",
                "Projetos",
                "Tech Stack",
                "Contato",
              ]}
              links={[
                "hero",
                "about",
                "education",
                "contributions",
                "projects",
                "tech",
                "contact",
              ]}
            />
            <MobileDropdown
              pageUrl="/reports"
              title="Relatórios"
              options={[
                "NPI - Núcleo de Práticas de Informática",
                "Pensamento Computacional",
              ]}
              links={["NPI", "pensamento-computacional"]}
              final
            />
          </nav>
        </div>
      </motion.header>

      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-12 right-3 xl:right-[48.55vw] w-fit z-50"
        >
          <div className="max-w-screen-xl mx-auto flex justify-end">
            <button
              onClick={() =>
                scroll.scrollToTop({
                  duration: 300,
                  smooth: "easeInOutQuart",
                })
              }
              className="fixed bottom-12 -xl:right-3 xl:left-1/2 text-primary-accent cursor-pointer hover:text-secondary-accent xl:-translate-x-1/2  z-50"
            >
              <MdArrowCircleUp size={40} />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

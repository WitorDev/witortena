"use client";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { Ubuntu_Mono } from "next/font/google";
import { usePathname } from "next/navigation";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

import { Ubuntu_Sans_Mono } from "next/font/google";
import { motion } from "motion/react";

const UbuntuSansMonoFont = Ubuntu_Sans_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const pathname = usePathname();
  return (
    <footer
      id="footer"
      className={`${ubuntuMonoFont.className} border-t-2 border-primary-bg relative min-h-screen items-center flex flex-col gap-20 sm:gap-80 pt-20`}
    >
      <div className="max-w-screen-xl px-4 mx-auto flex flex-col w-full ">
        <div className="flex sm:flex-row gap-10 sm:gap-0 flex-col w-full justify-between">
          <div className="flex flex-col">
            <div className="text-6xl font-bold text-primary-accent mb-6">
              <h1>WT_</h1>
            </div>
            <div
              className={`${UbuntuSansMonoFont.className} flex flex-col gap-6 text-terciary-bg`}
            >
              <h2>Desenvolvedor Fullstack</h2>
              <h2>Estudante de Ciência da Computação</h2>
              <h2>Participante do NPI</h2>
              <h2>Monitor do Pensamento Computacional</h2>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 text-lg text-terciary-bg">
            <div className="flex flex-col gap-3 text-lg text-terciary-bg">
              <h3 className="text-foreground">Home</h3>
              {pathname === "/" ? (
                <>
                  {[
                    { to: "hero", label: "Início" },
                    { to: "about", label: "Sobre Mim" },
                    { to: "education", label: "Graduação" },
                    { to: "contributions", label: "Participações" },
                    { to: "projects", label: "Projetos" },
                    { to: "tech", label: "Tech Stack" },
                    { to: "contact", label: "Contato" },
                  ].map((link, index) => (
                    <ScrollLink
                      key={index}
                      to={link.to}
                      smooth={true}
                      duration={300}
                      className="text-terciary-bg w-fit cursor-pointer hover:text-primary-accent"
                    >
                      <p>{link.label}</p>
                    </ScrollLink>
                  ))}
                </>
              ) : (
                <>
                  {[
                    { to: "hero", label: "Início" },
                    { to: "about", label: "Sobre Mim" },
                    { to: "education", label: "Graduação" },
                    { to: "contributions", label: "Participações" },
                    { to: "projects", label: "Projetos" },
                    { to: "tech", label: "Tech Stack" },
                    { to: "contact", label: "Contato" },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      href={`/#${link.to}`}
                      className="text-terciary-bg w-fit hover:text-primary-accent"
                    >
                      <p>{link.label}</p>
                    </Link>
                  ))}
                </>
              )}
            </div>
            <div className="flex flex-col gap-3  text-terciary-bg">
              <option className="text-foreground">Relatórios</option>
              {[
                { href: "/reports/NPI", label: "NPI" },
                {
                  href: "/reports/pensamento-computacional",
                  label: "Pensamento Computacional",
                },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-terciary-bg w-fit hover:text-primary-accent"
                >
                  <p>{link.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-4 text-foreground-bg mt-20">
          <div className="flex flex-col sm:flex-row gap-2">
            <h3>Email:</h3>
            <a
              className="text-terciary-bg w-fit  hover:text-secondary-accent"
              href="mailto:witortena@gmail.com"
            >
              witortena@gmail.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <h3>Celular:</h3>
            <a
              className="text-terciary-bg w-fit hover:text-secondary-accent"
              href="https://wa.me/+5543984138592"
            >
              +55 43 9 8413-8592
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <h3>Linkedin:</h3>
            <Link
              href="https://www.linkedin.com/in/witortena"
              target="_blank"
              className="text-terciary-bg w-fit hover:text-secondary-accent"
            >
              linkedin.com/in/witortena
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <h3>Github:</h3>
            <Link
              href="https://github.com/witordev"
              target="_blank"
              className="text-terciary-bg w-fit hover:text-secondary-accent"
            >
              github.com/witordev
            </Link>
          </div>
        </div>
        <h1 className="text-lg sm:text-center sm:mt-64 mt-12 mb-6 md:mb-0 text-terciary-bg">
          &copy; Witor Tenã {new Date().getFullYear()}
        </h1>
      </div>
    </footer>
  );
}

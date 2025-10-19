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

const UbuntuSansMonoFont = Ubuntu_Sans_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const pathname = usePathname();
  return (
    <footer
      id="footer"
      className={`${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative min-h-screen items-center flex flex-col gap-80 pt-20`}
    >
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="text-6xl font-bold text-primary-accent mb-6">
              WT_
            </div>
            <div
              className={`${UbuntuSansMonoFont.className} flex flex-col gap-6 text-2xl text-terciary-bg`}
            >
              <h2>Desenvolvedor Fullstack</h2>
              <h2>Estudante de Ciência da Computação</h2>
              <h2>Participante do NPI</h2>
              <h2>Monitor do Pensamento Computacional</h2>
            </div>
          </div>
          <div className="flex gap-8 text-2xl text-terciary-bg">
            <div className="flex flex-col gap-3 text-2xl text-terciary-bg">
              <h3 className="">Home</h3>
              {pathname === "/" ? (
                <>
                  {[
                    { to: "hero", label: "Início" },
                    { to: "about", label: "Sobre Mim" },
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
                      className="text-white cursor-pointer hover:text-terciary-bg"
                    >
                      {link.label}
                    </ScrollLink>
                  ))}
                </>
              ) : (
                <>
                  {[
                    { to: "hero", label: "Início" },
                    { to: "about", label: "Sobre Mim" },
                    { to: "contributions", label: "Participações" },
                    { to: "projects", label: "Projetos" },
                    { to: "tech", label: "Tech Stack" },
                    { to: "contact", label: "Contato" },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      href={`/#${link.to}`}
                      className="text-white  hover:text-terciary-bg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </>
              )}
            </div>
            <div className="flex flex-col gap-3 text-2xl text-terciary-bg">
              <h3 className="">Relatórios</h3>
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
                  className="text-white  hover:text-terciary-bg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-4 text-2xl text-terciary-bg mt-20">
          <div className="flex gap-2">
            <h3>Email:</h3>
            <p className="text-white">witortena@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <h3>Celular:</h3>
            <p className="text-white">+55 43 9 8413-8592</p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-terciary-bg">
        &copy; Witor Tenã {new Date().getFullYear()}
      </h1>
    </footer>
  );
}

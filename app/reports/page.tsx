"use client";

import Link from "next/link";
import { Ubuntu_Mono } from "next/font/google";
import { motion } from "motion/react";
import { BiArrowBack, BiSolidHome } from "react-icons/bi";
import Breadcrumbs from "../components/Breadcrumbs";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Reports() {
  return (
    <section className="bg-secondary-bg pt-32">
      <main
        id="reports"
        className={`${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative flex flex-col`}
      >
        <div className="m:-text-sm flex gap-2 whitespace-nowrap overflow-x-auto">
          <Breadcrumbs />
        </div>
        <div className="mb-8 mt-4">
          <h1 className="text-3xl font-bold mb-2">Relatórios</h1>
          <p className="text-terciary-bg">
            Registros acadêmicos e atividades de extensão
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-20">
          <Link href="/reports/pensamento-computacional">
            <article className="group rounded-lg border border-transparent hover:border-secondary-accent p-4 bg-primary-bg transition-colors">
              <h2 className="text-lg mb-2 font-bold">
                Pensamento Computacional
              </h2>

              <p className="mb-4">
                Projeto de extensão voltado ao ensino de tecnologia para
                estudantes de escolas públicas feito no Centro Universitário
                Filadélfia - UniFil.
              </p>

              <span className="text-terciary-bg rounded-3xl border border-terciary-bg py-1 px-3">
                Extensão Universitária
              </span>
            </article>
          </Link>

          <Link href="/reports/NPI">
            <article className="group rounded-lg border border-transparent hover:border-secondary-accent p-4 bg-primary-bg transition-colors">
              <h2 className="text-lg mb-2 font-bold">
                NPI — Núcleo de Práticas de Informática
              </h2>

              <p className="mb-4">
                Relatórios das atividades práticas, estudos em grupo e
                colaboração técnica no núcleo de informática do Centro
                Universitário Filadélfia - UniFil.
              </p>

              <span className="text-terciary-bg rounded-3xl border border-terciary-bg py-1 px-3">
                Práticas em Informática
              </span>
            </article>
          </Link>
        </div>
      </main>
    </section>
  );
}

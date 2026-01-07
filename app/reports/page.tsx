"use client";

import Link from "next/link";
import { Ubuntu_Mono } from "next/font/google";
import { motion } from "motion/react";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function page() {
  return (
    <div
      id="hero"
      className={`${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative min-h-screen flex flex-col pt-36`}
    >
      <motion.h1 className="text-xl font-bold mb-4">Relatórios</motion.h1>
      <motion.h1 className="text-lg">
        Relatórios - Pensamento Computacional
      </motion.h1>
      <Link
        className="text-terciary-bg hover:text-foreground"
        href={"/reports/pensamento-computacional"}
      >
        <p>Pensamento Computacional</p>
      </Link>
      <motion.h1 className="text-lg">
        Relatórios - NPI / Núcleo de Práticas de Informática
      </motion.h1>
      <Link
        className="text-terciary-bg hover:text-foreground"
        href={"/reports/NPI"}
      >
        <p> NPI - Núcleo de Práticas de Informática</p>
      </Link>
    </div>
  );
}

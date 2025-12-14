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
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-xl font-bold mb-4"
      >
        Relatórios
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-lg"
      >
        Relatórios - Pensamento Computacional
      </motion.h1>
      <Link
        className="text-terciary-bg hover:text-foreground"
        href={"/reports/pensamento-computacional"}
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Pensamento Computacional
        </motion.p>
      </Link>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-lg"
      >
        Relatórios - NPI / Núcleo de Práticas de Informática
      </motion.h1>
      <Link
        className="text-terciary-bg hover:text-foreground"
        href={"/reports/NPI"}
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {" "}
          NPI - Núcleo de Práticas de Informática
        </motion.p>
      </Link>
    </div>
  );
}

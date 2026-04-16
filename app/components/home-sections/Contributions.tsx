"use client";
import { Ubuntu_Mono } from "next/font/google";
import TextCard from "@/app/components/TextCard";
import { motion } from "motion/react";
import Link from "next/link";
import {
  LuBrainCircuit,
  LuFolderSearch,
  LuImageMinus,
  LuLink,
  LuNotebook,
} from "react-icons/lu";
import {
  GiArtificialIntelligence,
  GiBrain,
  GiNotebook,
  GiSchoolBag,
} from "react-icons/gi";
import { SlMagnifier } from "react-icons/sl";
import { FaComputer, FaMagnifyingGlass } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Contributions() {
  return (
    <section
      id="contributions"
      className={`${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative flex flex-col items-center`}
    >
      <motion.div className="flex w-full mt-20">
        <h1 className="text-3xl font-bold mb-10 w-full text-center md:text-left">
          Participações
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 gap-8 sm:grid-rows-1">
        <TextCard
          title="NPI - Núcleo de Práticas de Informática"
          status="Integrante ativo"
          description="Ambiente de estudos e colaboração entre alunos de Ciência da Computação e Engenharia de Software da UniFil. Promove atividades práticas e troca de conhecimentos na área de tecnologia."
          info="Pesquisas e estudos em grupo"
          link="/reports/NPI"
          // children={
          //   <GiNotebook
          //     className="text-primary-accent/20 hidden lg:block absolute w-fit h-fit left-124 top-5"
          //     size={80}
          //   />
          // }
        />
        <TextCard
          title="Pensamento Computacional"
          status="Participei como Monitor"
          description="Projeto que permite estudantes de escolas públicas estudar tecnologia de forma gratuita na UniFil. Participei como monitor no projeto."
          info="Monitoria de alunos"
          link="/reports/pensamento-computacional"
          // children={
          //   <FaComputer
          //     className="text-primary-accent/20 hidden lg:block absolute w-fit h-fit left-124 top-5"
          //     size={80}
          //   />
          // }
        />
        <TextCard
          title="LondriTech - Londrinense Tech"
          status="Integrante ativo"
          description="Projeto que permite estudantes do Colégio Londrinense estudar tecnologia de forma gratuita na UniFil. Participei como monitor no projeto."
          info="Monitoria de alunos"
          link="/reports/londritech"
          // children={
          //   <IoSchool
          //     className="text-primary-accent/20 hidden lg:block absolute w-fit h-fit left-124 top-5"
          //     size={80}
          //   />
          // }
        />
        <TextCard
          title="Grupo de Inteligência Artificial"
          status="Integrante ativo"
          description="Grupo voltado ao estudo e compreensão de ferramentas de IA, com foco em aplicações práticas, pesquisa e inovação tecnológica."
          info="Pesquisas e estudos em grupo"
          // children={
          //   <GiBrain
          //     className="text-primary-accent/20 hidden lg:block absolute w-fit h-fit left-124 top-5"
          //     size={80}
          //   />
          // }
        />
        <Link
          href="/reports"
          className="group -translate-y-8 mt-8 sm:mx-0 mx-auto text-primary-accent flex items-center gap-1 w-fit text-sm text-muted-foreground hover:text-secondary-accent transition-colors"
        >
          <LuFolderSearch
            size={22}
            className="mr-1 group-hover:-translate-y-1 transition-transform"
          />
          <span>Ver todos os relatórios</span>
        </Link>
      </div>
    </section>
  );
}

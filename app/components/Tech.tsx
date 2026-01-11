"use client";

import { Ubuntu_Mono } from "next/font/google";
import IconAndName from "@/app/components/IconAndName";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

type TechGroupProps = {
  title: string;
  children: React.ReactNode;
};

function TechGroup({ title, children }: TechGroupProps) {
  return (
    <div className="flex gap-2 flex-col w-full">
      <h2 className="font-bold text-center sm:text-left bg-primary-bg translate-y-4 py-2 px-4 rounded-lg w-full sm:w-fit">
        {title}
      </h2>

      <div className="rounded-lg px-6 py-6 bg-primary-bg  border-terciary-bg w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Tech() {
  return (
    <section
      id="tech"
      className={`${ubuntuMonoFont.className} max-w-screen-xl mb-20 px-4 mx-auto pt-32`}
    >
      <h1 className="text-3xl font-bold mb-12 text-center md:text-left">
        Tecnologias
      </h1>

      <div className="flex flex-wrap gap-6">
        <div className="flex gap-2 flex-col w-full max-w-2xl">
          <h2 className="font-bold bg-primary-bg translate-y-4 py-2 px-4 rounded-lg w-full text-center sm:text-left sm:w-fit text-secondary-accent">
            Core Tech Stack
          </h2>

          <div className="rounded-lg px-6 py-6 bg-primary-bg  border-primary-accent w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <IconAndName
                icon="Springboot"
                text="Spring Boot"
                description="Framework Java para APIs robustas, seguras e escaláveis..."
              />
              <IconAndName
                icon="Postgresql"
                text="PostgreSQL"
                description="Banco de dados relacional avançado, integridade e performance..."
              />
              <IconAndName
                icon="Nextdotjs"
                text="Next.js"
                description="Framework React com SSR, SSG, App Router e performance otimizada..."
              />
            </div>
          </div>
        </div>

        <TechGroup title="Outros">
          <IconAndName
            icon="Html5"
            text="HTML"
            description="HTML semântico, marcação acessível e estrutura otimizada para SEO..."
          />
          <IconAndName
            icon="Css3"
            text="CSS"
            description="Design responsivo, layouts modernos e componentes de UI..."
          />
          <IconAndName
            icon="Javascript"
            text="JavaScript"
            description="Manipulação do DOM, ES6+, módulos, async/await e Promises..."
          />
          <IconAndName
            icon="React"
            text="React"
            description="Arquitetura baseada em componentes, Hooks, props e estado..."
          />
          <IconAndName
            icon="Tailwindcss"
            text="Tailwind CSS"
            description="Estilização utility-first, layouts responsivos e UI escalável..."
          />
          <IconAndName
            icon="Framer"
            text="Motion"
            description="Animações suaves, micro-interações e transições de UI..."
          />
          <IconAndName
            icon="Threedotjs"
            text="Three.js"
            description="Elementos 3D interativos, animações e renderização 3D na web..."
          />
          <IconAndName
            icon="Nodedotjs"
            text="Node.js"
            description="APIs backend, autenticação e lógica no lado do servidor..."
          />
          <IconAndName
            icon="Express"
            text="Express"
            description="APIs REST, rotas, middlewares e autenticação..."
          />
          <IconAndName
            icon="Typescript"
            text="TypeScript"
            description="Tipagem estática e código escalável no frontend e backend..."
          />
          <IconAndName
            icon="Java"
            text="Java"
            description="Programação orientada a objetos e fundamentos de software..."
          />
          <IconAndName
            icon="Php"
            text="PHP"
            description="Backend com páginas dinâmicas, SQL, sessões e autenticação..."
          />
          <IconAndName
            icon="Database"
            text="SQL"
            description="Banco de dados relacional, consultas e modelagem de dados..."
          />
          <IconAndName
            icon="Mongodb"
            text="MongoDB"
            description="Banco NoSQL, modelagem por documentos e operações CRUD..."
          />
          <IconAndName
            icon="Prisma"
            text="Prisma"
            description="ORM type-safe, schema, migrations e consultas ao banco..."
          />
        </TechGroup>

        <TechGroup title="Ferramentas">
          <IconAndName
            icon="Git"
            text="Git"
            description="Controle de versão, branches, commits e colaboração..."
          />
          <IconAndName
            icon="Linux"
            text="Linux"
            description="Gerenciamento de Sistemas, Ambiente Linux, terminal, pacotes e workflow de desenvolvimento..."
          />
          <IconAndName
            icon="Postman"
            text="Postman"
            description="Testes de APIs, requisições HTTP e depuração REST..."
          />
          <IconAndName
            icon="Insomnia"
            text="Insomnia"
            description="Testes e depuração de APIs REST com autenticação..."
          />
          <IconAndName
            icon="Figma"
            text="Figma"
            description="Design de interfaces, wireframes e fluxo design..."
          />
        </TechGroup>
      </div>
    </section>
  );
}

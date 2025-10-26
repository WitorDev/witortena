import { Ubuntu_Mono } from "next/font/google";
import TextCard from "@/app/components/TextCard";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Contributions() {
  return (
    <section
      id="contributions"
      className={`${ubuntuMonoFont.className} max-w-screen-xl px-4 mx-auto relative  flex flex-col items-center`}
    >
      <div className="flex w-full mt-20">
        <h1 className="text-3xl font-bold mb-10">Participações</h1>
      </div>

      {/* grid de 2x2 */}
      <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 gap-8 sm:grid-rows-1 mb-20">
        <TextCard
          title="NPI - Núcleo de Práticas de Informática"
          status="Integrante ativo"
          description="Ambiente de estudos e colaboração entre alunos de Ciência da Computação e Engenharia de Software da UniFil. Promove atividades práticas e troca de conhecimentos na área de tecnologia."
          info="Pesquisas e estudos em grupo"
        />
        <TextCard
          title="Pensamento Computacional"
          status="Integrante ativo"
          description="Projeto que permite estudantes de escolas públicas estudar tecnologia de forma gratuita na UniFil. Participei como monitor no projeto."
          info="Monitoria de alunos"
          link="https://github.com"
        />
        <div className="sm:col-span-2">
          <TextCard
            title="Grupo de Inteligência Artificial"
            status="Integrante ativo"
            description="Grupo voltado ao estudo e compreensão de ferramentas de IA, com foco em aplicações práticas, pesquisa e inovação tecnológica."
            info="Pesquisas e estudos em grupo"
          />
        </div>
      </div>
    </section>
  );
}

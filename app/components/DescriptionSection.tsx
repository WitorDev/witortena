import Image from "next/image";
import unifil_logo from "@/public/unifil_logo.png";

type DescriptionSectionProps = {
  category: string;
};

export default function DescriptionSection({
  category,
}: DescriptionSectionProps) {
  return (
    <section className="max-w-screen-xl px-4 mt-20">
      <div className="bg-background p-4 border border-terciary-bg rounded-lg flex flex-col sm:flex-row justify-between w-full gap-8">
        <div className="w-25 sm:w-100">
          <Image alt="Logo UniFil" className="nodrag" src={unifil_logo} />
        </div>
        {category == "NPI" ? (
          <div className="">
            <h1 className="text-lg font-bold mb-4">
              NPI - Núcleo de Práticas de Informática - UniFil
            </h1>
            <p>
              Os relatórios do Núcleo de Práticas de Informática são uma
              compilação das atividades e aprendizados realizados durante o
              curso, organizados de forma a facilitar o acompanhamento e a
              consulta futura. Este é um espaço reservado para informações
              adicionais sobre os relatórios do NPI.
            </p>
            <p className="mt-4">
              Os relatórios são divididos em semanas, cada uma com suas próprias
              atividades e aprendizados. Abaixo estão os cards para cada um dos
              relatórios
            </p>
          </div>
        ) : (
          <div className="">
            <h1 className="text-lg font-bold mb-4">
              Pensamento Computacional - UniFil
            </h1>
            <p>
              Os relatórios do Pensamento Computacional são uma forma de
              documentar os dias da minha extensão de monitoramento dos alunos
              que vão até a Unifil a fim de assistir as aulas de Pensamento
              Computacional.
            </p>
            <p className="mt-4">
              {" "}
              Esses relatórios são uma forma de registrar o que foi aprendido e
              as atividades realizadas durante o curso, além de servir como um
              guia para futuras referências. Os relatórios são divididos em
              semanas, cada uma com suas próprias atividades e aprendizados.
              Abaixo estão os cards para cada um dos relatórios
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

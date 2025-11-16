import { Ubuntu_Mono } from "next/font/google";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import hero_image from "@/public/disk.png";
import secondary_hero_image from "@/public/laptop.png";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});
const ubuntuFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

type ReportHeroSectionProps = {
  title: string;
};

export default function ReportHeroSection({ title }: ReportHeroSectionProps) {
  return (
    <section
      id="hero"
      className={`${ubuntuMonoFont.className} bg-background w-full mx-auto sm:bg-none px-4 relative min-h-[900px] sm:min-h-[1000px] overflow-hidden flex flex-col justify-center items-center text-left`}
    >
      <div className="hidden sm:block translate-y-8 absolute saturate-100 opacity-25 z-0">
        <Image
          alt="Computer Picture"
          width={900}
          src={
            title == "Pensamento Computacional"
              ? hero_image
              : secondary_hero_image
          }
        />
      </div>

      <div className="relative z-10">
        <h1
          id="title"
          className={`text-5xl max-w-screen-xl text-center sm:text-7xl font-bold text-primary-accent mt-4`}
        >
          {title}
        </h1>
      </div>
      <h2 className="text-xl sm:text-5xl w-50 text-terciary-bg mt-4 sm:w-150 text-center relative z-10">
        Monitoria de Alunos
      </h2>
      <div className="absolute hidden sm:block bottom-20 pr-8 animate-bounce z-10">
        <SlArrowDown
          size={30}
          strokeWidth={25}
          color="2bc133"
          className="translate-y-8"
        />
        <SlArrowDown
          size={30}
          strokeWidth={25}
          color="2bc133"
          className="translate-y-4"
        />
        <SlArrowDown size={30} strokeWidth={25} color="2bc133" />
      </div>
    </section>
  );
}

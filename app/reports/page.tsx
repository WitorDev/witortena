import Link from "next/link";
import { Ubuntu_Mono } from "next/font/google";

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
      <h1 className="text-lg">Relatórios - Pensamento Computacional</h1>
      <Link
        className="text-terciary-bg hover:text-foreground"
        href={"/reports/pensamento-computacional"}
      >
        Pensamento Computacional
      </Link>
      <h1 className="text-lg">
        Relatórios - NPI / Núcleo de Práticas de Informática
      </h1>
      <Link
        className="text-terciary-bg hover:text-foreground"
        href={"/reports/NPI"}
      >
        NPI - Núcleo de Práticas de Informática
      </Link>
    </div>
  );
}

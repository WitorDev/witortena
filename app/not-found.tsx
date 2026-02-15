import Link from "next/link";
import { BiGlobe } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { PiGlobeX } from "react-icons/pi";

export default function NotFound() {
  return (
    <>
      <section className="h-screen flex justify-center items-center mx-auto px-4 max-w-screen-xl">
        <main className="flex gap-4">
          <figure>
            <PiGlobeX
              size={155}
              className="text-primary-accent -translate-y-2"
            />
          </figure>
          <article>
            <h1 className="bg-primary-accent font-bold text-lg mb-4 p-1 w-fit text-background">
              404 Página não encontrada
            </h1>
            <p>A página que você está procurando não parece existir...</p>
            <p className="mb-4 font-bold">
              Tem certeza de que a busca está correta?
            </p>
            <Link
              className="flex gap-2 hover:bg-secondary-accent transition-all p-1 w-fit hover:text-background text-primary-accent"
              href={"/"}
            >
              <p>Voltar para a página inicial</p>
            </Link>
          </article>
        </main>
      </section>
    </>
  );
}

import Link from "next/link";
import { BiGlobe } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { PiGlobeX } from "react-icons/pi";
import { VscLoading } from "react-icons/vsc";

export default function NotFound() {
  return (
    <>
      <section className="h-screen flex justify-center items-center mx-auto px-4 max-w-screen-xl">
        <main className="flex gap-4">
          <figure>
            <VscLoading
              size={40}
              className="text-primary-accent animate-spin -translate-y-2"
            />
          </figure>
          <article>
            <h1 className="bg-primary-accent font-bold text-lg mb-4 p-1 w-fit text-background">
              Carregando
            </h1>
            <p>Carregando conteúdo...</p>
            <p className="mb-4 font-bold">Um momento por favor!</p>
          </article>
        </main>
      </section>
    </>
  );
}

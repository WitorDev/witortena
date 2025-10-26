import { Ubuntu_Mono } from "next/font/google";

import IconAndTitle from "@/app/components/IconAndTitle";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section id="contact" className="bg-secondary-bg ">
      <div
        className={`${ubuntuMonoFont.className} pb-20 max-w-screen-xl px-4 mx-auto relative min-h-screen flex flex-col pt-20`}
      >
        <div className="flex w-full mb-16">
          <h1 className="text-3xl font-bold">Entre em Contato</h1>
        </div>

        {/* Contact Box */}
        <div className="bg-primary-bg border-t-5 border-t-primary-accent">
          <form className="flex px-4 sm:px-8 pt-6 sm:pt-12 pb-8 flex-col gap-6">
            {/* email */}
            <h1 className="text-lg">Email</h1>
            <input
              className="text-xl bg-quaternary-bg p-2 w-full h-12"
              type="text"
              name="email"
              id="email"
            />

            {/* message */}
            <h1 className="text-lg">Mensagem</h1>
            <textarea
              className="p-2 text-lg bg-quaternary-bg w-full h-72"
              name="message"
              id="message"
            ></textarea>

            <button
              className="w-fit text-lg bg-primary-accent px-6 py-3 mt-2 rounded-sm place-self-end"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Contacts */}
        <div className="flex sm:gap-8 flex-wrap sm:flex-nowrap">
          <IconAndTitle title="Whatsapp" />
          <IconAndTitle title="Linkedin" />
          <IconAndTitle title="Github" />
          <IconAndTitle title="Email" />
        </div>
      </div>
    </section>
  );
}

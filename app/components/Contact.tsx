"use client";

import { Ubuntu_Mono } from "next/font/google";

import IconAndTitle from "@/app/components/IconAndTitle";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // 👇 Add this check
    if (form.current) {
      emailjs
        .sendForm(
          "service_808osig",
          "template_cb9ayi3",
          form.current, // TypeScript now knows this is safe
          "3rkGoqHD5pWIP2q3C"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Mensagem enviada. " + result.text);
          },
          (error) => {
            console.log(error.text);
            alert("Não foi possível enviar a mensagem: " + error.text);
          }
        );
    } else {
      console.error("The form reference is not set.");
    }
  };
  return (
    <section id="contact" className="bg-secondary-bg ">
      <div
        className={`${ubuntuMonoFont.className} pb-20 max-w-screen-xl px-4 mx-auto sm:gap-8 relative min-h-screen flex flex-col sm:flex-row pt-20`}
      >
        <div className="w-full">
          <div className="flex w-full mb-16">
            <h1 className="text-3xl font-bold">Entre em Contato</h1>
          </div>

          {/* Contact Box */}
          <div className="bg-primary-bg rounded-b-lg border-t-5 border-t-primary-accent">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex px-4 sm:px-8 pt-6 sm:pt-12 pb-8 flex-col gap-2"
            >
              {/* email */}
              <h1 className="text-lg">Nome</h1>
              <input
                className="text-xl bg-quaternary-bg p-2 w-full h-12"
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Seu nome..."
              />

              {/* email */}
              <h1 className="text-lg">Email</h1>
              <input
                className="text-xl bg-quaternary-bg p-2 w-full h-12"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Seu email..."
              />

              {/* assunto */}
              <h1 className="text-lg">Assunto</h1>
              <input
                className="text-xl bg-quaternary-bg p-2 w-full h-12"
                type="text"
                name="subject"
                id="subject"
                required
                placeholder="Assunto a ser tratado..."
              />

              {/* message */}
              <h1 className="text-lg">Mensagem</h1>
              <textarea
                className="p-2 text-xl bg-quaternary-bg w-full h-72"
                name="message"
                id="message"
                required
                placeholder="Sua mensagem..."
              ></textarea>

              <button
                className="w-fit cursor-pointer hover:bg-secondary-accent hover:text-black text-lg bg-primary-accent px-6 py-3 mt-2 rounded-sm place-self-end"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Contacts */}
        <div className="flex sm:flex-col sm:pt-16 pt-0 flex-wrap sm:flex-nowrap">
          <IconAndTitle title="Whatsapp" linkUrl="https://w.app/witortena" />
          <IconAndTitle
            title="Linkedin"
            linkUrl="https://www.linkedin.com/in/witortena"
          />
          <IconAndTitle
            title="Github"
            linkUrl="https://www.github.com/witordev"
          />
          <IconAndTitle
            title="Email"
            linkUrl="witortena@gmail.com"
            isEmail={true}
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { Ubuntu_Mono } from "next/font/google";

import IconAndTitle from "@/app/components/IconAndTitle";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {} from "react";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_808osig",
          "template_cb9ayi3",
          form.current,
          "3rkGoqHD5pWIP2q3C"
        )
        .then(
          (result) => {
            console.log(result.text);
            if (form.current) {
              form.current.reset();
            }
            alert("Mensagem enviada: " + result.text);
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
    <section
      id="contact"
      className="bg-secondary-bg border-t-2 border-primary-bg "
    >
      <div
        className={`${ubuntuMonoFont.className} pb-20 max-w-screen-xl px-4 mx-auto md:gap-8 relative flex flex-col lg:flex-row pt-20`}
      >
        <div className="w-full">
          <div className="flex w-full mb-16">
            <h1 className="text-3xl font-bold w-full text-center md:text-left">
              Entre em Contato
            </h1>
          </div>

          {/* Contact Box */}
          <div>
            <div className="bg-primary-accent w-full h-2 rounded-t-2xl"></div>
            <div className="bg-primary-bg rounded-b-lg">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex px-4 md:px-8 pt-6 md:pt-12 pb-8 flex-col gap-2"
              >
                {/* nome */}
                <h1 className="text-lg">Nome</h1>
                <input
                  className="bg-quaternary-bg p-2 w-full h-12"
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="Seu nome..."
                />

                {/* email */}
                <h1 className="text-lg">Email</h1>
                <input
                  className=" bg-quaternary-bg p-2 w-full h-12"
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Seu email..."
                />

                {/* assunto */}
                <h1 className="text-lg">Assunto</h1>
                <input
                  className=" bg-quaternary-bg p-2 w-full h-12"
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Assunto a ser tratado..."
                />

                {/* message */}
                <h1 className="text-lg">Mensagem</h1>
                <textarea
                  className="p-2  bg-quaternary-bg w-full h-72"
                  name="message"
                  id="message"
                  required
                  placeholder="Sua mensagem..."
                ></textarea>

                <button
                  className="cursor-pointer hover:bg-primary-accent hover:text-black text-lg border-2 button-fill font-bold border-primary-accent px-4 py-2 mt-4 rounded-md place-self-end"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className="flex lg:flex-col justify-around pt-8 md:pt-0 gap-8 lg:gap-0 lg:justify-normal flex-col sm:flex-row lg:pt-16 flex-wrap md:flex-nowrap">
          <IconAndTitle
            title="Whatsapp"
            linkUrl="https://wa.me/5543984138592"
          />
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

"use client";

import { Ubuntu_Mono } from "next/font/google";

import IconAndTitle from "@/app/components/IconAndTitle";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "motion/react";

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
    <section
      id="contact"
      className="bg-secondary-bg border-t-2 border-primary-bg "
    >
      <div
        className={`${ubuntuMonoFont.className} pb-20 max-w-screen-xl px-4 mx-auto md:gap-8 relative flex flex-col lg:flex-row pt-20`}
      >
        <div className="w-full">
          <div className="flex w-full mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl font-bold w-full text-center md:text-left"
            >
              Entre em Contato
            </motion.h1>
          </div>

          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-primary-accent w-full h-2 rounded-t-2xl"></div>
            <div className="bg-primary-bg rounded-b-lg">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex px-4 md:px-8 pt-6 md:pt-12 pb-8 flex-col gap-2"
              >
                {/* email */}
                <motion.h1
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-lg"
                >
                  Nome
                </motion.h1>
                <motion.input
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-quaternary-bg p-2 w-full h-12"
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="Seu nome..."
                />

                {/* email */}
                <motion.h1
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-lg"
                >
                  Email
                </motion.h1>
                <motion.input
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className=" bg-quaternary-bg p-2 w-full h-12"
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Seu email..."
                />

                {/* assunto */}
                <motion.h1
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-lg"
                >
                  Assunto
                </motion.h1>
                <motion.input
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className=" bg-quaternary-bg p-2 w-full h-12"
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Assunto a ser tratado..."
                />

                {/* message */}
                <motion.h1
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-lg"
                >
                  Mensagem
                </motion.h1>
                <motion.textarea
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="p-2  bg-quaternary-bg w-full h-72"
                  name="message"
                  id="message"
                  required
                  placeholder="Sua mensagem..."
                ></motion.textarea>

                <button
                  className="w-fit cursor-pointer hover:bg-secondary-accent hover:text-black text-lg bg-primary-accent px-4 py-2 mt-2 rounded-md place-self-end"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Contacts */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex lg:flex-col justify-around pt-8 md:pt-0 gap-8 lg:gap-0 lg:justify-normal flex-col sm:flex-row lg:pt-16 flex-wrap md:flex-nowrap"
        >
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
        </motion.div>
      </div>
    </section>
  );
}

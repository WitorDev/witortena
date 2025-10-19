import { Ubuntu_Mono } from "next/font/google";

const ubuntuMonoFont = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function page() {
  return (
    <section
      id="tech"
      className={`${ubuntuMonoFont.className} justify-center max-w-screen-xl px-4 mx-auto relative min-h-screen flex flex-col `}
    >
      <h1>Pensamento Computacional</h1>
    </section>
  );
}

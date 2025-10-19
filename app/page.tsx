import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Contributions from "@/app/components/Contributions";
import Projects from "@/app/components/Projects";
import Tech from "@/app/components/Tech";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contributions />
      <Projects />
      <Tech />
      <Contact />
    </>
  );
}

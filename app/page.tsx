import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Education from "@/app/components/Education";
import Contributions from "@/app/components/Contributions";
import Projects from "@/app/components/Projects";
import Tech from "@/app/components/Tech";
import Contact from "@/app/components/Contact";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Contributions />
      <Projects />
      <Tech />
      <Contact />
    </>
  );
}

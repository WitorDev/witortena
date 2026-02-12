import Hero from "@/app/components/home-sections/Hero";
import About from "@/app/components/home-sections/About";
import Education from "@/app/components/home-sections/Education";
import Contributions from "@/app/components/home-sections/Contributions";
import Projects from "@/app/components/home-sections/Projects";
import Tech from "@/app/components/home-sections/Tech";
import Contact from "@/app/components/home-sections/Contact";
import Certifications from "./components/home-sections/Certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Contributions />
      <Certifications />
      <Projects />
      <Tech />
      <Contact />
    </>
  );
}

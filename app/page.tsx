import Nav from "@/Components/Nav";
import Main from "@/Components/Main";
import AboutMe from "@/Components/AboutMe";
import Skills from "@/Components/Skills";
import IconsLoops from "@/Components/IconsLoops";
import Projects from "@/Components/Projects";
import Certificates from "@/Components/Certificates";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
    <Nav />
      <section id="home" className="scroll-mt-32">
        <Main />
      </section>
      <section id="about" className="scroll-mt-16">
        <AboutMe />
      </section>
      <section id="skills" className="scroll-mt-16">
        <Skills />
      </section>
      <IconsLoops />
      <section id="projects" className="scroll-mt-16">
        <Projects />
      </section>
      <section id="certificates" className="scroll-mt-16">
        <Certificates />
      </section>
      <section id="contact" className="scroll-mt-32">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

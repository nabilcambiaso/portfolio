import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Terminal from "@/components/Terminal";
import SectionHeading from "@/components/SectionHeading";
import Hq from "@/components/Hq";
import Contact from "@/components/Contact";
import Cursor from "@/components/fx/Cursor";
import ScrollTelemetry from "@/components/fx/ScrollTelemetry";
import Toast from "@/components/fx/Toast";
import RevealObserver from "@/components/fx/RevealObserver";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollTelemetry />
      <Toast />
      <NavBar />
      <main className="xl:pr-20">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <section id="terminal" className="relative z-10 mx-auto max-w-5xl px-4 py-28 md:px-8">
          <SectionHeading
            align="center"
            compact
            eyebrow="Interactive Devbox Terminal"
            title="nabil@marrakesh: ~$"
            description="Query my bio, stack, experience and contact details straight from the shell."
          />
          <div className="reveal">
            <Terminal />
          </div>
        </section>
        <Hq />
      </main>
      <Contact />
      <RevealObserver />
    </>
  );
}

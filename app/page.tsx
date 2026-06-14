import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <StatsBar />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <Skills />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <Services />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <Experience />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}

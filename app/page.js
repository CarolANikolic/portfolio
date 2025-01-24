import AboutMe from "@/components/AboutMe";
import PortfolioSection from "@/components/PortfolioSection";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <AboutMe/>
      <PortfolioSection/>
      <Skills/>
      <ContactForm/>
    </main>
  );
}

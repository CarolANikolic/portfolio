import AboutMe from "@/components/AboutMe";
import styles from "./page.module.css";
import TitleAndText from "@/components/TitleAndText";
import PortfolioItem from "@/components/PortfolioItem";

import personalIcon from "@/public/icons/personal.svg";
import clientIcon from "@/public/icons/client.svg";
import dadiljaMelisaBlack from "@/public/images/dadilja-melisa-black.png";
import dadiljaMelisaColor from "@/public/images/dadilja-melisa.png"

export default function Home() {
  return (
    <main>
      <AboutMe/>

      <section className={styles.portfolioSection}>
        <div className={styles.portfolioContainer}>
          <TitleAndText
          title="h2"
          titleContent="Recent Projects & Work"
          text=""
          alignment="center"
          color="boldBlack"
          fontSize="big"
          />

          <TitleAndText
          title=""
          text="Here are a few of the projects I’ve been working lately."
          alignment="left"
          color="regularBlack"
          fontSize="medium"
          />
        </div> 
        
        <PortfolioItem
        hrefLink="https://www.google.com/"
        imageColor={dadiljaMelisaColor}
        imageBlack={dadiljaMelisaBlack}
        altPhoto="Screenshot of the website Dadilja Melisa."
        title="h3"
        text="Dadilja Melisa Day Care"
        projectIcon={personalIcon}
        altIcon="Icon for personal projects"
        projectCategory="Personal Project"
        paragraphText="Vivamus sit amet nibh non tellus tristique interdum. Nulla id gravida magna, ut semper sapien. Aenean aliquam molestie leo, vitae iaculis nisl. "
        
        
        />
      </section>

    </main>
  );
}

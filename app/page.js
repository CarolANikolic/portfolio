import AboutMe from "@/components/AboutMe";
import styles from "./page.module.css";
import TitleAndText from "@/components/TitleAndText";

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
          fontSize="medium"
          />

          <TitleAndText
          title=""
          text="Here are a few of the projects I’ve been working lately."
          alignment="left"
          color="regularBlack"
          fontSize="small"
          />
        </div> 
      </section>

    </main>
  );
}

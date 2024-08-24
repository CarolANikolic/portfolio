import AboutMe from "@/components/AboutMe";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <AboutMe/>
      <hr className={styles.customHr}/>
    </main>
  );
}

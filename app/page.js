import TitleAndText from "@/components/TitleAndText";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <article className={styles.about}>
        <TitleAndText
          title="h1"
          titleContent="Hello, I’m Carol, a Front-End Developer who's always nose-deep in a good book."
          text=""
          alignment="left"
          color="boldBlack"
          fontSize="big"
          />

        <TitleAndText
          title="p"
          text="For me, the essence of software development lies in the thrill of problem-solving. There's a unique rush when the pieces of a complex puzzle finally click into place."
          alignment="left"
          color="regularBlack"
          fontSize="small"
          />
      </article>
    </main>
  );
}

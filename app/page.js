import TitleAndText from "@/components/TitleAndText";
import Image from "next/image";
import myPhoto from "../public/images/my-photo.png"
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

          <div>
            <div className={styles.imageContainer}>
              <Image src={myPhoto} alt="Carol Nikolic's profile photo" className={styles.myPhoto}/>
            </div>
          </div>
      </article>
    </main>
  );
}

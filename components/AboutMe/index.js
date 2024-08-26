import TitleAndText from "@/components/TitleAndText";
import Image from "next/image";
import myPhoto from "@/public/images/my-photo.png";
import githubIcon from "@/public/icons/github.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import styles from "./index.module.css";
import ContactIcon from "../ContactIcon";

export default function AboutMe() {
    return (
        <>
            <section className={`${styles.about} ${styles.aboutIntro}`}>
                <TitleAndText
                    title="h1"
                    titleContent="Hello, I'm Carol, a Front End Developer and QA Tester, who is always on a lookout for exciting projects!"
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

                        <div className={styles.contactIconsContainer}>
                            <ContactIcon
                                link="https://github.com/CarolANikolic"
                                icon={githubIcon}
                                alt="GitHub clickable icon"
                            />
                            <ContactIcon
                                link="https://www.linkedin.com/in/caroline-nikolic/"
                                icon={linkedinIcon}
                                alt="LinkedIn clickable icon"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <hr className={styles.customHr}/>

            <section className={styles.about}>
                <TitleAndText 
                    title=""
                    text="My true passion is QA testing, and it all started during my time at a tech startup. Although I was initially focused on social media and marketing, I had the opportunity to interact with the development team. They asked me to test new features and provide feedback as a user. That experience sparked my curiosity about software development and testing, leading me to explore iOS development and later web development."
                    alignment="left"
                    color="regularBlack"
                    fontSize="small"
                />
                <TitleAndText 
                    title=""
                    text="I realized that to become a truly insightful QA tester, I needed to understand software development from the inside out. This understanding would allow me to approach testing with a deeper, more informed perspective. So, I continued to expand my knowledge, working on various web development projects, both for clients and as personal challenges."
                    alignment="left"
                    color="regularBlack"
                    fontSize="small"
                />
                <TitleAndText 
                    title=""
                    text="Along the way, I took on various web development projects as a freelancer and co-founded WebCircle in 2022, a company dedicated to helping small and medium-sized businesses create impactful websites."
                    alignment="left"
                    color="regularBlack"
                    fontSize="small"
                />
            </section>
        </>
    );
}
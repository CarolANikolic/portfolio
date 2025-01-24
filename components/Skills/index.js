import TitleAndText from "../TitleAndText";
import skills from "@/objects/skills";
import styles from "./index.module.css";

export default function Skills() {
    return (
        <section className={styles.skillsSection}>
            <div className={styles.skillsSectionContainer}>
            <hr></hr>
                <div>
                    <TitleAndText
                    title="h2"
                    titleContent="Check Out Some of My Skills"
                    alignment="center"
                    color="boldBlack"
                    fontSize="big"
                    />

                    <TitleAndText
                        text="Those are the Developer skills I’ve mastered and am refining, along with QA Testing studies."
                        alignment="center"
                        color="regularBlack"
                        fontSize="medium"
                    />
                </div>
                
                <div className={styles.skillsGrid}>
                    {skills.map((skill) => (
                        <TitleAndText
                            key={skill}
                            text={skill}
                            alignment="center"
                            color="regularBlack"
                            fontSize="medium"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


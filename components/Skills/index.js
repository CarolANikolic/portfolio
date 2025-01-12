import TitleAndText from "../TitleAndText";
import skills from "@/objects/skills";
import styles from "./index.module.css";

export default function Skills() {
    return (
        <section>
            <div>
                <TitleAndText
                title="h2"
                titleContent="Check Out Some of My Skills"
                alignment="center"
                color="boldBlack"
                fontSize="big"
                />
            </div>
            
            <div>
                {skills.map((skill) => (
                    <TitleAndText
                        key={skill}
                        text={skill}
                        alignment="left"
                        color="regularBlack"
                        fontSize="medium"
                    />
                ))}
            </div>
        </section>
    );
}


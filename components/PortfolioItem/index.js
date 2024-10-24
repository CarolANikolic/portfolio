"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TitleAndText from "../TitleAndText";
import styles from "./index.module.css";

export default function PortfolioItem(props) {
    const {
        hrefLink, 
        imageColor, 
        imageBlack, 
        altPhoto, 
        title, 
        text, 
        projectIcon, 
        altIcon, 
        projectCategory, 
        paragraphText
    } = props;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <section>
            <div className={styles.imageContainer} >
                <Link 
                    href={hrefLink}
                    target="_blank"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image
                        src={isHovered ? imageColor : imageBlack}
                        alt={altPhoto}
                        className={styles.projectPhoto}
                    />
                </Link>
            </div>

            <div className={styles.projectExplanationContainer}>
                <TitleAndText
                    title={title}
                    text={text}
                    alignment="left"
                    color="boldBlack"
                    fontSize="medium"
                    noMargin={false}
                /> 

                <div>
                    <div className={styles.iconContainersWrap}>
                        <div  className={styles.iconContainer}>
                            <Image 
                                src={projectIcon} 
                                alt={altIcon}
                            />
                        
                            <TitleAndText
                                text={projectCategory}
                                alignment="left"
                                color="regularBlack"
                                fontSize="miniFont"
                                noMargin={true}
                            />
                        </div>
                    </div>

                    <TitleAndText
                        title=""
                        text={paragraphText}
                        alignment="left"
                        color="regularBlack"
                        fontSize="small"
                        noMargin={false}
                    />
                </div>
            </div>
    </section>
    );
}
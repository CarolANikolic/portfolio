'use client';

import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import styles from "./index.module.css"

export default function NavBar() {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/">
                    <div>
                        <Image
                            src={logoImg}
                            alt="Carol Nikolic logo"
                            priority
                        />
                    </div>
                </Link>
            </div> 

            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link href="#about" className={styles.navListItem}>About</Link>
                    </li>
                    <li>
                        <Link href="#projects" className={styles.navListItem}>Projects</Link>
                    </li>
                    <li>
                        <Link href="#skills" className={styles.navListItem}>Skills</Link>
                    </li>
                    <li>
                        <Link href="#contact" className={styles.navListItem}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
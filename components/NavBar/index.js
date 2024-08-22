'use client';

import Link from "next/link";
import styles from "./index.module.css";
import MenuIcon from "../MenuIcon";
import { useState } from "react";

export default function NavBar() {
    const [menu, setMenu] = useState(false);

    return (
        <header className={styles.header}>
            <div>
                <Link href="/" className={styles.navListItem}>
                    <p className={styles.logoName}>Carol Nikolic</p>
                </Link>
            </div> 

            <MenuIcon toggleMenu={{ menu, setMenu}}/>

            <nav>
                <ul className={`${styles.navList} ${menu && styles.showMenu}`}>
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
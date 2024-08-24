'use client';

import Link from "next/link";
import styles from "./index.module.css";
import MenuIcon from "../MenuIcon";
import { useState } from "react";

export default function NavBar() {
    const [menu, setMenu] = useState(false);

    const [activeItem, setActiveItem] = useState("");

    const handleClick = (id) => {
        setActiveItem(id);
        setMenu(false);
    };

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
                        <Link 
                            href="#about" 
                            className={`${styles.navListItem} 
                                        ${activeItem === "about" ? 
                                        styles.active : 
                                        ""}`}
                            onClick={() => handleClick("about")}
                        >
                            About
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            href="#projects" 
                            className={`${styles.navListItem} ${activeItem === "projects" 
                                        ? styles.active : 
                                        ""}`}
                            onClick={() => handleClick("projects")}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#skills" 
                            className={`${styles.navListItem} ${
                                        activeItem === "skills" ? 
                                        styles.active : 
                                        ""}`}
                            onClick={() => handleClick("skills")}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#contact" 
                            className={`${styles.navListItem} ${activeItem === "contact" ? 
                                        styles.active : 
                                        ""}`}
                            onClick={() => handleClick("contact")}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
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
                <ul>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#skills">Skills</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
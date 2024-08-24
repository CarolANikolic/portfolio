import Link from "next/link";
import Image from "next/image";

export default function ContactIcon(props) {
    return (
            <Link href={props.link} target="_blank" rel="noopener noreferrer">
                <Image 
                        src={props.icon} 
                        alt={props.alt}
                />
            </Link>
    );
}
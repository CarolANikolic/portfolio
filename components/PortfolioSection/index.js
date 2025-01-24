import TitleAndText from "../TitleAndText";
import PortfolioItem from "../PortfolioItem";
import personalIcon from "@/public/icons/personal.svg";
import clientIcon from "@/public/icons/client.svg";
import dadiljaMelisaBlack from "@/public/images/dadilja-melisa-black.png";
import dadiljaMelisaColor from "@/public/images/dadilja-melisa.png";
import moneyExchangeBlack from "@/public/images/money-exchange-black.png";
import moneyExchangeColor from "@/public/images/money-exchange.png";
import interactiveCardBlack from "@/public/images/interactive-card-black.png";
import interactiveCardColor from "@/public/images/interactive-card.png";
import gimenezBlack from "@/public/images/gimenez-luthieria-black.png";
import gimenezColor from "@/public/images/gimenez-luthieria.png";
import todoListBlack from "@/public/images/todo-list-black.png";
import todoListColor from "@/public/images/todo-list.png";
import qrCodeBlack from "@/public/images/qr-code-black.png";
import qrCodeColor from "@/public/images/qr-code.png";
import styles from "./index.module.css";

export default function PortfolioSection() {
    return (
        <section className={styles.portfolioSection}>
            <div className={styles.portfolioTitlesContainer}>
                <TitleAndText
                title="h2"
                titleContent="Recent Projects & Work"
                text=""
                alignment="center"
                color="boldBlack"
                fontSize="big"
                />

                <TitleAndText
                title=""
                text="Here are a few of the projects I’ve been working lately."
                alignment="center"
                color="regularBlack"
                fontSize="medium"
                />
            </div> 

            <div className={styles.portfolioItemsContainer}>
                <PortfolioItem
                hrefLink="https://www.google.com/"
                imageColor={dadiljaMelisaColor}
                imageBlack={dadiljaMelisaBlack}
                altPhoto="Screenshot of the website Dadilja Melisa."
                titleContent="Dadilja Melisa Day Care"
                projectIcon={clientIcon}
                altIcon="Icon for client projects"
                projectCategory="Client Project"
                paragraphText="Vivamus sit amet nibh non tellus tristique interdum. Nulla id gravida magna, ut semper sapien. Aenean aliquam molestie leo, vitae iaculis nisl. "
                />

                <PortfolioItem
                hrefLink="https://www.google.com/"
                imageColor={moneyExchangeColor}
                imageBlack={moneyExchangeBlack}
                altPhoto="Screenshot of the website Money Exchange."
                titleContent="Money Exchange"
                projectIcon={personalIcon}
                altIcon="Icon for personal projects"
                projectCategory="Personal Project"
                paragraphText="Vivamus sit amet nibh non tellus tristique interdum. Nulla id gravida magna, ut semper sapien. Aenean aliquam molestie leo, vitae iaculis nisl. "
                />

                <PortfolioItem
                hrefLink="https://www.google.com/"
                imageColor={interactiveCardColor}
                imageBlack={interactiveCardBlack}
                altPhoto="Screenshot of the website Interactive Card."
                titleContent="Interactive Card"
                projectIcon={personalIcon}
                altIcon="Icon for personal projects"
                projectCategory="Personal Project"
                paragraphText="Vivamus sit amet nibh non tellus tristique interdum. Nulla id gravida magna, ut semper sapien. Aenean aliquam molestie leo, vitae iaculis nisl. "
                />

                <PortfolioItem
                hrefLink="https://www.google.com/"
                imageColor={gimenezColor}
                imageBlack={gimenezBlack}
                altPhoto="Screenshot of the website Gimenez Luthieria."
                titleContent="Gimenez Luthieria"
                projectIcon={clientIcon}
                altIcon="Icon for client projects"
                projectCategory="Client Project"
                paragraphText="Vivamus sit amet nibh non tellus tristique interdum. Nulla id gravida magna, ut semper sapien. Aenean aliquam molestie leo, vitae iaculis nisl. "
                />

                <PortfolioItem
                hrefLink="https://www.google.com/"
                imageColor={todoListColor}
                imageBlack={todoListBlack}
                altPhoto="Screenshot of the website Todo List."
                titleContent="Todo List"
                projectIcon={personalIcon}
                altIcon="Icon for personal projects"
                projectCategory="Personal Project"
                paragraphText="Vivamus sit amet nibh non tellus tristique interdum. Nulla id gravida magna, ut semper sapien. Aenean aliquam molestie leo, vitae iaculis nisl. "
                />

                <PortfolioItem
                hrefLink="https://www.google.com/"
                imageColor={qrCodeColor}
                imageBlack={qrCodeBlack}
                altPhoto="Screenshot of the website QR Code generator."
                titleContent="Easy QR Code Generator"
                projectIcon={personalIcon}
                altIcon="Icon for personal projects"
                projectCategory="Personal Project"
                paragraphText="Vivamus sit amet nibh non tellus tristique interdum. Nulla id gravida magna, ut semper sapien. Aenean aliquam molestie leo, vitae iaculis nisl. "
                />
            </div>
        </section>
    );
}
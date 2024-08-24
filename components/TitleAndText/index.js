import styles from "./index.module.css";

export default function TitleAndText(props) {
    const { title, titleContent, text, alignment, color, fontSize } = props;

    // Determine the alignment, color, and font size classes based on the props
    const alignmentClass = styles[`${alignment}Align`];
    const colorClass = styles[`${color}Color`];
    const fontSizeClass = styles[`${fontSize}Font`];

    return (
        <div>
            {title === "h1" ? (
                <h1 className={`${alignmentClass} ${colorClass} ${fontSizeClass}`}>
                    {titleContent}
                </h1>
            ) : title === "h2" ? (
                <h2 className={`${alignmentClass} ${colorClass} ${fontSizeClass}`}>
                    {titleContent}
                </h2>
            ) : title === "h3" ? (
                <h3 className={`${alignmentClass} ${colorClass} ${fontSizeClass}`}>
                    {titleContent}
                </h3>
            ) : (
                <p className={`${alignmentClass} ${colorClass} ${fontSizeClass}`}>
                    {text}
                </p>
            )}
        </div>
    );
}

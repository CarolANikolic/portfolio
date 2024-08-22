import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  description: "Carol Nikolic's front-end developer portfolio.",
  keywords: "front-end developer, programmer, portfolio",
  viewport: "width=device-width, initial-scale=1.0",
  title: "Carol Nikolic's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}

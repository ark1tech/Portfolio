import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./nav.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ark1tech",
  description: "Portfolio of Arki Mañago",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container flex flex-col items-center">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}

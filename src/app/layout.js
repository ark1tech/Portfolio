import "./globals.css";
import NavBar from "./nav.jsx";

export const metadata = {
  title: "ark1tech",
  description: "Portfolio of Arki Mañago",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-['Inclusive_Sans'] text-[1.2rem]">
        <div className="container flex flex-col items-center">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}

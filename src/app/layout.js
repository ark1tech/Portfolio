import "./globals.css";
import "@mantine/core/styles.css";

import NavBar from "./_nav.jsx";
import Favicon from "./favicon.svg";

import { ColorSchemeScript } from "@mantine/core";

export const metadata = {
  title: "ark1tech",
  description: "Portfolio of Arki Mañago",
  icons: [{ rel: "icon", url: Favicon.src }],
};

// const theme = createTheme({
//   colorScheme: 'dark'
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body className="font-['Roboto']">
        <div className="container flex flex-col gap-[0rem] items-center min-h-[100svh]">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}

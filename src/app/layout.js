import "./globals.css";
import "@mantine/core/styles.css";

import NextTopLoader from "nextjs-toploader";
import NavBar from "./_nav.jsx";
import Favicon from "./favicon.png";

import { ColorSchemeScript } from "@mantine/core";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "ark1tech | Arki Mañago",
    template: "%s | Arki Mañago",
  },
  description:
    "Portfolio of Arki Mañago. Product design and engineering where good engineering meets good taste. Building accessible, practical, and satisfying products.",
  keywords: [
    "Arki Mañago",
    "Product Design",
    "Engineering",
    "arkitech",
    "Portfolio",
    "UX Design",
    "Software Engineering",
  ],
  authors: [{ name: "Arki Mañago", url: "https://www.linkedin.com/in/ark1tech/" }],
  creator: "Arki Mañago",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Arki Mañago",
    title: "Arki Mañago — Product Design & Engineering",
    description:
      "Portfolio of Arki Mañago. Product design and engineering where good engineering meets good taste.",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Arki Mañago — Product Design & Engineering | arkitech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arki Mañago — Product Design & Engineering",
    description:
      "Portfolio of Arki Mañago. Product design and engineering where good engineering meets good taste.",
    images: ["/meta.png"],
  },
  icons: [{ rel: "icon", url: Favicon.src }],
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="font-['Roboto'] overflow-x-hidden">
        <NextTopLoader color="#ef542b" height={3} showSpinner={false} />
        <div className="container flex flex-col items-center">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}

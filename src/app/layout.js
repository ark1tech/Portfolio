import "./globals.css";
import "@mantine/core/styles.css";

import NextTopLoader from "nextjs-toploader";
import NavBar from "./_nav.jsx";
import Favicon from "./favicon.png";

import { ColorSchemeScript } from "@mantine/core";
import { Inter, DM_Sans, Roboto, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteUrl = "https://arkimanago.com/";

export const metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    siteName: "Arki Mañago",
    title: "Arki Mañago — Product Design & Engineering",
    description:
      "Portfolio of Arki Mañago. Product design and engineering where good engineering meets good taste.",
    images: [
      {
        url: `${siteUrl}/static/images/meta.png`,
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
    images: [`${siteUrl}/static/images/meta.png`],
  },
  icons: [{ rel: "icon", url: Favicon.src }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${roboto.variable} ${jetbrainsMono.variable}`}>
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body className="font-roboto overflow-x-hidden">
        <NextTopLoader color="#ef542b" height={3} showSpinner={false} />
        <div className="container flex flex-col items-center">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
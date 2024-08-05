import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon.png"
          type="images/png"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <header>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.marvelLogo}
            width={100}
            height={24}
            priority
          />
        </header>
        {children}
        <footer>Data provided by Marvel. © 2014 Marvel</footer>
      </body>
    </html>
  );
}

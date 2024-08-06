import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Image from "next/image";
import Marvel from "./components/svg/Marvel";
import Link from "next/link";
import Head from "next/head";
import { HeartFilled } from "./components/svg/Heart";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel Heroes",
  description: "An app to see your favorite heroes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hearts = 3;
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <header className={styles.header}>
          <Link href="/" aria-label="Go to homepage" className={styles.logo}>
            <Marvel />
          </Link>
          <Link href="/favorites" className={styles.favorites}>
            <HeartFilled /> {hearts}
          </Link>
        </header>
        {children}
        <footer>
          <a href="http://marvel.com">
            Data provided by Marvel. © 2024 MARVEL
          </a>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

import Marvel from "./components/svg/Marvel";
import Link from "next/link";

import HeartsCount from "./components/HeartsCount";

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
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <header className={styles.header}>
          <Link href="/" aria-label="Go to homepage" className={styles.logo}>
            <Marvel />
          </Link>
          <HeartsCount />
        </header>
        {children}
        <footer>
          <a className={styles.attribution} href="http://marvel.com">
            Data provided by Marvel. © 2024 MARVEL
          </a>
        </footer>
      </body>
    </html>
  );
}

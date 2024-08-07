"use client";

import { useEffect, useState } from "react";
import styles from "./HeartsCount.module.css";

import { HeartFilled } from "./svg/Heart";
import Link from "next/link";

export default function HeartsCount() {
  const [favorites] = useState(() => {
    const favs = JSON.parse(window.localStorage.getItem("favorites") as string);
    return favs || [];
  });

  return (
    <Link href="/?favorite=true" className={styles.favorites}>
      <HeartFilled /> {favorites.length}
    </Link>
  );
}

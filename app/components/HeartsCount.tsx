"use client";

import { useEffect, useState } from "react";
import styles from "./HeartsCount.module.css";

import { HeartFilled } from "./svg/Heart";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HeartsCount() {
  const searchParams = useSearchParams();

  const [favorites, setFavorites] = useState(() => {
    const favs = JSON.parse(window.localStorage.getItem("favorites") as string);
    return favs.length;
  });

  useEffect(() => {
    const charactersCount = searchParams.get("charactersCount");
    if (charactersCount) setFavorites(charactersCount);
  }, [searchParams]);

  return (
    <Link href="/?favorite=true" className={styles.favorites}>
      <HeartFilled /> {favorites}
    </Link>
  );
}

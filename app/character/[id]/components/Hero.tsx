"use client";

import { FavoritesContext } from "@/app/favorites-context";
import styles from "./Hero.module.css";

import { HeartFilled, HeartOutline } from "@/app/components/svg/Heart";
import { useCallback, useEffect, useState } from "react";

type HeroProps = {
  img: string;
  name: string;
  description: string;
  id: string;
};
export default function Hero({ img, description, name, id }: HeroProps) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const favs = window.localStorage.getItem("favorites");
    return JSON.parse(favs as string) || [];
  });

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = useCallback(() => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    }
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <img className={styles.hero__image} src={img} alt={name} />
          <article className={styles.hero__content}>
            <div className={styles.hero__heading}>
              <h1 className={styles.hero__title}>{name}</h1>
              <button
                className={styles.hero__favorite}
                onClick={handleFavorite}
              >
                {favorites.includes(id) ? (
                  <HeartFilled />
                ) : (
                  <HeartOutline className={styles.hero__heartOutline} />
                )}
              </button>
            </div>
            <p className={styles.hero__description}>{description}</p>
          </article>
        </div>
        <div className={styles.hero__borderShape} />
      </section>
    </FavoritesContext.Provider>
  );
}

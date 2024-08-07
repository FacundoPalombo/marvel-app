"use client";

import { HeartFilled, HeartOutline } from "./svg/Heart";
import styles from "./Card.module.css";
import { useFavorites } from "../favorites-context";
import { useCallback } from "react";

type CardProps = {
  id: string;
  image: string;
  title: string;
};

export default function Card({ id, image, title }: CardProps) {
  const { favorites, setFavorites } = useFavorites();

  const handleFavorite = useCallback(() => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    }
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  }, [favorites]);

  return (
    <div className={styles.container}>
      <img className={styles.card__thumbnail} src={image} alt={title} />
      <hr className={styles.card__separator} />
      <div className={styles.card__content}>
        <p className={styles.content__title}>{title}</p>
        <button
          className={styles.content__favorite}
          aria-label={
            favorites?.includes(id)
              ? `${title} is favorite`
              : `${title} is not favorite`
          }
          onClick={handleFavorite}
        >
          {favorites?.includes(id) ? (
            <HeartFilled />
          ) : (
            <HeartOutline className={styles.content__heartOutlined} />
          )}
        </button>
      </div>
      <div className={styles.card__borderShape} />
    </div>
  );
}

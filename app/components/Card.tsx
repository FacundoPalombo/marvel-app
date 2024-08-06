"use client";

import { HeartFilled, HeartOutline } from "./svg/Heart";
import styles from "./Card.module.css";
import { MouseEventHandler } from "react";

type CardProps = {
  image: string;
  title: string;
  favorite: boolean;
  onClickFavorite: MouseEventHandler<HTMLButtonElement>;
};

export default function Card({
  image,
  title,
  favorite,
  onClickFavorite,
}: CardProps) {
  return (
    <div className={styles.container}>
      <img className={styles.card__thumbnail} src={image} alt={title} />
      <hr className={styles.card__separator} />
      <div className={styles.card__content}>
        <p className={styles.content__title}>{title}</p>
        <button
          className={styles.content__favorite}
          aria-label={
            favorite ? `${title} is favorite` : `${title} is not favorite`
          }
          onClick={onClickFavorite}
        >
          {favorite ? <HeartFilled /> : <HeartOutline />}
        </button>
      </div>
      <div className={styles.card__borderShape} />
    </div>
  );
}

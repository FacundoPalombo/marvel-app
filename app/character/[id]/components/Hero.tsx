import styles from "./Hero.module.css";

import { HeartFilled, HeartOutline } from "@/app/components/svg/Heart";

type HeroProps = {
  img: string;
  name: string;
  favorite: boolean;
  description: string;
};
export default function Hero({ img, description, favorite, name }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <img className={styles.hero__image} src={img} alt={name} />
        <article className={styles.hero__content}>
          <div className={styles.hero__heading}>
            <h1 className={styles.hero__title}>{name}</h1>
            <button className={styles.hero__favorite}>
              {favorite ? (
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
  );
}

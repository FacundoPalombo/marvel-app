import styles from "./Comic.module.css";

type ComicProps = {
  img: string;
  title: string;
  issueDate: string;
};

export default function Comic({ img, title, issueDate }: ComicProps) {
  return (
    <div className={styles.comic}>
      <img className={styles.comic__image} src={img} alt={title} />
      <h3 className={styles.comic__title}>{title}</h3>
      <span className={styles.comic__issueDate}>{issueDate}</span>
    </div>
  );
}

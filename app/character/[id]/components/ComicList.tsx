import { Comic as ComicType, DateFrom } from "@/models/comics";
import Comic from "./Comic";
import styles from "./ComicList.module.css";

type ComicListProps = {
  comics: ComicType[];
};

export default function ComicList({ comics }: ComicListProps) {
  return (
    <section className={styles.comicList}>
      <h2 className={styles.comicList__title}>Comics</h2>
      <section className={styles.comicList__content}>
        {comics?.map((comic) => (
          <Comic
            key={comic.id}
            img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            issueDate={
              new Date(
                comic.dates.find(
                  (date: DateFrom) => date.type === "onsaleDate"
                ).date
              )
                .getFullYear()
                .toString() || "unknown"
            }
            title={comic.title}
          />
        ))}
      </section>
    </section>
  );
}

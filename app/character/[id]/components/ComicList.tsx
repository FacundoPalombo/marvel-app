import { Comic, DateFrom } from "@/models/comics";
import ComicComponent from "./Comic";
import styles from "./ComicList.module.css";

type ComicListProps = {
  comics: Comic[];
};

export default function ComicList({ comics }: ComicListProps) {
  return (
    <section className={styles.comicList}>
      <h2 className={styles.comicList__title}>Comics</h2>
      <section className={styles.comicList__content}>
        {comics?.map((comic) => (
          <ComicComponent
            key={comic.id}
            img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            issueDate={
              new Date(
                comic.dates.find(
                  (date: DateFrom) => date.type === "onsaleDate"
                )!.date as string
              )
                ?.getFullYear()
                ?.toString() || "unknown"
            }
            title={comic.title}
          />
        ))}
      </section>
    </section>
  );
}

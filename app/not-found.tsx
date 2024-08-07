import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <pre className={styles.notFound__code}>404</pre>
      <h2 className={styles.notFound__message}>Ups! resource not found!</h2>
      <Link className={styles.notFound__link} href="/">
        Return to main page
      </Link>
    </div>
  );
}

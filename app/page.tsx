import { CharactersResponse } from "@/models/definitions";
import styles from "./page.module.css";
import { getCharacters } from "./services/character";

export default async function Home({ searchParams }) {
  const character = searchParams?.character;
  const characters: CharactersResponse = await getCharacters(character);
  return <main className={styles.main}>{JSON.stringify(characters)}</main>;
}

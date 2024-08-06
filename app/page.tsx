import { PageProps } from "@/.next/types/app/page";

import { CharactersResponse } from "@/models/definitions";

import styles from "./page.module.css";
import { getCharacters } from "./services/character";
import CharactersList from "./components/CharactersList";

import characters from "./fixtures/characters.json";

export default async function Home({ searchParams }: PageProps) {
  const character = searchParams?.character;
  // const characters: CharactersResponse = await getCharacters(character);

  console.log(characters.etag);
  return (
    <main className={styles.main}>
      <CharactersList characters={characters.data.results} />
    </main>
  );
}

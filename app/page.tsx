import { PageProps } from "@/.next/types/app/page";

import { CharactersResponse } from "@/models/definitions";

import styles from "./page.module.css";
import { getCharacters } from "./services/character";
import CharactersList from "./components/CharactersList";
import SearchBar from "./components/SerachBar";

import characters from "./fixtures/characters.json";

export default async function Home({ searchParams }: PageProps) {
  const character = searchParams?.character;
  // const characters: CharactersResponse = await getCharacters(character);

  console.log(characters.etag);
  return (
    <main className={styles.main}>
      <SearchBar count={50} />
      <CharactersList characters={characters.data.results} />
    </main>
  );
}

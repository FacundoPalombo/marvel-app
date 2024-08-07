import { PageProps } from "@/.next/types/app/page";

import { CharactersResponse } from "@/models/definitions";

import styles from "./page.module.css";
import { getCharacters } from "./services/character";
import CharactersList from "./components/CharactersList";

import characters from "./fixtures/characters.json";

export default async function Home({ searchParams }: PageProps) {
  const favorite = searchParams?.favorite;
  const character = searchParams?.character;
  // const characters: CharactersResponse = await getCharacters(character);

  console.log(characters.etag);
  return (
    <main className={styles.main}>
      {favorite && <h1 className={styles.title}>Favorites</h1>}
      <CharactersList
        characters={characters.data.results}
        filterFavorites={favorite}
      />
    </main>
  );
}

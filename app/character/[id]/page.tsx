import {
  getCharacterById,
  getComicsByCharacterId,
} from "@/app/services/character";

import styles from "./page.module.css";

import characterDetail from "../../fixtures/character.json";
import characterComics from "../../fixtures/comicsById.json";

import Hero from "./components/Hero";
import ComicList from "./components/ComicList";

export default async function CharacterDetail({ params }) {
  const { id } = params;
  // const characterDetail = await getCharacterById(id);
  // const characterComics = await getComicsByCharacterId(id);
  const character = characterDetail.data.results[0];
  const comics = characterComics.data.results;

  const favorite = false;

  const chars = JSON.stringify(characterDetail);

  return (
    <main className={styles.container}>
      <Hero
        img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        name={character.name}
        description={character.description}
        id={id}
      />
      <ComicList comics={comics} />
    </main>
  );
}

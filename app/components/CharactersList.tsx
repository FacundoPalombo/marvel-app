"use client";

import { Character } from "@/models/definitions";
import styles from "./CharactersList.module.css";
import Card from "./Card";

type CharactersListProps = {
  characters: Character[];
};

export default function CharactersList({ characters }: CharactersListProps) {
  return (
    <section className={styles.container}>
      {characters?.map((character) => (
        <Card
          key={character.id}
          title={character.name}
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          favorite={false}
          onClickFavorite={() => {}}
        />
      ))}
    </section>
  );
}

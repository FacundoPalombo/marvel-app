"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

import { Character } from "@/models/definitions";
import styles from "./CharactersList.module.css";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { FavoritesContext } from "../favorites-context";

type CharactersListProps = {
  characters: Character[];
  filterFavorites: boolean;
};

export default function CharactersList({
  characters,
  filterFavorites,
}: CharactersListProps) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const favs = window.localStorage.getItem("favorites");
    return JSON.parse(favs as string) || [];
  });

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const actualCharacters = filterFavorites
    ? characters.filter((character) =>
        favorites.includes(character.id.toString())
      )
    : characters;

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = useDebouncedCallback((e) => {
    if (e.target.value !== "") {
      router.push(
        pathname + "?" + createQueryString("character", e.target.value)
      );
    } else {
      router.push(pathname);
    }
  }, 500);

  return (
    <>
      <SearchBar count={characters?.length} onChange={handleSearch} />
      <section className={styles.container}>
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
          {actualCharacters?.map((character) => (
            <div key={character.id}>
              <Link
                className={styles.link}
                href={`/character/${character.id}`}
              />
              <Card
                id={character.id?.toString()}
                title={character.name}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            </div>
          ))}
        </FavoritesContext.Provider>
      </section>
    </>
  );
}

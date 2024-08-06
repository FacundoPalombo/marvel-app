"use client";

import { Character } from "@/models/definitions";
import styles from "./CharactersList.module.css";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

type CharactersListProps = {
  characters: Character[];
};

export default function CharactersList({ characters }: CharactersListProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

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
      <SearchBar count={50} onChange={handleSearch} />
      <section className={styles.container}>
        {characters?.map((character) => (
          <div key={character.id}>
            <Link className={styles.link} href={`/character/${character.id}`} />
            <Card
              title={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              favorite={false}
              onClickFavorite={() => {}}
            />
          </div>
        ))}
      </section>
    </>
  );
}

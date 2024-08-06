import {
  getCharacterById,
  getComicsByCharacterId,
} from "@/app/services/character";

export default async function CharacterDetail({ params }) {
  const { id } = params;
  const characterDetail = await getCharacterById(id);
  const characterComics = await getComicsByCharacterId(id);
  return (
    <main>
      CHARACTER {id} {JSON.stringify(characterDetail)} COMICS{" "}
      {JSON.stringify(characterComics)}
    </main>
  );
}

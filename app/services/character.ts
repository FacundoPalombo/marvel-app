import { API_BASE_URL } from "@/constants/URL";
import createParams from "../lib/createParams";
import { writeFileSync } from "fs";

export const getCharacters = async (characterName: string) => {
  const { hash, ts, apikey } = createParams();
  const headers = new Headers({ "Content-Type": "application/json" });

  const searchParams = new URLSearchParams({
    ts,
    hash,
    apikey,
    limit: "25",
  });

  if (characterName) {
    searchParams.append("nameStartsWith", characterName);
  }

  const search: string = searchParams.toString()!;

  const url = new URL(`${API_BASE_URL}/v1/public/characters?${search}`);

  const request = new Request(url.toString(), {
    method: "GET",
    headers,
  });

  try {
    const response = await fetch(request);
    const data = await response.json();
    const datawrite = JSON.stringify(data);
    writeFileSync("./characters.json", datawrite);
    return data;
  } catch (error) {
    return { error };
  }
};

export const getCharacterById = async (id: string) => {
  const { hash, ts, apikey } = createParams();
  const headers = new Headers({ "Content-Type": "application/json" });

  const searchParams = new URLSearchParams({
    ts,
    hash,
    apikey,
  });

  const search: string = searchParams.toString()!;

  const url = new URL(`${API_BASE_URL}/v1/public/characters/${id}?${search}`);

  const request = new Request(url.toString(), {
    method: "GET",
    headers,
  });

  try {
    const response = await fetch(request);
    const data = await response.json();
    writeFileSync("./character.json", JSON.stringify(data));
    return data;
  } catch (error) {
    return { error };
  }
};

export const getComicsByCharacterId = async (characterId: string) => {
  const { hash, ts, apikey } = createParams();
  const headers = new Headers({ "Content-Type": "application/json" });

  const searchParams = new URLSearchParams({
    ts,
    hash,
    apikey,
    limit: "20",
  });

  const search: string = searchParams.toString()!;

  const url = new URL(
    `${API_BASE_URL}/v1/public/characters/${characterId}/comics?${search}`
  );

  const request = new Request(url.toString(), {
    method: "GET",
    headers,
  });

  try {
    const response = await fetch(request);
    const data = await response.json();
    writeFileSync("./comicsById.json", JSON.stringify(data));

    return data;
  } catch (error) {
    return { error };
  }
};
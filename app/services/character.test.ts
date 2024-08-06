import { FetchMock } from "jest-fetch-mock";
import {
  getCharacterById,
  getCharacters,
  getComicsByCharacterId,
} from "./character";

describe("getCharacters service", () => {
  it("should get characters", async () => {
    const mockResponse = JSON.stringify({ data: "ok" });

    (fetch as FetchMock).mockResponseOnce(mockResponse);
    const data = await getCharacters();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ data: "ok" });
  });

  it("should handle errors", async () => {
    const error = new Error("Mocked error");
    (fetch as FetchMock).mockRejectOnce(error);

    const data = await getCharacters();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ error });
  });
});

describe("getCharacterById service", () => {
  it("should get characters", async () => {
    const mockResponse = JSON.stringify({ data: "ok" });

    (fetch as FetchMock).mockResponseOnce(mockResponse);
    const data = await getCharacterById("1234");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ data: "ok" });
  });

  it("should handle errors", async () => {
    const error = new Error("Mocked error");
    (fetch as FetchMock).mockRejectOnce(error);

    const data = await getCharacterById("1234");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ error });
  });
});

describe("getComicsByCharacterId service", () => {
  it("should get characters", async () => {
    const mockResponse = JSON.stringify({ data: "ok" });

    (fetch as FetchMock).mockResponseOnce(mockResponse);
    const data = await getComicsByCharacterId("1234");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ data: "ok" });
  });

  it("should handle errors", async () => {
    const error = new Error("Mocked error");
    (fetch as FetchMock).mockRejectOnce(error);

    const data = await getComicsByCharacterId("1234");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ error });
  });
});

import { createContext, Dispatch, SetStateAction, useContext } from "react";

export const FavoritesContext = createContext<{
  favorites: string[];
  setFavorites: Dispatch<SetStateAction<string[]>>;
}>({
  favorites: [],
  setFavorites: () => {},
});

export function useFavorites() {
  return useContext(FavoritesContext);
}

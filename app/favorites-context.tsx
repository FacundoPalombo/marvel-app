import { createContext, useContext } from "react";

export const FavoritesContext = createContext<{
  favorites: string[] | [];
  setFavorites: void | any;
}>({
  favorites: [],
  setFavorites: () => {},
});

export function useFavorites() {
  return useContext(FavoritesContext);
}

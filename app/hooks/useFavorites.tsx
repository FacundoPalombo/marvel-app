export const GET_FAVORITES = "GET_FAVORITES";

export function favoritesReducer(state, action) {
  switch (action.type) {
    case GET_FAVORITES:
      const favorites = JSON.parse(
        window.localStorage.getItem("favorites") as string
      );
      return { ...state, favorites };
  }
}

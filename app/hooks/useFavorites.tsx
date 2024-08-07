import { useEffect, useCallback, useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFavorites() {
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

  const [favorites, setFavorites] = useState<string[]>(() => {
    const favs = window.localStorage.getItem("favorites");
    return JSON.parse(favs as string) || [];
  });

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
    router.push(
      pathname +
        "?" +
        createQueryString("charactersCount", favorites?.length.toString())
    );
  }, [favorites]);

  return { favorites, setFavorites };
}

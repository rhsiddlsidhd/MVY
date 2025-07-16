"use client";
import { useEffect, useState } from "react";
import { MovieDetail } from "../_types/movie";

export function useFavoriteMovies() {
  const [favorites, setFavorites] = useState<MovieDetail[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const favs: MovieDetail[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("favorite_")) {
        const value = localStorage.getItem(key);
        if (value) {
          const movie = JSON.parse(value);
          favs.push(movie);
        } else {
          setFavorites([]);
        }
      }
    }
    setFavorites(favs);
  }, []);

  const removeFavorite = (id: number) => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(`favorite_${id}`);
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  const allRevmoeFavorite = () => {
    if (typeof window === "undefined") return;
    localStorage.clear();
    setFavorites([]);
  };

  return { favorites, removeFavorite, allRevmoeFavorite };
}

"use client";
import { createContext, useContext } from "react";
import type { TMDBBaseResponse } from "@/app/_utils";

export interface Genre {
  id: number;
  name: string;
}

export interface GenreResponse extends TMDBBaseResponse {
  genres: Genre[];
}

export interface MergedGenre {
  id: number;
  ko: string;
  en: string;
}

export const GenreContext = createContext<MergedGenre[] | null>(null);

export const useGenre = () => useContext(GenreContext);

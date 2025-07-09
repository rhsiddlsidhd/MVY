"use client";
import { GenreContext, MergedGenre } from "./GenreContext";

export default function GenreProvider({
  value,
  children,
}: {
  value: MergedGenre[];
  children: React.ReactNode;
}) {
  return (
    <GenreContext.Provider value={value}>{children}</GenreContext.Provider>
  );
}

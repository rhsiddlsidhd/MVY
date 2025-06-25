"use client";
import React from "react";

interface GenreResponse {
  id: number;
  name: string;
}
const List = ({ genres }: { genres: GenreResponse[] }) => {
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>
          <a href={`/category/${genre.id}`}>{genre.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default List;

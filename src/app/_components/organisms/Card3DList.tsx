"use client";
import { MovieGenreResponse, MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card3D from "../atoms/Card3D";

const Card3DList = ({
  data,
  genreRes,
  count = 4,
  className,
}: {
  data: MovieListResponse;
  genreRes: MovieGenreResponse;
  count?: number;
  className?: string;
}) => {
  return (
    <>
      {data.results.slice(0, count).map((movie, i) => {
        return (
          <Card3D
            key={i}
            data={movie}
            genreRes={genreRes}
            className={`inline-block ${className}`}
          />
        );
      })}
    </>
  );
};

export default Card3DList;

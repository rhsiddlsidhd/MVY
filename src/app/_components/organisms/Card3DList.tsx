"use client";
import { MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card3D from "../atoms/Card3D";
import { GenreResponse } from "../../_contexts/GenreContext";
import { useGenre } from "../../_contexts/GenreContext";

const Card3DList = ({
  data,
  count = 4,
  className,
}: {
  data: MovieListResponse;
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
            className={`inline-block ${className}`}
          />
        );
      })}
    </>
  );
};

export default Card3DList;

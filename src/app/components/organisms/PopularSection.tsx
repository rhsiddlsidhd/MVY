"use client";

import { MovieGenreResponse, MovieListResponse } from "@/app/upcoming/page";
import dynamic from "next/dynamic";
import React from "react";
const Card3D = dynamic(() => import("../atoms/Card3D"), {
  ssr: false,
});

const PopularSection = ({
  data,
  genreRes,
}: {
  data: MovieListResponse;
  genreRes: MovieGenreResponse;
}) => {
  return (
    <section className="flex flex-wrap justify-between gap-[1rem] ">
      {data.results.slice(0, 4).map((movie, i) => {
        return (
          <Card3D
            key={i}
            data={movie}
            genreRes={genreRes}
            className="inline-block w-[calc(100%/2-0.5rem)] aspect-[16/9]"
          />
        );
      })}
    </section>
  );
};

export default PopularSection;

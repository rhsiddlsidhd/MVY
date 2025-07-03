"use client";
import { MovieGenreResponse, MovieListResponse } from "@/app/upcoming/page";
import dynamic from "next/dynamic";
import React from "react";
const Card3D = dynamic(() => import("../atoms/Card3D"), {
  ssr: false,
});

const TopRatedSection = ({
  data,
  genreRes,
}: {
  data: MovieListResponse;
  genreRes: MovieGenreResponse;
}) => {
  return (
    <section className="flex flex-wrap justify-between gap-[1rem] ">
      {data.results.slice(0, 8).map((movie, i) => {
        return (
          <Card3D
            key={i}
            data={movie}
            genreRes={genreRes}
            className="inline-block w-[calc(100%/4-1.5rem)] min-w-[10rem] aspect-[3/4]"
          />
        );
      })}
    </section>
  );
};

export default TopRatedSection;

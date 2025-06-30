import { MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card from "../atoms/Card";

const PopularSection = ({
  data,
  genreMap,
}: {
  data: MovieListResponse;
  genreMap: Record<number, string>;
}) => {
  return (
    <section className="flex flex-wrap justify-between gap-[1rem] ">
      {data.results.map((movie) => {
        return (
          <Card
            data={movie}
            genreMap={genreMap}
            className="inline-block w-[calc(100%/2-1rem)] aspect-[16/9]"
          />
        );
      })}
    </section>
  );
};

export default PopularSection;

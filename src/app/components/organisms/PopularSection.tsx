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
      {data.results.slice(0, 4).map((movie, i) => {
        return (
          <Card
            data={movie}
            genreMap={genreMap}
            className="inline-block w-[calc(100%/2-0.5rem)] aspect-[16/9]"
            key={i}
          />
        );
      })}
    </section>
  );
};

export default PopularSection;

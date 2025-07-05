import { MovieGenreResponse, MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card3DList from "./Card3DList";
import Text from "../atoms/Text";

const TopRatedSection = ({
  data,
  genreRes,
}: {
  data: MovieListResponse;
  genreRes: MovieGenreResponse;
}) => {
  return (
    <section>
      <div className="flex flex-wrap justify-between gap-[1rem] ">
        <Card3DList
          data={data}
          genreRes={genreRes}
          count={8}
          className="w-[calc(100%/4-1.5rem)] min-w-[10rem] aspect-[3/4] "
        />
      </div>
    </section>
  );
};

export default TopRatedSection;

/**
 * {data.results.slice(0, 8).map((movie, i) => {
        return (
          <Card3D
            key={i}
            data={movie}
            genreRes={genreRes}
            className="inline-block w-[calc(100%/4-1.5rem)] min-w-[10rem] aspect-[3/4]"
          />
        );
      })}
 */

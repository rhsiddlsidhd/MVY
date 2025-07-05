import { MovieGenreResponse, MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card3DList from "./Card3DList";

const PopularSection = ({
  data,
  genreRes,
}: {
  data: MovieListResponse;
  genreRes: MovieGenreResponse;
}) => {
  return (
    <section className="flex flex-wrap justify-between gap-[1rem] ">
      <Card3DList
        data={data}
        genreRes={genreRes}
        className="w-[calc(100%/2-0.5rem)] aspect-[16/9]"
      />
    </section>
  );
};

export default PopularSection;

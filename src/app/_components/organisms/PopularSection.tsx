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
        count={4}
        className="w-[calc((100%-1rem)/2)] max-sm:w-full aspect-[16/9] max-sm:aspect-[3/4]"
      />
    </section>
  );
};

export default PopularSection;

import { MovieGenreResponse, MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card3DList from "./Card3DList";

const TopRatedSection = ({
  data,
  genreRes,
}: {
  data: MovieListResponse;
  genreRes: MovieGenreResponse;
}) => {
  return (
    <section className="flex flex-wrap gap-[1rem]">
      <Card3DList
        data={data}
        genreRes={genreRes}
        count={8}
        className="w-[calc((100%-3rem)/4)]  aspect-[3/4] max-xl:w-[calc((100%-2rem)/3)] max-md:w-[calc((100%-1rem)/2)] max-sm:w-full max-sm:aspect-[16/9]"
      />
    </section>
  );
};

export default TopRatedSection;

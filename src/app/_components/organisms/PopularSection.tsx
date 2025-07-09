import { MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card3DList from "./Card3DList";
import { GenreResponse } from "../../_contexts/GenreContext";

const PopularSection = ({ data }: { data: MovieListResponse }) => {
  return (
    <section className="flex flex-wrap justify-between gap-[1rem] ">
      <Card3DList
        data={data}
        count={4}
        className="w-[calc((100%-1rem)/2)] max-sm:w-full aspect-[16/9] max-sm:aspect-[3/4]"
      />
    </section>
  );
};

export default PopularSection;

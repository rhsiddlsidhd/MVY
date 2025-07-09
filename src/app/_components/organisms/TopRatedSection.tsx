import { MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card3DList from "./Card3DList";
import { GenreResponse } from "../../_contexts/GenreContext";

const TopRatedSection = ({ data }: { data: MovieListResponse }) => {
  return (
    <section className="flex flex-wrap gap-[1rem]">
      <Card3DList
        data={data}
        count={4}
        className="w-[calc((100%-3rem)/4)]  aspect-[3/4] max-xl:w-[calc((100%-1rem)/2)]  max-sm:w-full max-sm:aspect-[16/9]"
      />
    </section>
  );
};

export default TopRatedSection;

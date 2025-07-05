"use client";

import { GenreResponse } from "@/app/category/page";
import { MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import TrailerSection from "../organisms/TrailerSection";
import TopRatedSection from "../organisms/TopRatedSection";
import CategorySection from "../organisms/CategorySection";
import PopularSection from "../organisms/PopularSection";

interface HomeSectionProps {
  popular: MovieListResponse;
  genreRes: GenreResponse;
  topRated: MovieListResponse;
  trailerKeys: { id: number; key: string; name: string }[];
}

const HomeSection = ({
  popular,
  genreRes,
  topRated,
  trailerKeys,
}: HomeSectionProps) => {
  return (
    <div className="flex flex-col gap-[3rem]">
      <TrailerSection data={trailerKeys[0]} />
      <TopRatedSection data={topRated} genreRes={genreRes} />
      <CategorySection data={genreRes} />
      <PopularSection genreRes={genreRes} data={popular} />
    </div>
  );
};

export default HomeSection;

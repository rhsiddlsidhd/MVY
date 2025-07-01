"use client";
import { MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card from "../atoms/Card";
import Content from "../molecules/Content";

const TopRatedSection = ({
  data,
  genreMap,
}: {
  data: MovieListResponse;
  genreMap: Record<number, string>;
}) => {
  return (
    <section className="flex flex-wrap justify-between gap-[1rem] ">
      {data.results.slice(0, 8).map((movie, i) => {
        return (
          <Card
            data={movie}
            genreMap={genreMap}
            // W 의 최소 값 어떻게 줄지 고민해보기
            // 임시값 w-[calc(100%/4-1.5rem)] min-w-[10rem]
            className="inline-block w-[calc(100%/4-1.5rem)] min-w-[10rem] aspect-[3/4]"
            key={i}
            Content={(props) => <Content {...props} type="topRated" />}
          />
        );
      })}
    </section>
  );
};

export default TopRatedSection;

"use client";
import { MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card from "../atoms/Card";
import Content from "../molecules/Content";

const NowPlayingSection = ({
  data,
  genreMap,
}: {
  data: MovieListResponse;
  genreMap: Record<number, string>;
}) => {
  return (
    <Card
      data={data.results[0]}
      genreMap={genreMap}
      className="inline-block w-full h-[50vh] min-h-fit"
      overlay={({ mouseEnter }) => (
        <div
          className={`absolute w-full h-full top-0 left-0 bg-[#b7b40821] ${
            mouseEnter ? "opacity-0" : "opacity-100"
          } duration-300 ease-in`}
        />
      )}
      Content={(props) => <Content {...props} type="nowPlaying" />}
    />
  );
};

export default NowPlayingSection;

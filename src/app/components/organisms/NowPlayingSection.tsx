import { MovieListResponse } from "@/app/upcoming/page";
import React from "react";
import Card from "../atoms/Card";

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
      className="inline-block w-full aspect-[16/9]"
    />
  );
};

export default NowPlayingSection;

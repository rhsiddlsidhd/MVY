"use client";
import { MovieListResponse } from "@/app/upcoming/page";
import dynamic from "next/dynamic";
import React from "react";
const Card = dynamic(() => import("../atoms/Card"), { ssr: false });
const Content = dynamic(() => import("../molecules/Content"), { ssr: false });

const NowPlayingSection = ({
  data,
  genreMap,
}: {
  data: MovieListResponse;
  genreMap: Record<number, string>;
}) => {
  return (
    <div className=" h-[50vh]">
      <Card
        data={data.results[0]}
        genreMap={genreMap}
        className="inline-block w-full h-full min-h-fit"
        overlay={({ mouseEnter }) => (
          <div
            className={`absolute w-full h-full top-0 left-0 bg-[#b7b40821] ${
              mouseEnter ? "opacity-0" : "opacity-100"
            } duration-300 ease-in`}
          />
        )}
        Content={(props) => <Content {...props} type="nowPlaying" />}
      />
    </div>
  );
};

export default NowPlayingSection;

"use client";
import React from "react";
import { MovieList } from "@/app/upcoming/page";
import { StarRateIcon } from "../atoms/Icon";
import OutlineText from "../atoms/OutlineText";

type ContentProps = {
  type: "nowPlaying" | "popular" | "default";
  data: MovieList;
  genreMap: Record<number, string>;
};

const Content = ({ type, data, genreMap }: ContentProps) => {
  const { vote_average, original_title, title, genre_ids } = data;
  switch (type) {
    case "nowPlaying":
      return (
        <div className="relative h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1">
              <div className="w-[3vw] text-[#FFD34F]">
                <StarRateIcon />
              </div>
              <OutlineText className="text-[3vw] brightness-200 ">
                {vote_average.toFixed(1)}
              </OutlineText>
            </div>
            <OutlineText className="text-[5vw] line-clamp-1 brightness-200">
              {original_title}
            </OutlineText>
            <OutlineText className="text-[3vw] line-clamp-2 brightness-200">
              ( {title} )
            </OutlineText>
          </div>
          <div className="flex justify-end items-center flex-wrap gap-1">
            {genre_ids.map((id) => {
              return (
                <OutlineText className="text-[3vw] brightness-200" key={id}>
                  {genreMap[id]}
                </OutlineText>
              );
            })}
          </div>
        </div>
      );
    case "popular":
      return (
        <div>
          <h3>{data.original_title}</h3>
          <div>
            {data.genre_ids.map((id) => (
              <span key={id}>{genreMap[id]}</span>
            ))}
          </div>
        </div>
      );
    default:
      return <div>기본 콘텐츠</div>;
  }
};

export default Content;

"use client";
import React, { useEffect, useRef } from "react";
import { MovieList } from "@/app/upcoming/page";
import { HandThumbUp, StarRateIcon } from "../atoms/Icon";
import OutlineText from "../atoms/OutlineText";
import Text from "../atoms/Text";

type ContentProps = {
  type: "nowPlaying" | "popular" | "default";
  data: MovieList;
  genreMap: Record<number, string>;
};

const Content = ({ type, data, genreMap }: ContentProps) => {
  const { vote_average, original_title, title, genre_ids, popularity } = data;
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const width = textRef.current.offsetWidth;
      containerRef.current.style.width = `${width}px`;
    }
  }, [original_title]);
  switch (type) {
    case "nowPlaying":
      return (
        <div className="relative h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1">
              <div className="w-[3vw] text-[#FFD34F]">
                <StarRateIcon />
              </div>
              <OutlineText className="text-[4vw] brightness-200 ">
                {vote_average.toFixed(1)}
              </OutlineText>
            </div>
            <OutlineText className="text-[5vw] line-clamp-2 brightness-200">
              {original_title}
            </OutlineText>
            <OutlineText className="text-[4vw] line-clamp-2 brightness-200">
              ( {title} )
            </OutlineText>
          </div>
          <div className="flex justify-end items-center flex-wrap gap-1">
            {genre_ids.map((id) => {
              return (
                <OutlineText className="text-[4vw] brightness-200" key={id}>
                  {genreMap[id]}
                </OutlineText>
              );
            })}
          </div>
        </div>
      );
    case "popular":
      return (
        <div className="relative flex justify-center items-center h-full flex-col min-h-fit">
          <div className="overflow-hidden relative" ref={containerRef}>
            <div className="flex animate-slide-x w-fit text-[var(--text-basic)] text-[1.25vw]">
              <span ref={textRef} className="whitespace-nowrap px-[0.5rem]">
                {original_title}
              </span>
              <span className="whitespace-nowrap px-[0.5rem]">
                {original_title}
              </span>
            </div>
          </div>
          <Text className="flex items-center gap-[1rem] min-w-fit text-[#B7B508] font-bold text-[3vw]">
            <HandThumbUp className="w-[3vw]" />
            {popularity}
          </Text>
        </div>
      );
    default:
      return <div>기본 콘텐츠</div>;
  }
};

export default Content;

"use client";
import { MovieList } from "@/app/upcoming/page";
import React, { useState } from "react";
import Img from "./Img";
import Badge from "./Badge";
import OutlineText from "./OutlineText";
import Link from "next/link";
import { StarRateIcon } from "./Icon";

const Card = ({
  className,
  genreMap,
  data,
}: {
  data: MovieList;
  genreMap: Record<number, string>;
  className?: string;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const { backdrop_path, title, original_title, vote_average, genre_ids } =
    data;

  return (
    <Link
      className={`${className} relative rounded-4xl overflow-hidden`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      href="/"
    >
      <div className="relative rounded-4xl w-full h-full brightness-30 overflow-hidden">
        <Img alt="이미지" src={backdrop_path} />
      </div>
      <Badge className="absolute text-white font-bold top-[1rem] right-[1rem] bg-[red] rounded-full">
        19
      </Badge>
      <div
        className={`absolute w-full h-full top-0 left-0 bg-[#b7b40821] rounded-4xl ${
          mouseEnter ? "opacity-0" : "opacity-100"
        } duration-300 ease-in`}
      />
      <div className="absolute w-[90%] top-[15%] left-[1rem] flex flex-col tracking-[0.15rem]">
        <OutlineText className="text-[5vw] line-clamp-2 brightness-200">
          {original_title}
        </OutlineText>

        <OutlineText className="text-[3vw] line-clamp-2 brightness-200">
          ( {title} )
        </OutlineText>
      </div>
      <div className="absolute w-[50%] bottom-[1rem] left-[1rem] flex items-center flex-wrap gap-1">
        {genre_ids.map((id) => {
          return (
            <OutlineText className="text-[3vw] brightness-200" key={id}>
              {genreMap[id]}
            </OutlineText>
          );
        })}
      </div>
      <div className="absolute right-[1rem] bottom-[1rem] flex items-center gap-1">
        <div className="w-[3vw] text-[#FFD34F]">
          <StarRateIcon />
        </div>
        <OutlineText className="text-[3vw] brightness-200 ">
          {vote_average.toFixed(1)}
        </OutlineText>
      </div>
    </Link>
  );
};

export default Card;

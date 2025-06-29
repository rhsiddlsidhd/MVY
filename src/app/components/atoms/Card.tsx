"use client";
import { MovieList } from "@/app/upcoming/page";
import React, { useState } from "react";
import Img from "./Img";
import Badge from "./Badge";
import OutlineText from "./OutlineText";
import { StarRateIcon } from "./Icon";

const Card = ({ className, data }: { data: MovieList; className?: string }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const { backdrop_path, adult, title, original_title, vote_average } = data;

  return (
    <a
      className={`${className} relative rounded-4xl overflow-hidden`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      href="/"
    >
      <div className="relative rounded-4xl w-full h-full brightness-30 overflow-hidden">
        <Img alt="이미지" src={backdrop_path} />
      </div>
      <Badge className="absolute text-white font-bold top-[0.5rem] right-[0.5rem] bg-[red] rounded-full">
        19
      </Badge>
      <div
        className={`absolute w-full h-full top-0 left-0 bg-[#b7b40826] rounded-4xl ${
          mouseEnter ? "opacity-0" : "opacity-100"
        } duration-300 ease-in`}
      />
      <div className="absolute w-full top-[15%] left-[1rem] flex flex-col tracking-[0.15rem]">
        <OutlineText className="text-[5vw] line-clamp-2 brightness-200">
          {original_title}
        </OutlineText>

        <OutlineText className="text-[3vw] line-clamp-2 brightness-200">
          ( {title} )
        </OutlineText>
        <div className="flex items-center gap-1">
          <StarRateIcon className="text-[1.5rem] text-[#FFD34F]" />
          <OutlineText className="text-[1rem] brightness-200 ">
            {vote_average.toFixed(1)}
          </OutlineText>
        </div>
      </div>
    </a>
  );
};

export default Card;

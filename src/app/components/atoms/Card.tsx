"use client";
import { MovieList } from "@/app/upcoming/page";
import React, { useState } from "react";
import Img from "./Img";
import Badge from "./Badge";
import OutlineText from "./OutlineText";

const Card = ({ className, data }: { data: MovieList; className?: string }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const { backdrop_path, adult, title, original_title } = data;

  return (
    <div
      className={`${className} relative rounded-4xl overflow-hidden`}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
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
        <OutlineText className="text-[5vw] line-clamp-2 border-2 brightness-200">
          {original_title}
        </OutlineText>

        <OutlineText className="text-[3vw] line-clamp-2 brightness-200">
          ( {title} )
        </OutlineText>
      </div>
    </div>
  );
};

export default Card;

"use client";

import { Movie } from "@/app/_types/movie";

import React, { useState } from "react";
import Badge from "../atoms/Badge";

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/app/_services/movie";
import MovieFilterSelector from "../molecules/MovieFilterSelector";
import Card3DGallery from "../molecules/Card3DGallery";

import useInfiniteScroll from "@/app/_hooks/useInfiniteScroll";
import { CodeIcon } from "../atoms/Icon";

const MovieListSection = ({
  data,
  totalPage,
  type,
}: {
  data: Movie[];
  totalPage: number;
  type: "upcoming" | "topRated" | "popular";
}) => {
  const cardContainerRef = React.useRef<HTMLHRElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [visibleData, setVisibleData] = useState<Movie[]>(data);
  const [lang, setLang] = useState<string>("ko-KR");

  const isType = (type: "upcoming" | "topRated" | "popular") => {
    switch (type) {
      case "upcoming":
        return getUpcomingMovies;
      case "topRated":
        return getTopRatedMovies;
      case "popular":
        return getPopularMovies;
    }
  };

  useInfiniteScroll({
    ref: cardContainerRef,
    totalPage,
    lang,
    fetchFn: isType(type),
    onData: setVisibleData,
  });

  return (
    <div className="relative min-sm:p-[5vw] pt-[1rem] ">
      <div className="fixed w-full h-[2rem] bg-[#272727] top-[2.2rem] px-2 flex items-center overflow-hidden z-20 min-sm:hidden ">
        <button onClick={() => setIsVisible(!isVisible)}>
          <Badge className="bg-[#A4A20C] rounded-2xl">
            <CodeIcon className="w-[16px]" />
          </Badge>
        </button>
      </div>
      <div
        className="sm:hidden fixed w-full  bg-[#272727] flex items-center flex-col justify-center z-10 "
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `${isVisible ? "translateY(0)" : "translateY(-200%) "}`,
          transition: `transform 0.3s ease,opacity 0.3s ease `,
        }}
      >
        <MovieFilterSelector
          state={lang}
          onChange={(e) => setLang(e.target.value)}
        />
      </div>
      <div className="z-10 px-2 flex gap-4 ">
        <div className={`min-w-44 max-sm:hidden`}>
          <MovieFilterSelector
            state={lang}
            onChange={(e) => setLang(e.target.value)}
          />
        </div>
        <div className="relative flex-1 p-2">
          <Card3DGallery data={visibleData} lang={lang} />
          <hr className="absolute bottom-0" ref={cardContainerRef} />
        </div>
      </div>
    </div>
  );
};

export default MovieListSection;

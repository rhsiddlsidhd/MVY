"use client";
import React, { useMemo } from "react";
import Img from "./Img";
import Badge from "./Badge";
import OutlineText from "./OutlineText";
import { MovieList } from "@/app/upcoming/page";
import { useGenre } from "../../_contexts/GenreContext";
interface BannerProps {
  data: MovieList;
  num: number;
  isEven?: boolean;
  className?: string;
}

const Banner = ({ data, isEven, num, className }: BannerProps) => {
  // 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99';

  // https://api.themoviedb.org/3/discover/movie?genre=99&include_adult=true&include_video=true&language=ko-KR&sort_by=popularity.desc&page=1
  const { release_date, genre_ids, adult } = data;
  const genres = useGenre();
  const genre = useMemo(
    () =>
      genres &&
      genres
        .filter((genre) => genre_ids.includes(genre.id))
        .map(({ ko }) => ko)
        .join(", "),
    [genre_ids, genres]
  );

  return (
    <div
      className={`w-full aspect-[21/9] overflow-hidden  flex relative ${
        className || ""
      }`}
    >
      {/* 대형 아웃라인 숫자 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <OutlineText
          className="text-[24vw] font-black select-none"
          strokeColor="rgba(255, 255, 255, 0.1)"
          strokeWidth="2px"
        >
          {num.toString().padStart(2, "0")}
        </OutlineText>
      </div>

      {isEven ? (
        <>
          <div className="relative h-full flex-2/6">
            <Img
              className="object-cover"
              alt="Banner Background Img"
              src={data.backdrop_path ?? data.poster_path}
            />
            <div className="absolute top-0 -right-1 h-full w-full bg-gradient-to-l from-[#272727] to-transparent" />
          </div>
          <div className="relative  p-4 md:p-6 flex-4/6 text-white/80 z-20">
            <div className=" h-full flex flex-col justify-center">
              <h2 className="text-white text-lg md:text-2xl font-bold mb-2 flex items-center gap-2 group">
                <span className="truncate cursor-pointer" title={data.title}>
                  {data.title}
                </span>
                {adult && (
                  <Badge className="min-w-6 aspect-1/1 flex items-center justify-center text-xs text-white font-bold bg-[red] rounded-full ml-2 flex-shrink-0">
                    19
                  </Badge>
                )}
              </h2>
              <p
                className="text-xs md:text-sm line-clamp-2 mb-2 cursor-pointer"
                title={
                  data.overview !== ""
                    ? data.overview
                    : "줄거리 내용이 없습니다."
                }
              >
                {data.overview !== ""
                  ? data.overview
                  : "줄거리 내용이 없습니다."}
              </p>
              <p
                className="truncate text-xs md:text-sm mb-1 cursor-pointer"
                title={genre || undefined}
              >
                {genre}
              </p>
              <p className="truncate text-xs md:text-sm">{release_date}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative p-4 md:p-6 flex-4/6 text-white/80 z-20">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-white text-lg md:text-2xl font-bold mb-2 flex items-center gap-2 group">
                <span className="truncate cursor-pointer" title={data.title}>
                  {data.title}
                </span>
                {adult && (
                  <Badge className="min-w-6 aspect-1/1 flex items-center justify-center text-xs text-white font-bold bg-[red] rounded-full ml-2 flex-shrink-0">
                    19
                  </Badge>
                )}
              </h2>
              <p
                className="text-xs md:text-sm line-clamp-2 mb-2 cursor-pointer"
                title={
                  data.overview !== ""
                    ? data.overview
                    : "줄거리 내용이 없습니다."
                }
              >
                {data.overview !== ""
                  ? data.overview
                  : "줄거리 내용이 없습니다."}
              </p>
              <p
                className="truncate text-xs md:text-sm mb-1 cursor-pointer"
                title={genre || undefined}
              >
                {genre}
              </p>
              <p className="truncate text-xs md:text-sm">{release_date}</p>
            </div>
          </div>
          <div className="relative h-full flex-2/6">
            <Img
              className="object-cover"
              alt="Banner Background Img"
              src={data.backdrop_path ?? data.poster_path}
            />
            <div className="absolute top-0 -left-1 h-full w-full bg-gradient-to-r from-[#272727] to-transparent" />
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;

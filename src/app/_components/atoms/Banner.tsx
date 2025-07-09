"use client";
import React, { useMemo } from "react";
import Img from "./Img";
import Badge from "./Badge";
import { MovieList } from "@/app/upcoming/page";
import { useGenre } from "../../_contexts/GenreContext";
interface BannerProps {
  data: MovieList;
  isEven?: boolean;
  className?: string;
}

const Banner = ({ data, isEven, className }: BannerProps) => {
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
    []
  );

  return (
    <div
      className={`relative w-full aspect-[21/9] overflow-hidden rounded-lg flex`}
    >
      {isEven ? (
        <>
          <div className="relative h-full flex-2/6">
            <Img
              className="object-cover"
              alt="Banner Background Img"
              src={data.backdrop_path ?? data.poster_path}
            />
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#272727] to-transparent" />
          </div>
          <div className="p-6 flex-4/6 text-white/80">
            <h2 className="text-white text-2xl font-bold mb-2 flex items-center gap-2">
              {data.title}
              {adult && (
                <Badge className="min-w-6 aspect-1/1 flex items-center justify-center text-xs text-white font-bold bg-[red] rounded-full ml-2">
                  19
                </Badge>
              )}
            </h2>
            <p className=" text-sm line-clamp-2">
              {data.overview !== "" ? data.overview : "줄거리 내용이 없습니다."}
            </p>
            <p>{genre}</p>
            <p>{release_date}</p>
          </div>
        </>
      ) : (
        <>
          <div className="p-6 flex-4/6 text-white/80">
            <h2 className="text-white text-2xl font-bold mb-2 flex items-center gap-2">
              {data.title}
              {adult && (
                <Badge className="min-w-6 aspect-1/1 flex items-center justify-center text-xs text-white font-bold bg-[red] rounded-full ml-2">
                  19
                </Badge>
              )}
            </h2>
            <p className=" text-sm line-clamp-2">
              {data.overview !== "" ? data.overview : "줄거리 내용이 없습니다."}
            </p>
            <p>{genre}</p>
            <p>{release_date}</p>
          </div>
          <div className="relative  h-full flex-2/6">
            <Img
              className="object-cover"
              alt="Banner Background Img"
              src={data.backdrop_path ?? data.poster_path}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#272727] to-transparent" />
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;

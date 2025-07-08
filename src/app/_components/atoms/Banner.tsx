"use client";
import { MovieWithGenres } from "@/app/upcoming/page";
import React from "react";
import Img from "./Img";
interface BannerProps {
  data: MovieWithGenres;
  className?: string;
}

const Banner = ({ data, className }: BannerProps) => {
  // 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99';

  // https://api.themoviedb.org/3/discover/movie?genre=99&include_adult=true&include_video=true&language=ko-KR&sort_by=popularity.desc&page=1

  return (
    <div
      className={`relative w-full aspect-[21/9] overflow-hidden rounded-lg `}
    >
      <Img
        className="object-cover w-full h-full"
        alt="Banner Background Img"
        src={data.backdrop_path ?? data.poster_path}
      />

      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* 콘텐츠 영역 */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h2 className="text-white text-2xl font-bold mb-2">{data.title}</h2>
        <p className="text-white/80 text-sm line-clamp-2">
          {data.overview !== "" ? data.overview : "줄거리 내용이 없습니다."}
        </p>
      </div>
    </div>
  );
};

export default Banner;

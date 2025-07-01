"use client";
import { MovieList } from "@/app/upcoming/page";
import React, { useCallback, useState } from "react";
import Img from "./Img";
import Badge from "./Badge";
import Link from "next/link";

const Card = ({
  className,
  genreMap,
  overlay,
  Content,
  data,
}: {
  data: MovieList;
  genreMap: Record<number, string>;
  overlay?: (state: { mouseEnter: boolean }) => React.ReactNode;
  Content?: React.FC<{
    data: MovieList;
    genreMap: Record<number, string>;
    mouseEnter: boolean;
  }>;
  className?: string;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const { backdrop_path, adult, release_date } = data;

  const isNewRelease = useCallback((releaseDate: string, days: number = 14) => {
    const today = new Date();
    const released = new Date(releaseDate);
    const diffDays =
      (today.getTime() - released.getTime()) / (1000 * 60 * 60 * 24);
    return diffDays <= days;
  }, []);

  return (
    <Link
      className={`${className} relative rounded-4xl overflow-hidden p-[2vw] `}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      href="/"
    >
      <Img
        alt="이미지"
        src={backdrop_path}
        className="brightness-30 object-cover"
      />
      {overlay && overlay({ mouseEnter })}
      {Content && (
        <Content data={data} genreMap={genreMap} mouseEnter={mouseEnter} />
      )}
      <div className="w-[15%] flex gap-1 items-center justify-end absolute top-[0.5rem] right-[1rem] ">
        {isNewRelease(release_date) && (
          <Badge className="w-[50%] text-[min(1vw,1.5rem)] text-white font-bold bg-[#c63bc6f3] rounded-full">
            New
          </Badge>
        )}
        {adult && (
          <Badge className="w-[50%] text-[min(1vw,1.5rem)] text-white font-bold bg-[red] rounded-full">
            19
          </Badge>
        )}
      </div>
    </Link>
  );
};

export default Card;

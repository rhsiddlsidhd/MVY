"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import Badge from "./Badge";
import { useGenre } from "../../_contexts/GenreContext";
import Link from "next/link";
import Img from "./Img";
import { Movie, MovieDetail } from "@/app/_types/movie";

interface Card3DProps {
  data: Movie | MovieDetail;
  lang?: boolean;
  className?: string;
}

const Card3D = ({ data, lang, className }: Card3DProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);

  const isNewRelease = useCallback((releaseDate: string, days: number = 21) => {
    const today = new Date();
    const released = new Date(releaseDate);
    const diffDays =
      (today.getTime() - released.getTime()) / (1000 * 60 * 60 * 24);

    return diffDays <= days;
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateY = 20 * ((mouseX - width / 2) / (width / 2));
    const rotateX = -20 * ((mouseY - height / 2) / (height / 2));

    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseEnter = () => {
    setIsFlipped(true);
  };

  const onMouseLeave = () => {
    setIsFlipped(false);
    setRotate({ x: 0, y: 0 });
  };

  const { title, overview, backdrop_path, release_date, adult, id } = data;

  const genresdata = useGenre();

  // );

  const genreNames = useMemo(() => {
    if (!genresdata) return "";
    if ("genre_ids" in data && Array.isArray(data.genre_ids)) {
      return genresdata
        .filter(({ id }) => data.genre_ids.includes(id))
        .map(({ ko, en }) => (lang ? ko : en))
        .join(", ");
    }
    if ("genres" in data && Array.isArray(data.genres)) {
      const ids = data.genres.map((g) => g.id);
      return genresdata
        .filter(({ id }) => ids.includes(id))
        .map(({ ko, en }) => (lang ? ko : en))
        .join(", ");
    }
    return "";
  }, [genresdata, data, lang]);

  if (!data) return null;

  return (
    <div className={`${className}`}>
      <Link href={`/detail/${id}`}>
        <div
          ref={containerRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          className={`w-full h-full perspective-distant `}
        >
          <div
            className={`w-full h-full transition-transform duration-100 ease-out transform-3d `}
            style={{
              transform: ` rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }}
          >
            <div
              className={`w-full h-full relative transition-transform duration-[800ms] transform-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Face */}
              <div className="absolute w-full h-full  flex flex-col justify-center items-center p-5 text-white backface-hidden bg-cover bg-center ">
                <Img
                  alt="moviePoster"
                  src={backdrop_path}
                  className="rounded-[15px] object-cover -z-10 bg-black/40"
                />
                <div className="w-[100%] h-[2rem] flex gap-1 items-center justify-end absolute top-0">
                  {isNewRelease(release_date) && (
                    <Badge className="flex-grow-0 h-full min-w-0 aspect-square flex items-center justify-center text-xs text-white font-bold bg-[#c63bc6f3] rounded-full">
                      New
                    </Badge>
                  )}

                  {adult && (
                    <Badge className="flex-grow-0 h-full min-w-0 aspect-square flex items-center justify-center text-xs text-white font-bold bg-[red] rounded-full">
                      19
                    </Badge>
                  )}
                </div>
                <div className="bg-black/50 p-5 rounded-lg text-center w-fit max-w-full mx-auto">
                  <h2 className="text-2xl font-bold mb-2 truncate">{title}</h2>
                  <p className="text-base truncate">{genreNames}</p>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute w-full h-full rounded-[15px] p-5 bg-black/50 text-white backface-hidden overflow-scroll scrollbar-hide rotate-y-180">
                <div className="h-full bg-black/50 p-5 rounded-lg text-center overflow-scroll scrollbar-hide ">
                  <p className="text-base">
                    {overview !== "" ? overview : "줄거리 정보가 없습니다."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card3D;

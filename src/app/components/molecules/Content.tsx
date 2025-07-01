"use client";
import React, { useEffect, useRef, useState } from "react";
import { MovieList } from "@/app/upcoming/page";
import { HandThumbUp, StarRateIcon } from "../atoms/Icon";
import OutlineText from "../atoms/OutlineText";
import Text from "../atoms/Text";

type ContentProps = {
  type: "nowPlaying" | "popular" | "default";
  data: MovieList;
  genreMap: Record<number, string>;
  mouseEnter?: boolean;
};

const Content = ({ type, data, genreMap, mouseEnter }: ContentProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const {
    vote_average,
    original_title,
    title,
    genre_ids,
    popularity,
    overview,
  } = data;
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  function debounce<T extends (...args: unknown[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  useEffect(() => {
    function updateWidth() {
      console.log("containerRef:", containerRef.current);
      console.log("textRef:", textRef.current);
      if (containerRef.current && textRef.current) {
        const width = textRef.current.offsetWidth;
        containerRef.current.style.width = `${width}px`;
        setLoading(false);
      }
    }

    // 첫 실행 시 렌더링 완료된 다음 프레임에서 실행
    const frameId = requestAnimationFrame(updateWidth);

    // resize 이벤트에 디바운스된 함수 적용
    const debouncedUpdateWidth = debounce(() => {
      requestAnimationFrame(updateWidth);
    }, 200);

    window.addEventListener("resize", debouncedUpdateWidth);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", debouncedUpdateWidth);
    };
  }, [original_title]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

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
        <div
          className={`relative h-full ${
            mouseEnter ? "-translate-y-full" : "-translate-y-0"
          } duration-300 ease-in `}
        >
          <div
            className={`h-full min-h-fit flex justify-center items-center  flex-col  overflow-hidden ${
              mouseEnter ? "opacity-0" : "opacity-100"
            } duration-100 ease-in `}
          >
            <div
              className={`overflow-hidden relative ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              ref={containerRef}
            >
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
          <div
            className={`relative h-full w-full text-[var(--text-basic)] text-[1.5vw] overflow-auto scrollbar-hide ${
              mouseEnter ? "opacity-100" : "opacity-0"
            } duration-300 ease-in `}
          >
            {overview !== "" ? overview : "줄거리 정보가 없습니다."}
          </div>
        </div>
      );
  }
};

export default Content;

"use client";

import React, { useState, useEffect } from "react";
import Card from "./atoms/Card";

interface GenreResponse {
  id: number;
  name: string;
}

const List = ({ genres }: { genres: GenreResponse[] }) => {
  const containerSize = 65;
  const itemRatio = 0.1;
  const itemSize = containerSize * itemRatio;
  const offset = containerSize / 2 - itemSize / 2;
  const offsetPx = 1024 / 2 - (1024 * itemRatio) / 2; // px 단위
  const minOffsetPx = 280 / 2 - (280 * itemRatio) / 2;
  // 원 반지름 = containerSize / 2 - Item의 한 변 / 2
  // container maxSize = 1024 , size = 65vw , minSize = 280
  // Item size = containerSize * itemRatio 부모 요소의 10% === 0.1
  // 총 3가지의 경우를 고려하여 반지름을 계산한다.
  // 반지름의 길이만큼 Item이 떨어져야 한다. === translateY

  const radius = containerSize / 2;
  const hoverOffset = offset + 1;

  const itemCount = 19;
  const startAngle = 0;
  const endAngle = 360;

  const angleStep = (endAngle - startAngle) / itemCount;

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0에서 1까지

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight; // 한 화면 높이만큼 스크롤 시 최대
      const progress = Math.min(scrollY / maxScroll, 1);
      // 스크롤 진행 비율을 0에서 1 사이로 제한
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 스크롤에 따른 확대 비율 (1배에서 3배까지)
  const scale = 1 + scrollProgress * 2;

  // 스크롤에 따른 Y축 이동 (하단으로 이동)
  const translateY = scrollProgress * 40;

  return (
    <div className="h-[200vh] ">
      {/* 스크롤을 위해 높이를 늘림 */}
      <div
        className="fixed border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translateY(${translateY}%) scale(${scale})`,
          transformOrigin: "center top",
          pointerEvents: scrollProgress !== 1 ? "none" : "auto",
        }}
      >
        <ul
          className={`relative border-2 max-w-[1024px] min-w-[280px] aspect-1/1 flex items-center justify-center rounded-4xl`}
          style={{ width: `${containerSize}vw` }}
        >
          {Array.from({ length: itemCount }).map((_, i) => {
            const angle = startAngle + angleStep * i;
            const isHovered = hoverIndex === i;
            return (
              <li
                key={i}
                className={`absolute flex items-center justify-center w-[calc(10%-1rem)] max-lg:w-[calc(10%-0.5rem)]  max-md:w-[10%-0.25rem] aspect-3/4 text-center cursor-pointer rounded-2xl text-[min(0.725vw,1rem)] p-[0.1rem]`}
                style={{
                  perspective: "800px",
                  transform: `rotate(${angle}deg) translateY(min(max(${offset}vw,${minOffsetPx}px),${offsetPx}px)) rotate(${-angle}deg)`,
                }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Card name={genres[i].name ?? i + 1} hoverIndex={isHovered} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;

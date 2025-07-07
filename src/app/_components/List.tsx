"use client";

import React, { useState, useEffect } from "react";
import Card from "./atoms/Card";

interface GenreResponse {
  id: number;
  name: string;
}

const List = ({ genres }: { genres: GenreResponse[] }) => {
  const containerSize = 80;
  const itemSize = 10;
  const radius = containerSize / 2;
  const offset = radius - itemSize / 2;
  const hoverOffset = offset + 5;

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
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 스크롤에 따른 확대 비율 (1배에서 3배까지)
  const scale = 1 + scrollProgress * 2;

  // 스크롤에 따른 Y축 이동 (하단으로 이동)
  const translateY = scrollProgress * 40; // vw 단위

  return (
    <div className="h-[200vh] border-2">
      {/* 스크롤을 위해 높이를 늘림 */}
      <div className="fixed inset-0 flex justify-center items-center overflow-hidden">
        <div
          className="fixed"
          style={{
            width: `${containerSize}vw`,
            aspectRatio: "1 / 1",
            border: "2px solid black",
            transform: `translateY(calc(-50% + ${translateY}vw)) scale(${scale})`,
            top: "50%",
            borderRadius: "50%",
            transformOrigin: "center top", // 위쪽 중심으로 확대
          }}
        >
          {Array.from({ length: itemCount }).map((_, i) => {
            const angle = startAngle + angleStep * i;
            const isHovered = hoverIndex === i;

            // hover 시 translateY 값을 늘려줌
            const translateDistance = isHovered ? -hoverOffset : -offset;

            // 아이템이 상단 6개 영역에 있는지 확인 (약 180도 범위)
            const normalizedAngle = ((angle % 360) + 360) % 360;
            const isInVisibleRange = normalizedAngle <= 180;

            // 스크롤이 진행될수록 하단 아이템들을 페이드아웃
            const opacity = isInVisibleRange
              ? 1
              : Math.max(0, 1 - scrollProgress * 2);

            return (
              <Card
                key={i}
                angle={angle}
                translateDistance={translateDistance}
                name={genres[i].name ?? i + 1}
                hoverIndex={isHovered}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                // style={{
                //   opacity,
                //   transition: 'opacity 0.3s ease-out'
                // }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Card from "./atoms/Card";
import Link from "next/link";
import { useGenre } from "../_contexts/GenreContext";

const List = () => {
  const genre = useGenre();

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
  const [rotation, setRotation] = useState(0); // 회전 각도 상태
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태
  const [lastAngle, setLastAngle] = useState(0); // 마지막 각도

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
  const translateY = scrollProgress * 40; // vw 단위

  //Gesture 만들기
  const circleRef = useRef<HTMLUListElement | null>(null);

  // 마우스/터치 위치에서 각도 계산
  const getAngleFromPoint = (
    clientX: number,
    clientY: number,
    centerX: number,
    centerY: number
  ) => {
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  };

  // 드래그 시작
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const rect = circleRef.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const angle = getAngleFromPoint(clientX, clientY, centerX, centerY);

    setLastAngle(angle);
  };

  // 전역 마우스 이벤트 리스너
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const rect = circleRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let clientX, clientY;
      if ("touches" in e) {
        clientX = (e as TouchEvent).touches[0].clientX;
        clientY = (e as TouchEvent).touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const currentAngle = getAngleFromPoint(
        clientX,
        clientY,
        centerX,
        centerY
      );
      const deltaAngle = currentAngle - lastAngle;

      setRotation((prev) => prev + deltaAngle);
      setLastAngle(currentAngle);
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("touchmove", handleGlobalMouseMove);
      document.addEventListener("touchend", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchmove", handleGlobalMouseMove);
      document.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [isDragging, lastAngle]);

  const handleCircle = handleDragStart;

  return (
    <div className="h-[200vh] ">
      {/* 스크롤을 위해 높이를 늘림 */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translateY(${translateY}%) scale(${scale})`,
          transformOrigin: "center top",
          pointerEvents: scrollProgress !== 1 ? "none" : "auto",
        }}
      >
        <ul
          className={`relative max-w-[1024px] min-w-[280px] aspect-1/1 flex items-center justify-center rounded-full cursor-grabbing`}
          style={{ width: `${containerSize}vw` }}
          ref={circleRef}
          onMouseDown={handleCircle}
          onTouchStart={handleCircle}
        >
          {genre &&
            genre.map(({ id, ko, en }, i) => {
              const angle = startAngle + angleStep * i + rotation; // rotation을 각 아이템의 angle에 더함
              const isHovered = hoverIndex === i;
              return (
                <li
                  key={i}
                  className={`absolute flex items-center justify-center w-[calc(10%-1rem)] max-lg:w-[calc(10%-0.5rem)]  max-md:w-[10%-0.25rem] aspect-3/4 text-center rounded-2xl text-[min(0.725vw,1rem)] p-[0.1rem] cursor-pointer`}
                  style={{
                    perspective: "800px",
                    transform: `rotate(${angle}deg) translateY(min(max(${offset}vw,${minOffsetPx}px),${offsetPx}px)) rotate(${-angle}deg)`,
                  }}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <Link href={`/category/${id}`} className="w-full h-full">
                    <Card
                      ko={ko ?? i + 1}
                      en={en ?? i + 1}
                      hoverIndex={isHovered}
                    />
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default List;

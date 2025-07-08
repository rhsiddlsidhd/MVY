"use client";

import React, { useState, useEffect, useRef } from "react";
import Card from "./atoms/Card";
import Link from "next/link";

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
  const [rotation, setRotation] = useState(0); // 회전 각도 상태
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태
  const [lastAngle, setLastAngle] = useState(0); // 마지막 각도

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

  //Gesture 만들기
  const circleRef = useRef<HTMLDivElement | null>(null);

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
    <div className="h-[200vh] border-2">
      {/* 스크롤을 위해 높이를 늘림 */}
      <div className="fixed  inset-0 flex justify-center items-center overflow-hidden">
        <div
          ref={circleRef}
          onMouseDown={handleCircle}
          onTouchStart={handleCircle}
          className="fixed border-2 border-white cursor-grab active:cursor-grabbing"
          style={{
            width: `${containerSize}vw`,
            aspectRatio: "1 / 1",
            transform: `translateY(calc(-50% + ${translateY}vw)) scale(${scale})`,
            top: "50%",
            borderRadius: "50%",
            transformOrigin: "center center", // 위쪽 중심으로 확대
            userSelect: "none", // 텍스트 선택 방지
            transition: isDragging ? "none" : "transform 0.2s ease-out", // 드래그 중이 아닐 때만 transition
          }}
        >
          {genres.map(({ id, name }, i) => {
            const angle = startAngle + angleStep * i + rotation; // rotation을 각 아이템의 angle에 더함
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
              <Link key={i} href={`/category/${id}`}>
                <Card
                  key={i}
                  angle={angle}
                  translateDistance={translateDistance}
                  name={name ?? i + 1}
                  hoverIndex={isHovered}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    opacity,
                    transition: "opacity 0.3s ease-out",
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
